from django.shortcuts import render, redirect
from .forms import UserCreationForm


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        # if form.is_valid():
        #     username = form.cleaned_data.get('username')
        #     messages.success(request, f'Account created for {username}')
        return redirect('/')
    else: 
        form = UserCreationForm()
        return render(request, 'user_app/register.html', {'form': form})

def loginPage(request):
    return HttpResponse("login under construction")

def logoutPage(request):
    return redirect('/')
