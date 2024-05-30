# from urllib import request
# from django.shortcuts import render
# from django.contrib.auth.models import User
# from rest_framework import generics
# from .serializers import UserSerializer, NoteSerializer
# from rest_framework.permissions import IsAuthenticated, AllowAny
# from .models import Note 
# from django.contrib.auth.hashers import check_password 
# from django.views.decorators.csrf import csrf_exempt   #
# import json
# from django.http import JsonResponse
# from rest_framework_simplejwt.tokens import RefreshToken
# from django.contrib.auth import get_user_model
# from rest_framework import status
# from .models import CustomUser
# from django.contrib.auth import login as auth_login

# ## new
# @csrf_exempt
# def login(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#         except json.JSONDecodeError:
#             return JsonResponse({'success': False, 'message': 'Invalid JSON', 'status_code':status.HTTP_400_BAD_REQUEST})

#         email = data.get('email')
#         password = data.get('password')

#         if not email or not password:
#             return JsonResponse({'success': False, 'message': 'email and password are required','status_code':status.HTTP_400_BAD_REQUEST})

#         try:
#             user = CustomUser.objects.get(email=email)
#         except CustomUser.DoesNotExist:
#             return JsonResponse({'success': False, 'message': 'Invalid credentials','status_code':status.HTTP_400_BAD_REQUEST})

#         if check_password(password, user.password):
#             auth_login(request, user) 
#             user_data = {
#                 'id': user.id,
#                 'username': user.username,
#                 'name': user.name,
#                 'email': user.email,
#             }
#             refresh = RefreshToken.for_user(user)
#             response_data = {
#                 'success': True,
#                 'message': 'Login successful',
#                 'user_data': user_data,
#                 'refresh': str(refresh),
#                 'access': str(refresh.access_token),
#                 'code': status.HTTP_200_OK,
#             }
#             return JsonResponse(response_data)
#         else:
#             return JsonResponse({'success': False, 'message': 'Invalid credentials','status_code':status.HTTP_400_BAD_REQUEST})
#     else:
#         return JsonResponse({'message': 'Please use POST method for login','status_code':status.HTTP_400_BAD_REQUEST})

# ## Register
# @csrf_exempt
# def register(request):
#     if request.method == 'POST':
#         name = data.get('name')
#         username = data.get('username')
#         email = data.get('email')
#         password1 = data.get('password1')
#         password2 = data.get('password2')
#         try:
#             data = json.loads(request.body)
#         except json.JSONDecodeError:
#             return JsonResponse({'error': 'Invalid JSON','status_code':status.HTTP_400_BAD_REQUEST})
        
#         if not all([name, username, email, password1, password2]):
#             return JsonResponse({'error': 'All fields are required', 'status_code':status.HTTP_400_BAD_REQUEST})

#         if password1 != password2:
#             return JsonResponse({'error': 'Passwords do not match', 'status_code':status.HTTP_400_BAD_REQUEST})

#         if not (len(password1) >= 8 and any(c.isupper() for c in password1) and any(c.islower() for c in password1) and any(c.isdigit() for c in password1) and any(c in '!@#$%^&*()_+' for c in password1)):
#             return JsonResponse({'error': 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character', 'status_code':status.HTTP_400_BAD_REQUEST})

#         User = get_user_model()
#         if CustomUser.objects.filter(username=username).exists():
#             return JsonResponse({'error': 'Username taken', 'status_code':status.HTTP_400_BAD_REQUEST})
#         if CustomUser.objects.filter(email=email).exists():
#             return JsonResponse({'error': 'Email taken', 'status_code' :status.HTTP_400_BAD_REQUEST})

#         try:
#             user = CustomUser.objects.create_user(name=name, email=email, username=username, password=password1)
#             user.save()
#             return JsonResponse({'message': 'Successfully registered', 'status_code':status.HTTP_201_CREATED})
#         except Exception as e:
#             return JsonResponse({'error': str(e), 'status_code':status.HTTP_500_INTERNAL_SERVER_ERROR})
#     else:
#         return JsonResponse({'message': 'Please use POST method for registor', 'status_code':status.HTTP_400_BAD_REQUEST})


# ##

# class NoteListCreate(generics.ListCreateAPIView):
#     serializer_class = NoteSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         return Note.objects.filter(author=user)

#     def perform_create(self, serializer):
#         if serializer.is_valid():
#             serializer.save(author=self.request.user)
#         else:
#             print(serializer.errors)


# class NoteDelete(generics.DestroyAPIView):
#     serializer_class = NoteSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         return Note.objects.filter(author=user)


# class CreateUserView(generics.CreateAPIView):
#     # if request.method == "POST" :
#         queryset = User.objects.all()
#         serializer_class = UserSerializer
#         permission_classes = [AllowAny]





#pt.code=


