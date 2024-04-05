# lung_detection_app/models.py
from django.db import models

class Prediction(models.Model):
    result = models.CharField(max_length=20)
    confidence = models.FloatField()
