from django.contrib import admin
from .models import Task, DelTask

# Register your models here.
admin.site.register(Task),
admin.site.register(DelTask)