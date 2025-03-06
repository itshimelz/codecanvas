// Import icons from lucide-react
import {
    Code,
    Globe,
    CircuitBoard,
    Microchip,
    Sigma,
    ListTree,
    BrainCircuit,
    Database,
    Cog,
    Network,
    Briefcase,
    Puzzle,
    GraduationCap,
    Workflow,
    Cpu,
    FlaskConical
} from "lucide-react";

export const navItems = [
    { label: "Home", to: "/" },        // Matches the Home route
    { label: "Courses", to: "/courses" }, // Matches the Courses route
    { label: "Ideas", to: "/ideas" },     // Make sure you have a route for this
    { label: "About", to: "/about" },     // And this one
    { label: "Blog", to: "/blog" },      // And this one
];

// Courses Data
export const coursesData = [
    {
        id: 1,
        title: "Structured Programming Language",
        description:
            "Overview: data types, operators and expression; control structure: decision making and branching, decision making and looping, jumping statements; array and strings: linear array, multidimensional array and strings; managing input and output operations; user defined functions: defining, calling, declaring functions; user defined data types: structure and union; pointer, dynamic memory allocation and file handling; sound and graphics.",
        icon: Code
    },
    {
        id: 2,
        title: "Structured Programming Language Lab",
        description:
            "Laboratory works based on CSE 103",
        icon: FlaskConical
    },
    {
        id: 3,
        title: "Object Oriented Programming",
        description:
            "Object oriented programming (OOP) principles: advantages of OOP over structured programming, encapsulation, classes and objects, access specifiers, static and non- static members; constructors: destructors and copy constructors; array of objects: object pointers, object references; inheritance: single and multiple inheritance; polymorphism: overloading, abstract classes, virtual functions and overriding; exceptions: object oriented I/O; template functions and classes; multi-threaded programming; GUI: abstract window toolkit (AWT), swing, event handling; animation: graphical content drawing, moving object.",
        icon: Code
    },
    {
        id: 4,
        title: "Object Oriented Programming Lab",
        description:
            "Laboratory works based on CSE 201",
        icon: FlaskConical
    },
    {
        id: 5,
        title: "Web Programming",
        description:
            "HTML basics: tags, formatting text, creating links, adding images, lists, tables, frames, forms, Cascading Style Sheets (CSS), graphics; JavaScript: introduction to JavaScript, JavaScript syntax, variables, functions; PHP: generating HTML dynamically, processing forms, sessions, cookies, data ties, back-end database support, SQL primer, database interface in PHP, searching in web applications, regular expressions and matching, Audio and video in web; advanced tools: AJAX, flash and flex.",
        icon: Globe
    },
    {
        id: 6,
        title: "Web Programming Lab",
        description:
            "Laboratory works based on CSE 301",
        icon: FlaskConical
    },
    {
        id: 7,
        title: "Computer Architecture",
        description:
            "Information representation; measuring performance; instructions and data access methods: operations and operands of computer hardware, representing instruction, addressing styles; Arithmetic Logic Unit (ALU) operations: floating point operations, designing ALU; processor design: datapaths single cycle and multicycle implementations, control unit design hardwared and microprogrammed, hazards, exceptions; pipeline: pipelined datapath and control, superscalar and dynamic pipelining; memory organization: cache, virtual memory, channels; DMA and interrupts; buses; multiprocessors: types of multiprocessors, performance, single bus multiprocessors, multiprocessors connected by network, clusters.",
        icon: Cpu
    },
    {
        id: 8,
        title: "Digital Logic Design",
        description:
            "Digital logic: Boolean algebra, De Morgan's theorems, logic gates and their truth tables, canonical forms, combinational logic circuits; minimization techniques: arithmetic and data handling logic circuits, decoders and encoders, multiplexers and demultiplexers; combinational circuit design: Flip-flops, race around problems; counters: asynchronous counters, synchronous counters and their applications; PLA design; synchronous and asynchronous logic design; state diagram; Mealy and Moore machines; state minimizations and assignments; pulse mode logic; fundamental mode design.",
        icon: CircuitBoard
    },
    {
        id: 9,
        title: "Digital Logic Design Lab",
        description:
            "Laboratory works based on CSE 203",
        icon: FlaskConical
    },
    {
        id: 10,
        title: "Microprocessors & Microcontrollers",
        description:
            "Microprocessor: microcontroller & microcomputer, evaluation of microprocessor & application, introduction to 8-bit, 16-bit, and 32-bit microprocessors; addressing modes: absolute addressing, 8086 internal architecture, PIN diagram of 8086, Max-Min mode, register structure; memory read write cycle; Instruction set; pipeline concept: interrupts, programmed I/O, memory mapped I/O, interrupt driven I/O, direct memory access; block transfer; cycle stealing; interleaved; multi-tasking and virtual memory; memory interface; bus interface; arithmetic co-processor; assembly language programming of 8086 microprocessors.",
        icon: Microchip
    },
    {
        id: 11,
        title: "Microprocessors & Microcontrollers Lab",
        description:
            "Laboratory works based on CSE 303",
        icon: FlaskConical
    },
    {
        id: 12,
        title: "Discrete Mathematics",
        description:
            "Mathematical logic: propositional logic, predicate logic, mathematical reasoning and proof techniques; set theory: sets, relations, partial ordered sets, functions; counting: permutations, combinations, principles of inclusion and exclusion; discrete probability; functions: recurrence relations and recursive algorithms; growth of functions; graph theory: graphs, paths, trees; algebraic structures: rings and groups.",
        icon: Sigma
    },
    {
        id: 13,
        title: "Data Structures",
        description:
            "Internal data representation; Abstract data types; elementary data structures: arrays, linked lists, stacks, queues, trees and graphs; basic data structures operations: traversal, insertion, deletion, searching, merging, sorting, tree; tree traversal and graph traversal; recursion and recursive algorithm, pattern matching; advanced data structures: heaps, Fibonacci heaps; search trees: binary search trees, AVL trees, multi-way search trees, sorting, hashing.",
        icon: ListTree
    },
    {
        id: 14,
        title: "Data Structures Lab",
        description:
            "Laboratory works based on CSE 105",
        icon: FlaskConical
    },
    {
        id: 15,
        title: "Algorithms",
        description:
            "Techniques for analysis of algorithms; Methods for the design of efficient algorithms: divide and conquer, greedy method, dynamic programming, back tracking, branch and bound; basic search and traversal techniques; topological sorting; connected components, spanning trees, shortest paths; Flow algorithms; Approximation algorithms; Parallel algorithms, Lower bound theory; NP-completeness, NP-hard and NP-complete problems.",
        icon: Code
    },
    {
        id: 16,
        title: "Algorithms Lab",
        description:
            "Laboratory works based on CSE 205",
        icon: FlaskConical
    },
    {
        id: 17,
        title: "Artificial Intelligence",
        description:
            "Introduction to artificial intelligence; foundation and history of artificial intelligence; intelligent agents; solving problem by searching; adversarial searching; logical agents; first-order logic; knowledge representation; probabilistic reasoning; planning; making decisions; perception; robotics.",
        icon: BrainCircuit
    },
    {
        id: 18,
        title: "Artificial Intelligence Lab",
        description:
            "Laboratory works based on CSE 315",
        icon: FlaskConical
    },
    {
        id: 19,
        title: "Database System",
        description:
            "Concepts of database systems: different types of databases, application, models; database architecture: client-server architecture, parallel architecture, distributed databases, relational databases, E-R design, strong entity set and weak entity set, specialization, generalizations; integrity constraint: DDL, DML, DTL; introduction to SQL: syntax, aggregation function, relational operators, logical operators, string operations, join functions; query processing; hashing and indexing; query optimization; database optimization: normalization, 1NF, 2NF, 3NF, BCNF; database transactions: transaction model, ACID, serializability, transaction as SQL statements; database concurrency control: lock based protocol, dead lock handling, multiple granularity; database triggers: row level triggers based on update, insert, delete; basic of data mining and data warehousing.",
        icon: Database
    },
    {
        id: 20,
        title: "Database System Lab",
        description:
            "Laboratory works based on CSE 209",
        icon: FlaskConical
    },
    {
        id: 21,
        title: "Operating System",
        description:
            "Operating system: its role in computer systems, operating system concepts, operating system structure; process: process model and implementation, inter-process communication (IPC), classical IPC problems, thread, process scheduling, multiprocessing and time-sharing; memory management: swapping, paging, segmentation, virtual memory; Input/Output: hardware, software, disk, terminals, clocks; deadlock: resource allocation and deadlock, deadlock detection, prevention and recovery; file systems: files, directories, security, protection; case study of some operating systems.",
        icon: Cog
    },
    {
        id: 22,
        title: "Operating System Lab",
        description:
            "Laboratory works based on CSE 309",
        icon: FlaskConical
    },
    {
        id: 23,
        title: "Computer Networking",
        description:
            "Introduction to computer networks: protocol layers, network performance Metrics-Delay, loss, throughput, jitter; circuit and packet switching; application layer: protocol overview of HTTP, FTP, SMTP, DNS, SNMP, P2P, client server and hybrid applications of the Internet; transport layer: protocol overview of TCP and UDP, principles of reliable data transfer, flow control, congestion control, TCP Reno, TCP Tahoe, socket programming; network layer: overview of IPv4 and IPv6, IP addressing, components of a router, routing and forwarding functions of a router, routing algorithms: link state and distance vector, OSPF and BGP; wireless networks: definition and types of wireless networks, MAC and routing in wireless networks, mobility and mobile IPv6.",
        icon: Network
    },
    {
        id: 24,
        title: "Computer Networking Lab",
        description:
            "Laboratory works based on CSE 311",
        icon: FlaskConical
    },
    {
        id: 25,
        title: "Software Engineering",
        description:
            "Introduction: concepts/paradigms/phases of software engineering/life cycle, recurring and fundamental principles, requirement analysis/engineering/specification, concepts of feasibility analysis and techniques of cost benefit analysis, role, tasks and attributes of system analysts, software architectures; design: architectural design, module design, interfaces and fundamental principles; User Interface (UI) design: UI design principles, user interaction, information presentation, user support, interface evaluation; implementation issues; introduction to software testing; quality assurance; configuration management: version management and tools; maintenance and evolution; project management: software process and project metrics, software project planning, risk analysis and management, project scheduling and tracking; use case model for requirement writing; elaboration using system sequence diagram; UML diagrams; interaction and collaboration diagram for designing software; GRASP patterns.",
        icon: Cog
    },
    {
        id: 26,
        title: "Information System and Design",
        description:
            "Introduction: Introduction to information system, tools of information system development, information systems development life cycle, tools for analysis; planning phase: systems planning, preliminary planning and investigation, determining IS development requirements, project management; analysis phase: analysing requirements, evaluating alternatives, information systems analysis principles; design phase: structured information systems design, input design and control, output system design; development phase: information systems development, computer-aided software engineering; implementation phase: systems implementation, systems evaluation and optimization, information systems documentation.",
        icon: Workflow
    },
    {
        id: 27,
        title: "Industrial Training",
        description:
            "12-16 weeks hands on experience in Software Industries.",
        icon: Briefcase
    },
    {
        id: 28,
        title: "Integrated Design Project I",
        description:
            "This course simulates a real world integrated design environment through a capstone project (CP). Considering current industry requirement, this course particularly aims at complex engineering problem solving, requirement specification, problem analysis and modern tool usage. Based on the knowledge of previous courses, students will be trained to develop professional practitioner guided applications as an essential part to meet the challenges especially in the era of Industry 4.0 in Bangladesh.",
        icon: Puzzle
    },
    {
        id: 29,
        title: "Integrated Design Project II",
        description:
            "This course will enable students to undertake a \"design, build and test\" exercise to enhance their skills in product reengineering and improve their understanding of the project implementation phase. In addition to the engagement in life-long learning in the broadest context of technological change, students will be able to gather sustainable experience on individual and teamwork along with project management and finance.",
        icon: Puzzle
    },
    {
        id: 30,
        title: "Capstone Project/Thesis",
        description:
            "Capstone Project/Thesis",
        icon: GraduationCap
    }
];


