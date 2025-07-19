import React, { useState, useEffect } from 'react';
import './App.css';
// Commented out until framer-motion is installed
import { motion } from "framer-motion";
import AnimatedBackground from './components/AnimatedBackground';
// Commented out unused import until needed
// import CertificatesSection from './components/CertificatesSection';

// Mock data - replace with actual data when provided
const mockData = {
  profile: {
    name: "Tansique Dasari",
    image: "assets/profile.jpg",
    typewriterSentences: [
      "Penetration Tester",
      "Python Developer",
      "Security Researcher",
      "Cybersecurity Enthusiast",
      "Ethical Hacker",
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
    ProgrammingLanguages: [
      { name: "Python", level: 80 },
      { name: "Bash", level: 65 },
      { name: "SQL", level: 50 },
    ],
    languages: [
      { name: "English", level: 85 },
      { name: "Telugu", level: 100 },
      { name: "Hindi", level: 85 }
    ],
    tools: [
      { name: "Burp Suite", level: 95 },
      { name: "Metasploit", level: 85 },
      { name: "Nmap", level: 90 },
      { name: "Wireshark", level: 80 },
      { name: "OWASP ZAP", level: 85 },
    ],
    domains: [
      { name: "Linux", level: 90 },
      { name: "Web App Pentesting", level: 75 },
      { name: "Network Security", level: 55 },
      { name: "Vulnerability Assessment", level: 70 },
      { name: "Python Developer", level: 80 }
    ],
    interestedRoles: [
      "Web App Pentester",
      "Python Programmer",
      "Software Engineer (Python)",
      "Security Consultant",
      "Ethical Hacker"
    ]
  },
  
  experience: [
    {
    "Role": "Cybersecurity Intern",
    "Company": "Edu-versity",
    "StartDate": "2025-03",
    "EndDate": "2025-05",
    "Duration": "3 month",
    "Description": "Supported web application security evaluations and research activities."
  },
  {
    "Role": "Cybersecurity Analyst Intern",
    "Company": "Tata",
    "StartDate": "2025-01",
    "EndDate": "2025-01",
    "Duration": "1 month",
    "Description": "Hands-on exposure to enterprise-grade security frameworks and incident response."
  },
  {
    "Role": "Cybersecurity Intern",
    "Company": "MasterCard",
    "StartDate": "2025-01",
    "EndDate": "2025-01",
    "Duration": "1 month",
    "Description": "Participated in simulated threat detection and mitigation scenarios."
  },
  {
    "Role": "Shields Up: Cybersecurity Program Participant",
    "Company": "AIG",
    "StartDate": "2025-01",
    "EndDate": "2025-01",
    "Duration": "1 month",
    "Description": "Collaborated on rapid response exercises and policy assessments."
  },
  {
    "Role": "Cybersecurity Intern",
    "Company": "CodeAlpha",
    "StartDate": "2025-01",
    "EndDate": "2025-01",
    "Duration": "1 month",
    "Description": "Worked on network analysis scripts and packet sniffing tools."
  },
  {
    "Role": "Cybersecurity Intern",
    "Company": "REDUSERS",
    "StartDate": "2024-11",
    "EndDate": "2024-12",
    "Duration": "1 month",
    "Description": "Assisted in threat hunting and phishing simulation campaigns."
  },
  {
    "Role": "Cybersecurity Intern",
    "Company": "Campalin Innovations",
    "StartDate": "2024-08",
    "EndDate": "2024-09",
    "Duration": "2 month",
    "Description": "Developed Python scripts for endpoint hardening and log analysis."
  },
  {
    "Role": "Zero Trust Associate",
    "Company": "AICTE",
    "StartDate": "2024-04",
    "EndDate": "2024-06",
    "Duration": "2 month"
  },
  {
    "Role": "Google Android Developer Program",
    "Company": "AICTE",
    "StartDate": "2023-09",
    "EndDate": "2023-11",
    "Duration": "2 month"
  },
  {
    "Role": "Cyber Security Fundamentals (Palo Alto)",
    "Company": "AICTE",
    "StartDate": "2022-12",
    "EndDate": "2023-02",
    "Duration": "2 month"
  },
  ],
  
  projects: [
    {
      "ProjectPic": "assets/Project/SEGUI.png",
      "ProjectName": "Sixth Eye Recon Tool GUI",
      "GithubLink": "https://github.com/tansique-17/SixthEye-GUI"
    },
    {
      "ProjectPic": "assets/Project/SECLI.png",
      "ProjectName": "Sixth Eye Recon Tool CLI",
      "GithubLink": "https://github.com/tansique-17/SixthEye-CLI"
    },
    {
      "ProjectPic": "assets/Project/DorkForMe.png",
      "ProjectName": "DorkForMe",
      "GithubLink": "https://github.com/tansique-17/DorkForMe"
    },
    {
      "ProjectPic": "assets/Project/PortScanWeb.png",
      "ProjectName": "PortScannerWeb",
      "GithubLink": "https://github.com/tansique-17/PortScannerWeb"
    },
    {
      "ProjectPic": "assets/Project/DorkGen.png",
      "ProjectName": "DorkGen",
      "GithubLink": "https://github.com/tansique-17/DorkGen"
    },
    {
      "ProjectPic": "assets/Project/PortScan.png",
      "ProjectName": "PortScanner",
      "GithubLink": "https://github.com/tansique-17/Port-Scanner-GUI"
    },
    {
      "ProjectPic": "assets/Project/PassCheck.png",
      "ProjectName": "Password Strength Checker",
      "GithubLink": "https://github.com/tansique-17/Password-Checker"
    },
    {
      "ProjectPic": "assets/Project/PassGen.png",
      "ProjectName": "Password Generator",
      "GithubLink": "https://github.com/tansique-17/Password-Generator"
    },
    {
      "ProjectPic": "assets/Project/Image.png",
      "ProjectName": "Image Steganography",
      "GithubLink": "https://github.com/tansique-17/Image-Steganography"
    },
    {
      "ProjectPic": "assets/Project/CryptoTool.png",
      "ProjectName": "Crypto Tool",
      "GithubLink": "https://github.com/tansique-17/CryptoTool"
    },
    {
      "ProjectPic": "assets/Project/NetworkSniffer.png",
      "ProjectName": "Network Sniffer GUI",
      "GithubLink": "https://github.com/tansique-17/Network_Sniffer_GUI"
    }
  ],
  
  certifications: [
    {
      "CertificatePic": "assets/Certificates/Skill/CAP.png",
      "CertificatePdf": "assets/Certificates/Skill/CAP.pdf",
      "CertificateName": "Certified AppSec Practitioner",
      "IssuedCompany": "The Secops Group",
      "Category": "Skill Certificate"
    },
     {
      "CertificatePic": "assets/Certificates/Internship/mastercard.png",
      "CertificatePdf": "assets/Certificates/Internship/mastercard.pdf",
      "CertificateName": "Master Card - Cybersecurity Job Simulation",
      "IssuedCompany": "Forage",
      "Category": "Internship Certificate"
    },
     {
      "CertificatePic": "assets/Certificates/CTF/CTF.png",
      "CertificatePdf": "assets/Certificates/CTF/CTF.pdf",
      "CertificateName": "TheHackersMeetup CTF",
      "IssuedCompany": "TheHackersMeetup",
      "Category": "CTF Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Skill/CNSP.png",
      "CertificatePdf": "assets/Certificates/Skill/CNSP.pdf",
      "CertificateName": "Certified Network Security Practitioner",
      "IssuedCompany": "The Secops Group",
      "Category": "Skill Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Skill/ZTCA.png",
      "CertificatePdf": "assets/Certificates/Skill/ZTCA.pdf",
      "CertificateName": "Zero Trust Certified Associate",
      "IssuedCompany": "Zscaler",
      "Category": "Skill Certificate"
    },
   
    {
      "CertificatePic": "assets/Certificates/Internship/tcs.png",
      "CertificatePdf": "assets/Certificates/Internship/tcs.pdf",
      "CertificateName": "Tata - Cybersecurity Analyst Job Simulation",
      "IssuedCompany": "Forage",
      "Category": "Internship Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Internship/aig.png",
      "CertificatePdf": "assets/Certificates/Internship/aig.pdf",
      "CertificateName": "AIG - Cybersecurity Job Simulation",
      "IssuedCompany": "Forage",
      "Category": "Internship Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Internship/eduversity.png",
      "CertificatePdf": "assets/Certificates/Internship/eduversity.pdf",
      "CertificateName": "Cybersecurity Intern",
      "IssuedCompany": "Edu-Versity",
      "Category": "Internship Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Internship/theredusers.png",
      "CertificatePdf": "assets/Certificates/Internship/theredusers.pdf",
      "CertificateName": "Cyber Security Intern",
      "IssuedCompany": "The Red Users",
      "Category": "Internship Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Internship/campalin.png",
      "CertificatePdf": "assets/Certificates/Internship/campalin.pdf",
      "CertificateName": "Cyber Security Intern",
      "IssuedCompany": "Campalin Innovations",
      "Category": "Internship Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Internship/google.png",
      "CertificatePdf": "assets/Certificates/Internship/google.pdf",
      "CertificateName": "Google Androiid Developer Virtual Internship",
      "IssuedCompany": "AICTE",
      "Category": "Internship Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Internship/paloalto.png",
      "CertificatePdf": "assets/Certificates/Internship/paloalto.pdf",
      "CertificateName": "Palo Alto Networks - Cybersecurity Virtual Internship",
      "IssuedCompany": "AICTE",
      "Category": "Internship Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Internship/ztca.png",
      "CertificatePdf": "assets/Certificates/Internship/ztca.pdf",
      "CertificateName": "Zero Trust Certified Associate",
      "IssuedCompany": "AICTE",
      "Category": "Internship Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Internship/codealpha.png",
      "CertificatePdf": "assets/Certificates/Internship/codealpha.pdf",
      "CertificateName": "Cyber Security Intern",
      "IssuedCompany": "Code Alpha",
      "Category": "Internship Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Skill/python.png",
      "CertificatePdf": "assets/Certificates/Skill/hackerrank_python.pdf",
      "CertificateName": "Python Hacker Rank ",
      "IssuedCompany": "Hacker Rank",
      "Category": "Skill Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Skill/sql.png",
      "CertificatePdf": "assets/Certificates/Skill/hackerrank_sql.pdf",
      "CertificateName": "SQL Hacker Rank ",
      "IssuedCompany": "Hacker Rank",
      "Category": "Skill Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Skill/thmpre.png", 
      "CertificatePdf": "assets/Certificates/Skill/thmpre.pdf",
      "CertificateName": "Pre Security THM",
      "IssuedCompany": "TryHackMe",
      "Category": "Skill Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Skill/thmcyber101.png",   
      "CertificateName": "Cyber Security 101",
      "IssuedCompany": "TryHackMe",
      "Category": "Skill Certificate"
    },
    {
      "CertificatePic": "assets/Certificates/Skill/thmweb.png",
      "CertificatePdf": "assets/Certificates/Skill/thmweb.pdf",
      "CertificateName": "Web Fundamentals",
      "IssuedCompany": "TryHackMe",
      "Category": "Skill Certificate"
    },

  ]
};

// Configuration for Telegram bot (replace with actual values)
const telegramConfig = {
  botToken: "7606974982:AAFu7MLZbK2rA6UtWUarYw31OuXlI4wgxDQ",
  chatId: "1147529081"
};

interface TypewriterProps {
  sentences: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ sentences }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentSentence = sentences[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentSentence.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentSentence.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentSentence) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, sentences]);

  return (
    <span className="typewriter-text">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAnimating, setisAnimating] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [certFilter, setCertFilter] = useState<'all' | 'internship' | 'skill'| 'ctf'>('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'encrypting' | 'sending' | 'sent'>('idle');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('info');

  {/* 🌗 THEME TRANSITION OVERLAY */}
      <div id="theme-transition" className="theme-overlay"></div>



  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToastMessage(message);
    setToastType(type);
    setToastVisible(true);
    
    // Hide toast after 2 seconds
    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const filterCertificates = (category: string) => {
    setCertFilter(category as 'all' | 'internship' | 'skill' | 'ctf');
  };

  

const handleThemeToggle = () => {
  if (isAnimating) return;

  setisAnimating(true);

  const overlay = document.getElementById("theme-transition");
  if (overlay) {
    overlay.classList.add("active"); // Trigger the fade-in
  }

  setTimeout(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);

    // Fade-out overlay after theme change
    if (overlay) {
      overlay.classList.remove("active");
    }

    setisAnimating(false);
  }, 100); // Match this to your overlay animation duration
};


  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'assets/Tansique_resume.pdf';
    link.download = 'Tansique_Resume.pdf';
    link.click();
  };

  const sendTelegramMessage = async (data: any) => {
    const message = `
🚨 New Portfolio Message 🚨
👤 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone || 'Not provided'}
📝 Subject: ${data.subject}
🧾 Message: ${data.message}
    `;
    
    const telegramUrl = `https://api.telegram.org/bot${telegramConfig.botToken}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramConfig.chatId,
        text: message,
        parse_mode: 'HTML'
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    
    return response.json();
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState('encrypting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };

    try {
      // Encrypting state
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitState('sending');
      
      await sendTelegramMessage(data);
      setSubmitState('sent');
      
      // Show success toast
      showToast('Message sent successfully!', 'success');
      (e.target as HTMLFormElement).reset();
      
      // Reset button after 2 seconds
      setTimeout(() => {
        setSubmitState('idle');
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      console.error('Error sending message:', error);
      showToast('Error sending message. Please try again.', 'error');
      setSubmitState('idle');
      setIsSubmitting(false);
    }
  };

  const openCertificateModal = (cert: any) => {
    setSelectedCertificate(cert);
    setIsCertModalOpen(true);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
    setIsCertModalOpen(false);
  };

  const downloadCertificate = () => {
    if (selectedCertificate) {
      const link = document.createElement('a');
      link.href = selectedCertificate.CertificatePdf;
      link.download = `${selectedCertificate.CertificateName}.pdf`;
      link.click();
    }
  };

  const getSubmitButtonContent = () => {
    switch (submitState) {
      case 'encrypting':
        return (
          <>
            <i className="fas fa-lock"></i>
            Encrypting...
          </>
        );
      case 'sending':
        return (
          <>
            <i className="fas fa-paper-plane"></i>
            Sending...
          </>
        );
      case 'sent':
        return (
          <>
            <i className="fas fa-check"></i>
            Sent!
          </>
        );
      default:
        return (
          <>
            <i className="fas fa-paper-plane"></i>
            Send Message
          </>
        );
    }
  };

  const isDesktop = windowWidth > 1024;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isMobile = windowWidth <= 768;

  const renderHome = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-content animate-fadeInUp">
        {/* Profile Image */}
        <div className="hero-image">
          <img src={mockData.profile.image} alt="Profile" />
        </div>

        {/* Name */}
        <h1 className="hero-title">
          {mockData.profile.name}</h1>

        {/* Typewriter Text */}
        <div className="hero-subtitle">
          <Typewriter sentences={mockData.profile.typewriterSentences} />
        </div>

        {/* First Row of Buttons */}
        <div className="hero-actions flex flex-wrap gap-4 justify-center mb-4">
          <button className="btn btn-primary" onClick={() => navigateTo('skills')}>
            <i className="fas fa-code mr-2"></i>
            See My Skills
          </button>
          <button className="btn btn-outline" onClick={() => navigateTo('projects')}>
            <i className="fas fa-rocket mr-2"></i>
            View Projects
          </button>
          <button className="btn btn-ghost" onClick={() => navigateTo('contact')}>
            <i className="fas fa-envelope mr-2"></i>
            Get In Touch
          </button>
        </div>

        {/* Second Row of CVE Buttons */}
        <div className="hero-actions flex flex-wrap gap-4 justify-center">
          <button
            className="btn btn-outline"
            onClick={() => window.open('https://www.cve.org/CVERecord?id=CVE-2025-26198', '_blank')}
          >
            <i className="fas fa-bug mr-2"></i>
            CVE-2025-26198
          </button>
          <button
            className="btn btn-outline"
            onClick={() => window.open('https://www.cve.org/CVERecord?id=CVE-2025-26199', '_blank')}
          >
            <i className="fas fa-bug mr-2"></i>
            CVE-2025-26199
          </button>
        </div>
      </div>
    </div>
  </section>
);


  const renderAbout = () => (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">About Me</h2>
        <div className="grid grid-2">
          <div className="card animate-fadeInLeft">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-terminal"></i>
              </div>
              <h3 className="card-title">System Information</h3>
            </div>
            <div className="terminal-output">
              <div className="terminal-line">
                <span className="terminal-prompt">root@Zephyr:~$</span>
                <span className="terminal-command">whoami</span>
              </div>
              <div className="terminal-response">
                <p>
                  Cybersecurity Enthusiast & Ethical Hacker
                </p>
                <p>
                  Penetration Tester | Python Developer | Security Researcher
                </p>
                <p>
                  Passionate about securing the digital world one vulnerability at a time
                </p>
              </div>
            </div>
          </div>
          
          <div className="card animate-fadeInRight">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="card-title">Mission Statement</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              Dedicated to strengthening cybersecurity defenses through ethical hacking, 
              vulnerability assessment, and continuous learning. I believe in protecting 
              digital assets while educating others about cybersecurity best practices.
            </p>
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <h4 style={{ color: 'var(--text-accent)', marginBottom: 'var(--spacing-sm)' }}>Core Values</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: 'var(--spacing-md)' }}>
                <li>Ethical hacking and responsible disclosure</li>
                <li>Continuous learning and skill development</li>
                <li>Knowledge sharing and community building</li>
                <li>Innovation in security solutions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="card animate-fadeInUp" style={{ marginTop: 'var(--spacing-xl)', overflow: 'visible' }}>
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-user-secret"></i>
            </div>
            <h3 className="card-title">My Journey</h3>
          </div>
          <div className="journey-container">
            <div className="journey-card">
              <div className="journey-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h4 className="journey-title">Education</h4>
              <p className="journey-description">
                Computer Science degree with specialization in cybersecurity and network security
              </p>
            </div>
            <div className="journey-card">
              <div className="journey-icon">
                <i className="fas fa-code"></i>
              </div>
              <h4 className="journey-title">Development</h4>
              <p className="journey-description">
                Started as a developer, then discovered passion for security and ethical hacking
              </p>
            </div>
            <div className="journey-card">
              <div className="journey-icon">
                <i className="fas fa-bug"></i>
              </div>
              <h4 className="journey-title">Bug Hunting</h4>
              <p className="journey-description">
                Active bug bounty hunter with multiple CVEs and responsible disclosures
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderSkills = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-title animate-fadeInUp">Skills & Expertise</h2>

      <div className="grid grid-4">
        {/* Programming Languages */}
        <div className="card animate-fadeInUp">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="card-title">Programming Languages</h3>
          </div>
          <div className="skill-list">
            {mockData.skills.ProgrammingLanguages.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level"> {skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1,delay: 0.2, ease: 'easeOut', type: 'tween' }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="card animate-fadeInUp">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-language"></i>
            </div>
            <h3 className="card-title">Languages</h3>
          </div>
          <div className="skill-list">
            {mockData.skills.languages.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1,delay: 0.2, ease: 'easeOut', type: 'tween' }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="card animate-fadeInUp">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="card-title">Tools</h3>
          </div>
          <div className="skill-list">
            {mockData.skills.tools.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1,delay: 0.2, ease: 'easeOut', type: 'tween' }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="card animate-fadeInUp">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="card-title">Domain Expertise</h3>
          </div>
          <div className="skill-list">
            {mockData.skills.domains.map((skill, index) => (
              <div key={index} className="skill-item" >
                <div className="skill-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1,delay: 0.2, ease: 'easeOut', type: 'tween' }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interested Roles */}
      <div
        className="card animate-fadeInUp group"
        style={{
          marginTop: 'var(--spacing-xl)',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="card-header">
          <div className="card-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h3 className="card-title">Interested Roles</h3>
        </div>

        <div
          className="journey-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--spacing-sm)',
            marginTop: 'var(--spacing-md)',
          }}
        >
          {mockData.skills.interestedRoles.map((role, index) => (
  <span
    key={index}
    className="tag-hover"
    style={{
      padding: '0.5rem 1rem',
      background: 'rgba(0, 255, 65, 0.1)',
      color: 'var(--primary-color)',
      borderRadius: '25px',
      fontSize: '0.9rem',
      border: '1px solid var(--primary-color)',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget;
      el.style.background = 'var(--primary-color)';
      el.style.color = '#000';
      el.style.border = '1px solid #000';
      el.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget;
      el.style.background = 'rgba(0, 255, 65, 0.1)';
      el.style.color = 'var(--primary-color)';
      el.style.border = '1px solid var(--primary-color)';
      el.style.transform = 'scale(1)';
    }}
  >
    {role}
  </span>
))}

        </div>
      </div>
    </div>
  </section>
);



  const renderExperience = () => (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Experience</h2>
        
        <div className="timeline">
          {mockData.experience.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'} animate-fadeInUp`}
            >
              <div className="timeline-content">
                <h3 style={{ 
                  color: 'var(--text-accent)', 
                  fontSize: '1.25rem', 
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-xs)'
                }}>
                  {exp.Role}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: 'var(--spacing-xs)',
                  fontSize: '1rem'
                }}>
                  {exp.Company}
                </p>
                <p style={{ 
                  color: 'var(--primary-color)', 
                  fontSize: '0.9rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  marginBottom: 'var(--spacing-sm)'
                }}>
                  {exp.Duration}
                </p>
                
                {/* Always visible description container with smooth transition */}
                <div 
                  className="experience-description"
                  style={{
                    maxHeight: '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease',
                    opacity: '0',
                    padding: '0 var(--spacing-sm)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border-color)',
                    marginTop: 'var(--spacing-sm)'
                  }}
                >
                  <div style={{ padding: 'var(--spacing-sm) 0' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      marginBottom: 'var(--spacing-xs)'
                    }}>
                      <span>Start: {exp.StartDate}</span>
                      <span>End: {exp.EndDate}</span>
                    </div>
                    <p style={{ 
                      color: 'var(--text-secondary)', 
                      lineHeight: '1.5',
                      fontSize: '0.9rem',
                      margin: '0'
                    }}>
                      {exp.Description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderProjects = () => (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Projects</h2>
        
        <div className="grid grid-3">
          {mockData.projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card animate-fadeInUp"
              style={{ backgroundImage: `url(${project.ProjectPic})` }}
              onClick={() => window.open(project.GithubLink, '_blank')}
            >
              <div className="project-overlay">
                <h3 className="project-title">{project.ProjectName}</h3>
                <div style={{ marginTop: 'var(--spacing-md)' }}>
                  <i className="fab fa-github" style={{ fontSize: '2rem' }}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
          <a 
            href="https://github.com/tansique-17" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <i className="fab fa-github"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );

  const renderCertifications = () => (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Certifications & Achievements</h2>
        <div className="filter-buttons" style={{ marginBottom: '2rem' }}>
                <button 
                  className={`btn ${certFilter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => filterCertificates('all')}
                >
                  All
                </button>
                <button 
                  className={`btn ${certFilter === 'skill' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => filterCertificates('skill')}
                >
                  Skill Certificates
                </button>
                <button 
                  className={`btn ${certFilter === 'internship' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => filterCertificates('internship')}
                >
                  Internship Certificates
                </button>
                <button 
                  className={`btn ${certFilter === 'ctf' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => filterCertificates('ctf')}
                >
                  CTF Certificates
                </button>
              </div>
        
        <div className="grid grid-3">
          {mockData.certifications.filter(cert => 
            certFilter === 'all' || cert.Category.toLowerCase().includes(certFilter.toLowerCase())
          ).map((cert, index) => (
            <div 
              key={index} 
              className="card animate-fadeInUp" 
              style={{ cursor: 'pointer' }}
              onClick={() => openCertificateModal(cert)}
            >
              <div 
                style={{ 
                  backgroundImage: `url(${cert.CertificatePic})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 'var(--border-radius) var(--border-radius) 0 0'
                }}
              />
              <div style={{ padding: 'var(--spacing-md)' }}>
                <h3 style={{ 
                  color: 'var(--text-accent)', 
                  marginBottom: 'var(--spacing-xs)',
                  fontSize: '1.1rem',
                  fontWeight: '700'
                }}>
                  {cert.CertificateName}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: 'var(--spacing-xs)',
                  fontSize: '0.9rem'
                }}>
                  {cert.IssuedCompany}
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginTop: 'var(--spacing-sm)'
                }}>
                  <span style={{
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    backgroundColor: {
                      'Skill Certificate': 'rgba(0, 255, 65, 0.2)',
                      'Internship Certificate': 'rgba(0, 255, 255, 0.2)',
                      'CTF Certificate': 'rgba(255, 215, 0, 0.2)',
                    }[cert.Category],
                    color: {
                      'Skill Certificate': 'var(--primary-color)',
                      'Internship Certificate': 'var(--secondary-color)',
                      'CTF Certificate': 'gold',
                    }[cert.Category],
                    border: `1px solid ${
                    {
                      'Skill Certificate': 'var(--primary-color)',
                      'Internship Certificate': 'var(--secondary-color)',
                      'CTF Certificate': 'gold',
                    }[cert.Category]
                  }`,
                }}>
                {{
                  'Skill Certificate': 'Skill',
                  'Internship Certificate': 'Internship',
                  'CTF Certificate': 'CTF',
                }[cert.Category]}
              </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {isCertModalOpen && selectedCertificate && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              backdropFilter: 'blur(10px)',
              padding: 'var(--spacing-md)'
            }}
            onClick={closeCertificateModal}
          >
            <div 
              style={{
                background: theme === 'dark' ? 'var(--bg-secondary)' : '#ffffff',
                border: `2px solid ${theme === 'dark' ? 'var(--primary-color)' : '#2563eb'}`,
                borderRadius: 'var(--border-radius-lg)',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
                boxShadow: `0 20px 40px ${theme === 'dark' ? 'var(--shadow-color)' : 'rgba(37, 99, 235, 0.3)'}`,
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeCertificateModal}
                style={{
                  position: 'absolute',
                  top: 'var(--spacing-md)',
                  right: 'var(--spacing-md)',
                  background: 'none',
                  border: 'none',
                  color: theme === 'dark' ? 'var(--text-secondary)' : '#64748b',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  transition: 'color var(--transition-normal)',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = theme === 'dark' ? 'var(--primary-color)' : '#2563eb';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = theme === 'dark' ? 'var(--text-secondary)' : '#64748b';
                }}
              >
                <i className="fas fa-times"></i>
              </button>
              
              {/* Left Side - Certificate Image */}
              <div style={{ 
                flex: isMobile ? 'none' : '1',
                padding: 'var(--spacing-xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: isMobile ? 'none' : `1px solid ${theme === 'dark' ? 'var(--border-color)' : '#e2e8f0'}`,
                borderBottom: isMobile ? `1px solid ${theme === 'dark' ? 'var(--border-color)' : '#e2e8f0'}` : 'none'
              }}>
                <img 
                  src={selectedCertificate.CertificatePic} 
                  alt={selectedCertificate.CertificateName}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 'var(--border-radius)',
                    border: `1px solid ${theme === 'dark' ? 'var(--border-color)' : '#e2e8f0'}`,
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                />
              </div>
              
              {/* Right Side - Certificate Details */}
              <div style={{ 
                flex: isMobile ? 'none' : '1',
                padding: 'var(--spacing-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 'var(--spacing-lg)'
              }}>
                <div>
                  <h3 style={{ 
                    color: theme === 'dark' ? 'var(--text-accent)' : '#2563eb',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: 'var(--spacing-sm)',
                    lineHeight: '1.3'
                  }}>
                    {selectedCertificate.CertificateName}
                  </h3>
                  <p style={{ 
                    color: theme === 'dark' ? 'var(--text-secondary)' : '#64748b',
                    fontSize: '1.1rem',
                    marginBottom: 'var(--spacing-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-xs)'
                  }}>
                    <i className="fas fa-building" style={{ color: theme === 'dark' ? 'var(--primary-color)' : '#2563eb' }}></i>
                    {selectedCertificate.IssuedCompany}
                  </p>
                  <div style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    backgroundColor: selectedCertificate.Category === 'Skill Certificate' ? 'rgba(0, 255, 65, 0.2)' : 'rgba(0, 255, 255, 0.2)',
                    color: selectedCertificate.Category === 'Skill Certificate' ? 'var(--primary-color)' : 'var(--secondary-color)',
                    border: `1px solid ${selectedCertificate.Category === 'Skill Certificate' ? 'var(--primary-color)' : 'var(--secondary-color)'}`,
                    display: 'inline-block'
                  }}>
                    {selectedCertificate.Category}
                  </div>
                </div>
                
                {/* Download Button */}
                <button
                  onClick={downloadCertificate}
                  className="btn btn-primary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-xs)',
                    width: '100%',
                    padding: 'var(--spacing-md) var(--spacing-lg)',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}
                >
                  <i className="fas fa-download"></i>
                  Download Certificate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Contact Me</h2>
        
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="card animate-fadeInUp">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h3 className="card-title">Send Message</h3>
            </div>
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="form-input" 
                  required 
                  style={{ fontStyle: 'normal' }}
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  className="form-input" 
                  required 
                  style={{ fontStyle: 'normal' }}
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone" 
                  className="form-input" 
                  style={{ fontStyle: 'normal' }}
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  className="form-input" 
                  required 
                  style={{ fontStyle: 'normal' }}
                />
              </div>
              <div>
                <textarea 
                  name="message" 
                  rows={5} 
                  placeholder="Your Message" 
                  className="form-input" 
                  required
                  style={{ resize: 'vertical', minHeight: '120px', fontStyle: 'normal' }}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${isSubmitting ? 'btn-loading' : ''}`}
                disabled={isSubmitting}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-xs)',
                  width: '100%',
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all var(--transition-normal)',
                  opacity: isSubmitting ? 0.8 : 1
                }}
              >
                {getSubmitButtonContent()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'skills': return renderSkills();
      case 'experience': return renderExperience();
      case 'projects': return renderProjects();
      case 'certifications': return renderCertifications();
      case 'contact': return renderContact();
      default: return renderHome();
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <a href="/" onClick={(e) => {
              e.preventDefault();
              navigateTo('home');
            }} style={{ textDecoration: 'none', color: 'inherit' }}>root@Zephyr</a>
          </div>
          
          {/* Desktop Navigation */}
          {isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
              <ul className="nav-links">
                {['about', 'skills', 'experience', 'projects', 'certifications', 'contact'].map((page) => (
                  <li key={page}>
                    <button
                      className={`nav-link ${currentPage === page ? 'active' : ''}`}
                      onClick={() => navigateTo(page)}
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
              
              <button 
                className="btn btn-outline"
                onClick={downloadResume}
              >
                <i className="fas fa-download"></i>
                Hire Me!
              </button>
              
              <button
                onClick={handleThemeToggle}
                className="btn btn-ghost"
                style={{
                  width: '40px',
                  height: '40px',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} ${isAnimating ? 'spin-icon' : ''}`}></i>
              </button>
            </div>
          )}
          
          {/* Tablet/Mobile Navigation */}
          {(isTablet || isMobile) && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <button
                onClick={handleThemeToggle}
                className="btn btn-ghost"
                style={{
                  width: '40px',
                  height: '40px',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="btn btn-ghost"
                style={{
                  width: '40px',
                  height: '40px',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile/Tablet Sidebar */}
      {isMobileMenuOpen && (isTablet || isMobile) && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: isMobile ? '280px' : '320px',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 9999,
            padding: 'var(--spacing-xl) var(--spacing-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-md)',
            borderLeft: '1px solid var(--border-color)',
            transform: 'translateX(0)',
            transition: 'transform 0.3s ease',
            overflowY: 'auto'
          }}
          className="mobile-sidebar"
        >
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 'var(--spacing-lg)',
            paddingBottom: 'var(--spacing-md)',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <span style={{ 
              color: 'var(--text-accent)', 
              fontWeight: '700',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          {['about', 'skills', 'experience', 'projects', 'certifications', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => navigateTo(page)}
              style={{
                background: currentPage === page ? 'rgba(0, 255, 65, 0.1)' : 'transparent',
                border: currentPage === page ? '1px solid var(--primary-color)' : '1px solid transparent',
                color: currentPage === page ? 'var(--text-accent)' : 'var(--text-primary)',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                borderRadius: 'var(--border-radius)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)',
                fontSize: '1rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)'
              }}
              className="mobile-nav-link"
            >
              <i className={`fas ${
                page === 'home' ? 'fa-home' :
                page === 'about' ? 'fa-user' :
                page === 'skills' ? 'fa-code' :
                page === 'experience' ? 'fa-briefcase' :
                page === 'projects' ? 'fa-rocket' :
                page === 'certifications' ? 'fa-certificate' :
                'fa-envelope'
              }`}></i>
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
          
          {/* Mobile Resume Button */}
          <button 
            className="btn btn-outline"
            onClick={() => {
              downloadResume();
              setIsMobileMenuOpen(false);
            }}
            style={{ 
              marginTop: 'var(--spacing-md)',
              justifyContent: 'center'
            }}
          >
            <i className="fas fa-download"></i>
            Hire Me!
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className={`content-overlay ${currentPage}`}>
        {renderCurrentPage()}
      </div>

      {/* Footer */}
      <footer style={{
  background: 'rgba(0, 0, 0, 0.9)',
  borderTop: '1px solid var(--border-color)',
  padding: 'var(--spacing-xl) 0',
  position: 'relative',
  zIndex: 10
}}>
  <div className="container">
    <div className="grid grid-3">
      
      {/* Column 1: About */}
      <div>
        <h3 style={{ 
          color: 'var(--text-accent)', 
          marginBottom: 'var(--spacing-md)',
          fontFamily: 'JetBrains Mono, monospace'
        }}>
          Tansique Dasari
        </h3>
        <p style={{ 
          color: 'var(--text-secondary)', 
          lineHeight: '1.6',
          fontSize: '0.9rem'
        }}>
          Passionate cybersecurity professional dedicated to protecting digital assets 
          and strengthening security postures through ethical hacking and vulnerability assessment.
        </p>
      </div>

      {/* Column 2: Contact Info */}
      <div>
        <h4 style={{ 
          color: 'var(--text-accent)', 
          marginBottom: 'var(--spacing-md)',
          fontSize: '1.1rem',
          fontWeight: '600'
        }}>
          Contact Info
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
          
          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <i className="fas fa-envelope contact-icon"></i>
            <a 
              href="mailto:tansique.d@gmail.com"
              style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = 'var(--primary-color)';
                (e.target as HTMLElement).style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                (e.target as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              tansique.d@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <i className="fas fa-phone contact-icon"></i>
            <a 
              href="tel:+919381725967"
              style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'all var(--transition-normal)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = 'var(--primary-color)';
                (e.target as HTMLElement).style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                (e.target as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              +91 93817 25967
            </a>
          </div>

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <a style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                 &nbsp;Hyderabad, India
            </a>
          </div>
        </div>
      </div>

      {/* Column 3: Follow Me */}
      <div>
        <h4 style={{ 
          color: 'var(--text-accent)', 
          marginBottom: 'var(--spacing-md)',
          fontSize: '1.1rem',
          fontWeight: '600'
        }}>
          Follow Me
        </h4>
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-md)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          {[
            { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/tansique-dasari/' },
            { icon: 'fab fa-github', href: 'https://github.com/tansique-17' },
            { icon: 'fab fa-twitter', href: 'https://x.com/tansique_17' },
            { icon: 'fab fa-instagram', href: 'https://www.instagram.com/tansique_17/' },
            { icon: 'fab fa-telegram', href: 'https://t.me/tansique_17' },
            { icon: 'fab fa-whatsapp', href: 'https://wa.me/919381725967' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--primary-color)',
                fontSize: '1.5rem',
                transition: 'all var(--transition-normal)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = 'var(--secondary-color)';
                (e.target as HTMLElement).style.transform = 'scale(1.2) rotate(5deg)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'var(--primary-color)';
                (e.target as HTMLElement).style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center',
          paddingTop: 'var(--spacing-md)',
          borderTop: '1px solid var(--border-color)',
          color: 'var(--text-secondary)',
          fontSize: '0.8rem'
        }}>
          © 2025 Tansique Dasari. All rights reserved.
        </div>
      </div>

    </div>
  </div>
</footer>

      
      {/* Toast Notification */}
      {toastVisible && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: toastType === 'success' ? 'rgba(0, 255, 65, 0.9)' : 
                       toastType === 'error' ? 'rgba(255, 0, 128, 0.9)' : 
                       'rgba(0, 255, 255, 0.9)',
            color: toastType === 'success' ? '#000' : '#fff',
            padding: 'var(--spacing-md) var(--spacing-lg)',
            borderRadius: 'var(--border-radius)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)',
            animation: 'slideInRight 0.3s ease-out',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${toastType === 'success' ? 'var(--primary-color)' : 
                                 toastType === 'error' ? 'var(--accent-color)' : 
                                 'var(--secondary-color)'}`,
            fontWeight: '600',
            fontSize: '0.9rem'
          }}
        >
          <i className={`fas ${
            toastType === 'success' ? 'fa-check-circle' : 
            toastType === 'error' ? 'fa-exclamation-circle' : 
            'fa-info-circle'
          }`}></i>
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default App;