from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='emp'),
    path('del_emp/<int:id>', views.remove_emp, name='delete_column'),
    path('add_emp/', views.add_emp, name='add_column')
]
