from django.shortcuts import render, redirect
from . import forms, models

# Create your views here.
def home(request):
    return render(request, 'home.html')

def addTask(request):
    if request.method == 'POST':
        form = forms.TaskForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('home')
    else:
        form = forms.TaskForm()
        return render(request, 'form.html', {'form': form})

def removeTask(request):
    pass