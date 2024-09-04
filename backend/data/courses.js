const Course = require("../models/Course")
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: "../env.env"});
module.exports = courses = [
    {
        title: 'Introduction to JavaScript',
        instructor: 'Amit Sharma',
        description: 'Learn the basics of JavaScript programming.',
        enrollmentStatus: 'Open',
        thumbnail: 'javascript.png',
        durationInWeeks: 4,
        schedule: 'Monday to Thursday, 7pm to 9pm',
        location: 'Online',
        prerequisites: ['Basic Computer Knowledge', 'Basic HTML'],
        syllabus: [
            { week: 1, topics: [{ name: 'Variables and Data Types', description: 'Introduction to variables, data types, and type conversions.' }, { name: 'Operators', description: 'Arithmetic and logical operators.' }] },
            { week: 2, topics: [{ name: 'Control Structures', description: 'Learning about loops and conditional statements.' }, { name: 'Functions', description: 'Creating and using functions in JavaScript.' }] },
            { week: 3, topics: [{ name: 'Objects and Arrays', description: 'Understanding objects and arrays in JavaScript.' }, { name: 'Error Handling', description: 'Handling errors and debugging techniques.' }] },
            { week: 4, topics: [{ name: 'DOM Manipulation', description: 'Interacting with the DOM and handling events.' }, { name: 'Introduction to ES6', description: 'Exploring ES6 features such as arrow functions and template literals.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Advanced JavaScript',
        instructor: 'Priya Patel',
        description: 'Deep dive into advanced JavaScript concepts.',
        enrollmentStatus: 'Open',
        thumbnail: 'AdvJS.jpg',
        durationInWeeks: 6,
        schedule: 'Monday to Thursday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Introduction to JavaScript', 'Basic HTML'],
        syllabus: [
            { week: 1, topics: [{ name: 'Closures', description: 'Understanding closures and their use cases.' }, { name: 'Call, Apply, Bind', description: 'Learning about these function methods.' }] },
            { week: 2, topics: [{ name: 'Promises and Async/Await', description: 'Managing asynchronous operations in JavaScript.' }, { name: 'Error Handling', description: 'Advanced techniques for error handling.' }] },
            { week: 3, topics: [{ name: 'Object-Oriented JavaScript', description: 'Learning about prototypes and inheritance.' }, { name: 'Design Patterns', description: 'Exploring common design patterns in JavaScript.' }] },
            { week: 4, topics: [{ name: 'Functional Programming', description: 'Understanding functional programming principles.' }, { name: 'Performance Optimization', description: 'Techniques for optimizing JavaScript performance.' }] },
            { week: 5, topics: [{ name: 'JavaScript Modules', description: 'Using and creating JavaScript modules.' }, { name: 'Testing', description: 'Introduction to testing JavaScript code.' }] },
            { week: 6, topics: [{ name: 'Advanced ES6+ Features', description: 'Exploring new features introduced in ES6 and beyond.' }, { name: 'JavaScript Engines', description: 'Understanding how JavaScript engines work.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to Python',
        instructor: 'Rajesh Kumar',
        description: 'Learn the fundamentals of Python programming.',
        enrollmentStatus: 'Closed',
        thumbnail: 'Python.jpg',
        durationInWeeks: 5,
        schedule: 'Tuesday to Friday, 5pm to 7pm',
        location: 'Online',
        prerequisites: ['Basic Computer Knowledge', 'Basic Programming Concepts'],
        syllabus: [
            { week: 1, topics: [{ name: 'Python Basics', description: 'Introduction to Python syntax and basic programming concepts.' }, { name: 'Control Flow', description: 'Understanding conditionals and loops.' }] },
            { week: 2, topics: [{ name: 'Data Structures', description: 'Lists, tuples, and dictionaries in Python.' }, { name: 'Functions', description: 'Creating and using functions.' }] },
            { week: 3, topics: [{ name: 'Modules and Packages', description: 'Using and creating modules and packages.' }, { name: 'Error Handling', description: 'Techniques for handling errors.' }] },
            { week: 4, topics: [{ name: 'File Handling', description: 'Reading from and writing to files.' }, { name: 'Regular Expressions', description: 'Using regular expressions for pattern matching.' }] },
            { week: 5, topics: [{ name: 'Introduction to Web Scraping', description: 'Basics of web scraping using Python.' }, { name: 'Project', description: 'Building a simple project using Python.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to HTML and CSS',
        instructor: 'Sanya Gupta',
        description: 'Learn how to build and style web pages using HTML and CSS.',
        enrollmentStatus: 'Open',
        thumbnail: 'htmlcss.jpg',
        durationInWeeks: 4,
        schedule: 'Monday to Wednesday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Basic Computer Knowledge'],
        syllabus: [
            { week: 1, topics: [{ name: 'HTML Basics', description: 'Introduction to HTML tags and structure.' }, { name: 'CSS Basics', description: 'Introduction to CSS and styling basics.' }] },
            { week: 2, topics: [{ name: 'HTML Forms', description: 'Creating and handling HTML forms.' }, { name: 'CSS Layout Techniques', description: 'Using Flexbox and Grid for layouts.' }] },
            { week: 3, topics: [{ name: 'Responsive Design', description: 'Making web pages responsive with media queries.' }, { name: 'CSS Transitions and Animations', description: 'Adding animations and transitions to web elements.' }] },
            { week: 4, topics: [{ name: 'Project', description: 'Building a complete webpage from scratch.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to React',
        instructor: 'Ravi Singh',
        description: 'Learn the fundamentals of React.js and build interactive web applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'React.jpg',
        durationInWeeks: 5,
        schedule: 'Monday to Thursday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Introduction to JavaScript', 'Basic HTML/CSS'],
        syllabus: [
            { week: 1, topics: [{ name: 'React Basics', description: 'Introduction to React and setting up a React project.' }, { name: 'JSX and Components', description: 'Understanding JSX and creating components.' }] },
            { week: 2, topics: [{ name: 'State and Props', description: 'Managing state and props in React components.' }, { name: 'Event Handling', description: 'Handling events in React.' }] },
            { week: 3, topics: [{ name: 'Lifecycle Methods', description: 'Using lifecycle methods in React components.' }, { name: 'React Hooks', description: 'Introduction to hooks and their usage.' }] },
            { week: 4, topics: [{ name: 'Routing with React Router', description: 'Implementing routing in a React application.' }, { name: 'State Management with Context API', description: 'Managing state with Context API.' }] },
            { week: 5, topics: [{ name: 'Building a Project', description: 'Creating a complete project using React.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to Node.js',
        instructor: 'Meera Sharma',
        description: 'Learn the basics of server-side programming with Node.js.',
        enrollmentStatus: 'Open',
        thumbnail: 'Node.png',
        durationInWeeks: 6,
        schedule: 'Tuesday to Friday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Introduction to JavaScript'],
        syllabus: [
            { week: 1, topics: [{ name: 'Node.js Basics', description: 'Introduction to Node.js and setting up the environment.' }, { name: 'Modules and Packages', description: 'Using Node.js modules and npm packages.' }] },
            { week: 2, topics: [{ name: 'Asynchronous Programming', description: 'Understanding callbacks, promises, and async/await.' }, { name: 'File System', description: 'Working with the file system in Node.js.' }] },
            { week: 3, topics: [{ name: 'Express.js Basics', description: 'Introduction to Express.js and building a basic server.' }, { name: 'Routing', description: 'Implementing routing with Express.js.' }] },
            { week: 4, topics: [{ name: 'Middleware', description: 'Understanding and using middleware in Express.js.' }, { name: 'Databases', description: 'Connecting to and using databases with Node.js.' }] },
            { week: 5, topics: [{ name: 'Authentication', description: 'Implementing user authentication and authorization.' }, { name: 'Error Handling', description: 'Handling errors in Node.js applications.' }] },
            { week: 6, topics: [{ name: 'Project', description: 'Building a complete application using Node.js and Express.js.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to SQL',
        instructor: 'Karan Verma',
        description: 'Learn the fundamentals of SQL and relational databases.',
        enrollmentStatus: 'Open',
        thumbnail: 'sql.jpg',
        durationInWeeks: 4,
        schedule: 'Monday to Thursday, 7pm to 9pm',
        location: 'Online',
        prerequisites: ['Basic Computer Knowledge'],
        syllabus: [
            { week: 1, topics: [{ name: 'SQL Basics', description: 'Introduction to SQL and basic queries.' }, { name: 'Data Types', description: 'Understanding SQL data types.' }] },
            { week: 2, topics: [{ name: 'CRUD Operations', description: 'Creating, reading, updating, and deleting data.' }, { name: 'Joins', description: 'Understanding and using SQL joins.' }] },
            { week: 3, topics: [{ name: 'Subqueries', description: 'Writing and using subqueries.' }, { name: 'Indexes and Optimization', description: 'Optimizing queries with indexes.' }] },
            { week: 4, topics: [{ name: 'Project', description: 'Building a database and querying it.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to Git and GitHub',
        instructor: 'Anita Joshi',
        description: 'Learn version control with Git and collaboration with GitHub.',
        enrollmentStatus: 'Open',
        thumbnail: 'gitAndGithub.jpg',
        durationInWeeks: 3,
        schedule: 'Monday to Wednesday, 5pm to 7pm',
        location: 'Online',
        prerequisites: ['Basic Computer Knowledge'],
        syllabus: [
            { week: 1, topics: [{ name: 'Git Basics', description: 'Introduction to Git and basic commands.' }, { name: 'Repositories', description: 'Creating and managing repositories.' }] },
            { week: 2, topics: [{ name: 'Branching and Merging', description: 'Understanding branches and merging changes.' }, { name: 'GitHub Basics', description: 'Introduction to GitHub and remote repositories.' }] },
            { week: 3, topics: [{ name: 'Collaborating with GitHub', description: 'Using GitHub for collaboration and pull requests.' }, { name: 'Project', description: 'Managing a project using Git and GitHub.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to Django',
        instructor: 'Ravi Kumar',
        description: 'Learn the basics of web development with Django.',
        enrollmentStatus: 'Closed',
        thumbnail: 'Django.jpg',
        durationInWeeks: 6,
        schedule: 'Tuesday to Friday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Introduction to Python'],
        syllabus: [
            { week: 1, topics: [{ name: 'Django Basics', description: 'Introduction to Django and setting up a project.' }, { name: 'Models and Admin', description: 'Creating models and using Django admin.' }] },
            { week: 2, topics: [{ name: 'Views and Templates', description: 'Creating views and templates in Django.' }, { name: 'Forms', description: 'Handling forms and validations.' }] },
            { week: 3, topics: [{ name: 'Authentication', description: 'Implementing authentication and authorization.' }, { name: 'Static Files', description: 'Serving static files in Django.' }] },
            { week: 4, topics: [{ name: 'Database Migrations', description: 'Using Django migrations for database changes.' }, { name: 'REST APIs with Django', description: 'Building REST APIs using Django Rest Framework.' }] },
            { week: 5, topics: [{ name: 'Deployment', description: 'Deploying Django applications to a server.' }, { name: 'Testing', description: 'Writing tests for Django applications.' }] },
            { week: 6, topics: [{ name: 'Project', description: 'Building a complete Django application.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to TypeScript',
        instructor: 'Nisha Singh',
        description: 'Learn how to use TypeScript to build scalable JavaScript applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'Typescript.jpg',
        durationInWeeks: 4,
        schedule: 'Monday to Thursday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Introduction to JavaScript'],
        syllabus: [
            { week: 1, topics: [{ name: 'TypeScript Basics', description: 'Introduction to TypeScript and setting up the environment.' }, { name: 'Types and Interfaces', description: 'Understanding TypeScript types and interfaces.' }] },
            { week: 2, topics: [{ name: 'Classes and Objects', description: 'Using classes and objects in TypeScript.' }, { name: 'Generics', description: 'Introduction to generics in TypeScript.' }] },
            { week: 3, topics: [{ name: 'Modules', description: 'Using and creating modules in TypeScript.' }, { name: 'Error Handling', description: 'Error handling techniques in TypeScript.' }] },
            { week: 4, topics: [{ name: 'Integrating with JavaScript', description: 'Using TypeScript with existing JavaScript code.' }, { name: 'Project', description: 'Building a project using TypeScript.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to GraphQL',
        instructor: 'Sonia Kapoor',
        description: 'Learn how to build and query APIs using GraphQL.',
        enrollmentStatus: 'Open',
        thumbnail: 'GraphQl.png',
        durationInWeeks: 5,
        schedule: 'Tuesday to Friday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Introduction to JavaScript', 'Basic Knowledge of REST APIs'],
        syllabus: [
            { week: 1, topics: [{ name: 'GraphQL Basics', description: 'Introduction to GraphQL and setting up the environment.' }, { name: 'Queries and Mutations', description: 'Writing queries and mutations in GraphQL.' }] },
            { week: 2, topics: [{ name: 'Schemas and Resolvers', description: 'Defining schemas and resolvers in GraphQL.' }, { name: 'Integrating with Databases', description: 'Connecting GraphQL to databases.' }] },
            { week: 3, topics: [{ name: 'Authentication and Authorization', description: 'Implementing authentication and authorization with GraphQL.' }, { name: 'Error Handling', description: 'Handling errors in GraphQL.' }] },
            { week: 4, topics: [{ name: 'GraphQL Subscriptions', description: 'Real-time updates with GraphQL subscriptions.' }, { name: 'Performance Optimization', description: 'Optimizing GraphQL queries.' }] },
            { week: 5, topics: [{ name: 'Project', description: 'Building a complete GraphQL API.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to AWS',
        instructor: 'Siddharth Agarwal',
        description: 'Learn the basics of Amazon Web Services and cloud computing.',
        enrollmentStatus: 'Open',
        thumbnail: 'AWS.jpg',
        durationInWeeks: 6,
        schedule: 'Monday to Thursday, 7pm to 9pm',
        location: 'Online',
        prerequisites: ['Basic Computer Knowledge'],
        syllabus: [
            { week: 1, topics: [{ name: 'AWS Overview', description: 'Introduction to AWS and cloud computing concepts.' }, { name: 'AWS Management Console', description: 'Navigating and using the AWS Management Console.' }] },
            { week: 2, topics: [{ name: 'EC2 Basics', description: 'Creating and managing EC2 instances.' }, { name: 'S3 Basics', description: 'Storing and managing files with S3.' }] },
            { week: 3, topics: [{ name: 'IAM and Security', description: 'Managing users and permissions with IAM.' }, { name: 'RDS Basics', description: 'Using Amazon RDS for relational databases.' }] },
            { week: 4, topics: [{ name: 'VPC and Networking', description: 'Understanding VPC and networking in AWS.' }, { name: 'CloudWatch', description: 'Monitoring AWS resources with CloudWatch.' }] },
            { week: 5, topics: [{ name: 'Elastic Beanstalk', description: 'Deploying applications with Elastic Beanstalk.' }, { name: 'Lambda Basics', description: 'Introduction to serverless computing with AWS Lambda.' }] },
            { week: 6, topics: [{ name: 'Project', description: 'Building a project using AWS services.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to Docker',
        instructor: 'Deepak Patel',
        description: 'Learn containerization with Docker.',
        enrollmentStatus: 'Closed',
        thumbnail: 'Docker.png',
        durationInWeeks: 5,
        schedule: 'Tuesday to Friday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Basic Computer Knowledge', 'Basic Command Line'],
        syllabus: [
            { week: 1, topics: [{ name: 'Docker Basics', description: 'Introduction to Docker and containerization concepts.' }, { name: 'Docker Installation', description: 'Setting up Docker on your machine.' }] },
            { week: 2, topics: [{ name: 'Docker Images and Containers', description: 'Understanding Docker images and containers.' }, { name: 'Docker Commands', description: 'Common Docker commands and their usage.' }] },
            { week: 3, topics: [{ name: 'Dockerfile', description: 'Creating and using Dockerfiles.' }, { name: 'Docker Compose', description: 'Using Docker Compose to manage multi-container applications.' }] },
            { week: 4, topics: [{ name: 'Networking in Docker', description: 'Understanding networking between Docker containers.' }, { name: 'Volumes', description: 'Managing data with Docker volumes.' }] },
            { week: 5, topics: [{ name: 'Project', description: 'Building and deploying a project using Docker.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to Kubernetes',
        instructor: 'Neha Rathi',
        description: 'Learn container orchestration with Kubernetes.',
        enrollmentStatus: 'Open',
        thumbnail: 'Kubernetes.jpg',
        durationInWeeks: 6,
        schedule: 'Monday to Thursday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Introduction to Docker'],
        syllabus: [
            { week: 1, topics: [{ name: 'Kubernetes Basics', description: 'Introduction to Kubernetes and its architecture.' }, { name: 'Installing Kubernetes', description: 'Setting up a Kubernetes cluster.' }] },
            { week: 2, topics: [{ name: 'Pods and Deployments', description: 'Understanding pods and deployments in Kubernetes.' }, { name: 'Services', description: 'Managing services and networking.' }] },
            { week: 3, topics: [{ name: 'ConfigMaps and Secrets', description: 'Using ConfigMaps and Secrets to manage configuration.' }, { name: 'Volumes and Persistent Storage', description: 'Managing storage in Kubernetes.' }] },
            { week: 4, topics: [{ name: 'Helm Basics', description: 'Using Helm for package management in Kubernetes.' }, { name: 'Scaling and Monitoring', description: 'Scaling applications and monitoring with Kubernetes.' }] },
            { week: 5, topics: [{ name: 'Security and Best Practices', description: 'Implementing security and best practices in Kubernetes.' }, { name: 'CI/CD Integration', description: 'Integrating Kubernetes with CI/CD pipelines.' }] },
            { week: 6, topics: [{ name: 'Project', description: 'Building and managing a complete application using Kubernetes.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to Machine Learning',
        instructor: 'Ravi Agarwal',
        description: 'Learn the basics of machine learning algorithms and techniques.',
        enrollmentStatus: 'Open',
        thumbnail: 'ML.jpg',
        durationInWeeks: 8,
        schedule: 'Monday to Friday, 7pm to 9pm',
        location: 'Online',
        prerequisites: ['Introduction to Python', 'Basic Statistics'],
        syllabus: [
            { week: 1, topics: [{ name: 'Machine Learning Basics', description: 'Introduction to machine learning concepts and algorithms.' }, { name: 'Python Libraries for ML', description: 'Using libraries like NumPy, pandas, and Scikit-learn.' }] },
            { week: 2, topics: [{ name: 'Supervised Learning', description: 'Understanding supervised learning algorithms such as linear regression and classification.' }, { name: 'Model Evaluation', description: 'Evaluating machine learning models using metrics like accuracy and F1 score.' }] },
            { week: 3, topics: [{ name: 'Unsupervised Learning', description: 'Exploring unsupervised learning techniques such as clustering and dimensionality reduction.' }, { name: 'Feature Engineering', description: 'Techniques for feature selection and transformation.' }] },
            { week: 4, topics: [{ name: 'Deep Learning Basics', description: 'Introduction to neural networks and deep learning.' }, { name: 'Building Neural Networks', description: 'Using libraries like TensorFlow and Keras to build neural networks.' }] },
            { week: 5, topics: [{ name: 'Model Optimization', description: 'Optimizing machine learning models using techniques like grid search and cross-validation.' }, { name: 'Overfitting and Underfitting', description: 'Understanding and addressing overfitting and underfitting issues.' }] },
            { week: 6, topics: [{ name: 'Natural Language Processing', description: 'Introduction to NLP techniques and applications.' }, { name: 'Project', description: 'Building a machine learning project from scratch.' }] },
            { week: 7, topics: [{ name: 'Model Deployment', description: 'Deploying machine learning models in production environments.' }, { name: 'Ethics in ML', description: 'Understanding ethical considerations in machine learning.' }] },
            { week: 8, topics: [{ name: 'Project Presentation', description: 'Presenting and discussing the completed project.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to Agile and Scrum',
        instructor: 'Amit Mehta',
        description: 'Learn the principles and practices of Agile and Scrum methodologies.',
        enrollmentStatus: 'Open',
        thumbnail: 'AgileScrum.png',
        durationInWeeks: 3,
        schedule: 'Monday to Wednesday, 5pm to 7pm',
        location: 'Online',
        prerequisites: ['Basic Project Management Knowledge'],
        syllabus: [
            { week: 1, topics: [{ name: 'Agile Principles', description: 'Understanding the Agile manifesto and principles.' }, { name: 'Scrum Basics', description: 'Introduction to Scrum and its framework.' }] },
            { week: 2, topics: [{ name: 'Scrum Roles', description: 'Understanding roles in Scrum such as Scrum Master, Product Owner, and Development Team.' }, { name: 'Scrum Artifacts', description: 'Exploring Scrum artifacts like Product Backlog and Sprint Backlog.' }] },
            { week: 3, topics: [{ name: 'Scrum Events', description: 'Learning about Scrum events like Sprint Planning, Daily Scrum, and Sprint Review.' }, { name: 'Agile Practices', description: 'Implementing Agile practices in real-world projects.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to Web Security',
        instructor: 'Pooja Joshi',
        description: 'Learn about web security practices and how to secure web applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'webSecurity.jpg',
        durationInWeeks: 5,
        schedule: 'Monday to Thursday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Basic Knowledge of Web Technologies'],
        syllabus: [
            { week: 1, topics: [{ name: 'Web Security Basics', description: 'Introduction to web security and common threats.' }, { name: 'OWASP Top 10', description: 'Understanding the OWASP Top 10 security vulnerabilities.' }] },
            { week: 2, topics: [{ name: 'Authentication and Authorization', description: 'Implementing secure authentication and authorization mechanisms.' }, { name: 'HTTPS and SSL/TLS', description: 'Securing communications with HTTPS and SSL/TLS.' }] },
            { week: 3, topics: [{ name: 'Cross-Site Scripting (XSS)', description: 'Understanding and mitigating XSS attacks.' }, { name: 'Cross-Site Request Forgery (CSRF)', description: 'Defending against CSRF attacks.' }] },
            { week: 4, topics: [{ name: 'SQL Injection', description: 'Protecting against SQL injection attacks.' }, { name: 'Security Testing', description: 'Techniques for testing web application security.' }] },
            { week: 5, topics: [{ name: 'Project', description: 'Securing a web application and presenting the findings.' }] }
        ],
        likes: 0,
        dislikes: 0
    },
    {
        title: 'Introduction to Data Science',
        instructor: 'Ankit Yadav',
        description: 'Learn the fundamentals of data science and data analysis.',
        enrollmentStatus: 'Open',
        thumbnail: 'DataScience.jpg',
        durationInWeeks: 7,
        schedule: 'Monday to Friday, 6pm to 8pm',
        location: 'Online',
        prerequisites: ['Introduction to Python', 'Basic Statistics'],
        syllabus: [
            { week: 1, topics: [{ name: 'Data Science Overview', description: 'Introduction to data science and its lifecycle.' }, { name: 'Data Collection', description: 'Techniques for collecting data from various sources.' }] },
            { week: 2, topics: [{ name: 'Data Cleaning', description: 'Cleaning and preprocessing data.' }, { name: 'Exploratory Data Analysis', description: 'Techniques for exploring and visualizing data.' }] },
            { week: 3, topics: [{ name: 'Statistical Analysis', description: 'Applying statistical methods to analyze data.' }, { name: 'Machine Learning Basics', description: 'Introduction to machine learning algorithms.' }] },
            { week: 4, topics: [{ name: 'Data Visualization', description: 'Creating visualizations to represent data insights.' }, { name: 'Feature Engineering', description: 'Techniques for transforming data features.' }] },


            { week: 5, topics: [{ name: 'Predictive Modeling', description: 'Building and evaluating predictive models.' }, { name: 'Model Deployment', description: 'Deploying data science models in production.' }] },
            { week: 6, topics: [{ name: 'Big Data Technologies', description: 'Introduction to big data tools and technologies.' }, { name: 'Ethics in Data Science', description: 'Understanding ethical considerations in data science.' }] },
            { week: 7, topics: [{ name: 'Capstone Project', description: 'Building and presenting a comprehensive data science project.' }] }
        ],
        likes: 0,
        dislikes: 0
    }
];

mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
  .then(async () => {
    try {
      await Course.insertMany(courses);
      console.log("Course Data inserted Successfully!");
    } catch (err) {
      console.log("Error inserting course data:", err);
    } finally {
      mongoose.disconnect()
        .then(() => console.log("Disconnected from MongoDB"))
        .catch(err => console.log("Error disconnecting from MongoDB:", err));
    }
  })
  .catch(err => console.log("Error connecting to MongoDB:", err));

