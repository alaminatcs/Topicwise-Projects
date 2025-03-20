from django.db import models

# Create your models here.
class Employee(models.Model):
    id = models.IntegerField(primary_key= True)
    name = models.CharField(max_length= 20)
    position = models.CharField(max_length= 10)

    def __str__(self):
        return f"Name: {self.name} - ID: {self.id} - Position: {self.position}"