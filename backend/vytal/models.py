from django.db import models

# Create your models here.


class Fingerprint(models.Model):
    name = models.CharField(max_length=100)
    hash = models.CharField(max_length=32)

    def _str_(self):
        return self.name
