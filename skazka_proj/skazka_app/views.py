from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import authenticate, login, logout, get_user_model
from .models import *

User = get_user_model() 

def index(request):
    return render(request, "skazka_app/index.html")


def dashboard(request):
    context = {
        "one_user" : User.objects.get(id=request.session["user_id"]),
        "all_scores" : Result.objects.exclude(student = request.session["user_id"])
    }


