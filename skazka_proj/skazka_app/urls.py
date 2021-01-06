from django.urls import path     
from . import views

app_name = "skazka_app"

urlpatterns = [
    path('', views.index, name = "index"),
    path('ch_1', views.ch_1, name = "ch_1"),
]