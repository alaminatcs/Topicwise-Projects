from django.shortcuts import render, redirect
from . import forms, models

# Create your views here.
def home(request):
    tasks = models.Task.objects.all()
    del_tasks = models.DelTask.objects.all()
    return render(request, 'home.html', {'tasks': tasks, 'del_tasks': del_tasks})

def addTask(request):
    if request.method == 'POST':
        form = forms.TaskForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('home')
    else:
        form = forms.TaskForm()
        return render(request, 'form.html', {'form': form})

def removeTask(request, id):
    task = models.Task.objects.get(pk = id)
    form = forms.DelTaskForm(task)
    form.save()
    models.DelTask.objects.create(title=task.title, descriptions=task.descriptions)
    task.delete()
    return redirect('home')