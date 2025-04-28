
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId || "home");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2D2D3A] text-white">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-[#1A1F2C]/80 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#9b87f5]">Jagriti</h1>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home" active={activeSection === "home"}>
              Home
            </NavLink>
            <NavLink href="#about" active={activeSection === "about"}>
              About
            </NavLink>
            <NavLink href="#skills" active={activeSection === "skills"}>
              Skills
            </NavLink>
            <NavLink href="#projects" active={activeSection === "projects"}>
              Projects
            </NavLink>
            <NavLink href="#education" active={activeSection === "education"}>
              Education
            </NavLink>
            <NavLink href="#contact" active={activeSection === "contact"}>
              Contact
            </NavLink>
          </nav>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-[#1A1F2C] py-4 px-4 absolute w-full animate-fade-in">
            <div className="flex flex-col space-y-4">
              <MobileNavLink
                href="#home"
                active={activeSection === "home"}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </MobileNavLink>
              <MobileNavLink
                href="#about"
                active={activeSection === "about"}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </MobileNavLink>
              <MobileNavLink
                href="#skills"
                active={activeSection === "skills"}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </MobileNavLink>
              <MobileNavLink
                href="#projects"
                active={activeSection === "projects"}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </MobileNavLink>
              <MobileNavLink
                href="#education"
                active={activeSection === "education"}
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </MobileNavLink>
              <MobileNavLink
                href="#contact"
                active={activeSection === "contact"}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </MobileNavLink>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-16"
        >
          <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-[#9b87f5]">Jagriti</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Software Developer & Data Analyst
              </p>
              <p className="text-md md:text-lg text-gray-400 mb-8 max-w-lg">
                I specialize in building web applications, data analysis, and visualization.
                With expertise in Python, Java, and various frameworks, I create
                efficient and user-friendly solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold py-3 px-6 rounded-md transition-colors"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="bg-transparent border border-[#9b87f5] text-[#9b87f5] font-semibold py-3 px-6 rounded-md hover:bg-[#9b87f5] hover:bg-opacity-10 transition-colors"
                >
                  Contact Me
                </a>
              </div>
              <div className="flex mt-8 space-x-4 justify-center md:justify-start">
                <SocialLink href="https://www.linkedin.com/in/jagriti/" icon="linkedin" />
                <SocialLink href="https://github.com/jagriti43" icon="github" />
                <SocialLink href="mailto:jagritikamboj@gmail.com" icon="email" />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#9b87f5]/20 p-2 animate-pulse">
                  <div className="w-full h-full rounded-full bg-[#1A1F2C] flex items-center justify-center text-9xl text-[#9b87f5]">
                    J
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#1A1F2C] rounded-lg p-4 shadow-lg">
                  <p className="text-sm font-medium">Problem Solver</p>
                  <p className="text-xs text-gray-400">Data-driven Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-[#1A1F2C]/50">
          <div className="container mx-auto px-4">
            <SectionHeading>About Me</SectionHeading>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="md:w-1/3">
                <div className="rounded-lg bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20 p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-gray-200">jagritikamboj@gmail.com</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Mobile</p>
                      <p className="text-gray-200">+91 7695068628</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/jagriti/"
                        className="text-[#9b87f5] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.linkedin.com/in/jagriti/
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">GitHub</p>
                      <a 
                        href="https://github.com/jagriti43"
                        className="text-[#9b87f5] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/jagriti43
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-300 mb-6">
                  I am a passionate software developer and data analyst with strong problem-solving 
                  skills and a keen interest in creating efficient and user-friendly applications. 
                  My expertise spans across data analysis, web development, and database management.
                </p>
                <p className="text-gray-300 mb-6">
                  With a background in Computer Science and Engineering, I combine technical knowledge
                  with practical development experience to deliver high-quality solutions. I enjoy 
                  working on challenging projects that allow me to leverage my analytical abilities 
                  and creativity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-[#1A1F2C] p-4 rounded-lg border border-gray-700">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="mr-2">🧩</span> Problem Solving
                    </h4>
                    <p className="text-sm text-gray-400">
                      I excel at breaking down complex problems and finding efficient solutions.
                    </p>
                  </div>
                  <div className="bg-[#1A1F2C] p-4 rounded-lg border border-gray-700">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="mr-2">👥</span> Team Player
                    </h4>
                    <p className="text-sm text-gray-400">
                      I collaborate effectively with cross-functional teams to achieve project goals.
                    </p>
                  </div>
                  <div className="bg-[#1A1F2C] p-4 rounded-lg border border-gray-700">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="mr-2">🔄</span> Flexibility
                    </h4>
                    <p className="text-sm text-gray-400">
                      I adapt quickly to new technologies and changing project requirements.
                    </p>
                  </div>
                  <div className="bg-[#1A1F2C] p-4 rounded-lg border border-gray-700">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="mr-2">🔧</span> Adaptability
                    </h4>
                    <p className="text-sm text-gray-400">
                      I thrive in dynamic environments and embrace new challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeading>My Skills</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCategory 
                title="Languages" 
                skills={[
                  { name: "Python", level: 90 },
                  { name: "Java", level: 85 },
                  { name: "R", level: 80 },
                ]}
              />
              
              <SkillCategory 
                title="Frameworks" 
                skills={[
                  { name: "HTML/CSS", level: 85 },
                  { name: "JavaScript", level: 80 },
                  { name: "React.js", level: 85 },
                  { name: "Flask", level: 75 },
                  { name: "Firebase", level: 70 },
                ]}
              />
              
              <SkillCategory 
                title="Tools/Platforms" 
                skills={[
                  { name: "MySQL", level: 90 },
                  { name: "Tableau", level: 95 },
                  { name: "R Studio", level: 85 },
                  { name: "Excel", level: 90 },
                  { name: "Git", level: 80 },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-[#1A1F2C]/50">
          <div className="container mx-auto px-4">
            <SectionHeading>Projects</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="Airbnb Data Analysis & Visualization"
                date="November 2024"
                techStack={["Tableau", "Excel", "SQL", "Data Cleaning", "Geospatial Analysis"]}
                description="Conducted an in-depth analysis of Airbnb listings to identify pricing trends, occupancy rates, and host behavior. Leveraged data cleaning techniques and implemented advanced filtering and parameter controls for users to explore listings by city, property type, and ratings."
              />
              
              <ProjectCard
                title="Anomaly Detection in NYC Taxi Demand"
                date="November 2024"
                techStack={["Python", "Pandas", "Matplotlib", "Scikit-learn"]}
                description="Accomplished a machine learning solution to analyze half-hourly taxi demand data and detect anomalies. Utilized a merged approach for robust anomaly detection. Created dashboards using histograms and time-series maps for interpretability and visualization."
              />
              
              <ProjectCard
                title="Hotel Management Website"
                date="December 2024"
                techStack={["HTML", "CSS", "JavaScript", "React.js", "Firebase", "MySQL"]}
                description="Built a comprehensive hotel management system to facilitate booking and management of hotel rooms. Incorporated a weather forecasting feature using a third-party API. Designed a responsive web interface using React.js for an intuitive user experience."
              />
              
              <ProjectCard
                title="Portfolio Website"
                date="December 2024"
                techStack={["HTML", "CSS", "JavaScript", "React.js", "Redux"]}
                description="Designed and prepared a personal portfolio website to showcase projects, skills, and experience. Crafted an aesthetically appealing UI using modern web technologies. Implemented SEO best practices to enhance search engine visibility."
              />
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeading>Certificates</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CertificateCard 
                title="Introduction To Internet of Things" 
                issuer="NPTEL" 
                date="November 2024" 
              />
              <CertificateCard 
                title="Data Structures And Algorithms using Java" 
                issuer="Coding Blocks" 
                date="July 2023" 
              />
              <CertificateCard 
                title="Data Structure and Algorithms using C++" 
                issuer="NeoGeek" 
                date="May 2024" 
              />
              <CertificateCard 
                title="IBM DevOps and Software Engineering" 
                issuer="Coursera" 
                date="November 2024" 
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-[#1A1F2C]/50">
          <div className="container mx-auto px-4">
            <SectionHeading>Education</SectionHeading>
            
            <div className="space-y-10">
              <EducationCard 
                institution="Lovely Professional University"
                degree="Bachelor of Technology - Computer Science and Engineering"
                duration="Since August 2022"
                location="Phagwara, Punjab"
                gpa="CGPA: 7.18"
              />
              
              <EducationCard 
                institution="Aggerawals Public School"
                degree="Intermediate"
                duration="April 2020 - March 2022"
                location="Kurukshetra, Haryana"
                gpa="Percentage: 77.8%"
              />
              
              <EducationCard 
                institution="S.K.G.F. Public School"
                degree="Matriculation"
                duration="April 2012 - March 2020"
                location="Chachra, Haryana"
                gpa="Percentage: 89.3%"
              />
            </div>
          </div>
        </section>
        
        {/* Achievements Section */}
        <section id="achievements" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeading>Achievements</SectionHeading>
            
            <div className="bg-[#1A1F2C] p-6 rounded-lg border border-[#9b87f5]/20 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Cervera</h3>
              <p className="text-gray-300 mb-2">January 2022</p>
              <p className="text-gray-400">
                Second Runner-Up amongst 120 participants in an event organized by LPU
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#1A1F2C]/50">
          <div className="container mx-auto px-4">
            <SectionHeading>Contact Me</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-gray-300 mb-8">
                  Feel free to contact me for any job opportunities or project collaborations.
                  I'm always open to discussing new projects and ideas.
                </p>
                
                <div className="space-y-4">
                  <ContactMethod 
                    icon="email" 
                    title="Email" 
                    detail="jagritikamboj@gmail.com" 
                  />
                  <ContactMethod 
                    icon="phone" 
                    title="Phone" 
                    detail="+91 7695068628" 
                  />
                  <ContactMethod 
                    icon="linkedin" 
                    title="LinkedIn" 
                    detail="www.linkedin.com/in/jagriti/" 
                    link="https://www.linkedin.com/in/jagriti/"
                  />
                  <ContactMethod 
                    icon="github" 
                    title="GitHub" 
                    detail="github.com/jagriti43" 
                    link="https://github.com/jagriti43"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-[#1A1F2C] border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-[#1A1F2C] border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                      placeholder="Your Email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-[#1A1F2C] border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="button"
                    className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold py-3 px-6 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <SocialLink href="https://www.linkedin.com/in/jagriti/" icon="linkedin" />
            <SocialLink href="https://github.com/jagriti43" icon="github" />
            <SocialLink href="mailto:jagritikamboj@gmail.com" icon="email" />
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Jagriti. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Component for desktop navigation links
const NavLink = ({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className={`text-sm font-medium transition-colors hover:text-[#9b87f5] ${
      active ? "text-[#9b87f5]" : "text-gray-300"
    }`}
  >
    {children}
  </a>
);

// Component for mobile navigation links
const MobileNavLink = ({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`block py-2 px-4 text-sm font-medium rounded ${
      active
        ? "bg-[#9b87f5]/10 text-[#9b87f5]"
        : "text-gray-300 hover:bg-gray-800"
    }`}
  >
    {children}
  </a>
);

// Component for social media links
const SocialLink = ({ href, icon }: { href: string; icon: string }) => {
  let iconSvg;

  switch (icon) {
    case "linkedin":
      iconSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
      break;
    case "github":
      iconSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
      break;
    case "email":
      iconSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
      break;
    case "phone":
      iconSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
      break;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1F2C] text-gray-300 hover:text-[#9b87f5] transition-colors"
    >
      {iconSvg}
    </a>
  );
};

// Section heading component
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-center">{children}</h2>
    <div className="mt-4 flex justify-center">
      <div className="w-20 h-1 bg-[#9b87f5] rounded"></div>
    </div>
  </div>
);

// Skill category component
const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; level: number }[];
}) => (
  <div className="bg-[#1A1F2C] p-6 rounded-lg shadow-lg border border-gray-800">
    <h3 className="text-xl font-semibold mb-6 text-[#9b87f5]">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-xs text-gray-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-[#9b87f5] rounded-full h-2"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Project card component
const ProjectCard = ({
  title,
  date,
  techStack,
  description,
}: {
  title: string;
  date: string;
  techStack: string[];
  description: string;
}) => (
  <div className="bg-[#1A1F2C] rounded-lg overflow-hidden shadow-lg border border-gray-800 hover:border-[#9b87f5]/30 transition-all duration-300 hover:shadow-[#9b87f5]/5 hover:shadow-lg">
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-[#9b87f5]">{title}</h3>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
      <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-[#9b87f5]/10 text-[#9b87f5] rounded-md text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Certificate card component
const CertificateCard = ({
  title,
  issuer,
  date,
}: {
  title: string;
  issuer: string;
  date: string;
}) => (
  <div className="bg-[#1A1F2C] p-6 rounded-lg border border-gray-800 shadow">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold mb-1 text-[#9b87f5]">{title}</h3>
        <p className="text-sm text-gray-400">{issuer}</p>
      </div>
      <span className="text-xs text-gray-400">{date}</span>
    </div>
  </div>
);

// Education card component
const EducationCard = ({
  institution,
  degree,
  duration,
  location,
  gpa,
}: {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa: string;
}) => (
  <div className="relative pl-8 md:pl-0 md:flex gap-8">
    <div className="hidden md:block w-1/4 text-right">
      <span className="text-sm text-gray-400">{duration}</span>
      <div className="h-full w-1 bg-[#9b87f5]/20 absolute right-0 top-0"></div>
    </div>
    
    <div className="md:w-3/4 bg-[#1A1F2C] p-6 rounded-lg border border-gray-800 shadow-lg relative">
      <div className="absolute -left-4 md:hidden w-3 h-3 bg-[#9b87f5] rounded-full"></div>
      <h3 className="text-lg font-semibold text-[#9b87f5]">{institution}</h3>
      <p className="text-gray-300 mb-1">{degree}</p>
      <div className="flex flex-wrap gap-2 mt-2 mb-3">
        <span className="inline-flex items-center text-xs text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {duration}
        </span>
        <span className="inline-flex items-center text-xs text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </span>
        <span className="inline-flex items-center text-xs font-medium text-[#9b87f5]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          {gpa}
        </span>
      </div>
    </div>
  </div>
);

// Contact method component
const ContactMethod = ({
  icon,
  title,
  detail,
  link,
}: {
  icon: string;
  title: string;
  detail: string;
  link?: string;
}) => {
  let iconSvg;

  switch (icon) {
    case "email":
      iconSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
      break;
    case "phone":
      iconSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
      break;
    case "linkedin":
      iconSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
      break;
    case "github":
      iconSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
      break;
  }

  return (
    <div className="flex items-start">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9b87f5]/10 text-[#9b87f5] mr-4">
        {iconSvg}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#9b87f5] hover:underline"
          >
            {detail}
          </a>
        ) : (
          <p className="text-sm text-gray-400">{detail}</p>
        )}
      </div>
    </div>
  );
};

export default Index;
