from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from vytal import views

router = routers.DefaultRouter()
router.register(r'fingerprint', views.FingerprintView, 'fingerprint')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('', include('vytal.urls')),
]
