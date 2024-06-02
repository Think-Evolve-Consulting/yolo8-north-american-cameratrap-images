import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl"; // set backend to webgl
import Loader from "./components/loader";
import ButtonHandler from "./components/btn-handler";
import { detect, detectVideo } from "./utils/detect";
import "./style/App.css";

const App = () => {
  const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 3, 640, 640], // Model's input shape
  }); // init model & input shape

  // references
  const imageRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // model configs
  const modelName = "yolov8n";

  useEffect(() => {
    console.log("Inside useEffect"); // Log when the useEffect hook starts

    tf.ready().then(async () => {
      console.log("TensorFlow ready"); // Log when TensorFlow is ready

      const modelPath = `${window.location.href}/${modelName}_web_model/model.json`;
      console.log("Model Path:", modelPath); // Log the model path

      try {
        const yolov8 = await tf.loadGraphModel(modelPath, {
          onProgress: (fractions) => {
            console.log("Model loading progress:", fractions); // Log model loading progress
            setLoading({ loading: true, progress: fractions }); // set loading fractions
          },
        }); // load model

        console.log("Model loaded successfully"); // Log when the model is loaded successfully

        setLoading({ loading: false, progress: 1 });
        setModel({
          net: yolov8,
          inputShape: yolov8.inputs[0].shape,
        }); // set model & input shape
      } catch (error) {
        console.error("Error loading model:", error); // Log any errors that occur during model loading
        setLoading({ loading: false, progress: 0 }); // Reset loading state
      }
    });
  }, []);

  useEffect(() => {
    // Load and resize the image when it's loaded
    if (imageRef.current) {
      const inputImage = new Image();
      inputImage.src = imageRef.current.src;
      inputImage.onload = () => {
        console.log("Input image dimensions:", inputImage.width, inputImage.height); // Log the dimensions of the input image

        // Resize the input image to match the model's input shape
        const resizedImage = tf.browser.fromPixels(inputImage).resizeBilinear([640, 640]);

        console.log("Resized image tensor shape:", resizedImage.shape); // Log the shape of the resized image tensor

        // Call detect function with resized input image tensor
        detect(resizedImage, model, canvasRef.current);
      };
    }
  }, [imageRef.current, model]);

  return (
    <div className="App">
      {loading.loading && <Loader>Loading model... {(loading.progress * 100).toFixed(2)}%</Loader>}
      <div className="header">
        <h1>YOLOv8 Live Detection</h1>
        <p>
          YOLOv8 Live Detection Application on Browser powered by <code>tensorflow.js</code>
        </p>
        <p>
          Serving : <code className="code">{modelName}</code>
        </p>
      </div>

      <div className="content">
        <img
          src="#"
          ref={imageRef}
          onLoad={() => detect(imageRef.current, model, canvasRef.current)}
        />
        <video
          autoPlay
          muted
          ref={cameraRef}
          onPlay={() => detectVideo(cameraRef.current, model, canvasRef.current)}
        />
        <video
          autoPlay
          muted
          ref={videoRef}
          onPlay={() => detectVideo(videoRef.current, model, canvasRef.current)}
        />
        <canvas width={model.inputShape[2]} height={model.inputShape[3]} ref={canvasRef} />
      </div>

      <ButtonHandler imageRef={imageRef} cameraRef={cameraRef} videoRef={videoRef} />
    </div>
  );
};

export default App;
