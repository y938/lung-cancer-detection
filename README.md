# lung-cancer-detection

![alt text](https://github.com/y938/lung-cancer-detection/blob/main/React%20App%20-%20Google%20Chrome%202024-04-05%2012-06-01.gif)

This document provides instructions on setting up and using the Lung Cancer Detection System, a web application that utilizes a deep learning model to analyze chest X-rays for potential lung cancer.

# Important Disclaimer

# This software is provided for educational purposes only. The author is not responsible for any misuse of this system or the consequences of relying solely on its predictions for medical diagnosis.

# while the provided model and Jupyter Notebook file functionally correct, due to using the free version of Google Colab to train, I couldn't achieve optimal accuracy. So, it's highly recommended to train the model again using a paid tier of Google Colab.

# Prerequisites:

. Python 3.12
. Django Framework (https://www.djangoproject.com/)
. TensorFlow library (https://www.tensorflow.org/)
. OpenCV library (https://opencv.org/)
. Axios library (for React application) (https://axios-http.com/)
. Basic understanding of Django and React development

# Setup Instructions:

Clone the repository containing the Django and React code.

Install dependencies:

Navigate to the project directory in your terminal.
Run pip install -r requirements.txt (Django dependencies)
Install any additional React dependencies as needed (e.g., npm install axios).

# Download the pre-trained model:

The trained model (model2.h5) is not included in this repository due to size constraints.
Access the model from the provided Google Drive link: https://drive.google.com/file/d/1srqILxGZqxfPYeJHVJcpIb2QCq8AIDb-/view?usp=sharing
Place the downloaded model2.h5 file in your project directory.

# Run Django development server: 

In your terminal, navigate to the project directory and run python manage.py runserver. This will start the Django development server.
You can access the Django api endpoint (at http://127.0.0.1:8000/api/predict).

# React Application:

React give a user interface  for uploading an image and displaying the prediction results.

# Usage:

you can find how to configure react in the front folder readme file
