import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-commerce Thrifting Website',
        description: "I built a fullstack e-commerce thrifting called GodTrash based on the website by using several stacks namely laravel for the backend, react.js for the front-end, MySQL for the database, tailwind and bootstrap for the css framework. ",
        tools: ['Laravel', 'React.js', 'MySQL', 'Tailwind CSS', 'Bootstrap'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 2,
        name: 'Image Classification with Convolutional Neural Network',
        description: "This project focused on building an image classification model using Convolutional Neural Networks (CNNs). I preprocessed image datasets with OpenCV and NumPy, trained models using TensorFlow and Keras, and visualized performance metrics with Matplotlib. The model accurately classified images into distinct categories, showcasing strong feature extraction capabilities.",
        tools: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'TensorFlow', 'Keras'],
        code: '',
        demo: '',
        image: ayla,
        role: 'ML Engineer',
    },
    {
        id: 3,
        name: 'Geographical Information System (GIS) for Natural Disaster Management',
        description: "This GIS web application helps in mapping and monitoring natural disasters such as floods and earthquakes. It features interactive maps using Leaflet.js, real-time data visualization, and a dashboard for government or institutional use. I built the fullstack system using Laravel, MySQL, and Bootstrap, focusing on spatial data handling and user-friendly interfaces.",
        tools: ['Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Leaflet.js'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Fullstack Developer',
    },
    {
        id: 4,
        name: 'CueLingo: Sign Language Real-Time Object Translation Application',
        description: "CueLingo is a real-time sign language recognition app that translates hand gestures into textual or verbal output. I developed the machine learning pipeline using YOLOv8 and MediaPipe for object detection and gesture tracking, then integrated it into a mobile app using Flutter. The backend APIs were built using Express.js to handle model predictions.",
        tools: ["android", "java", "flutter", "python", "machine learning", "deep learning", "Yolo V8", "media pipe", "gap", "express", "javascript", "flutter"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Machine Learning Engineer',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },