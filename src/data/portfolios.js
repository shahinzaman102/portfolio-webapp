import img1 from '../img/portImages/blogs.PNG';
import img2 from '../img/portImages/amazon.PNG';
import img3 from '../img/portImages/messenger.PNG';
import img4 from '../img/portImages/spotify.PNG';
import img5 from '../img/portImages/airbnb.PNG';
import img6 from '../img/portImages/amazon-next.PNG';
import img7 from '../img/portImages/todo.jpg';
import img8 from '../img/portImages/api.jpeg';
import img9 from '../img/portImages/uber.jpg';
import img10 from '../img/portImages/figma.PNG';
import img11 from '../img/portImages/shopping-cart.PNG';
import img12 from '../img/portImages/portfolio.png';
import img13 from '../img/portImages/resume.PNG';
import img14 from '../img/portImages/Micro-Backend-golang.png';
import img15 from '../img/portImages/Micro-Backend-mern.png';
import img16 from '../img/portImages/vue-weightTracker.png';
import img17 from '../img/portImages/angular_webshop.png';
import img18 from '../img/portImages/organic_shop.png';
import img19 from '../img/portImages/angular_app.png';
import img20 from '../img/portImages/iot.png';


const portfolios = [
    {
        id: 1,
        category: 'FullStack',
        image: img1,
        link1: 'https://github.com/shahinzaman1o2/blog-website',
        link2: 'https://blog-website-hazel.vercel.app/',
        title: 'Blogging Site',
        text: 'Tools & Techs --> HTML, CSS, JavaScript, Node.js & Firebase'
    },
    {
        id: 2,
        category: 'DESIGN',
        image: img2,
        link1: 'https://github.com/shahinzaman1o2/amazon-clone-ui',
        link2: 'https://youthful-bell-a38e65.netlify.app/',
        title: 'Amazon Clone UI',
        text: 'Tools & Techs --> React.js, CSS & Firebase'
    },
    {
        id: 3,
        category: 'FullStack',
        image: img3,
        link1: 'https://github.com/shahinzaman1o2/facebook-messenger-clone',
        link2: 'https://lucid-banach-d50f4a.netlify.app/',
        title: 'Facebook Messenger Clone',
        text: 'Tools & Techs --> React.js, CSS, Node.js & Firebase'
    },
    {
        id: 4,
        category: 'DESIGN',
        image: img4,
        link1: 'https://github.com/shahinzaman1o2/spotify-clone',
        link2: 'https://blissful-heisenberg-5b6ff8.netlify.app/',
        title: 'Spotify Clone UI',
        text: 'Tools & Techs --> React.js, CSS, Spotify.js & Spotify Authorization'
    },
    {
        id: 5,
        category: 'DESIGN',
        image: img5,
        link1: 'https://github.com/shahinzaman1o2/airbnb-clone',
        link2: 'https://airbnb-clone-sigma-ebon.vercel.app/',
        title: 'Airbnb Clone UI',
        text: 'Tools & Techs --> React.js, CSS'
    },
    {
        id: 6,
        category: 'FullStack',
        image: img6,
        link1: 'https://github.com/shahinzaman1o2/amazon-clone-nextjs',
        link2: 'https://amazon-clone-nextjs-taupe.vercel.app/',
        title: 'Amazon Clone 2.0',
        text: 'Tools & Techs --> Next.js, React Redux, Tailwind CSS, Node.js, NextAuth.js, Stripe & Firebase'
    },
    {
        id: 7,
        category: 'FullStack',
        image: img7,
        link1: 'https://github.com/shahinzaman1o2/todo-task-manager',
        // link2: '',
        title: 'To Do Task Manager',
        text: 'Tools & Techs --> React.js, Node.js, MySQL'
    },
    {
        id: 8,
        category: 'FullStack',
        image: img8,
        link1: 'https://github.com/shahinzaman1o2/node-mysql-jwt-authentication-rest-api',
        link2: 'https://blog-website-hazel.vercel.app/restApi-rree',
        title: 'JWT Authentication Rest API',
        text: 'Tools & Techs --> Node.js, MySQL'
    },
    {
        id: 9,
        category: 'MOBILE',
        image: img9,
        link1: 'https://github.com/shahinzaman1o2/uber-clone',
        link2: 'https://expo.dev/@shahin_zaman/uber-clone-mobileApp',
        title: 'Uber Clone',
        text: 'Tools & Techs --> React Native, React Redux, React Navigation, Tailwind CSS & Google Autocomplete'
    },
    {
        id: 10,
        category: 'DESIGN',
        image: img10,
        // link1: '',
        link2: 'https://www.figma.com/file/WGNhCM1lK7a6xmxIOExWUg/portfolio?node-id=0%3A1',
        title: 'Portfolio UX Design (Prototype)',
        text: 'Tools & Techs --> Figma'
    },
    {
        id: 11,
        category: 'DESIGN',
        image: img11,
        link1: 'https://github.com/shahinzaman1o2/shopping-cart',
        link2: 'https://shopping-cart-one-chi.vercel.app/',
        title: 'Shopping Cart',
        text: 'Tools & Techs --> React TypeScript, React Query & Styled-Components'
    },
    {
        id: 12,
        category: 'DESIGN',
        image: img12,
        link1: 'https://github.com/shahinzaman1o2/portfolio-webapp',
        link2: 'https://portfolio-shahinzaman.vercel.app',
        title: 'Portfolio Website 2.0',
        text: 'Tools & Techs --> React.js, Styled-Components & EmailJS'
    },
    {
        id: 13,
        category: 'DESIGN',
        image: img13,
        // link1: '',
        link2: 'https://www.figma.com/file/NqNjNGwbosA68qnF4q1afr/Untitled?node-id=0%3A1',
        title: 'Resume Design',
        text: 'Tools & Techs --> Figma : This tool is a collaborative web application for interface design - Platform: Web application, Desktop application, Mobile application)'
    },
    {
        id: 14,
        category: 'MICROSERVICE',
        image: img14,
        link1: 'https://github.com/shahinzaman1o2/go-micro-finalapp-after-adding-k8-loadbalancer',
        link2: 'https://docs.google.com/document/d/1nCmJmOIiwzTW6rF0_RAeez6R3GEpUjXVSyv1h20WzbQ/edit?usp=share_link',
        title: 'Golang Microservice App',
        text: 'Tools & Techs --> Microservice architecture - Golang - REST API - RPC - gRPC - RabbitMQ - Postgres - MongoDB - Docker - Kubernetes (when deploy to test locally)'
    },
    {
        id: 15,
        category: 'MICROSERVICE',
        image: img15,
        link1: 'https://github.com/shahinzaman1o2/birdsquawk-micro-app',
        link2: 'https://docs.google.com/document/d/1JEqTBcb9LPU_c2fTt39USvPXhsdehzNI3hOnbOvDqn8/edit?usp=share_link',
        title: 'MERN stack Microservice App',
        text: 'Tools & Techs --> Microservice architecture - NodeJS, Express - REST API - MongoDB - RabbitMQ - TypeScript - Docker - Kubernetes (when deploy to test locally)'
    },
    {
        id: 16,
        category: 'DESIGN',
        image: img16,
        link1: 'https://github.com/shahinzaman1o2/vue-compositionApi-weightTracker',
        link2: 'https://vue-composition-api-weight-tracker.vercel.app',
        title: 'Vue Weight Tracker',
        text: 'Tools & Techs --> VueJs, Composition Api'
    },
    {
        id: 17,
        category: 'DESIGN',
        image: img17,
        link1: 'https://github.com/shahinzaman1o2/angular-typescript-node-webshop',
        link2: 'https://angular-typescript-node-webshop.vercel.app',
        title: 'Angular Web Shop',
        text: 'Tools & Techs --> Angular, Angular.js, TypeScript, Fake store API, TailwindCSS'
    },
    {
        id: 18,
        category: 'FullStack',
        image: img18,
        link1: 'https://github.com/shahinzaman1o2/organic_shop',
        link2: 'https://organic-shop-ebon.vercel.app',
        title: 'Organic Shop',
        text: 'Tools & Techs --> Angular, Angular.js, TypeScript, Node.js, CSS, Firebase Firestore Database'
    },
    {
        id: 19,
        category: 'DESIGN',
        image: img19,
        link1: 'https://github.com/shahinzaman1o2/angular_app',
        link2: 'https://angular-app-theta.vercel.app/js_ts-builtin-funcs',
        title: 'Angular App',
        text: 'Tools & Techs --> Angular, Angular.js, TypeScript'
    },
    {
        id: 20,
        category: 'IoT',
        image: img20,
        link1: 'https://github.com/shahinzaman1o2/iot-based-light-intensity-monitoring',
        link2: 'https://drive.google.com/file/d/1V4dQsSLBROQpbavYXLRMzoxW1zKT_aNM/view',
        title: 'Light Intensity Monitoring',
        text: 'Tools & Techs --> NodeMCU ESP8266 WiFi Microcontroller Module, LDR Sensor Module, Arduino IDE, Adafruit IO, Firebase Realtime Database'
    },
]

export default portfolios;