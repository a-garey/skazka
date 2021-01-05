from django.conf import settings
from django.db import models

User = settings.AUTH_USER_MODEL

class Result(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    score = models.IntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.score


# models.ForeignKey

# Score / Result 
# What quiz
# what the result was
# what user took it

# look up a user on usermodel and look up result_set
