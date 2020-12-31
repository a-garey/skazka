from django.contrib import admin
from django.urls import path, include
from user_app import views as user_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("skazka_app.urls"), name='index'),
    path('register/', user_views.register, name='register'),
    path('login/', user_views.loginPage, name='login'),
    path('logout/', user_views.logoutPage)
]
