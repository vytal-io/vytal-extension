from rest_framework import viewsets
from .serializers import FingerprintSerializer
from .models import Fingerprint
from django_filters.rest_framework import DjangoFilterBackend
from django.http import JsonResponse
from ipware import get_client_ip
import urllib.request
import json

# Create your views here.


class FingerprintView(viewsets.ModelViewSet):
    serializer_class = FingerprintSerializer
    queryset = Fingerprint.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['hash']


def IPView(request):
    ip = get_client_ip(request)
    with urllib.request.urlopen("https://pro.ip-api.com/json/" + ip[0] + "?key=98U6i1Sr4HluY00") as url:
        data = json.loads(url.read().decode())
        return JsonResponse(data)
