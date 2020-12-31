from django.shortcuts import render, HttpResponse


def index(request):
    return render(request, "skazka_app/index.html")

