// Dataset containing deep mapping definitions for four core technical paths
const roadmapDatabase = {
    "fullstack": {
        title: "Full Stack Developer",
        category: "Web Engineering",
        desc: "End-to-end web deployment path moving from interface structures to cloud architectures.",
        semesters: {
            1: {
                tech: "Semantic Interfaces & Templating Engines",
                desc: "Master layout rules, browser compilation contexts, and node-rendering patterns via Handlebars.",
                topics: ["HTML5 Document Structure", "CSS Grid & Flexbox", "HBS Variable Injection", "Partials & Layout Isolation"],
                resources: [
                    { type: "Documentation", title: "MDN Web Docs - HTML/CSS", url: "#" },
                    { type: "Video Tutorial", title: "Handlebars Engine Fundamentals", url: "#" }
                ],
                project: {
                    title: "Dynamic Server-Rendered Portfolio",
                    desc: "An isolated portfolio ecosystem served via Node Express, using reusable HBS layout wrappers.",
                    git: "https://github.com/example/hbs-portfolio-boilerplate"
                }
            },
            2: {
                tech: "Advanced Client-Side Scripting (JS)",
                desc: "Dive deep into execution context, event loops, call stack pipelines, and asynchronous DOM manipulation structures.",
                topics: ["ES6 Scope & Closures", "Asynchronous Event Loop", "Fetch API / Axios Core", "Prototypal Inheritance Structures"],
                resources: [
                    { type: "Book Reference", title: "You Don't Know JS Yet", url: "#" },
                    { type: "Interactive Practice", title: "JavaScript.info Advanced", url: "#" }
                ],
                project: {
                    title: "Real-time Async Task Workspace",
                    desc: "Client-side state application handling asynchronous persistence streams without external frameworks.",
                    git: "https://github.com/example/vanilla-async-dashboard"
                }
            },
            3: {
                tech: "Server Frameworks (Node.js & Express)",
                desc: "Process pipelines, REST architectures, middle-tier interception layers, and routing management ecosystems.",
                topics: ["Node.js Event-driven Architecture", "Express Router Mechanics", "Custom Middleware Layers", "CORS & Security Controls"],
                resources: [
                    { type: "Course Integration", title: "Node.js Design Patterns", url: "#" },
                    { type: "Reference Guide", title: "Express Production Checklists", url: "#" }
                ],
                project: {
                    title: "Secure Enterprise REST Engine",
                    desc: "Strictly isolated API handling resource processing with robust input validation and route protection.",
                    git: "https://github.com/example/express-api-boilerplate"
                }
            },
            4: {
                tech: "Database Systems & Layer Emulation (Mongo / SQL)",
                desc: "Relational normalization principles mapped alongside highly scalable document store aggregation structures.",
                topics: ["ACID vs BASE Models", "Mongoose Aggregation Pipelines", "PostgreSQL Index Optimizations", "ORM/ODM Data Modeling"],
                resources: [
                    { type: "Interactive Lab", title: "MongoDB University Paths", url: "#" },
                    { type: "Documentation", title: "SQL Indexing Strategies", url: "#" }
                ],
                project: {
                    title: "Data Agnostic Storehouse Engine",
                    desc: "A backend service featuring swappable storage adapters for both Postgres and MongoDB processing layers.",
                    git: "https://github.com/example/dual-db-layer"
                }
            },
            5: {
                tech: "Reactive View Architecture & Sockets (React / Socket.io)",
                desc: "Component virtualization engines, rendering reconciliations, state dispatch systems, and bi-directional persistent state tunnels.",
                topics: ["React Virtual DOM Diffing", "Custom Hook State Pipes", "WebSocket Handshake Protocols", "Event-Driven Client Syncing"],
                resources: [
                    { type: "Core Reference", title: "React Dev Documentation Rooms", url: "#" },
                    { type: "Guide Channel", title: "Socket.io Architecture Specs", url: "#" }
                ],
                project: {
                    title: "Distributed Interactive Collaborative Workspace",
                    desc: "Real-time synced multi-user workspace running under localized state machines and instant transport pipelines.",
                    git: "https://github.com/example/react-socket-canvas"
                }
            },
            6: {
                tech: "System Architecture, Security & Production Delivery",
                desc: "Container isolation networks, caching clusters, secure transport, and automated configuration workflows.",
                topics: ["Docker Container Isolation", "Redis In-Memory Key Clusters", "JWT Validation State Strategies", "CI/CD Deployment Pipelines"],
                resources: [
                    { type: "Handbook", title: "Docker Containerization Guide", url: "#" },
                    { type: "Framework Docs", title: "Production Security Baseline Requirements", url: "#" }
                ],
                project: {
                    title: "Scalable Containerized Web Ecosystem",
                    desc: "Complete multi-container production configuration containing Redis caching, reverse proxies, and automated delivery configs.",
                    git: "https://github.com/example/production-deploy-spec"
                }
            }
        }
    },
    "ai-ml": {
        title: "AI & Machine Learning Engineer",
        category: "Data Intelligence",
        desc: "Mathematical foundations progressing to deep model tracking architectures.",
        semesters: {
            1: {
                tech: "Mathematical Foundations & Clean Data Pipelines",
                desc: "Linear transformations, tensor mathematics, algorithmic vectorizations, and structural analysis patterns.",
                topics: ["Linear Algebra & Matrices", "Calculus Partial Derivatives", "NumPy Matrix Math Vectorization", "Pandas Structural Clean Operations"],
                resources: [
                    { type: "Course Material", title: "3Blue1Brown Linear Algebra Series", url: "#" },
                    { type: "Documentation", title: "Pandas Optimization Manual", url: "#" }
                ],
                project: {
                    title: "Algorithmic Vector Processing Toolkit",
                    desc: "A data pipeline processing tool executing multi-dimensional calculations entirely via vectorized matrix operations.",
                    git: "https://github.com/example/vectorized-data-pipeline"
                }
            },
            2: {
                tech: "Classical Statistical Learning Models",
                desc: "Supervised and unsupervised models running over statistical distribution matrices.",
                topics: ["Linear/Logistic Regression", "Support Vector Machines (SVM)", "Random Forest Ensembles", "K-Means Feature Cluster Processing"],
                resources: [
                    { type: "Textbook Reference", title: "Introduction to Statistical Learning (ISLR)", url: "#" },
                    { type: "Interactive Room", title: "Scikit-Learn Architecture Documentation", url: "#" }
                ],
                project: {
                    title: "Statistical Feature Classification Engine",
                    desc: "A localized prediction engine using ensemble learning models with hyperparameter validation loops.",
                    git: "https://github.com/example/scikit-learning-engine"
                }
            },
            3: {
                tech: "Deep Neural Layer Topologies",
                desc: "Backpropagation execution loops, gradient monitoring frameworks, and feedforward functional structures.",
                topics: ["Multilayer Perceptron (MLP) Mechanics", "Gradient Descent Optimization Modes", "Loss Computation Optimization", "TensorFlow/PyTorch Tensors"],
                resources: [
                    { type: "Course Video", title: "Karpathy: Neural Networks Zero to Hero", url: "#" },
                    { type: "Official Docs", title: "PyTorch Tensor Internals", url: "#" }
                ],
                project: {
                    title: "Neural Network Engine from Scratch",
                    desc: "A raw matrix implementation of forward and backward passes without third-party learning libraries.",
                    git: "https://github.com/example/pure-numpy-neural-net"
                }
            },
            4: {
                tech: "Computer Vision & Sequence Processing",
                desc: "Feature extraction layers, localized kernel matrix convolutions, and cyclical state processing mechanics.",
                topics: ["Convolutional Layers (CNN)", "Pooling Matrix Kernels", "Recurrent Networks (RNN)", "Long Short-Term Memory (LSTM) Blocks"],
                resources: [
                    { type: "Lecture Path", title: "Stanford CS231n: Computer Vision", url: "#" },
                    { type: "Guide Room", title: "PyTorch Vision Model Blueprints", url: "#" }
                ],
                project: {
                    title: "Spatial Image Diagnostics Processor",
                    desc: "A CNN classification pipeline optimized for feature detection using advanced data augmentation strategies.",
                    git: "https://github.com/example/spatial-cv-processor"
                }
            },
            5: {
                tech: "Modern Transformer Systems & Foundational Models",
                desc: "Multi-head attention mechanisms, vector token embeddings, positional encodings, and modern large-scale system fine-tuning.",
                topics: ["Attention Mechanism Topologies", "Encoder-Decoder Frameworks", "Parameter-Efficient Fine-Tuning (PEFT)", "Vector Embeddings Context Routing"],
                resources: [
                    { type: "Research Paper", title: "Attention Is All You Need", url: "#" },
                    { type: "Platform Docs", title: "Hugging Face Model Hub Integration", url: "#" }
                ],
                project: {
                    title: "Domain-Isolated Context Extraction Pipeline",
                    desc: "A downstream fine-tuned text processing pipeline utilizing optimized vector embeddings and quantization techniques.",
                    git: "https://github.com/example/transformer-tuning-pipeline"
                }
            },
            6: {
                tech: "MLOps & Model Lifecycle Orchestration",
                desc: "Model tracking pipelines, continuous integration, versioned training data sets, and high-performance inference APIs.",
                topics: ["Model Registry Tracking (MLflow)", "Data Version Control Systems (DVC)", "High-Performance Inference Engines (Triton)", "API Container Deployment Patterns"],
                resources: [
                    { type: "Guidebook", title: "The MLOps Roadmap Specs", url: "#" },
                    { type: "Documentation", title: "Inference Performance Benchmarking", url: "#" }
                ],
                project: {
                    title: "Production ML Training and Inference Pipeline",
                    desc: "A completely containerized model orchestration pipeline managing automated training validation and high-throughput inference endpoints.",
                    git: "https://github.com/example/mlops-production-pipeline"
                }
            }
        }
    },
    "android-dev": {
        title: "Mobile Application Engineer (Android)",
        category: "Mobile Systems",
        desc: "Native development paths following Google ecosystem practices.",
        semesters: {
            1: {
                tech: "Modern Native Architecture Foundation",
                desc: "Object-oriented paradigms, asynchronous type configurations, and basic interface controls using Kotlin.",
                topics: ["Kotlin Type Systems & Null Safety", "Object-Oriented Idioms", "Functional Extensions", "Collection Stream Operations"],
                resources: [
                    { type: "Documentation", title: "Kotlin Official Language Guide", url: "#" },
                    { type: "Interactive Route", title: "Android Kotlin Basics Tracks", url: "#" }
                ],
                project: {
                    title: "Type-Safe Core Configuration Kit",
                    desc: "A native utility engine implementing structural data processing using strict Kotlin type systems.",
                    git: "https://github.com/example/kotlin-type-kit"
                }
            },
            2: {
                tech: "Declarative Component Layout UI",
                desc: "Modern reactive layout composition, functional UI design states, and system token implementations.",
                topics: ["Jetpack Compose Component Tree", "State Hoisting Management Patterns", "Modifier Systems Layout Physics", "Material Design Token Systems"],
                resources: [
                    { type: "Official Pathway", title: "Jetpack Compose Pathways Guide", url: "#" },
                    { type: "Video Masterclass", title: "Advanced Mobile Component Design", url: "#" }
                ],
                project: {
                    title: "Declarative Fluid Control Dashboard",
                    desc: "A fully native interface showcasing adaptive dynamic elements and unified theme styling using Jetpack Compose.",
                    git: "https://github.com/example/compose-dashboard-ui"
                }
            },
            3: {
                tech: "Lifecycle Management & Component Pipelines",
                desc: "Structural state decoupling, processing persistence systems, and structured asynchronous concurrency handlers.",
                topics: ["ViewModel State Containers", "Room Database Local Persistence", "Coroutines Async Execution Contexts", "StateFlow/SharedFlow Reactive Data Streams"],
                resources: [
                    { type: "Architecture Guide", title: "Guide to Android App Architecture", url: "#" },
                    { type: "Documentation", title: "Kotlin Coroutines Under the Hood", url: "#" }
                ],
                project: {
                    title: "Local Workspace Offline-First Platform",
                    desc: "A mobile tracking application featuring SQLite lifecycle persistence and asynchronous flow streams.",
                    git: "https://github.com/example/offline-first-room-app"
                }
            },
            4: {
                tech: "Network Integration & Dependency Resolution",
                desc: "Type-safe endpoint configuration pipelines, API protocol mapping, and automated container lifecycle registries.",
                topics: ["Retrofit API Client Architectures", "Serialization Data Conversion Layers", "Hilt/Dagger Dependency Injection Modules", "Repository Pattern Decoupling Models"],
                resources: [
                    { type: "Reference", title: "Dependency Injection Blueprint Guides", url: "#" },
                    { type: "Guide Room", title: "Retrofit Network Configuration Specs", url: "#" }
                ],
                project: {
                    title: "Decoupled Modern Data Consumer",
                    desc: "An API-driven application utilizing comprehensive dependency injection modules and automated data synchronization layers.",
                    git: "https://github.com/example/hilt-retrofit-consumer"
                }
            },
            5: {
                tech: "Background Mechanics & System Interception",
                desc: "Persistent background schedules, system broadcast intercept models, and high-priority OS notification channels.",
                topics: ["WorkManager Scheduled Task Execution", "Broadcast Receivers System Handlers", "Foreground Process Service Containers", "Push Notification Routing Infrastructures"],
                resources: [
                    { type: "Developer Portal", title: "Android Background Tasks Optimization", url: "#" },
                    { type: "Documentation", title: "WorkManager Lifecycle Strategies", url: "#" }
                ],
                project: {
                    title: "Reliable Remote Background Sync Engine",
                    desc: "An background scheduling service engineered to handle automated background data syncs across varied network states.",
                    git: "https://github.com/example/workmanager-sync-engine"
                }
            },
            6: {
                tech: "Enterprise Optimization & Automated App Delivery",
                desc: "Memory management profiling, memory leak monitoring, unit and UI assertion tests, and continuous integration pipeline automation.",
                topics: ["Android Profiler Performance Trackers", "LeakCanary Memory Diagnostics", "Espresso UI Automation Test Systems", "Play Store Automated Bundle Deployment"],
                resources: [
                    { type: "Diagnostics Portal", title: "Android Studio Profiler Playbooks", url: "#" },
                    { type: "Reference Manual", title: "Automated Testing Baseline Requirements", url: "#" }
                ],
                project: {
                    title: "Production-Grade Clean Mobile Framework",
                    desc: "A base template engineered with multi-module feature layering, continuous integration workflows, and complete unit testing coverage.",
                    git: "https://github.com/example/clean-android-template"
                }
            }
        }
    },
    "cybersecurity": {
        title: "Cybersecurity Analyst & Pentester",
        category: "Infrastructure Security",
        desc: "Defensive baseline structures scaling to advanced vulnerability exploitation and threat monitoring frameworks.",
        semesters: {
            1: {
                tech: "Networking Architecture & OS Security Hardening",
                desc: "Deep inspection of communication routing, packet headers, memory containment, and Unix/Windows access security.",
                topics: ["TCP/IP Protocol Suite Diagnostics", "Subnet Masking & Route Tables", "Linux File System Access Controls", "Windows Registry & Active Directory Basics"],
                resources: [
                    { type: "Course Material", title: "Professor Messer CompTIA Network+", url: "#" },
                    { type: "Interactive Practice", title: "Linux Journey Hardening Tracks", url: "#" }
                ],
                project: {
                    title: "Automated OS Hardening Script Engine",
                    desc: "A shell scripting library that reviews Linux system configurations and instantly applies access authorization policies.",
                    git: "https://github.com/example/linux-hardening-tool"
                }
            },
            2: {
                tech: "Network Analysis & Vulnerability Identification",
                desc: "Active traffic inspection, packet capture analysis, network fingerprinting, and surface area evaluations.",
                topics: ["Wireshark Packet Decryption Analysis", "Nmap Advanced Scanning Patterns", "Vulnerability Assessment Suites (Nessus)", "OSINT Reconnaissance Structures"],
                resources: [
                    { type: "Lab Guide", title: "Wireshark Network Analysis Handbooks", url: "#" },
                    { type: "Platform Sandbox", title: "TryHackMe Fundamental Security Rooms", url: "#" }
                ],
                project: {
                    title: "Network Perimeter Reconnaissance Pipeline",
                    desc: "An automation framework that wraps around Nmap engines to isolate open service ports and alert on anomalies.",
                    git: "https://github.com/example/recon-automation-hub"
                }
            },
            3: {
                tech: "Web Application Assessment & OWASP Exploitation",
                desc: "Identifying and mitigating web application vulnerabilities through proxy analysis and injection techniques.",
                topics: ["SQL Injection Execution Channels", "Cross-Site Scripting (XSS) Payloads", "Burp Suite Proxy Request Interception", "Broken Object-Level Authorization Analysis"],
                resources: [
                    { type: "Academy", title: "PortSwigger Web Security Academy", url: "#" },
                    { type: "Cheat Sheet", title: "OWASP Top 10 Threat Identifications", url: "#" }
                ],
                project: {
                    title: "Vulnerability Auditing Execution Suite",
                    desc: "An interactive validation environment configured to test and verify code patches against authorization flaws.",
                    git: "https://github.com/example/web-vulnerability-auditor"
                }
            },
            4: {
                tech: "Defensive Operations & SIEM Threat Monitoring",
                desc: "Enterprise logging infrastructures, security event aggregation, anomaly tracking, and defensive monitoring pipelines.",
                topics: ["Log Aggregation Engine Deployments (ELK Stack)", "SIEM Rule Configuration Patterns", "YARA Rule Structural Definitions", "Incident Response Investigation Procedures"],
                resources: [
                    { type: "Documentation", title: "Elastic Security Analytics Blueprints", url: "#" },
                    { type: "Lab Track", title: "Blue Team Labs Online Scenarios", url: "#" }
                ],
                project: {
                    title: "Centralized Threat Monitoring Dashboard",
                    desc: "An automated logging pipeline that parses auth events, flags anomalies, and generates real-time security alerts.",
                    git: "https://github.com/example/siem-threat-dashboard"
                }
            },
            5: {
                tech: "System Exploitation & Privilege Escalation Models",
                desc: "Exploit execution workflows, memory space vulnerabilities, payload generation, and vertical privilege traversal strategies.",
                topics: ["Metasploit Framework Implementations", "Buffer Overflow Structural Exploitation", "Linux SUID Execution Exploits", "Windows UAC Bypass Implementations"],
                resources: [
                    { type: "Training Pathway", title: "OffSec Penetration Testing Manuals", url: "#" },
                    { type: "Practice Platform", title: "Hack The Box Machine Laboratories", url: "#" }
                ],
                project: {
                    title: "Monitored Local Buffer Overflow Environment",
                    desc: "A highly isolated laboratory workspace engineered to safely demonstrate memory space overflows and mitigation code patches.",
                    git: "https://github.com/example/buffer-overflow-lab"
                }
            },
            6: {
                tech: "Enterprise Architecture & Cryptography Infrastructure",
                desc: "Designing secure zero-trust network topologies, data encryption implementations, and key management systems.",
                topics: ["Zero-Trust Network Architectural Layouts", "Public Key Infrastructures (PKI)", "AES/RSA Cryptographic Execution Paths", "Compliance Framework Mapping (ISO 27001)"],
                resources: [
                    { type: "Standard Docs", title: "NIST Cybersecurity Framework Specifications", url: "#" },
                    { type: "Architecture Guide", title: "AWS Security Reference Architectures", url: "#" }
                ],
                project: {
                    title: "Zero-Trust Local Network Specification Blueprint",
                    desc: "An infrastructure-as-code repository configuring an isolated enterprise environment with unified access control constraints.",
                    git: "https://github.com/example/zero-trust-iac-spec"
                }
            }
        }
    }
};

