1. Export YOLOv8 Model to TFJS format. Read more on the [official documentation](https://docs.ultralytics.com/tasks/detection/#export)

2. Copy `yolov8*_web_model` to `./public`
   
3. Update `modelName` in `App.jsx` to new model name
   ```jsx
   ...
   // model configs
   const modelName = "yolov8*"; // change to new model name
   ...
   ```
4. Update `src/utils/labels.json` with the new class labels.
   
5. Done!

<br>
<br>

**To run the WebApp on localhost -**

1. Go to `/src/App.jsx`

2. Run the command - `npm start`

<br>
<br>

**For Deployment -**

1. Update the Homepage in `package.json` file.

   ```
    "homepage": "https://github.com/username/repository_name"
   ```
