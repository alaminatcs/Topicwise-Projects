from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add', views.addTask, name='task_add'),
    path('remove', views.removeTask, name='task_remove')
]