// Placeholder records to build out the requested selection interface depth
const optionsPlaceholderList = [
    { id: "devops", title: "DevOps & Cloud Engineer", cat: "Infrastructure" },
    { id: "data-eng", title: "Data Platform Engineer", cat: "Data Intelligence" },
    { id: "ios-dev", title: "iOS Native App Engineer", cat: "Mobile Systems" },
    { id: "blockchain", title: "Blockchain Architect", cat: "Distributed Systems" },
    { id: "game-dev", title: "Game Systems Programmer", cat: "Graphics Engine" },
    { id: "embedded", title: "Embedded Firmware Engineer", cat: "Hardware" },
    { id: "qa-auto", title: "QA Test Automation Lead", cat: "Systems Auditing" },
    { id: "ui-ux", title: "Product Designer (UI/UX)", cat: "Design" },
    { id: "product-mgmt", title: "Technical Product Manager", cat: "Management" },
    { id: "cloud-sec", title: "Cloud Security Specialist", cat: "Infrastructure Security" },
    { id: "bi-analyst", title: "Business Intelligence Lead", cat: "Analytics" },
    { id: "ar-vr", title: "Spatial Computing Engineer (AR/VR)", cat: "Graphics Engine" },
    { id: "site-reliability", title: "Site Reliability Engineer (SRE)", cat: "Infrastructure" },
    { id: "data-science", title: "Data Scientist", cat: "Analytics" }
];

