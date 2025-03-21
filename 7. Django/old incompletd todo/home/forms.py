from django import forms
from .models import Task, DelTask

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = '__all__'

class DelTaskForm(forms.ModelForm):
    class Meta:
        model = DelTask
        fields = '__all__'