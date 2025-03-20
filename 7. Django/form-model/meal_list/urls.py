from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name = 'meals'),
    path('order/', views.order, name = 'order'),
    path('ordered/', views.ordered, name = 'ordered'),
    path('contact/', views.contact, name = 'contact')
]
