import img1 from '../img/portImages/figma.PNG';
import img2 from '../img/portImages/amazon.PNG';
import img3 from '../img/portImages/api.jpeg';
import img4 from '../img/portImages/go_jumpstart.PNG';
import img5 from '../img/portImages/blogs.PNG';
import img6 from '../img/portImages/messenger.PNG';
import img7 from '../img/portImages/spotify.PNG';
import img8 from '../img/portImages/airbnb.PNG';
import img9 from '../img/portImages/amazon-next.PNG';
import img10 from '../img/portImages/todo.jpg';
import img11 from '../img/portImages/uber.jpg';
import img12 from '../img/portImages/shopping-cart.PNG';
import img13 from '../img/portImages/portfolio.png';
import img14 from '../img/portImages/resume.PNG';
import img15 from '../img/portImages/vue-weightTracker.png';
import img16 from '../img/portImages/angular_webshop.png';
import img17 from '../img/portImages/organic_shop.png';
import img18 from '../img/portImages/angular_jumpstart.png';
import img19 from '../img/portImages/mern-aws.jpg';
import img20 from '../img/portImages/go-gcp.jpg';
import img21 from '../img/portImages/on-prem.jpg';
import img22 from '../img/portImages/iot.png';
import img23 from '../img/portImages/zypher_cli.PNG';

