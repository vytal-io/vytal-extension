from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FingerprintSerializer
from .models import Fingerprint
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.


class FingerprintView(viewsets.ModelViewSet):
    serializer_class = FingerprintSerializer
    queryset = Fingerprint.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['hash']
