from django.urls import path
from .views import *

urlpatterns = [
  path('signup/', signup, name='signupnow'),
  path('login/', login, name='login')
]