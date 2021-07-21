from rest_framework import serializers
from .models import Fingerprint


class FingerprintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fingerprint
        fields = ('id', 'name', 'hash')
