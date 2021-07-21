from django.contrib import admin
from .models import Fingerprint


class FingerprintAdmin(admin.ModelAdmin):
    list_display = ('name', 'hash')

# Register your models here.


admin.site.register(Fingerprint, FingerprintAdmin)
