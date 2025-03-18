from django.db import models

# Create your models here.
class Task(models.Model):
    priority = models.IntegerField()
    title = models.CharField(max_length=15)
    descriptions = models.CharField(max_length=200)
