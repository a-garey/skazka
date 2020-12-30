<h1>Skazka: Interactive Online Russian Texbook (Beginner's)</h1>

> _"Tell me, and I’ll forget. Show me, and I may remember. Involve me, and I’ll understand”_ --Chinese proverb

**<h2>Project Overview</h2>**

Skazka is an online, media-based textbook for beginning Russian students. Each unit includes a Russian video, at least one instructional video, excercises, quizzes, and games. In contrast to traditional textbooks, the app allows students to view and interact with authentic video materials. They can also receive automatic feedback on errors and progress. Frameworks used include Django and Django REST, JavaScript, and Vue.


**<h2>Features</h2>**

* _As a language-learner, I want to be able to view authentic Russian video materials alongside grammar rules so that I can understand structures and vocabulary in context_

* _As a language teacher, I want my students to learn in an integrated, online way. That is, not flipping from a textbook to a workbook to an online sound file to a YouTube video I've emailed them separately. Presentation, explanation, and practice will all happen on a single-page_.

    <h4>Tasks</h4>

    * Embed video materials on each unit's page
    * Include scaffolding materials (pre-watch exercises, post-watch exercises, and extension activities) as a single-page application

* _As a language-learner, I want to enjoy learning. Make it fun, like Duolingo, but give me more diverse options for viewing structures and testing my skills_.

* _As a language teacher, I want students to be able to self-assess their errors without relying on me to grade their homework_.

    <h4>Tasks</h4>

    * Allow user to see whether their answers to activities are correct 
    * Allow user to view the correct answers

* _As a language teacher, I want students to engage with the learning materials as much as possible. I would also like to offer as many potential learners as possible the chance to learn Russian, even if they are not enrolled in a class_

    <h4>Tasks</h4>

    * Add language-learning games (matching, bingo)
    * Make activities self-scoring
    * Make the application visually-inviting


<h2>Data Model</h2>

I will need to store questions and answers for activities in each chapter.

* Question
    1. question_text = TextField
    2. question_image = ImageField(null=True, blank=True)
    3. chapter = ForeignKey
    1. answer = CharField
    1. choices = ManytoOne(Answer, verbose_name="Answer")
    4. created = DateTimeField(auto_now=True)
    5. updated = DateTimeField(auto_now=True)

* Answer
    1. answer_text = TextField
    2. question_id = ForeignKey
    3. correct = Boolean
    4. created = DateTimeField(auto_now=True)
    5. updated = DateTimeField(auto_now=True)

* User 
    1. ?

* Vocab
    1. word_text = CharField
    1. chapter = CharField
    1. definition = CharField
    4. created = DateTimeField(auto_now=True)
    5. updated = DateTimeField(auto_now=True)

<h2>Schedule</h2>

**<h3>Milestones</h3>**

* Essential features
    * Make single-page front-end for website: videos, activities, quizzes (Days 1-3, 8-9)
    * Make back-end database with questions and answers (Days 4-5)
    * Link front-end to back-end, allow users to check their answers (Days 6-8)
    * Deploy app (Days 9-10)
    
* Really great-to-haves
    * Automatic flashcard maker feature (Days 11-14)
        - Users can upload a Russian text file and generate flashcards (with definitions)
        - Word / definition lists can be dowloaded to a csv file, then used with external flashcard applications
        - Deploy the flashcard maker (Day 15)
    
* Nice to haves:
    * User login and registration, where users can track progess and see scores for all of their quizzes
    * Native automatic flashcard maker: users upload a Russian text file and automatically generate flashcards within the app itself. These cards could be stored under their account.

**<h3>Scope</h3>**

* My goal is to fully build out two chapters of the textbooks, with all content, activities and quizzes. Once I know how to set everything up I should be able to add the other 23 chapters on my own

* A tool like the flashcard maker could drive traffic to the site even among non-beginners. Adding that as a page in the application would enhance its value and visibility.
