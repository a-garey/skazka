from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import logout
from django.contrib import messages
import bcrypt
from .models import *


def index(request):
    context = {
        "one_user" : User.objects.get(id=request.session["user_id"]),
        "all_scores" : Score.objects.exclude(student = request.session["user_id"])
    }
    return render(request, "skazka_app/index.html", context)

def header(request):
    context = {
        "one_user" : User.objects.get(id=request.session["user_id"]),
        "all_scores" : Score.objects.exclude(student = request.session["user_id"])
    }
    return render(request, "skazka_app/header.html", context)

def register(request):
    return render(request, "skazka_app/register.html")

def register_method(request):
    print("request.POST")
    errors = User.objects.regValidate(request.POST)
    if len(errors) > 0:
        for key, val in errors.items():
            messages.error(request, val)
        return redirect("/register") 
    first_name = request.POST["first_name"]
    last_name = request.POST["last_name"]
    email = request.POST["email"]
    password = request.POST["password"]
    pw_hash = bcrypt.hashpw(password.encode() , bcrypt.gensalt()).decode()
    user = User.objects.create(first_name=first_name, last_name=last_name, email=email, password=pw_hash)
    request.session["user_id"] = user.id
    print(user.first_name)
    return redirect("/")

    print("Validations passed")
    return redirect("/")

def login(request):
    return render(request, "skazka_app/login.html")

def login_method(request):
    email = request.POST["email"]
    password = request.POST["password"]
    user_list = User.objects.filter(email = email)
    # request.session["user_id"] = user.id
    context = {
        "email" : email,
        "user" : user_list
    }  
    if len(user_list) > 0:
        logged_user = user_list[0]
        if bcrypt.checkpw(password.encode() , logged_user.password.encode()):
            request.session["user_id"] = logged_user.id
            print(logged_user, "USER ID")
            return redirect("/dashboard")
        else:
            messages.error(request, "Incorrect password")
            return redirect("/login")
    else:
        messages.error(request, "Email does not exist in database")
        return redirect("/login")

def dashboard(request):
    context = {
        "one_user" : User.objects.get(id=request.session["user_id"]),
        "all_scores" : Score.objects.exclude(student = request.session["user_id"])
    }
    return render(request, "skazka_app/dashboard.html", context)

def logout_request (request):
    request.session.clear()
    logout(request)
    print("cleared")
    return redirect("/")

def ch_1(request):
    context = {
        "one_user" : User.objects.get(id=request.session["user_id"]),
        "all_scores" : Score.objects.exclude(student = request.session["user_id"])
    }
    return render(request, "skazka_app/ch_1.html", context)

def ch_1_quiz(request):
    context = {
        "one_user" : User.objects.get(id=request.session["user_id"]),
        "all_scores" : Score.objects.exclude(student = request.session["user_id"])
    }
    return render(request, "skazka_app/ch_1_quiz.html", context)




# //select results by user id






