# YOLOv8 on North American Camera Trap Images

This Repository contains Research Papers related to **Object Detection** and various models such as **YOLOv8, DETR, GroundingDINO**, etc as well as the Notebooks containing the code.
The YOLOv8, YOLOv9 Models are Fine-Tuned over the **North-American Camera Trap Images** for detection and localization of 23 Wildlife Species.

### Dataset Overview

Link - https://lila.science/datasets/ena24detection

This dataset is in Standard COCO Format containing aprroximately 10,000 Camera Trap Images representing 23 classes from Eastern North America along with the Metadata (Class Labels, Bounding Boxes). The most common classes are “American Crow”, “American Black Bear”, and “Dog”.

<br>

## Direct Links for Jupyter Notebooks -


[Fine-Tuned YOLOv8 Model](Jupyter%20Notebooks/YOLOv8/YOLOv8%20Object%20Detection.ipynb)

[Fine-Tuned YOLOv9 Model](Jupyter%20Notebooks/YOLOv9/YOLOv9%20Object%20Detection.ipynb)

[GroundingDINO Model](Jupyter%20Notebooks/GroundingDINO/GroundingDINO_Object_Detection.ipynb)

[Fine-Tuned YOLOv8 Model to ONNX Model Conversion](Jupyter%20Notebooks/ONNX/YOLOv8_Model_Conversion_ONNX.ipynb)

[Fine-Tuned YOLOv8 Model to TFJS Model Conversion](Jupyter%20Notebooks/TFJS/YOLOv8_TFJS_Conversion.ipynb)

<br>

## Trained Models (Weights) -


[YOLOv8 - TensorFlow](Model%20Weights/best.pt)

[YOLOv8 - ONNX](Model%20Weights/best.onnx)

[YOLOv8 - TFJS](Model%20Weights/TFJS)

<br>

## TFJS WebApp -


[YOLOv8-TFJS WebApp Code](YOLOv8-TFJS-WebApp)

[Live WebApp Link](https://yolov8-tfjs.netlify.app)

<br>

## Others -


[Documentation](Documentation.pdf)
