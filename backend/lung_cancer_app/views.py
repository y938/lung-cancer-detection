# lung_detection_app/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Prediction
from .serializers import PredictionSerializer
import cv2
import tensorflow as tf
import numpy as np

model = tf.keras.models.load_model('model2.h5')

class PredictLungCancerView(APIView):
    parser_classes = [MultiPartParser, FormParser]  # Allow multipart form data

    def post(self, request):
        image_file = request.FILES.get('image').read()
        print(image_file)
        if not image_file:
            return Response({'error': 'No image file uploaded'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            img = cv2.imdecode(np.fromstring(image_file, np.uint8), cv2.IMREAD_COLOR)
            print(img)
            img = cv2.resize(img, (192, 192))  # Adjust the size based on your model's input size
            print(img)
            img = np.expand_dims(img, axis=0)
            print(img)
            prediction = model.predict(img)
            print(prediction)
            confidence = np.max(prediction)
            print(confidence)
            classes = ['Adenocarcinomas', 'Normal', 'Squamous Cell Carcinomas']
            result = classes[np.argmax(prediction)]
            print(result)
            prediction_obj = Prediction.objects.create(result=result, confidence=confidence)
            serializer = PredictionSerializer(prediction_obj)
            print(serializer.data)
            # Return serialized data for flexibility in the frontend
            return Response(serializer.data)

        except Exception as e:
            print(f"Error during prediction: {str(e).encode('utf-8', 'ignore').decode()}")
            return Response({'error': 'An error occurred during prediction'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

