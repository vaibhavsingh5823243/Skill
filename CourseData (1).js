import img1 from '../img/awss.png';
import img2 from '../img/ReactJS.png';
import img3 from '../img/devops.png';
import img4 from '../img/Azure.png';

const CourseData = [
    {
        id: 1,
        img: img1,
        title: 'Amazon Web Services (AWS)',
        desc: 'Giving deep insight of Machine Learning Algorithms, Overview of Python',
        price: 5999,
        accordion: [{
            head: 'Course Overview',
            body: [
                {
                    dataHeading: 'Course Introduction',
                    dataBody: [
                        'What is Web development',
                        'Web technologies',
                        'MERN Stack',
                        'Course Curriculum'
                    ],
                },
                {
                    dataHeading: 'Explore HTML',
                    dataBody: [
                        'What is HTML',
                        'Importance of HTML',
                        'Browser & HTML',
                        'Basic HTML tags',
                        'Widely used HTML Tags',
                        'Special HTML Tags',
                        'DOM',
                    ],
                },
                {
                    dataHeading: 'Explore CSS',
                    dataBody: [
                        'What is CSS',
                        'Importance of CSS',
                        'How to apply CSS',
                        'Various CSS selectors',
                        'Basic CSS properties',
                        'Flex-box using CSS',
                        'Transition using CSS',
                        'Animation using CSS',
                        'Adavanced CSS properties',
                        'Responsive website design',
                    ],
                },
                {
                    dataHeading: 'Explore JS',
                    dataBody: [
                        'What is JS',
                        'Importance of JS',
                        'Features of JS',
                        'How to apply JS',
                        'Data types in JS',
                        'Variables in JS',
                        'Operators in JS',
                        'Conditional Statement in JS',
                        'Loops in JS',
                        'OOPs in JS',
                        'Functions in JS',
                        'Validation using JS',
                        'DOM Manipulation using JS',
                        'Event Handling using JS',
                        'API Handling using JS',
                        'Dynamic rendering using JS',
                        'Animation using JS',
                        'JS BOM',
                        'JSON',
                    ],
                },
                {
                    dataHeading: 'Explore ES6',
                    dataBody: [
                        'What is ES6',
                        'Importance of ES6',
                        'ES6 Features',
                        'Let keyword',
                        'const keyword',
                        'Arrow functions',
                        'map and filter function',
                        'async and await',
                        'promises',
                        'Call back functions',
                        'Spread operators',
                        'Array functions',
                    ],
                },
                {
                    dataHeading: 'Explore React JS',
                    dataBody: [
                        'What is React JS',
                        'Importance of React JS',
                        'Components in React JS',
                        'Class components in React JS',
                        'Functional component in React JS',
                        'Class vs Functional Component',
                        'Builing UI in React JS',
                        'Applying CSS in React jS',
                        'Event Handling in React JS',
                        'Hooks in React JS',
                        'useState',
                        'useEffect',
                        'Routing in React JS',
                        'API handling in React JS',
                    ],
                },
            ]
        }, {
            head: 'projects',
            body: [{

                dataHeading: 'Classroom Record', dataBody: ['To create a table to show the student details of a classroom']
            },
            {
                dataHeading: 'An Article',
                dataBody: [
                    'To create a webpage to render an article',
                    'Artciles will have different headings, images, tables etc.',
                ],
            },
            { dataHeading: 'Event Registration Form', dataBody: ['To create a form to register for an event.'] },
            {
                dataHeading: 'Responsive Home page',
                dataBody: ['To create a responsive home page.', 'Home page will show some highlights of the organisation'],
            },
            {
                dataHeading: 'Portfolio',
                dataBody: ['To create a multipage protfolio application.', 'Each page will cover one domain of the profile '],
            },
            {
                dataHeading: 'Basic Calculator',
                dataBody: [
                    'To create a basic clacultor',
                    'Users can perform basic arithmetic operations using the application.',
                ],
            },
            {
                dataHeading: 'Event registration Form 2.0',
                dataBody: ['To update the already crated event registration form.', 'Input validation is to be added.'],
            },
            {
                dataHeading: 'An Article',
                dataBody: [
                    'To create a webpage to render an article',
                    'Artciles will have different headings, images, tables etc.',
                ],
            },
            {
                dataHeading: 'To do list',
                dataBody: [
                    'To create a todo list application',
                    'User can add a new task',
                    'Change the status of list tasks between Started, Pending, and Completed.',
                ],
            },
            {
                dataHeading: 'An Article',
                dataBody: [
                    'To create a webpage to render an article',
                    'Artciles will have different headings, images, tables etc.',
                ],

            }]
        }],
        Lists: [
            {
                name: "What you'll learn",
                list: [
                    'AWS Certification',
                    'All Services',
                    'Real time implementation',
                    'Understanding of cloud services',
                    'Scenario based questions in AWS Certification'
                ]
            },
            {
                name: 'Requirements',
                list: [
                    'AWS account',
                    'A Windows, Linux, or MAC system',
                    'Your Dedication'
                ]
            },
            {
                name: 'Course Curriculum',
                list: [
                    'AWS Introduction',
                    'How to Create Free tier Account',
                    'Launch First EC2 Instance with Red-hat Linux',
                    'Launch First EC2 Instance with Windows', 'AWS EBS Volume-1',
                    'AWS EBS Volume-2',
                    'How to reduce EBS Volume',
                    'AWS EFS - 1',
                    'AWS EFS - 2',
                    'Ephemeral storage',
                    'names of EC2 Instance',
                    'On - demand Pricing',
                    'EC2 Reserved Instance',
                    'Schedules Reserved Instance',
                    'Spot Instance',
                    'Dedicated Instance',
                    'Dedicated Host',
                    'EC2 Launch Template',
                    'EC2 Capacity Reservation',
                    'IAM',
                ]
            }
        ]
    },
    {
        id: 2,
        img: img2,
        title: 'Front end technologies',
        desc: 'React JS is one of the widely used UI library for web development. It allows developers to create dynamic UI. Through, React JS enhances packages scalibility and takes front end development into another level.',
        price: 4999,
        Lists: [
            {
                name: "Skills",
                list: ['HTML', 'CSS', 'Booststrap', 'JS', 'ES6', 'ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB']
            },
            {
                name: "What you'll learn",
                list: [
                    'What is Web development',
                    'Web technologies',
                    'MERN Stack',
                    'Course Curriculum',
                    'What is HTML',
                    'Importance of HTML',
                    'Browser & HTML',
                    'Basic HTML tags',
                    'Widely used HTML Tags',
                    'Special HTML Tags',
                    'DOM',
                    'What is CSS',
                    'Importance of CSS',
                    'How to apply CSS',
                    'Various CSS selectors',
                    'Basic CSS properties',
                    'Flex-box using CSS',
                    'Transition using CSS',
                    'Animation using CSS',
                    'Adavanced CSS properties',
                    'Responsive website design',
                    'What is JS',
                    'Importance of JS',
                    'Features of JS',
                    'How to apply JS',
                    'Data types in JS',
                    'Variables in JS',
                    'Operators in JS',
                    'Conditional Statement in JS',
                    'Loops in JS',
                    'OOPs in JS',
                    'Functions in JS',
                    'Validation using JS',
                    'DOM Manipulation using JS',
                    'Event Handling using JS',
                    'API Handling using JS',
                    'Dynamic rendering using JS',
                    'Animation using JS',
                    'JS BOM',
                    'JSON',
                    'What is ES6',
                    'Importance of ES6',
                    'ES6 Features',
                    'Let keyword',
                    'const keyword',
                    'Arrow functions',
                    'map and filter function',
                    'async and await',
                    'promises',
                    'Call back functions',
                    'Spread operators',
                    'Array functions',
                    'What is React JS',
                    'Importance of React JS',
                    'Components in React JS',
                    'Class components in React JS',
                    'Functional component in React JS',
                    'Class vs Functional Component',
                    'Builing UI in React JS',
                    'Applying CSS in React jS',
                    'Event Handling in React JS',
                    'Hooks in React JS',
                    'useState',
                    'useEffect',
                    'Routing in React JS',
                    'API handling in React JS',
                ]
            },
            {
                name: 'Projects',
                list: [
                    'Classroom Record',
                    'An Article',
                    'Event Registration Form',
                    'Responsive Home page',
                    'Portfolio',
                    'Basic Calculator',
                    'An Article',
                    'To do list',
                    'An Article',
                ]
            }
        ]
    },
    {
        id: 3,
        img: img3,
        title: 'Dev Ops',
        desc: 'In this course you will be get hands on with DevOps in detail, completing all theory of Tools& Lab of the Famous Services , Interview Questions , weekly doubt sessions and one to one Interaction will be there.',
        price: 5999,
        Lists: [
            {
                name: "What you'll learn",
                list: [
                	'Docker Certification',
                	'All Services',
                	'Real time implementation',
                	'Understanding of cloud services.',
                	'Scenario based questions in Docker Kubernetes Certification'
                ]
            },
            {
                name: 'Requirements',
                list: [
                	'Azure account',
                	'A Windows, Linux, or MAC system',
                	'Your Dedication'
                ]
            },
            {
                name: 'Course Curriculum',
                list: [
                	'Devops Introduction',
                	'How to Create Free tier Account',
                	'Aws Logic Service',
                	'Linux',
                	'Jenkins',
                	'Docker',
                	'Ansible',
                	'Database/mysql',
                	'Git',
                	'Bash Script',
                	'Gcp',
                	'Grafana',
                	'Nagios',
                	'Aws CLI',
                	'Kubernetes',
                	'Networking',
                	'New relics'
                ]
            }
        ]
    },
    {
        id: 4,
        img: img4,
        title: 'Microsoft Azure',
        desc: 'In this course you will be get hands on with Azure in detail, completing all theory of Services & Lab of the Famous Services , Interview Questions , weekly doubt sessions and one to one Interaction will be there.',
        price: 4999,
        Lists: [{
            name: "What you'll learn",
            list: [
                'Azure Certification',
                'All Services',
                'Real time implementation',
                'Understanding of cloud services.',
                'Scenario based questions in Azure Certification'
            ]
        },
        {
            name: 'Requirements',
            list: [
                'Azure account',
                'A Windows, Linux, or MAC system',
                'Your Dedication'

            ]
        },
        {
            name: 'Course Curriculum',
            list: [
            	'Azure Introduction',
            	'How to Create Free tier Account',
            	'Azure Logic Apps',
            	'Azure Data Factory',
            	'Azure Storage',
            	'Azure App Service',
            	'Azure Function App',
            	'Azure Cosmos DB',
            	'Azure Container Instances',
            	'Azure Event Grid',
            	'Azure Key Vault',
            	'Azure SQL Databases' ,
            	'Azure Automation',
            	'Azure CLI',
            	'Azure Analysis Services',
            	'Azure Data Lake Storage Gen2',
            	'Azure Virtual Machine',
            	'Azure Load Balancer',
            	'Azure Queue Storage',
            	'Azure Table Storage',
            	'Azure Application Insights',
            	'Azure App Configuration',
            	'Azure Resource Manager Template - Infrastructure as a code',
            	'Azure Cloud Shell',
            	'Azure Cost Management',
            	'Azure Event Hub ',
            	'Azure Files',
            	'Azure Stream Analytics',
            	'Azure Active Directory'



            ]
        }
        ]
    },
]
export default CourseData;