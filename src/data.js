// Mock data - replace with actual data when provided
export const mockData = {
    profile: {
        name: "CyberSec Expert",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
        typewriterSentences: [
            "Passionate cybersecurity professional with expertise in penetration testing.",
            "Dedicated to protecting digital assets and ensuring robust security postures.",
            "Specialized in web application security and advanced threat analysis."
        ]
    },
    
    about: {
        whoami: [
            "$ whoami",
            "# Cybersecurity Enthusiast & Ethical Hacker",
            "# Penetration Tester | Python Developer | Security Researcher",
            "# Passionate about securing the digital world one vulnerability at a time"
        ]
    },
    
    skills: {
        languages: [
            { name: "Python", level: 90 },
            { name: "Bash", level: 85 },
            { name: "SQL", level: 80 },
            { name: "English", level: 95 },
            { name: "Telugu", level: 100 },
            { name: "Hindi", level: 85 }
        ],
        tools: [
            { name: "Burp Suite", level: 95 },
            { name: "Metasploit", level: 85 },
            { name: "Nmap", level: 90 },
            { name: "Wireshark", level: 80 },
            { name: "OWASP ZAP", level: 85 },
            { name: "Kali Linux", level: 95 }
        ],
        domains: [
            { name: "Linux", level: 90 },
            { name: "Web App Pentesting", level: 95 },
            { name: "Network Security", level: 85 },
            { name: "Vulnerability Assessment", level: 90 }
        ],
        interestedRoles: [
            "Web App Pentester",
            "Python Programmer",
            "Developer",
            "Software Engineer (Python)",
            "Security Consultant",
            "Ethical Hacker"
        ]
    },
    
    experience: [
        {
            Role: "Web App Pentester",
            Company: "CyberHawk Solutions",
            JoiningDate: "2023-06",
            EndDate: "Present",
            StartDate: "June 2023",
            Duration: "1 year 6 months",
            Description: "Performed manual and automated web application security assessments, identified critical vulnerabilities, and provided comprehensive security reports. Specialized in OWASP Top 10 vulnerabilities and advanced attack vectors."
        },
        {
            Role: "Junior Security Analyst",
            Company: "SecureNet Technologies",
            JoiningDate: "2022-01",
            EndDate: "2023-05",
            StartDate: "January 2022",
            Duration: "1 year 5 months",
            Description: "Conducted vulnerability assessments, monitored security incidents, and assisted in incident response procedures. Gained hands-on experience with various security tools and methodologies."
        },
        {
            Role: "Python Developer Intern",
            Company: "TechCorp Solutions",
            JoiningDate: "2021-06",
            EndDate: "2021-12",
            StartDate: "June 2021",
            Duration: "6 months",
            Description: "Developed security automation scripts, created vulnerability scanners, and worked on various Python-based security tools. Contributed to open-source security projects."
        }
    ],
    
    projects: [
        {
            ProjectPic: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
            ProjectName: "Sixth Eye Recon Tool",
            GithubLink: "https://github.com/username/sixth-eye-recon",
            description: "A comprehensive reconnaissance tool for cybersecurity professionals to gather intelligence and perform automated OSINT operations.",
            tech: ["Python", "OSINT", "Automation", "Web Scraping"]
        },
        {
            ProjectPic: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
            ProjectName: "Web Vulnerability Scanner",
            GithubLink: "https://github.com/username/web-vuln-scanner",
            description: "Advanced web application vulnerability scanner that identifies security flaws and generates detailed reports for penetration testing.",
            tech: ["Python", "Security", "Web Testing", "OWASP"]
        },
        {
            ProjectPic: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
            ProjectName: "Network Security Monitor",
            GithubLink: "https://github.com/username/network-security-monitor",
            description: "Real-time network monitoring system that detects suspicious activities and potential security threats in network traffic.",
            tech: ["Python", "Network Security", "Monitoring", "Intrusion Detection"]
        },
        {
            ProjectPic: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
            ProjectName: "Phishing Detection System",
            GithubLink: "https://github.com/username/phishing-detection",
            description: "Machine learning-based system for detecting and preventing phishing attacks through email analysis and URL classification.",
            tech: ["Python", "Machine Learning", "Email Security", "Classification"]
        }
    ],
    
    certifications: [
        {
            CertificatePic: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
            CertificatePdf: "https://example.com/cert1.pdf",
            CertificateName: "Python for Security",
            IssuedCompany: "Coursera",
            Category: "Skill Certificate"
        },
        {
            CertificatePic: "https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=600",
            CertificatePdf: "https://example.com/cert2.pdf",
            CertificateName: "Ethical Hacking Fundamentals",
            IssuedCompany: "EC-Council",
            Category: "Skill Certificate"
        },
        {
            CertificatePic: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
            CertificatePdf: "https://example.com/cert3.pdf",
            CertificateName: "Cybersecurity Internship",
            IssuedCompany: "CyberHawk Solutions",
            Category: "Internship Certificate"
        },
        {
            CertificatePic: "https://images.pexels.com/photos/1181697/pexels-photo-1181697.jpeg?auto=compress&cs=tinysrgb&w=600",
            CertificatePdf: "https://example.com/cert4.pdf",
            CertificateName: "Web Application Security",
            IssuedCompany: "OWASP",
            Category: "Skill Certificate"
        }
    ]
};

// Configuration for Telegram bot (replace with actual values)
export const telegramConfig = {
    botToken: "7610301725:AAEyiyhRziyY_ughm3UQXq1ajK1E8GKNt58",
    chatId: "1147529081"
};

// Export for use in React components
export { mockData, telegramConfig };

const { mockData, telegramConfig } = data;