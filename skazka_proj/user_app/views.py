from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, get_user_model
from .forms import LoginForm, RegisterForm

User = get_user_model() 

def register_page(request):
    form = RegisterForm(request.POST or None)
    if form.is_valid():
        username = form.cleaned_data.get("username")
        email = form.cleaned_data.get("email")
        password = form.cleaned_data.get("password1")
        password2 = form.cleaned_data.get("password2")
        try: 
            user = User.objects.create_user(username, email, password)
            request.session["user_id"] = user.id
        except: 
            user = None
            
        if user != None:
            login(request, user)
            return redirect("/")
        else:
            request.session['registration_error'] = 1    
    return render(request, "skazka_app/forms.html", {"form": form})

def login_page(request): 
    form = LoginForm(request.POST or None)
    if form.is_valid():
        username = form.cleaned_data.get("username")
        password = form.cleaned_data.get("password")
        user = authenticate(request, username=username, password=password)
        if user != None:
            login(request, user)
            user_list = User.objects.filter(email = email)
            logged_user = user_list[0]
            request.session["user_id"] = logged_user.id
            print(logged_user.id)
            return redirect("/")
        else:
            request.session['invalid_user'] = 1    
    return render(request, "skazka_app/forms.html", {"form": form})

def logout_page(request):
    logout(request)
    return redirect("/")