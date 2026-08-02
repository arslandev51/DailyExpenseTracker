from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import *

# Create your views here.
@csrf_exempt
def signup(request):
  if request.method == 'POST':
    data = json.loads(request.body)
    fullname = data.get('FullName')
    email = data.get('Email')
    password = data.get('Password')

    if UserDetail.objects.filter(Email=email).exists():
      return JsonResponse({'message':'Email already exists'},status=400)
    UserDetail.objects.create(FullName=fullname,Email=email,Password=password)
    return JsonResponse({'message':'User registered successfully'},status=201)
