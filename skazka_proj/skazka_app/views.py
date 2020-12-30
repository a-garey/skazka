from django.shortcuts import render, HttpResponse


def index(request):
    return HttpResponse("Home page")

def loginPage(request):
    context = {}