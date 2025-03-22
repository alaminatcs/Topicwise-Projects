from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add', views.addTask, name='task_add'),
    path('remove/<int:id>', views.removeTask, name='task_remove')
]