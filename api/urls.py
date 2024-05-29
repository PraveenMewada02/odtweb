from django.urls import path
from . import views
# urls.py
from django.urls import path
from . import views
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("register", views.register, name="register"),
    path("login",views.login, name="login"),
    path('store_data/', views.store_data, name='store_data'),
    path('fetch/<str:empcode>/<str:from_date>/<str:to_date>/', views.store_data, name='store_data')


]
