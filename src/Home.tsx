import type React from "react";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  // Mail,
  Github,
  Linkedin,
  Code,
  Palette,
  Smartphone,
  // Star,
  // GitBranch,
  // Terminal,
  Database,
  Globe,
  // Award,
  // TrendingUp,
  MessageCircle,
  Instagram,
  Sun,
  Moon,
  CheckCircle,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
// import IMG from "../Images/Picsart_22-01-01_00-21-10-392 (1).jpg";
// // import Logo from "../Images/logo-gif.gif";
// import DarkLogo from "../Images/logo-gif-dark.gif";
// import pikpart from "../Images/Pikpart.png";
// import sg from "../Images/SGB.png";
// import CGG from "../Images/CGG.png";
// import ET from "../Images/ExploraTech.png";
import IMG from "../src/assets/Images/MyImage.jpg";
import Logo from "../src/assets/Images/logo-gif.gif";
import DarkLogo from "../src/assets/Images/logo-gif-dark.gif";
import pikpart from "../src/assets/Images/Pikpart.png";
import sg from "../src/assets/Images/SGB.png";
import CGG from "../src/assets/Images/CGG.png";
import ET from "../src/assets/Images/ExploraTech.png";

const MainFunc = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Simple Color Theme
  const theme = {
    primary: "#3b82f6",
    primaryHover: "#2563eb",
    background: isDarkMode ? "#0f172a" : "#ffffff",
    backgroundSecondary: isDarkMode ? "#1e293b" : "#f8fafc",
    backgroundCard: isDarkMode ? "#1e293b" : "#ffffff",
    text: isDarkMode ? "#f1f5f9" : "#1f2937",
    textSecondary: isDarkMode ? "#94a3b8" : "#6b7280",
    textMuted: isDarkMode ? "#64748b" : "#9ca3af",
    border: isDarkMode ? "#374151" : "#e5e7eb",
    borderHover: isDarkMode ? "#4b5563" : "#d1d5db",
    shadow: isDarkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)",
    shadowHover: isDarkMode
      ? "rgba(59, 130, 246, 0.3)"
      : "rgba(59, 130, 246, 0.2)",
  };

  const services = [
    {
      icon: <Code style={{ width: "28px", height: "28px" }} />,
      title: "Frontend Development",
      description:
        "Specialized in building responsive and user-friendly interfaces using React, TypeScript, styled-components, and Material UI. Strong emphasis on performance and accessibility.",
      number: "01",
      technologies: ["React", "TypeScript", "styled-components", "Material UI"],
    },
    {
      icon: <Palette style={{ width: "28px", height: "28px" }} />,
      title: "UI/UX Implementation",
      description:
        "Transforming Figma designs into pixel-perfect web pages. Expertise in clean UI design with TailwindCSS and styled-components for maintainable code.",
      number: "02",
      technologies: ["Figma", "TailwindCSS", "styled-components", "CSS3"],
    },
    {
      icon: <Database style={{ width: "28px", height: "28px" }} />,
      title: "Web App Enhancement",
      description:
        "Contributed to production-grade platforms like Pikpart and SmartGarage by improving performance, component structure, and user experience.",
      number: "03",
      technologies: ["HTML", "CSS", "React", "Git"],
    },
    {
      icon: <Smartphone style={{ width: "28px", height: "28px" }} />,
      title: "Interactive Web Features",
      description:
        "Developed interactive features and mini-projects like color-guess games using vanilla JavaScript, showcasing core frontend logic and UX thinking.",
      number: "04",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
  ];

  const projects = [
    {
      title: "Pikpart E-commerce Platform",
      description:
        "Contributed to a production-grade auto parts e-commerce platform with optimized component structure and improved performance using React and styled-components.",
      image: pikpart,
      technologies: ["React", "TypeScript", "styled-components", "Material UI"],
      liveLink: "https://pikpart.com/",
      githubLink: "https://github.com/Jitin14ry",
      featured: true,
    },
    {
      title: "Smart Garage Service Booking System",
      description:
        "Redesigned and enhanced a smart service booking platform with an improved catalog system and responsive UI for a seamless user experience.",
      image: sg,
      technologies: ["React", "TypeScript", "Material UI", "styled-components"],
      liveLink: "https://www.pikpartsmartgarage.com/",
      githubLink: "https://github.com/Jitin14ry",
      featured: true,
    },
    {
      title: "Color Guess Game",
      description:
        "An interactive game that challenges users to match RGB values with colors. Demonstrates core frontend logic and DOM manipulation.",
      image: CGG,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink:
        "https://jitin14ry.github.io/frontend-projects/Projects/color-guess/",
      githubLink:
        "https://github.com/Jitin14ry/frontend-projects/tree/main/Projects/color-guess",
      featured: false,
    },
    {
      title: "Explora Tech",
      description:
        "A platform for students to explore academic project ideas, access technical documentation, and find relevant tools for development.",
      image: ET,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink:
        "https://jitin14ry.github.io/frontend-projects/Projects/ExploraTech/",
      githubLink:
        "https://github.com/Jitin14ry/frontend-projects/tree/main/Projects/ExploraTech",
      featured: false,
    },
  ];

  const skills = [
    { name: "React", level: 95, category: "Frameworks" },
    { name: "TypeScript", level: 90, category: "Language" },
    // { name: "Node.js", level: 88, category: "Backend" },
    { name: "JavaScript", level: 82, category: "Language" },
    { name: "Rest APIs", level: 85, category: "API" },
    { name: "TailwindCSS", level: 78, category: "Libraries" },
    { name: "HTML & CSS", level: 80, category: "Language" },
    { name: "VS Code", level: 75, category: "Tools" },
    { name: "Git Hub", level: 75, category: "Tools" },
  ];

  const experiences = [
    {
      company: "RATNASHIL ONLINE SERVICES PVT LTD",
      role: "Frontend Developer",
      type: "Full-time",
      duration: "Apr 2025 - Present",
      location: "Remote",
      status: "current",
      description:
        "Confirmed as a full-time Frontend Developer after successful completion of internship. Leading frontend development projects and implementing modern web solutions.",
      achievements: [
        "Successfully transitioned from intern to full-time employee",
        "Leading frontend development for multiple client projects",
        "Implementing responsive designs and modern UI/UX patterns",
        "Collaborating with cross-functional teams to deliver high-quality solutions",
      ],
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "CSS3",
        "HTML5",
        "Git",
      ],
    },
    {
      company: "RATNASHIL ONLINE SERVICES PVT LTD",
      role: "Frontend Developer Intern",
      type: "Internship",
      duration: "Jan 2025 - Mar 2025",
      location: "Remote",
      status: "completed",
      description:
        "Completed a 3-month intensive internship program focusing on frontend development with modern technologies and best practices.",
      achievements: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with senior developers on real-world projects",
        "Learned industry best practices and coding standards",
        "Successfully completed all assigned projects within deadlines",
      ],
      technologies: [
        "React",
        "JavaScript",
        "CSS3",
        "HTML5",
        "Responsive Design",
        "Version Control",
      ],
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github style={{ width: "24px", height: "24px" }} />,
      url: "https://github.com/Jitin14ry",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin style={{ width: "24px", height: "24px" }} />,
      url: "https://www.linkedin.com/in/jitin-choudhary-a788b1231",
    },
    {
      name: "Instagram",
      icon: <Instagram style={{ width: "24px", height: "24px" }} />,
      url: "https://www.instagram.com/jatin__2907?igsh=MTJscmpxdXQ5aTc2cA==",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle style={{ width: "24px", height: "24px" }} />,
      url: "https://wa.me/916396939290",
    },
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Styles using theme
  const headerStyle: React.CSSProperties = {
    position: "fixed",
    top: "20px",
    left: "20px",
    right: "20px",
    zIndex: 50,
    backgroundColor: theme.backgroundCard,
    backdropFilter: "blur(20px)",
    borderRadius: "16px",
    boxShadow: `0 10px 25px ${theme.shadow}`,
    border: `1px solid ${theme.border}`,
  };

  const heroSectionStyle: React.CSSProperties = {
    paddingTop: "120px",
    paddingBottom: "80px",
    paddingLeft: "20px",
    paddingRight: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: theme.background,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  };

  const availableBadgeStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    backgroundColor: isDarkMode ? "rgba(34, 197, 94, 0.1)" : "#dcfce7",
    color: "#22c55e",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: "600",
    border: `1px solid ${isDarkMode ? "rgba(34, 197, 94, 0.2)" : "#bbf7d0"}`,
  };

  // const buttonPrimaryStyle: React.CSSProperties = {
  //   backgroundColor: theme.primary,
  //   color: "white",
  //   padding: "12px 24px",
  //   borderRadius: "8px",
  //   border: "none",
  //   fontSize: "16px",
  //   fontWeight: "600",
  //   cursor: "pointer",
  //   transition: "all 0.3s ease",
  // };

  const buttonSecondaryStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    color: theme.text,
    padding: "12px 24px",
    borderRadius: "8px",
    border: `2px solid ${theme.border}`,
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: theme.backgroundCard,
    border: `1px solid ${theme.border}`,
    borderRadius: "12px",
    padding: "24px",
    transition: "all 0.3s ease",
    boxShadow: `0 4px 6px ${theme.shadow}`,
  };

  const themeToggleStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "56px",
    height: "56px",
    backgroundColor: theme.primary,
    border: "none",
    borderRadius: "50%",
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `0 8px 25px ${theme.shadowHover}`,
    transition: "all 0.3s ease",
    zIndex: 40,
  };

  return (
    <div
      style={{
        // minHeight: "100vh",
        width: "99vw",
        backgroundColor: theme.background,
        color: theme.text,
        transition: "all 0.3s ease",
      }}
    >
      {/* Progress Bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          backgroundColor: theme.primary,
          transformOrigin: "0%",
          zIndex: 100,
          scaleX: scrollYProgress,
        }}
        initial={{ scaleX: 0 }}
      />

      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{
          scale: 1.1,
          backgroundColor: theme.primaryHover, // Smooth transition on hover
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          ...themeToggleStyle,
          backgroundColor: theme.primary,
          transition: "all 0.2s ease-in-out",
        }}
      >
        {isDarkMode ? (
          <Sun style={{ width: "24px", height: "24px" }} />
        ) : (
          <Moon style={{ width: "24px", height: "24px" }} />
        )}
      </motion.button>

      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={headerStyle}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 24px",
            paddingTop: "5px",
          }}
        >
          <motion.div
            // whileHover={{ scale: 1.05 }}
            style={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              gap: "12px",
            }}
          >
            {isDarkMode ? (
              <img
                src={DarkLogo}
                alt=""
                style={{
                  marginTop: "-1rem",
                }}
                width={100}
              />
            ) : (
              <img
                src={Logo}
                alt=""
                style={{
                  marginTop: "-1rem",
                }}
                width={100}
              />
            )}
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
                marginTop: "-0.7rem",
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{
                    scale: 1.05,
                    color: theme.primary,
                  }}
                  style={{
                    color: theme.textSecondary,
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              style={{
                background: "transparent",
                border: "none",
                padding: "8px",
                cursor: "pointer",
                color: theme.text,
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X style={{ width: "24px", height: "24px" }} />
              ) : (
                <Menu style={{ width: "24px", height: "24px" }} />
              )}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                borderTop: `1px solid ${theme.border}`,
                padding: "16px 24px",
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "12px 0",
                    color: theme.textSecondary,
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  // onMouseEnter={(e) => (e.target.style.color = theme.primary)}
                  // onMouseLeave={(e) =>
                  //   (e.target.style.color = theme.textSecondary)
                  // }
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" style={heroSectionStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              width: "fit-content",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ ...availableBadgeStyle, width: "fit-content" }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#22c55e",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite",
                }}
              />
              AVAILABLE FOR WORK
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: isMobile ? "48px" : "64px",
                fontWeight: "800",
                color: theme.text,
                lineHeight: "1.1",
                marginBottom: "16px",
                marginTop: "0rem",
              }}
            >
              Hi, I'm a<br />
              <span style={{ color: theme.primary }}>Frontend</span>
              <br />
              Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                color: theme.textSecondary,
                fontSize: "18px",
                lineHeight: "1.7",
                maxWidth: "500px",
              }}
            >
              Currently working at RATNASHIL ONLINE SERVICES PVT LTD as a
              Frontend Developer. I build clean, modern web experiences with
              React, TypeScript, and scalable design systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            >
              {/* <motion.button
                whileHover={{
                  backgroundColor: theme.primaryHover,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  ...buttonPrimaryStyle,
                  backgroundColor: theme.primary,
                  transition: "all 0.2s ease-in-out",
                }}
              >
                View My Work
              </motion.button> */}

              <motion.button
                whileHover={{
                  borderColor: theme.primary,
                  color: theme.primary,
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  ...buttonSecondaryStyle,
                  borderColor: theme.border,
                  color: theme.text,
                  transition: "all 0.2s ease-in-out",
                }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/myResume.pdf";
                  link.download = "Jitin Choudhary CV.pdf";
                  link.click();
                }}
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              style={{ display: "flex", gap: "16px" }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    borderColor: theme.primary,
                    color: theme.primary,
                  }}
                  style={{
                    padding: "12px",
                    backgroundColor: theme.backgroundCard,
                    border: `1px solid ${theme.border}`,
                    borderRadius: "8px",
                    color: theme.textSecondary,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                width: "350px",
                height: "350px",
                margin: "0 auto",
              }}
            >
              <img
                src={IMG}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  border: `4px solid ${theme.border}`,
                  boxShadow: `0 20px 40px ${theme.shadow}`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="about "
        style={{
          padding: "70px 20px",
          backgroundColor: theme.backgroundSecondary,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                ...cardStyle,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: theme.primary,
                  marginBottom: "16px",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                PROFESSIONAL SUMMARY
              </div>
              <p
                style={{
                  color: theme.textSecondary,
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                }}
              >
                {isMobile ? (
                  <span>
                    I'm a Frontend Developer with a strong foundation in
                    building responsive, accessible web interfaces using React,
                    TypeScript, and CSS. Currently working at RATNASHIL ONLINE
                    SERVICES, I started as an intern in Jan 2025 and
                    transitioned to a full-time role.
                  </span>
                ) : (
                  <span>
                    I'm a Computer Science graduate and passionate Frontend
                    Developer, currently working at RATNASHIL ONLINE SERVICES
                    PVT LTD. I began my journey as an intern in January 2025 and
                    transitioned to a full-time role after successfully
                    completing a 3-month internship. I specialize in building
                    responsive, user-friendly web applications using modern
                    technologies like React, TypeScript, styled-components, and
                    CSS. I focus on writing clean, scalable code with an
                    emphasis on accessibility, performance, and cross-device
                    compatibility.
                  </span>
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        style={{ padding: "80px 20px", paddingBottom: "0rem" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                color: theme.text,
                marginBottom: "16px",
              }}
            >
              Professional{" "}
              <span style={{ color: theme.primary }}>Experience</span>
            </h2>
            <p style={{ color: theme.textSecondary, fontSize: "18px" }}>
              My journey in frontend development and professional growth
            </p>
          </motion.div>

          <div style={{ position: "relative" }}>
            {/* Timeline Line */}
            <div
              style={{
                position: "absolute",
                left: isMobile ? "20px" : "50%",
                top: "0",
                bottom: "0",
                width: "2px",
                backgroundColor: theme.border,
                transform: isMobile ? "none" : "translateX(-50%)",
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  position: "relative",
                  marginBottom: "60px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: isMobile
                    ? "row"
                    : index % 2 === 0
                    ? "row-reverse"
                    : "row",
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: isMobile ? "11px" : "50%",
                    width: "20px",
                    height: "20px",
                    backgroundColor:
                      exp.status === "current" ? theme.primary : "#22c55e",
                    borderRadius: "50%",
                    border: `4px solid ${theme.background}`,
                    transform: isMobile ? "none" : "translateX(-50%)",
                    zIndex: 10,
                  }}
                />

                {/* Experience Card */}
                <div
                  style={{
                    ...cardStyle,
                    width: isMobile ? "calc(100% - 60px)" : "45%",
                    marginLeft: isMobile
                      ? "60px"
                      : index % 2 === 0
                      ? "0"
                      : "auto",
                    marginRight: isMobile
                      ? "0"
                      : index % 2 === 0
                      ? "auto"
                      : "0",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 10px 25px ${theme.shadowHover}`;
                    e.currentTarget.style.borderColor = theme.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 6px ${theme.shadow}`;
                    e.currentTarget.style.borderColor = theme.border;
                  }}
                >
                  {/* Status Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      padding: "4px 12px",
                      backgroundColor:
                        exp.status === "current" ? theme.primary : "#22c55e",
                      color: "white",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {exp.status === "current" ? "Current" : "Completed"}
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: theme.text,
                        marginBottom: "8px",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "4px",
                      }}
                    >
                      <Briefcase
                        style={{
                          width: "16px",
                          height: "16px",
                          color: theme.primary,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: theme.primary,
                        }}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <Calendar
                          style={{
                            width: "14px",
                            height: "14px",
                            color: theme.textMuted,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: theme.textSecondary,
                          }}
                        >
                          {exp.duration}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <MapPin
                          style={{
                            width: "14px",
                            height: "14px",
                            color: theme.textMuted,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: theme.textSecondary,
                          }}
                        >
                          {exp.location}
                        </span>
                      </div>
                      <span
                        style={{
                          padding: "2px 8px",
                          backgroundColor: isDarkMode
                            ? "rgba(59, 130, 246, 0.1)"
                            : "#dbeafe",
                          color: theme.primary,
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      color: theme.textSecondary,
                      fontSize: "16px",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                    }}
                  >
                    {exp.description}
                  </p>

                  <div style={{ marginBottom: "20px" }}>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: theme.text,
                        marginBottom: "12px",
                      }}
                    >
                      Key Achievements:
                    </h4>
                    <ul
                      style={{ listStyle: "none", padding: "0", margin: "0" }}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            marginBottom: "8px",
                            color: theme.textSecondary,
                            fontSize: "14px",
                            lineHeight: "1.5",
                          }}
                        >
                          <CheckCircle
                            style={{
                              width: "16px",
                              height: "16px",
                              color: "#22c55e",
                              marginTop: "2px",
                              flexShrink: 0,
                            }}
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: theme.text,
                        marginBottom: "8px",
                      }}
                    >
                      Technologies Used:
                    </h4>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: "4px 8px",
                            backgroundColor: isDarkMode
                              ? "rgba(59, 130, 246, 0.1)"
                              : "#dbeafe",
                            color: theme.primary,
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "500",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                color: theme.text,
                marginBottom: "16px",
              }}
            >
              How Can I <span style={{ color: theme.primary }}>Help You?</span>
            </h2>
            <p style={{ color: theme.textSecondary, fontSize: "18px" }}>
              Professional development services with modern technologies
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                style={{
                  ...cardStyle,
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 25px ${theme.shadowHover}`;
                  e.currentTarget.style.borderColor = theme.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 6px ${theme.shadow}`;
                  e.currentTarget.style.borderColor = theme.border;
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      padding: "12px",
                      backgroundColor: isDarkMode
                        ? "rgba(59, 130, 246, 0.1)"
                        : "#dbeafe",
                      borderRadius: "8px",
                      color: theme.primary,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div style={{ flex: "1" }}>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: theme.text,
                        marginBottom: "8px",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        color: theme.textSecondary,
                        fontSize: "14px",
                        lineHeight: "1.6",
                        marginBottom: "16px",
                      }}
                    >
                      {service.description}
                    </p>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                    >
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: "4px 8px",
                            backgroundColor: isDarkMode
                              ? "rgba(59, 130, 246, 0.1)"
                              : "#dbeafe",
                            color: theme.primary,
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "500",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    style={{
                      color: theme.textMuted,
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                  >
                    {service.number}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          padding: "80px 20px",
          backgroundColor: theme.backgroundSecondary,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                color: theme.text,
                marginBottom: "16px",
              }}
            >
              Featured <span style={{ color: theme.primary }}>Projects</span>
            </h2>
            <p style={{ color: theme.textSecondary, fontSize: "18px" }}>
              Some of my recent work and technical achievements
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "30px",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                style={{
                  ...cardStyle,
                  overflow: "hidden",
                  position: "relative",
                  padding: "0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 15px 30px ${theme.shadowHover}`;
                  e.currentTarget.style.borderColor = theme.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 6px ${theme.shadow}`;
                  e.currentTarget.style.borderColor = theme.border;
                }}
              >
                {project.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      padding: "4px 12px",
                      backgroundColor: theme.primary,
                      color: "white",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "600",
                      zIndex: 10,
                    }}
                  >
                    Featured
                  </div>
                )}

                <div style={{ position: "relative", overflow: "hidden" }}>
                  <motion.img
                    src={project?.image}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div style={{ padding: "24px" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: theme.text,
                      marginBottom: "8px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: theme.textSecondary,
                      fontSize: "14px",
                      lineHeight: "1.6",
                      marginBottom: "16px",
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "4px 8px",
                          backgroundColor: isDarkMode
                            ? "rgba(59, 130, 246, 0.1)"
                            : "#dbeafe",
                          color: theme.primary,
                          borderRadius: "12px",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "12px" }}>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        backgroundColor: theme.primaryHover,
                        scale: 1.03,
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        backgroundColor: theme.primary,
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Globe style={{ width: "14px", height: "14px" }} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        borderColor: theme.primary,
                        color: theme.primary,
                        scale: 1.03,
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        backgroundColor: "transparent",
                        color: theme.textSecondary,
                        textDecoration: "none",
                        border: `1px solid ${theme.border}`,
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Github style={{ width: "14px", height: "14px" }} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                color: theme.text,
                marginBottom: "16px",
              }}
            >
              Technical <span style={{ color: theme.primary }}>Skills</span>
            </h2>
            <p style={{ color: theme.textSecondary, fontSize: "18px" }}>
              My proficiency in various technologies and tools
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  ...cardStyle,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: theme.text,
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        marginLeft: "8px",
                        padding: "2px 8px",
                        backgroundColor: isDarkMode
                          ? "rgba(59, 130, 246, 0.1)"
                          : "#dbeafe",
                        color: theme.primary,
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    >
                      {skill.category}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: theme.primary,
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    backgroundColor: theme.border,
                    borderRadius: "3px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      height: "100%",
                      backgroundColor: theme.primary,
                      borderRadius: "3px",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
          backgroundColor: theme.backgroundSecondary,
        }}
      >
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "800",
                color: theme.text,
                marginBottom: "16px",
              }}
            >
              Let's Work <span style={{ color: theme.primary }}>Together</span>
            </h2>
            <p
              style={{
                color: theme.textSecondary,
                fontSize: "18px",
                marginBottom: "40px",
                maxWidth: "500px",
                margin: "0 auto 40px",
              }}
            >
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing.
            </p>

            {/* <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "20px",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "40px",
              }}
            >
              <motion.button
                whileHover={{
                  backgroundColor: theme.primaryHover,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  ...buttonPrimaryStyle,
                  padding: "16px 32px",
                  fontSize: "16px",
                  backgroundColor: theme.primary,
                  transition: "all 0.2s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <Mail style={{ width: "18px", height: "18px" }} />
                Get In Touch
              </motion.button>

              <motion.button
                whileHover={{
                  borderColor: theme.primary,
                  color: theme.primary,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  ...buttonSecondaryStyle,
                  padding: "16px 32px",
                  fontSize: "16px",
                  borderColor: theme.border,
                  color: theme.text,
                  transition: "all 0.2s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <Terminal style={{ width: "18px", height: "18px" }} />
                Schedule Call
              </motion.button>
            </div> */}

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    borderColor: theme.primary,
                    color: theme.primary,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    padding: "16px",
                    backgroundColor: theme.backgroundCard,
                    border: `1px solid ${theme.border}`,
                    borderRadius: "12px",
                    color: theme.textSecondary,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    minWidth: "80px",
                  }}
                >
                  {social.icon}
                  <span style={{ fontSize: "12px", fontWeight: "500" }}>
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "32px 20px",
          borderTop: `1px solid ${theme.border}`,
          textAlign: "center",
          backgroundColor: theme.background,
        }}
      >
        <p style={{ color: theme.textSecondary, fontSize: "14px" }}>
          © 2025 Portfolio. Built with TypeScript & CSS
        </p>
        <p
          style={{ color: theme.textMuted, fontSize: "12px", marginTop: "8px" }}
        >
          Designed with simplicity and performance in mind
        </p>
      </footer>

      <style>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default MainFunc;