const portfolios = [
    {
        id: 1,
        category: 'DESIGN',
        image: img1,
        // link1: '',
        link2: 'https://www.figma.com/file/WGNhCM1lK7a6xmxIOExWUg/portfolio?node-id=0%3A1',
        title: 'Portfolio UX Design (Prototype)',
        text: 'Tools & Techs 🡪 Figma'
    },
    {
        id: 2,
        category: 'FRONTEND',
        image: img2,
        link1: 'https://github.com/shahinzaman102/amazon-clone-ui',
        link2: 'https://youthful-bell-a38e65.netlify.app/',
        title: 'Amazon Clone UI',
        text: 'Tools & Techs 🡪 React.js, CSS & Firebase'
    },
    {
        id: 3,
        category: 'BACKEND',
        image: img3,
        link1: 'https://github.com/shahinzaman102/node-mysql-jwt-authentication-rest-api',
        link2: 'https://blog-website-hazel.vercel.app/restApi-rree',
        title: 'JWT Authentication Rest API',
        text: 'Tools & Techs 🡪 Node.js, MySQL'
    },
    {
        id: 4,
        category: 'BACKEND',
        image: img4,
        link1: 'https://github.com/shahinzaman102/Go_JumpStart',
        link2: 'https://go-jumpstart.onrender.com/',
        title: 'Go JumpStart App',
        text: 'Tools & Techs 🡪 Go (Vanilla/Standard), REST, MySQL, runtime/trace, net/http/pprof, testing package, bigcache, Gorilla Sessions, bcrypt, HTML, CSS, Goroutines, Channels, Synchronization Primitives'
    },
    {
        id: 5,
        category: 'FULLSTACK',
        image: img5,
        link1: 'https://github.com/shahinzaman102/blog_website',
        link2: 'https://blog-website-hazel.vercel.app/',
        title: 'Blogging Site',
        text: 'Tools & Techs 🡪 HTML, CSS, JavaScript, Node.js & Firebase'
    },
    {
        id: 6,
        category: 'FULLSTACK',
        image: img6,
        link1: 'https://github.com/shahinzaman102/facebook-messenger-clone',
        link2: 'https://lucid-banach-d50f4a.netlify.app/',
        title: 'Facebook Messenger Clone',
        text: 'Tools & Techs 🡪 React.js, CSS, Node.js & Firebase'
    },
    {
        id: 7,
        category: 'FRONTEND',
        image: img7,
        link1: 'https://github.com/shahinzaman102/spotify-clone',
        link2: 'https://blissful-heisenberg-5b6ff8.netlify.app/',
        title: 'Spotify Clone UI',
        text: 'Tools & Techs 🡪 React.js, CSS, Spotify.js & Spotify Authorization'
    },
    {
        id: 8,
        category: 'FRONTEND',
        image: img8,
        link1: 'https://github.com/shahinzaman102/airbnb-clone',
        link2: 'https://airbnb-clone-sigma-ebon.vercel.app/',
        title: 'Airbnb Clone UI',
        text: 'Tools & Techs 🡪 React.js, CSS'
    },
    {
        id: 9,
        category: 'FULLSTACK',
        image: img9,
        link1: 'https://github.com/shahinzaman102/amazon-clone-nextjs',
        link2: 'https://amazon-clone-nextjs-taupe.vercel.app/',
        title: 'Amazon Clone 2.0',
        text: 'Tools & Techs 🡪 Next.js, React Redux, Tailwind CSS, Node.js, NextAuth.js, Stripe & Firebase'
    },
    {
        id: 10,
        category: 'FULLSTACK',
        image: img10,
        link1: 'https://github.com/shahinzaman102/todo-task-manager',
        // link2: '',
        title: 'To Do Task Manager',
        text: 'Tools & Techs 🡪 React.js, Node.js, MySQL'
    },
    {
        id: 11,
        category: 'MOBILE',
        image: img11,
        link1: 'https://github.com/shahinzaman102/uber-clone',
        link2: 'https://drive.google.com/file/d/1Gv_NG093ldqag8gcob9Q_batwpMuTv97/view?usp=sharing',
        title: 'Uber Clone',
        text: 'Tools & Techs 🡪 React Native, React Redux, React Navigation, Tailwind CSS & Google Autocomplete'
    },
    {
        id: 12,
        category: 'FRONTEND',
        image: img12,
        link1: 'https://github.com/shahinzaman102/shopping-cart',
        link2: 'https://shopping-cart-one-chi.vercel.app/',
        title: 'Shopping Cart',
        text: 'Tools & Techs 🡪 React TypeScript, React Query & Styled-Components'
    },
    {
        id: 13,
        category: 'FRONTEND',
        image: img13,
        link1: 'https://github.com/shahinzaman102/portfolio-webapp',
        link2: 'https://portfolio-shahinzaman.vercel.app',
        title: 'Portfolio Website',
        text: 'Tools & Techs 🡪 React.js, Styled-Components & EmailJS'
    },
    {
        id: 14,
        category: 'DESIGN',
        image: img14,
        // link1: '',
        link2: 'https://www.figma.com/file/NqNjNGwbosA68qnF4q1afr/Untitled?node-id=0%3A1',
        title: 'Resume Design',
        text: 'Tools & Techs 🡪 Figma : This tool is a collaborative web application for interface design - Platform: Web application, Desktop application, Mobile application)'
    },
    {
        id: 15,
        category: 'FRONTEND',
        image: img15,
        link1: 'https://github.com/shahinzaman102/vue-compositionApi-weightTracker',
        link2: 'https://vue-composition-api-weight-tracker.vercel.app',
        title: 'Vue Weight Tracker',
        text: 'Tools & Techs 🡪 VueJs, Composition Api'
    },
    {
        id: 16,
        category: 'FRONTEND',
        image: img16,
        link1: 'https://github.com/shahinzaman102/angular-typescript-node-webshop',
        link2: 'https://angular-typescript-node-webshop.vercel.app',
        title: 'Angular Web Shop',
        text: 'Tools & Techs 🡪 Angular, Angular.js, TypeScript, Fake store API, TailwindCSS'
    },
    {
        id: 17,
        category: 'FULLSTACK',
        image: img17,
        link1: 'https://github.com/shahinzaman102/organic_shop',
        link2: 'https://organic-shop-ebon.vercel.app',
        title: 'Organic Shop',
        text: 'Tools & Techs 🡪 Angular, Angular.js, TypeScript, Node.js, CSS, Firebase Firestore Database'
    },
    {
        id: 18,
        category: 'FRONTEND',
        image: img18,
        link1: 'https://github.com/shahinzaman102/Angular_JumpStart',
        link2: 'https://angular-app-theta.vercel.app',
        title: 'Angular JumpStart',
        text: 'Tools & Techs 🡪 Angular, Angular.js, TypeScript, Jasmine (Unit Testing) - This app illustrates the fundamental features of Angular through practical implementation'
    },
    {
        id: 19,
        category: 'CLOUD & DEVOPS',
        image: img19,
        link1: 'https://gitlab.com/shahinzaman102/mern-microservice-app',
        link2: 'https://youtu.be/Vb5k1pYGaK8',
        title: 'MERN Microservices App on AWS',
        text: 'Tools & Techs 🡪 Microservice architecture, NodeJS, Express, REST API, MongoDB, RabbitMQ, TypeScript, Docker, Kubernetes (EKS), Terraform, Amazon Web Services (AWS), Python, GitLab CI/CD'
    },
    {
        id: 20,
        category: 'CLOUD & DEVOPS',
        image: img20,
        link1: 'https://gitlab.com/shahinzaman102/go-microservice-app',
        link2: 'https://youtu.be/gueBhoP4dRs',
        title: 'Go Microservices App on GCP',
        text: 'Tools & Techs 🡪 Microservice Architecture, Golang, REST API, RPC & gRPC, RabbitMQ, PostgreSQL, MongoDB, Docker, Kubernetes (GKE), Terraform, Google Cloud Platform (GCP), Python, GitLab CI/CD, Prometheus & Grafana (Monitoring), HPA Autoscaling'
    },
    {
        id: 21,
        category: 'ON-PREMISES',
        image: img21,
        link1: 'https://gitlab.com/shahinzaman102/on-prem-go-microservice-app',
        link2: 'https://youtu.be/Nh4DuGKbofA',
        title: 'Go + MERN Microservices App (On-Premises)',
        text: 'Tools & Techs 🡪 Linux (Ubuntu), Docker, Kubernetes (Minikube), Python, GitLab CI/CD, Cloudflare - [Projects used: 1. Go Microservices App on GCP, 2. MERN Microservices App on AWS]'
    },
    {
        id: 22,
        category: 'IOT',
        image: img22,
        link1: 'https://github.com/shahinzaman102/iot-based-light-intensity-monitoring',
        link2: 'https://youtu.be/KmeZ9JOwmyQ',
        title: 'Wi-Fi-Based IoT Project',
        text: 'Tools & Techs 🡪 NodeMCU ESP8266 WiFi Microcontroller Module, LDR Sensor Module, Arduino IDE, MQTT, Adafruit IO, Firebase Realtime Database, Internet of Things (IoT)'
    },
    {
        id: 23,
        category: 'GEN AI',
        image: img23,
        link1: 'https://github.com/shahinzaman102/ZypherMindCLI',
        link2: 'https://drive.google.com/file/d/1d2I1_PN2ZHi9uO6ko7iracE3rqHka965/view?usp=sharing',
        title: 'ZypherMindCLI – Gemini-Powered AI Agent (CLI)',
        text: 'Tools & Techs 🡪 Deno 2.0+, Gemini API (Text Generation & Reasoning), Firecrawl MCP, TypeScript, Environment-Based Config, Streaming CLI Agent Framework (Zypher)'
    },
]

export default portfolios;