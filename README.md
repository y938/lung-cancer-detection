# lung-cancer-detection

![alt text](https://github.com/y938/lung-cancer-detection/blob/main/React%20App%20-%20Google%20Chrome%202024-04-05%2012-06-01.gif)

This document provides instructions on setting up and using the Lung Cancer Detection System, a web application that utilizes a deep learning model to analyze chest X-rays for potential lung cancer.

## Important Disclaimer

This software is provided for educational purposes only. The author is not responsible for any misuse of this system or the consequences of relying solely on its predictions for medical diagnosis.

While the provided model and Jupyter Notebook file functionally correct, due to using the free version of Google Colab to train, optimal accuracy couldn't be achieved. Therefore, it's highly recommended to train the model again using a paid tier of Google Colab.

## Prerequisites

- Python 3.12
- Django Framework ([Django](https://www.djangoproject.com/))
- TensorFlow library ([TensorFlow](https://www.tensorflow.org/))
- OpenCV library ([OpenCV](https://opencv.org/))
- Axios library (for React application) ([Axios](https://axios-http.com/))
- Basic understanding of Django and React development

## Setup Instructions

1. **Clone the repository containing the Django and React code.**

2. **Install dependencies:**

    - Navigate to the project directory in your terminal.
    - Run `pip install -r requirements.txt` (Django dependencies).
    - Install any additional React dependencies as needed (e.g., `npm install axios`).

3. **Download the pre-trained model:**

    - The trained model (`model2.h5`) is not included in this repository due to size constraints.
    - Access the model from the provided Google Drive link: [model2.h5](https://drive.google.com/file/d/1srqILxGZqxfPYeJHVJcpIb2QCq8AIDb-/view?usp=sharing).
    - Place the downloaded `model2.h5` file in your project directory.

4. **Run Django development server:**

    - In your terminal, navigate to the project directory and run `python manage.py runserver`. This will start the Django development server.
    - You can access the Django API endpoint at [http://127.0.0.1:8000/api/predict](http://127.0.0.1:8000/api/predict).

## React Application

React provides a user interface for uploading an image and displaying the prediction results.

For configuration details, refer to the `README` file in the `front` folder.

## Usage

Follow the setup instructions above, and once the server is running, access the React application to upload images for prediction.
