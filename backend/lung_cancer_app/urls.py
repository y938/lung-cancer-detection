# lung_detection_app/urls.py
from django.urls import path
from .views import PredictLungCancerView

urlpatterns = [
    path('predict', PredictLungCancerView.as_view()),
]