// Example usage and data:
export const projectIdeas = [
    {
        title: "Smart Home Automation System",
        description: "Develop a system to control home appliances remotely using a mobile app and IoT devices.",
        tags: ["IoT", "Mobile App", "Backend", "Cloud"],
        difficulty: "Hard",
    },
    {
        title: "AI-Powered Chatbot for Customer Support",
        description: "Build a chatbot that can answer customer queries and provide support using natural language processing.",
        tags: ["AI", "NLP", "Chatbot", "Machine Learning"],
        difficulty: "Medium",
    },
    {
        title: "E-commerce Platform with Personalized Recommendations",
        description: "Create an e-commerce platform that offers personalized product recommendations based on user browsing history.",
        tags: ["Web Development", "E-commerce", "Machine Learning", "Database"],
        difficulty: "Hard",
    },
    {
        title: "Real-time Traffic Monitoring System",
        description: "Develop a system to monitor traffic flow in real-time using sensors and provide traffic updates to users.",
        tags: ["IoT", "Data Analytics", "Web Development", "Mapping"],
        difficulty: "Hard",
    },
    {
        title: "Plant Disease Detection App",
        description: "Build a mobile app that can detect plant diseases using image recognition.",
        tags: ["Mobile App", "Image Processing", "Machine Learning", "AI"],
        difficulty: "Medium",
    },
    {
        title: "Personalized Music Recommendation System",
        description: "Develop a system that recommends music to users based on their listening habits and preferences.",
        tags: ["Machine Learning", "Data Analytics", "Music", "API"],
        difficulty: "Medium",
    },
    {
        title: "Online Code Editor with Collaboration Features",
        description: "Create an online code editor that allows multiple users to collaborate on code in real-time.",
        tags: ["Web Development", "Collaboration", "Code Editor", "Real-time"],
        difficulty: "Medium",
    },
    {
        title: "Sentiment Analysis of Social Media Posts",
        description: "Build a system to analyze the sentiment of social media posts related to a specific topic.",
        tags: ["NLP", "Data Mining", "Social Media", "Machine Learning"],
        difficulty: "Medium",
    },
    {
        title: "Library Management System",
        description: "Develop a system to manage books, members, and transactions in a library.",
        tags: ["Web Development", "Database", "Management System"],
        difficulty: "Easy",
    },
    {
        title: "Simple To-Do List App",
        description: "Create a simple to-do list app to manage tasks.",
        tags: ["Mobile App", "Basic Programming"],
        difficulty: "Easy",
    },
];

// Pricing Options
export const pricingOptions = [
    {
        title: "Free",
        price: "$0",
        features: [
            "Access to Basic Projects",
            "Limited Filtering Options",
            "Community Support",
        ],
    },
    {
        title: "Pro",
        price: "$5",
        features: [
            "Access to All Projects",
            "Advanced Filtering",
            "Priority Support",
        ],
    },
    {
        title: "Enterprise",
        price: "$20",
        features: [
            "Unlimited Access",
            "Custom Project Requests",
            "Dedicated Mentorship",
        ],
    },
];

// Resource Links
export const resourcesLinks = [
    { href: "#", text: "Getting Started Guide" },
    { href: "#", text: "Project Submission Guidelines" },
    { href: "#", text: "FAQs" },
    { href: "#", text: "Community Forum" },
    { href: "#", text: "Contact Us" },
];

// Platform Links
export const platformLinks = [
    { href: "#", text: "Features Overview" },
    { href: "#", text: "Supported Courses" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Download Resources" },
    { href: "#", text: "Release Notes" },
];

// Community Links
export const communityLinks = [
    { href: "#", text: "Join Our Discord" },
    { href: "#", text: "Upcoming Events" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Collaboration Opportunities" },
    { href: "#", text: "Mentorship Program" },
];