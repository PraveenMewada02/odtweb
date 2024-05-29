from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.db import models




class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

class CustomUser(AbstractUser): # type: ignore
    name = models.CharField(max_length=100, unique=True)
    username = models.CharField(max_length=20)

    # Remove the custom related_name and use the default ones
    groups = models.ManyToManyField(
        'auth.Group',
        blank=True,
        related_name='customuser_set',
        verbose_name='groups',
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        related_name='customuser_set',
        verbose_name='user permissions',
        help_text='Specific permissions for this user.',
    )
##attendace data
# models.py
class Employee(models.Model):
   emp_code = models.CharField(max_length=10)
   name = models.CharField(max_length=100)
   date = models.DateField()
   intime = models.TimeField()
   outtime = models.TimeField()
   worktime = models.DurationField()
   overtime = models.DurationField()
   breaktime = models.DurationField()
   status = models.CharField(max_length=50)
   remark = models.TextField()
   erlout = models.CharField(max_length=50)
   latein = models.CharField(max_length=50)
    # Add more fields as needed

def __str__(self):
        return f"{self.name} - {self.datestring}"


def __str__(self):
        return self.title
    

