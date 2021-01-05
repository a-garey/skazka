from django.contrib import admin
from django.urls import path, re_path, include
from user_app import views as user_views

from user_app.views import (
    login_page,
    logout_page,
    register_page
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("skazka_app.urls"), name='index'),
    path('login/', user_views.login_page, name='login'),
    path('logout/', user_views.logout_page, name='logout'),
    path('register/', user_views.register_page, name='register')
]
