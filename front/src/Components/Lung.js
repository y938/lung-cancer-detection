import "./Css/Lung.css"; // Import your CSS file
import { useState } from "react";
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import axios from 'axios'; // Import axios for API calls



export default function Lung() {
  const [image, setImage] = useState(null);
  const [filename, setFile] = useState("no selected file");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    console.log(imageFile);

    if (!imageFile) {
      return; // Handle empty file selection
    }

    setFile(imageFile.name);

    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      const response = await axios.post("http://127.0.0.1:8000/api/predict", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setImage(URL.createObjectURL(imageFile)); // Display uploaded image
      setPrediction(response.data); // Set prediction data from API response
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError("An error occurred during prediction."); // Display error message
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
    setFile("no selected file");
    setPrediction(null); // Clear prediction data when image is deleted
    setError(null); // Clear any previous errors
  };

  return (
    <div className="container">
      <h1>Lung Cancer Detection System</h1>
      <form onClick={() => document.querySelector(".input-field").click()}>
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={handleImageUpload}
        />
        {image ? (
          <img src={image} width={100} height={100} alt={filename} />
        ) : (
          <>
            <MdCloudUpload color="#03A9F4" size={80} />
            <p>Browse Files to upload</p>
          </>
        )}
      </form>
      <section className="last-row">
        <span>{filename} - </span>
        <MdDelete color="#03A9F4" size={20} onClick={handleDeleteImage} />
      </section>
      {prediction && (
        <div className="prediction-result">
          <p>Result: {prediction.result}</p>
          <p>Confidence: {Math.round(prediction.confidence * 100)/100}</p>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
      <p className="note">Important Disclaimer: A Tool to Aid, Not Replace, Medical Expertise</p>
    </div>
  );
}
