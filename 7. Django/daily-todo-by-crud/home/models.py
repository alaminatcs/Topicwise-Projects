from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=25)
    descriptions = models.TextField(max_length=400)

    def __str__(self):
        return f"{self.title}"


class DelTask(models.Model):
    title = models.CharField(max_length=25)
    descriptions = models.TextField(max_length=400)

    def __str__(self):
        return f"{self.title}"