let activeDomainKey = null;
let activeSemesterNumber = 1;

document.addEventListener("DOMContentLoaded", () => {
    initializeSidebar();
    registerEventHandlers();
});

// Populates sidebar list with data-driven records and placeholders
function initializeSidebar() {
    const listElement = document.getElementById("domainList");
    listElement.innerHTML = "";

    // Load rich functional tracks first
    Object.keys(roadmapDatabase).forEach(key => {
        const item = roadmapDatabase[key];
        const button = createDomainListItem(key, item.title, false);
        listElement.appendChild(button);
    });

    // Append standard tracking placeholders
    optionsPlaceholderList.forEach(item => {
        const button = createDomainListItem(item.id, item.title, true);
        listElement.appendChild(button);
    });
}

function createDomainListItem(key, title, isPlaceholder) {
    const button = document.createElement("button");
    button.classList.add("domain-item");
    if (isPlaceholder) button.classList.add("placeholder");
    button.setAttribute("data-key", key);
    button.innerHTML = isPlaceholder ? `🔒 ${title} <small style='display:block;font-size:10px;opacity:0.7'>Coming Soon</small>` : `⚡ ${title}`;
    
    button.addEventListener("click", () => handleDomainSelection(key, isPlaceholder));
    return button;
}

// Global UI handler for user input selections
function handleDomainSelection(key, isPlaceholder) {
    if (isPlaceholder) {
        alert("This track is currently locked. The system placeholder is visible to demonstrate responsive front-end scaling without altering core backend architectures.");
        return;
    }

    // Toggle selected button visual states
    document.querySelectorAll(".domain-item").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[data-key="${key}"]`).classList.add("active");

    activeDomainKey = key;
    activeSemesterNumber = 1; // Default viewport focus back to initial stage

    document.getElementById("emptyState").classList.add("hidden");
    document.getElementById("roadmapViewer").classList.remove("hidden");

    renderRoadmapStructure();
}

function registerEventHandlers() {
    // Tab event delegation
    document.getElementById("semesterTabs").addEventListener("click", (e) => {
        if (e.target.classList.contains("sem-tab")) {
            document.querySelectorAll(".sem-tab").forEach(tab => tab.classList.remove("active"));
            e.target.classList.add("active");
            activeSemesterNumber = parseInt(e.target.getAttribute("data-sem"));
            renderSemesterContent();
        }
    });

    // Client side searching algorithm matching dataset string parameters
    document.getElementById("domainSearch").addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".domain-item").forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
}

// Master interface updater
function renderRoadmapStructure() {
    const data = roadmapDatabase[activeDomainKey];
    if (!data) return;

    document.getElementById("selectedDomainTitle").textContent = data.title;
    document.getElementById("selectedDomainDesc").textContent = data.desc;
    document.getElementById("domainCategory").textContent = data.category;

    // Reset dynamic semester active trigger view state
    document.querySelectorAll(".sem-tab").forEach(tab => {
        tab.classList.remove("active");
        if (tab.getAttribute("data-sem") == "1") tab.classList.add("active");
    });

    renderSemesterContent();
}

// Component constructor driving the dynamic movement animations via layout updates
function renderSemesterContent() {
    const panel = document.getElementById("semesterPanel");
    const semData = roadmapDatabase[activeDomainKey].semesters[activeSemesterNumber];

    // Trigger visual block animation reset
    panel.style.animation = 'none';
    panel.offsetHeight; // Force DOM trigger re-flow execution layout calculation
    panel.style.animation = null;

    if (!semData) {
        panel.innerHTML = `<div style="padding:40px; text-align:center; color:var(--text-muted);">Detailed track map for Semester ${activeSemesterNumber} still compiling.</div>`;
        return;
    }

    let tagsHTML = semData.topics.map(t => `<span class="topic-tag">${t}</span>`).join("");
    let resourcesHTML = semData.resources.map(r => `
        <a href="${r.url}" class="resource-card">
            <span class="res-type">${r.type}</span>
            <span class="res-title">${r.title}</span>
        </a>
    `).join("");

    panel.innerHTML = `
        <div class="tech-grid">
            <div class="tech-block">
                <h2><span>🎯</span> ${semData.tech}</h2>
                <p class="tech-desc">${semData.desc}</p>
                
                <div class="section-title">Core Knowledge Areas & Deliverables</div>
                <div class="topic-tags">
                    ${tagsHTML}
                </div>

                <div class="section-title">Handpicked Learning Repos & Docs</div>
                <div class="resource-links">
                    ${resourcesHTML}
                </div>

                <div class="project-card">
                    <h4><span>🛠️</span> Semester Capstone Build: ${semData.project.title}</h4>
                    <p>${semData.project.desc}</p>
                    <a href="${semData.project.git}" target="_blank" class="git-link">
                        <svg style="width:16px; height:16px; fill:currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        Explore Project Blueprint
                    </a>
                </div>
            </div>
        </div>
    `;
}