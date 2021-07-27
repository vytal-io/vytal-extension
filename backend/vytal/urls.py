from django.urls import path
from . import views

urlpatterns = [
  path('ip/', views.IPView, name='ip'),
]