from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note 
from django.contrib.auth.hashers import check_password 
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from rest_framework import status
from .models import CustomUser
from django.contrib.auth import login as auth_login
from django.http import JsonResponse
from .models import Employee
import json
import requests 
import base64

@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'message': 'Invalid JSON', 'status_code': status.HTTP_400_BAD_REQUEST})

        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return JsonResponse({'success': False, 'message': 'Email and password are required', 'status_code': status.HTTP_400_BAD_REQUEST})

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'Invalid credentials', 'status_code': status.HTTP_400_BAD_REQUEST})

        if check_password(password, user.password):
            auth_login(request, user)
            user_data = {
                'id': user.id,
                'username': user.username,
                'name': user.name,
                'email': user.email,
            }
            refresh = RefreshToken.for_user(user)
            response_data = {
                'success': True,
                'message': 'Login successful',
                'user_data': user_data,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'status_code': status.HTTP_200_OK,
            }
            return JsonResponse(response_data)
        else:
            return JsonResponse({'success': False, 'message': 'Invalid credentials', 'status_code': status.HTTP_400_BAD_REQUEST})
    else:
        return JsonResponse({'message': 'Please use POST method for login', 'status_code': status.HTTP_400_BAD_REQUEST})

@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON', 'status_code': status.HTTP_400_BAD_REQUEST})
        
        name = data.get('name')
        username = data.get('username')
        email = data.get('email')
        password1 = data.get('password1')
        password2 = data.get('password2')
        
        if not all([name, username, email, password1, password2]):
            return JsonResponse({'error': 'All fields are required', 'status_code': status.HTTP_400_BAD_REQUEST})

        if password1 != password2:
            return JsonResponse({'error': 'Passwords do not match', 'status_code': status.HTTP_400_BAD_REQUEST})

        if not (len(password1) >= 8 and any(c.isupper() for c in password1) and any(c.islower() for c in password1) and any(c.isdigit() for c in password1) and any(c in '!@#$%^&*()_+' for c in password1)):
            return JsonResponse({'error': 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character', 'status_code': status.HTTP_400_BAD_REQUEST})

        if CustomUser.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username taken', 'status_code': status.HTTP_400_BAD_REQUEST})
        if CustomUser.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email taken', 'status_code': status.HTTP_400_BAD_REQUEST})

        try:
            user = CustomUser.objects.create_user(name=name, email=email, username=username, password=password1)
            user.save()
            return JsonResponse({'message': 'Successfully registered', 'status_code': status.HTTP_201_CREATED})
        except Exception as e:
            return JsonResponse({'error': str(e), 'status_code': status.HTTP_500_INTERNAL_SERVER_ERROR})
    else:
        return JsonResponse({'message': 'Please use POST method for registration', 'status_code': status.HTTP_400_BAD_REQUEST})
    

##attendace data part
# views.py


# def store_data(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)
#             for entry in data:
#                 employee = Employee.objects.create(
#                     name=entry['Name'],
#                     date=entry['Date'],
#                     in_time=entry['IN Time'],
#                     out_time=entry['OUT Time'],
#                     work_time=entry['Work Time'],
#                     over_time=entry['Over Time'],
#                     break_time=entry['Break Time'],
#                     status=entry['Status'],
#                     remark=entry['Remark'],
#                     erl_out=entry['Erl_Out'],
#                     late_in=entry['Late_In']
#                 )
#             return JsonResponse({'message': 'Data saved successfully'})
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=400)
#     else:
#         return JsonResponse({'error': 'Method not allowed'}, status=405)
    
from django.shortcuts import render
from django.http import JsonResponse
from .models import Employee
# import requests

def store_data(request, empcode, from_date, to_date):
    api_url = f"https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode={empcode}&FromDate={from_date}&ToDate={to_date}"
    
    # Define the API key
    api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true"

    # Encode the API key in base64
    base64_api_key = base64.b64encode(api_key.encode()).decode()

    headers = {
        "Authorization": f"Basic {base64_api_key}",
        "Content-Type": "application/json",
    }
    
    try:
        response = requests.get(api_url, headers=headers)
        response.raise_for_status()  # Raise an error for bad status codes

        data = response.json()

        #for item in data:
        Employee.objects.create(
                emp_code=data.get('emp_code'),
                intime=data.get('intime'),
                outtime=data.get('outtime'),
                worktime=data.get('worktime'),
                overtime=data.get('overtime'),
                breaktime=data.get('BreakTime'),
                status=data.get('Status'),
                date=data.get('date'),
                remark=data.get('remark'),
                erlout=data.get('erlOut'),
                latein=data.get('latein'),
                name=data.get('name')
            )
        
        return JsonResponse({"message": "Data inserted successfully"}, status=201)
    except requests.RequestException as e:
        return JsonResponse({"error": f"API request failed: {str(e)}"}, status=400)




class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
