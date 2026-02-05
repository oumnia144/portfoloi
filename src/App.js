import React, { useState, useEffect } from 'react'; 
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, User, Home, Send, Sparkles, Phone, GraduationCap, Laptop, Book, Globe, Download, Clock, Calculator, MapPin, Search } from 'lucide-react'; 

export default function App() { 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState('home'); 
  const [isScrolled, setIsScrolled] = useState(false); 
  const [language, setLanguage] = useState('fr'); 
  const [photoHover, setPhotoHover] = useState(false); 
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isLanguageMobileOpen, setIsLanguageMobileOpen] = useState(false);

  useEffect(() => { 
    const handleScroll = () => { 
      setIsScrolled(window.scrollY > 20); 
      const sections = ['home', 'about', 'projects', 'experience', 'contact']; 
      const current = sections.find(section => { 
        const element = document.getElementById(section); 
        if (element) { 
          const rect = element.getBoundingClientRect(); 
          return rect.top <= 100 && rect.bottom >= 100; 
        } 
        return false; 
      }); 
      if (current) setActiveSection(current); 
    }; 
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageOpen && !event.target.closest('.language-selector')) {
        setIsLanguageOpen(false);
      }
      if (isLanguageMobileOpen && !event.target.closest('.mobile-language-selector')) {
        setIsLanguageMobileOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLanguageOpen, isLanguageMobileOpen]);

  const scrollToSection = (id) => { 
    const element = document.getElementById(id); 
    if (element) { 
      element.scrollIntoView({ behavior: 'smooth' }); 
      setIsMenuOpen(false); 
    } 
  }; 

  const handleDownloadCV = () => { 
    const link = document.createElement('a'); 
    link.href = '/Oumnia-cv.pdf'; 
    link.download = 'CV_Oumnia_Ouali.pdf'; 
    link.click(); 
    const messages = { 
      fr: 'CV téléchargé avec succès !', 
      en: 'CV downloaded successfully!', 
      ar: 'تم تنزيل السيرة الذاتية بنجاح!' 
    }; 
    alert(messages[language]); 
  }; 

  // مشاريعك الحقيقية مع الروابط المباشرة
  const myRealProjects = [ 
    { 
      id: 1, 
      title: { 
        fr: "Chronomètre Intelligent", 
        en: "Smart Stopwatch", 
        ar: "كرونومتر ذكي" 
      }, 
      description: { 
        fr: "Chronomètre avec fonctions avancées de mesure et d'enregistrement du temps", 
        en: "Stopwatch with advanced time measurement and recording functions", 
        ar: "كرونومتر مع وظائف متقدمة لقياس وتسجيل الوقت" 
      }, 
      technologies: ["HTML", "CSS", "JavaScript"], 
      github: "#", 
      demoLink: "https://oumnia144.github.io/mes-projets/chronom%C3%A9tre/chronom%C3%A9tre.html", 
      icon: Clock, 
      features: { 
        fr: ["Start/Stop", "Tours", "Réinitialisation", "Affichage détaillé"], 
        en: ["Start/Stop", "Laps", "Reset", "Detailed display"], 
        ar: ["تشغيل/إيقاف", "اللفات", "إعادة ضبط", "عرض مفصل"] 
      }
    }, 
    { 
      id: 2, 
      title: { 
        fr: "Calculatrice Scientifique", 
        en: "Scientific Calculator", 
        ar: "حاسبة علمية" 
      }, 
      description: { 
        fr: "Calculatrice avec opérations mathématiques avancées et interface intuitive", 
        en: "Calculator with advanced mathematical operations and intuitive interface", 
        ar: "حاسبة بعمليات رياضية متقدمة وواجهة بديهية" 
      }, 
      technologies: ["HTML", "CSS", "JavaScript"], 
      github: "#", 
      demoLink: "https://oumnia144.github.io/mes-projets/calculator/calculatrice.html", 
      icon: Calculator, 
      features: { 
        fr: ["Opérations basiques", "Opérations scientifiques", "Mémoire", "Historique"], 
        en: ["Basic operations", "Scientific operations", "Memory", "History"], 
        ar: ["عمليات أساسية", "عمليات علمية", "ذاكرة", "سجل"] 
      }
    }, 
    { 
      id: 3, 
      title: { 
        fr: "Site Touristique Oujda", 
        en: "Oujda Tourism Website", 
        ar: "موقع سياحة وجدة" 
      }, 
      description: { 
        fr: "Site web touristique complet avec 5 pages présentant les destinations marocaines", 
        en: "Complete tourism website with 5 pages showcasing Moroccan destinations", 
        ar: "موقع سياحي كامل مع 5 صفحات تعرض الوجهات المغربية" 
      }, 
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"], 
      github: "#", 
      demoLink: "https://oumnia144.github.io/mes-projets/tourism-website/oujda%20touriste.html", 
      icon: MapPin, 
      pages: 5, 
      features: { 
        fr: ["Destinations", "Hôtels", "Galerie", "Contact", "À propos"], 
        en: ["Destinations", "Hotels", "Gallery", "Contact", "About"], 
        ar: ["الوجهات", "الفنادق", "المعرض", "الاتصال", "نبذة عنا"] 
      }
    }, 
    { 
      id: 4, 
      title: { 
        fr: "Moteur de Recherche React", 
        en: "React Search Engine", 
        ar: "محرك بحث React" 
      }, 
      description: { 
        fr: "Application de recherche interactive développée avec React.js", 
        en: "Interactive search application developed with React.js", 
        ar: "تطبيق بحث تفاعلي تم تطويره بـ React.js" 
      }, 
      technologies: ["React", "JavaScript", "CSS"], 
      github: "#", 
      demoLink: "https://recherche-react.vercel.app/", 
      icon: Search, 
      features: { 
        fr: ["Recherche en temps réel", "Filtrage", "Interface moderne", "Responsive"], 
        en: ["Real-time search", "Filtering", "Modern interface", "Responsive"], 
        ar: ["بحث في الوقت الفعلي", "تصفية", "واجهة عصرية", "متجاوب"] 
      }
    } 
  ]; 

  const texts = { 
    fr: { 
      nav: { home: 'Accueil', about: 'À propos', projects: 'Projets', experience: 'Formation', contact: 'Contact' }, 
      hero: { 
        title: "Future Technicienne Spécialisée", 
        greeting: "Bonjour, je suis", 
        name: "Oumnia Ouali", 
        description1: "Étudiante en ", 
        highlight1: "Développement Digital", 
        description2: " passionnée par la ", 
        highlight2: "création numérique", 
        description3: " et l'innovation technologique.", 
        bio: "Actuellement en formation à l'Institut Spécialisé de Technologie Appliquée Oujda, je me spécialise dans le développement web full stack et aspire à devenir une développeuse accomplie.", 
        downloadCVBtn: "Télécharger mon CV", 
        contactBtn: "Contactez-moi" 
      }, 
      about: { 
        title: "À propos de moi", 
        subtitle: "Mon parcours académique", 
        description1: "Étudiante motivée et passionnée par les technologies numériques, je suis actuellement en formation de Technicienne Spécialisé en Développement Digital à l'Institut Spécialisé de Technologie Appliquée Oujda. Cette formation m'offre une expertise complète en développement web full stack (DEVOWSF).", 
        description2: "Mon parcours scientifique au lycée (Baccalauréat Sciences Physiques) m'a dotée d'une rigueur analytique et d'une capacité de résolution de problèmes qui sont des atouts précieux dans le développement informatique.", 
        description3: "Je suis constamment à la recherche de nouveaux défis techniques et j'aspire à contribuer à des projets innovants qui repoussent les limites du numérique.", 
        skillsTitle: "Domaines de Compétence", 
        qualitiesTitle: "Qualités Personnelles", 
        qualities: ["Rigueur scientifique", "Persévérance", "Esprit d'équipe", "Organisation", "Adaptabilité", "Autonomie", "Curiosité intellectuelle", "Créativité technique"] 
      }, 
      projects: { 
        title: "Mes Projets Réels", 
        description: "Applications et sites web que j'ai développés avec différentes technologies", 
        viewProject: "Voir le projet", 
        sourceCode: "Code Source", 
        privateCode: "Code privé", 
        features: "Caractéristiques:", 
        pages: "pages", 
        projectsCount: "projets réalisés" 
      }, 
      experience: { 
        title: "Parcours Académique", 
        currentStatus: "En formation active", 
        currentDescription: "Actuellement en cours de formation à l'Institut Spécialisé de Technologie Appliquée Oujda - Spécialisation Développement Digital", 
        experiences: [ 
          { 
            title: "Technicien Spécialisé en Développement Digital", 
            company: "Institut Spécialisé de Technologie Appliquée, Oujda", 
            period: "2024 - 2026", 
            description: "Formation complète en développement web (DEVOWSF) - Spécialisation en création d'applications web modernes", 
            skills: ["Développement Full Stack", "Base de données", "UI/UX Design", "DevOps", "Cybersécurité"] 
          }, 
          { 
            title: "Baccalauréat Sciences Physiques", 
            company: "Lycée Elsalam", 
            period: "2022 - 2023", 
            description: "Option Sciences Physiques - Formation scientifique approfondie avec bases mathématiques et physiques solides", 
            skills: ["Physique", "Chimie", "Mathématiques", "Méthodologie"] 
          } 
        ] 
      }, 
      contact: { 
        title: "Contact & Collaborations", 
        description: "Ouverte aux opportunités de stage, projets académiques et échanges techniques", 
        formTitle: "Envoyez-moi un message", 
        firstName: "Prénom", 
        lastName: "Nom", 
        email: "Email", 
        message: "Message", 
        sendBtn: "Envoyer le message ✨", 
        contactTitle: "Coordonnées", 
        academicEmail: "Email académique", 
        phone: "Téléphone", 
        institution: "Établissement", 
        availability: "Disponibilité", 
        availabilityDesc: "Étudiante en Technicien Spécialisé en Développement Digital, je suis disponible pour :", 
        availabilityItems: ["Stages en entreprise", "Projets académiques collaboratifs", "Échanges techniques et mentorat"], 
        availabilityStatus: "Recherche active de stage pour 2025" 
      }, 
      footer: { 
        copyright: "© 2024 Oumnia Ouali - Future Technicienne Spécialisée en Développement Digital", 
        study: "Formation en cours : Technicien Spécialisé en Développement Digital (2024-2026) - Institut Spécialisé de Technologie Appliquée Oujda" 
      } 
    }, 
    en: { 
      nav: { home: 'Home', about: 'About', projects: 'Projects', experience: 'Education', contact: 'Contact' }, 
      hero: { 
        title: "Future Specialized Technician", 
        greeting: "Hello, I'm", 
        name: "Oumnia Ouali", 
        description1: "Student in ", 
        highlight1: "Digital Development", 
        description2: " passionate about ", 
        highlight2: "digital creation", 
        description3: " and technological innovation.", 
        bio: "Currently training at Specialized Institute of Applied Technology Oujda, I specialize in full stack web development and aspire to become an accomplished developer.", 
        downloadCVBtn: "Download my CV", 
        contactBtn: "Contact me" 
      }, 
      about: { 
        title: "About Me", 
        subtitle: "My Academic Journey", 
        description1: "Motivated student passionate about digital technologies, I am currently training as a Specialized Technician in Digital Development at Specialized Institute of Applied Technology Oujda. This training provides me with comprehensive expertise in full stack web development (DEVOWSF).", 
        description2: "My scientific background in high school (Baccalaureate in Physical Sciences) has equipped me with analytical rigor and problem-solving skills that are valuable assets in computer development.", 
        description3: "I am constantly seeking new technical challenges and aspire to contribute to innovative projects that push the boundaries of digital technology.", 
        skillsTitle: "Areas of Competence", 
        qualitiesTitle: "Personal Qualities", 
        qualities: ["Scientific rigor", "Perseverance", "Team spirit", "Organization", "Adaptability", "Autonomy", "Intellectual curiosity", "Technical creativity"] 
      }, 
      projects: { 
        title: "My Real Projects", 
        description: "Applications and websites I've developed with various technologies", 
        viewProject: "View Project", 
        sourceCode: "Source Code", 
        privateCode: "Private code", 
        features: "Features:", 
        pages: "pages", 
        projectsCount: "projects completed" 
      }, 
      experience: { 
        title: "Academic Background", 
        currentStatus: "Currently in training", 
        currentDescription: "Currently undergoing training at Specialized Institute of Applied Technology Oujda - Digital Development Specialization", 
        experiences: [ 
          { 
            title: "Specialized Technician in Digital Development", 
            company: "Specialized Institute of Applied Technology, Oujda", 
            period: "2024 - 2026", 
            description: "Complete training in web development (DEVOWSF) - Specialization in creating modern web applications", 
            skills: ["Full Stack Development", "Databases", "UI/UX Design", "DevOps", "Cybersecurity"] 
          }, 
          { 
            title: "Baccalaureate in Physical Sciences", 
            company: "Elsalam High School", 
            period: "2022 - 2023", 
            description: "Physical Sciences Option - In-depth scientific training with solid mathematical and physical foundations", 
            skills: ["Physics", "Chemistry", "Mathematics", "Methodology"] 
          } 
        ] 
      }, 
      contact: { 
        title: "Contact & Collaborations", 
        description: "Open to internship opportunities, academic projects and technical exchanges", 
        formTitle: "Send me a message", 
        firstName: "First Name", 
        lastName: "Last Name", 
        email: "Email", 
        message: "Message", 
        sendBtn: "Send message ✨", 
        contactTitle: "Contact Details", 
        academicEmail: "Academic Email", 
        phone: "Phone", 
        institution: "Institution", 
        availability: "Availability", 
        availabilityDesc: "Student in Specialized Technician in Digital Development, I am available for:", 
        availabilityItems: ["Company internships", "Collaborative academic projects", "Technical exchanges and mentoring"], 
        availabilityStatus: "Actively seeking internship for 2025" 
      }, 
      footer: { 
        copyright: "© 2024 Oumnia Ouali - Future Specialized Technician in Digital Development", 
        study: "Current training: Specialized Technician in Digital Development (2024-2026) - Specialized Institute of Applied Technology Oujda" 
      } 
    }, 
    ar: { 
      nav: { home: 'الرئيسية', about: 'عني', projects: 'المشاريع', experience: 'التعليم', contact: 'اتصل' }, 
      hero: { 
        title: "تقنية متخصصة مستقبلية", 
        greeting: "مرحبا، أنا", 
        name:"امنية وعلي", 
        description1: "طالبة في ", 
        highlight1: "التطوير الرقمي", 
        description2: " شغوفة بـ ", 
        highlight2: "الإبداع الرقمي", 
        description3: " والابتكار التكنولوجي.", 
        bio: "أدرس حالياً في المعهد المتخصص للتكنولوجيا التطبيقية وجدة، أتخصص في تطوير الويب الكامل وأطمح لأن أصبح مطورة متمكنة.", 
        downloadCVBtn: "تحميل السيرة الذاتية", 
        contactBtn: "اتصل بي" 
      }, 
      about: { 
        title: "عني", 
        subtitle: "رحلتي الأكاديمية", 
        description1: "طالبة متحمسة وشغوفة بالتكنولوجيات الرقمية، أدرس حالياً كتقنية متخصصة في التطوير الرقمي في المعهد المتخصص للتكنولوجيا التطبيقية وجدة. هذه الدراسة تمنحني خبرة شاملة في تطوير الويب الكامل (DEVOWSF).", 
        description2: "خلفيتي العلمية في الثانوية (بكالوريا علوم فيزيائية) منحتني دقة تحليلية ومهارات حل المشكلات التي تعد أصولاً ثمينة في التطوير المعلوماتي.", 
        description3: "أبحث باستمرار عن تحديات تقنية جديدة وأطعم للمساهمة في مشاريع مبتكرة تدفع حدود التكنولوجيا الرقمية.", 
        skillsTitle: "مجالات الكفاءة", 
        qualitiesTitle: "الصفات الشخصية", 
        qualities: ["الدقة العلمية", "المثابرة", "روح الفريق", "التنظيم", "القدرة على التكيف", "الاستقلالية", "الفضول الفكري", "الإبداع التقني"] 
      }, 
      projects: { 
        title: "مشاريعي الحقيقية", 
        description: "تطبيقات ومواقع إلكترونية قمت بتطويرها بتقنيات مختلفة", 
        viewProject: "عرض المشروع", 
        sourceCode: "الكود المصدري", 
        privateCode: "كود خاص", 
        features: "المميزات:", 
        pages: "صفحات", 
        projectsCount: "مشروع منجز" 
      }, 
      experience: { 
        title: "الخلفية الأكاديمية", 
        currentStatus: "قيد الدراسة حالياً", 
        currentDescription: "أدرس حالياً في المعهد المتخصص للتكنولوجيا التطبيقية وجدة - تخصص التطوير الرقمي", 
        experiences: [ 
          { 
            title: "تقنية متخصصة في التطوير الرقمي", 
            company: "المعهد المتخصص للتكنولوجيا التطبيقية، وجدة", 
            period: "2024 - 2026", 
            description: "دراسة كاملة في تطوير الويب (DEVOWSF) - التخصص في إنشاء تطبيقات ويب حديثة", 
            skills: ["التطوير الكامل", "قواعد البيانات", "تصميم واجهة المستخدم", "DevOps", "الأمن السيبراني"] 
          }, 
          { 
            title: "بكالوريا علوم فيزيائية", 
            company: "ثانوية السلام", 
            period: "2022 - 2023", 
            description: "تخصص العلوم الفيزيائية - دراسة علمية متعمقة مع أسس رياضية وفيزيائية صلبة", 
            skills: ["الفيزياء", "الكيمياء", "الرياضيات", "المنهجية"] 
          } 
        ] 
      }, 
      contact: { 
        title: "الاتصال والتعاون", 
        description: "مفتوحة لفرص التدريب، المشاريع الأكاديمية والتبادلات التقنية", 
        formTitle: "أرسل لي رسالة", 
        firstName: "الاسم الأول", 
        lastName: "اسم العائلة", 
        email: "البريد الإلكتروني", 
        message: "الرسالة", 
        sendBtn: "إرسال الرسالة ✨", 
        contactTitle: "تفاصيل الاتصال", 
        academicEmail: "البريد الأكاديمي", 
        phone: "الهاتف", 
        institution: "المؤسسة", 
        availability: "التوافر", 
        availabilityDesc: "طالبة تقنية متخصصة في التطوير الرقمي، أنا متاحة لـ:", 
        availabilityItems: ["التدريب في الشركات", "المشاريع الأكاديمية التعاونية", "التبادلات التقنية والإرشاد"], 
        availabilityStatus: "الباحثة بنشاط عن تدريب لعام 2025" 
      }, 
      footer: { 
        copyright: "© 2024 أمنية والي - تقنية متخصصة مستقبلية في التطوير الرقمي", 
        study: "الدراسة الحالية: تقنية متخصصة في التطوير الرقمي (2024-2026) - المعهد المتخصص للتكنولوجيا التطبيقية وجدة" 
      } 
    } 
  }; 

  const currentText = texts[language]; 

  const skills = [ 
    { icon: "💻", title: language === 'fr' ? "Développement Web" : language === 'en' ? "Web Development" : "تطوير الويب", subtitle: language === 'fr' ? "Frontend & Backend" : language === 'en' ? "Frontend & Backend" : "واجهة وخلفية" }, 
    { icon: "📱", title: language === 'fr' ? "Applications Mobiles" : language === 'en' ? "Mobile Applications" : "تطبيقات الجوال", subtitle: "React Native" }, 
    { icon: "🎨", title: "UI/UX Design", subtitle: "Figma" }, 
    { icon: "📊", title: language === 'fr' ? "Data Science" : language === 'en' ? "Data Science" : "علم البيانات", subtitle: "Python" }, 
    { icon: "☁️", title: language === 'fr' ? "Cloud Computing" : language === 'en' ? "Cloud Computing" : "الحوسبة السحابية", subtitle: "AWS, Docker" }, 
    { icon: "🔒", title: language === 'fr' ? "Cybersécurité" : language === 'en' ? "Cybersecurity" : "الأمن السيبراني", subtitle: language === 'fr' ? "Sécurité des applications" : language === 'en' ? "Application Security" : "أمن التطبيقات" } 
  ]; 

  useEffect(() => { 
    const style = document.createElement('style'); 
    style.innerHTML = ` 
      @keyframes gradient { 
        0%, 100% { background-position: 0% 50%; } 
        50% { background-position: 100% 50%; } 
      } 
      @keyframes spin-slow { 
        from { transform: rotate(0deg); } 
        to { transform: rotate(360deg); } 
      } 
      @keyframes float { 
        0%, 100% { transform: translateY(0px); } 
        50% { transform: translateY(-15px); } 
      } 
      @keyframes shimmer { 
        0% { background-position: -1000px 0; } 
        100% { background-position: 1000px 0; } 
      } 
      @keyframes photo-glow { 
        0%, 100% { filter: drop-shadow(0 0 20px rgba(236, 72, 153, 0.4)) brightness(1.05) contrast(1.1); } 
        50% { filter: drop-shadow(0 0 35px rgba(236, 72, 153, 0.8)) brightness(1.15) contrast(1.2); } 
      } 
      @keyframes border-glow { 
        0%, 100% { border-color: rgba(147, 51, 234, 0.8); } 
        50% { border-color: rgba(236, 72, 153, 0.9); } 
      } 
      @keyframes smile-glow { 
        0%, 100% { box-shadow: 0 0 30px rgba(255, 105, 180, 0.3), inset 0 0 60px rgba(255, 182, 193, 0.2); } 
        50% { box-shadow: 0 0 50px rgba(255, 105, 180, 0.6), inset 0 0 100px rgba(255, 182, 193, 0.4); } 
      } 
      @keyframes pulse-glow { 
        0%, 100% { opacity: 0.3; } 
        50% { opacity: 0.6; } 
      } 
      .animate-gradient { 
        background-size: 200% 200%; 
        animation: gradient 3s ease infinite; 
      } 
      .animate-spin-slow { 
        animation: spin-slow 8s linear infinite; 
      } 
      .animate-float { 
        animation: float 6s ease-in-out infinite; 
      } 
      .animate-shimmer { 
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent); 
        background-size: 1000px 100%; 
        animation: shimmer 3s infinite; 
      } 
      .animate-photo-glow { 
        animation: photo-glow 3s ease-in-out infinite; 
      } 
      .animate-border-glow { 
        animation: border-glow 2s ease-in-out infinite; 
      } 
      .animate-smile-glow { 
        animation: smile-glow 2s ease-in-out infinite; 
      } 
      .animate-pulse-glow { 
        animation: pulse-glow 2s ease-in-out infinite; 
      } 
      .photo-hover-effect { 
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); 
      } 
      .photo-hover-effect:hover { 
        transform: scale(1.08); 
        filter: brightness(1.2) contrast(1.15) saturate(1.3); 
      } 
      .photo-container { 
        position: relative; 
        overflow: hidden; 
      } 
      .photo-container::before { 
        content: ''; 
        position: absolute; 
        top: -50%; 
        left: -50%; 
        width: 200%; 
        height: 200%; 
        background: linear-gradient( 
          45deg, 
          transparent 30%, 
          rgba(236, 72, 153, 0.2) 50%, 
          transparent 70% 
        ); 
        animation: spin-slow 10s linear infinite; 
        z-index: 1; 
      } 
      .photo-overlay { 
        position: absolute; 
        inset: 0; 
        background: linear-gradient( 
          45deg, 
          transparent 30%, 
          rgba(255, 182, 193, 0.3) 50%, 
          transparent 70% 
        ); 
        mix-blend-mode: overlay; 
        animation: spin-slow 15s linear infinite reverse; 
      } 
      .skill-card { 
        transition: all 0.3s ease; 
      } 
      .skill-card:hover { 
        transform: translateY(-5px); 
        box-shadow: 0 20px 40px rgba(147, 51, 234, 0.2); 
      } 
      .language-selector { 
        direction: ${language === 'ar' ? 'rtl' : 'ltr'}; 
      } 
      .project-status-online { 
        background: linear-gradient(45deg, #10b981, #34d399); 
      } 
      .project-status-dev { 
        background: linear-gradient(45deg, #f59e0b, #fbbf24); 
      } 
    `; 
    document.head.appendChild(style); 
    return () => { 
      document.head.removeChild(style); 
    }; 
  }, [language]); 

  return ( 
    <div className={`min-h-screen bg-gray-900 text-gray-100 ${language === 'ar' ? 'font-arabic' : ''}`}> 
      {/* Navigation */} 
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-gray-900/90 shadow-lg' : 'bg-transparent'}`}> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="flex justify-between items-center h-20"> 
            <div className="flex items-center space-x-2"> 
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-spin-slow"> 
                <Sparkles className="text-white" size={20} /> 
              </div> 
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> 
                Oumnia.Dev 
              </span> 
            </div> 
            <div className="hidden md:flex items-center space-x-8"> 
              {[ 
                { id: 'home', label: currentText.nav.home, icon: Home }, 
                { id: 'about', label: currentText.nav.about, icon: User }, 
                { id: 'projects', label: currentText.nav.projects, icon: Code }, 
                { id: 'experience', label: currentText.nav.experience, icon: GraduationCap }, 
                { id: 'contact', label: currentText.nav.contact, icon: Send } 
              ].map(({ id, label, icon: Icon }) => ( 
                <button 
                  key={id} 
                  onClick={() => scrollToSection(id)} 
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${ 
                    activeSection === id 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-purple-900/30' 
                  }`} 
                > 
                  <Icon size={18} /> 
                  <span className="font-medium">{label}</span> 
                </button> 
              ))} 
              <div className="relative group language-selector"> 
                <button 
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="p-2 rounded-full bg-purple-900/50 text-purple-300 hover:scale-110 transition-transform flex items-center space-x-1"
                > 
                  <Globe size={20} /> 
                  <span className="font-medium text-sm">{language.toUpperCase()}</span> 
                </button> 
                <div className={`absolute top-full left-0 mt-2 w-32 bg-gray-800 rounded-xl shadow-2xl z-50 transition-all duration-300 ${
                  isLanguageOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}> 
                  <button 
                    onClick={() => {
                      setLanguage('fr');
                      setIsLanguageOpen(false);
                    }} 
                    className={`w-full px-4 py-3 text-left hover:bg-gray-700 rounded-t-xl ${ 
                      language === 'fr' ? 'bg-purple-900/30 text-purple-300' : 'text-gray-300' 
                    }`} 
                  > 
                    🇫🇷 Français 
                  </button> 
                  <button 
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageOpen(false);
                    }} 
                    className={`w-full px-4 py-3 text-left hover:bg-gray-700 ${ 
                      language === 'en' ? 'bg-purple-900/30 text-purple-300' : 'text-gray-300' 
                    }`} 
                  > 
                    🇬🇧 English 
                  </button> 
                  <button 
                    onClick={() => {
                      setLanguage('ar');
                      setIsLanguageOpen(false);
                    }} 
                    className={`w-full px-4 py-3 text-left hover:bg-gray-700 rounded-b-xl ${ 
                      language === 'ar' ? 'bg-purple-900/30 text-purple-300' : 'text-gray-300' 
                    }`} 
                  > 
                    🇲🇦 العربية 
                  </button> 
                </div> 
              </div> 
            </div> 
            <div className="flex items-center space-x-4 md:hidden"> 
              <div className="relative mobile-language-selector"> 
                <button 
                  onClick={() => setIsLanguageMobileOpen(!isLanguageMobileOpen)}
                  className="p-2 rounded-full bg-purple-900/50 text-purple-300"
                > 
                  <Globe size={20} /> 
                </button> 
                <div className={`absolute top-full right-0 mt-2 w-32 bg-gray-800 rounded-xl shadow-2xl z-50 ${
                  isLanguageMobileOpen ? 'block' : 'hidden'
                }`}> 
                  <button 
                    onClick={() => {
                      setLanguage('fr');
                      setIsLanguageMobileOpen(false);
                    }} 
                    className={`w-full px-4 py-3 text-left hover:bg-gray-700 rounded-t-xl ${ 
                      language === 'fr' ? 'bg-purple-900/30 text-purple-300' : 'text-gray-300' 
                    }`} 
                  > 
                    🇫🇷 Français 
                  </button> 
                  <button 
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageMobileOpen(false);
                    }} 
                    className={`w-full px-4 py-3 text-left hover:bg-gray-700 ${ 
                      language === 'en' ? 'bg-purple-900/30 text-purple-300' : 'text-gray-300' 
                    }`} 
                  > 
                    🇬🇧 English 
                  </button> 
                  <button 
                    onClick={() => {
                      setLanguage('ar');
                      setIsLanguageMobileOpen(false);
                    }} 
                    className={`w-full px-4 py-3 text-left hover:bg-gray-700 rounded-b-xl ${ 
                      language === 'ar' ? 'bg-purple-900/30 text-purple-300' : 'text-gray-300' 
                    }`} 
                  > 
                    🇲🇦 العربية 
                  </button> 
                </div> 
              </div> 
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-300" 
              > 
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />} 
              </button> 
            </div> 
          </div> 
        </div> 
        {isMenuOpen && ( 
          <div className="md:hidden backdrop-blur-lg bg-gray-900/95 shadow-xl"> 
            <div className="px-4 pt-2 pb-8 space-y-1"> 
              {[ 
                { id: 'home', label: currentText.nav.home, icon: Home }, 
                { id: 'about', label: currentText.nav.about, icon: User }, 
                { id: 'projects', label: currentText.nav.projects, icon: Code }, 
                { id: 'experience', label: currentText.nav.experience, icon: GraduationCap }, 
                { id: 'contact', label: currentText.nav.contact, icon: Send } 
              ].map(({ id, label, icon: Icon }) => ( 
                <button 
                  key={id} 
                  onClick={() => scrollToSection(id)} 
                  className={`flex items-center space-x-3 w-full px-6 py-4 rounded-xl transition-all ${ 
                    activeSection === id 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                      : 'text-gray-300 hover:bg-gray-800' 
                  }`} 
                > 
                  <Icon size={20} /> 
                  <span className="font-medium text-lg">{label}</span> 
                </button> 
              ))} 
            </div> 
          </div> 
        )} 
      </nav> 

      {/* Hero Section */} 
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"> 
        <div className="max-w-7xl mx-auto w-full"> 
          <div className="flex flex-col lg:flex-row items-center gap-16"> 
            <div className={`flex-1 text-center lg:text-left ${language === 'ar' ? 'lg:text-right' : ''}`}> 
              <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30"> 
                <Sparkles size={18} className="text-purple-400" /> 
                <span className="text-sm font-semibold text-purple-300">{currentText.hero.title}</span> 
              </div> 
              <h1 className="text-5xl md:text-7xl font-bold mb-6"> 
                <span className="block text-white">{currentText.hero.greeting}</span> 
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent animate-gradient"> 
                  {currentText.hero.name} 
                </span> 
              </h1> 
              <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl"> 
                {currentText.hero.description1}<span className="font-semibold text-pink-400">{currentText.hero.highlight1}</span>{currentText.hero.description2}<span className="font-semibold text-purple-400">{currentText.hero.highlight2}</span>{currentText.hero.description3} 
              </p> 
              <p className="text-lg text-gray-400 mb-10 max-w-xl"> 
                {currentText.hero.bio} 
              </p> 
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"> 
                <button 
                  onClick={handleDownloadCV} 
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2" 
                > 
                  <Download size={20} /> 
                  <span className="font-semibold">{currentText.hero.downloadCVBtn}</span> 
                </button> 
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-xl hover:bg-purple-900/20 transition-all duration-300" 
                > 
                  {currentText.hero.contactBtn} 
                </button> 
              </div> 
              <div className="flex space-x-6 mt-12 justify-center lg:justify-start"> 
                {[ 
                  { icon: Github, href: "https://github.com/oumnia144", color: "hover:text-white" }, 
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ouali-oumnia/", color: "hover:text-blue-400" }, 
                  { icon: Mail, href: "mailto:ooumnia144@gmail.com", color: "hover:text-pink-400" } 
                ].map(({ icon: Icon, href, color }, index) => ( 
                  <a 
                    key={index} 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${color}`} 
                  > 
                    <Icon size={22} /> 
                  </a> 
                ))} 
              </div> 
            </div> 
            <div className="relative flex-shrink-0"> 
              <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]"> 
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 blur-3xl opacity-20 animate-pulse"></div> 
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 animate-spin-slow opacity-15"></div> 
                <div 
                  className={`relative photo-container w-full h-full rounded-full overflow-hidden border-8 ${ 
                    photoHover ? 'border-rose-300' : 'border-gray-800' 
                  } shadow-2xl animate-smile-glow`} 
                  onMouseEnter={() => setPhotoHover(true)} 
                  onMouseLeave={() => setPhotoHover(false)} 
                > 
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-rose-400/10 z-10"></div> 
                  <div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 bg-gradient-to-r from-pink-400/20 to-rose-300/20 rounded-full blur-2xl z-5"></div> 
                  <div className="absolute inset-0 animate-shimmer z-5"></div> 
                  <img 
                    src="/photo identite.jpg" 
                    alt="Oumnia Ouali" 
                    className={`w-full h-full object-cover photo-hover-effect animate-photo-glow ${ 
                      photoHover ? 'scale-110' : 'scale-100' 
                    }`} 
                    style={{ 
                      filter: photoHover 
                        ? 'brightness(1.15) contrast(1.2) saturate(1.4) drop-shadow(0 0 40px rgba(236, 72, 153, 0.6))' 
                        : 'brightness(1.05) contrast(1.1) saturate(1.2)' 
                    }} 
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 500 500'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23EC4899;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F472B6;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='500' height='500' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='80' text-anchor='middle' fill='white' dy='.3em'%3E:)%3C/text%3E%3C/svg%3E"; 
                    }} 
                  /> 
                  <div className="absolute inset-0 overflow-hidden rounded-full"> 
                    {[...Array(15)].map((_, i) => ( 
                      <div 
                        key={i} 
                        className="absolute w-2 h-2 bg-pink-300 rounded-full animate-float" 
                        style={{ 
                          left: `${Math.random() * 100}%`, 
                          top: `${Math.random() * 100}%`, 
                          animationDuration: `${Math.random() * 3 + 2}s`, 
                          animationDelay: `${Math.random() * 1}s`, 
                          opacity: Math.random() * 0.6 + 0.4, 
                        }} 
                      /> 
                    ))} 
                  </div> 
                  <div className="absolute -inset-8 rounded-full border-4 border-pink-300/20 animate-pulse-glow z-0"></div> 
                </div> 
                <div 
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center text-white font-bold text-lg shadow-2xl animate-float" 
                  style={{ animationDelay: '1s', zIndex: 10 }} 
                > 
                  <div className="relative"> 
                    <Sparkles size={40} className="animate-spin-slow" style={{ animationDuration: '3s', color: '#FCE7F3' }} /> 
                    <div className="absolute inset-0 bg-pink-300/20 rounded-full blur-md"></div> 
                  </div> 
                </div> 
                <div 
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-rose-300 opacity-10 animate-float" 
                  style={{ animationDuration: '7s', animationDelay: '0.5s' }} 
                ></div> 
                <div 
                  className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 opacity-10 animate-float" 
                  style={{ animationDuration: '8s', animationDelay: '1.5s' }} 
                > 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 

      {/* About Section */} 
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800"> 
        <div className="max-w-7xl mx-auto"> 
          <div className="text-center mb-16"> 
            <h2 className="text-5xl font-bold mb-6 text-white">{currentText.about.title}</h2> 
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div> 
          </div> 
          <div className="grid lg:grid-cols-2 gap-16 items-center"> 
            <div className={`relative ${language === 'ar' ? 'text-right' : ''}`}> 
              <div className="text-9xl absolute -top-10 -left-6 text-purple-500/5 font-serif">"</div> 
              <h3 className="text-3xl font-bold mb-6 text-white">{currentText.about.subtitle}</h3> 
              <div className="space-y-6 text-lg leading-relaxed"> 
                <p className="text-gray-300"> 
                  {currentText.about.description1} 
                </p> 
                <p className="text-gray-300"> 
                  {currentText.about.description2} 
                </p> 
                <p className="text-gray-300"> 
                  {currentText.about.description3} 
                </p> 
              </div> 
            </div> 
            <div className="space-y-10"> 
              <div> 
                <h4 className="text-2xl font-semibold mb-6 text-purple-400 flex items-center"> 
                  <Code className="mr-3" size={24} /> 
                  {currentText.about.skillsTitle} 
                </h4> 
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4"> 
                  {skills.map((skill, index) => ( 
                    <div 
                      key={index} 
                      className="skill-card p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-900/50 hover:border-purple-500 transition-all duration-300 text-center" 
                    > 
                      <div className="text-3xl mb-2">{skill.icon}</div> 
                      <h5 className="font-bold text-white mb-1">{skill.title}</h5> 
                      <p className="text-sm text-gray-400">{skill.subtitle}</p> 
                    </div> 
                  ))} 
                </div> 
              </div> 
              <div> 
                <h4 className="text-2xl font-semibold mb-6 text-pink-400 flex items-center"> 
                  <User className="mr-3" size={24} /> 
                  {currentText.about.qualitiesTitle} 
                </h4> 
                <div className="flex flex-wrap gap-3"> 
                  {currentText.about.qualities.map((skill, index) => ( 
                    <span 
                      key={index} 
                      className="px-5 py-2 bg-gradient-to-r from-pink-900/30 to-purple-900/30 text-pink-300 rounded-full font-medium hover:scale-105 transition-transform" 
                    > 
                      {skill} 
                    </span> 
                  ))} 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 

      {/* Projects Section */} 
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900"> 
        <div className="max-w-7xl mx-auto"> 
          <div className="text-center mb-16"> 
            <h2 className="text-5xl font-bold mb-6 text-white">{currentText.projects.title}</h2> 
            <p className="text-xl text-gray-400 max-w-2xl mx-auto"> 
              {currentText.projects.description} 
            </p> 
            <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 bg-purple-900/30 rounded-full"> 
              <span className="text-purple-300 text-sm">🎯</span> 
              <span className="text-purple-300 text-sm font-medium"> 
                {myRealProjects.length} {currentText.projects.projectsCount} 
              </span> 
            </div> 
          </div> 
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"> 
            {myRealProjects.map((project) => { 
              const ProjectIcon = project.icon; 
              return (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-800"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent z-10"></div>
                    <div className="relative z-20 p-8 flex flex-col items-center">
                      <div className="mb-4 p-6 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20">
                        <ProjectIcon className="text-purple-400" size={48} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                      {project.title[language]}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.description[language]}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-purple-900/50 text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.features && project.features[language].length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">
                          {currentText.projects.features}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.features[language].slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-900 text-gray-400 text-xs rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                      {project.github !== "#" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-700/50"
                        >
                          <Github size={20} />
                          <span>{currentText.projects.sourceCode}</span>
                        </a>
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Github size={20} />
                          <span>{currentText.projects.privateCode}</span>
                        </div>
                      )}
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
                      >
                        <ExternalLink size={18} />
                        <span>{currentText.projects.viewProject}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> 
          {/* Note GitHub */} 
          <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-900/50"> 
            <div className="flex items-center space-x-3 mb-4"> 
              <Github className="text-purple-400" size={24} /> 
              <h4 className="text-xl font-bold text-white"> 
                {language === 'fr' ? 'Mes projets académiques' : language === 'en' ? 'My academic projects' : 'مشاريعي الأكاديمية'} 
              </h4> 
            </div> 
            <p className="text-gray-400 mb-4"> 
              {language === 'fr' ? 'Ces projets ont été développés dans le cadre de ma formation en Développement Digital à l\'Institut Spécialisé de Technologie Appliquée Oujda.' : language === 'en' ? 'These projects were developed as part of my Digital Development training at Specialized Institute of Applied Technology Oujda.' : 'تم تطوير هذه المشاريع في إطار تكويني في التطوير الرقمي بالمعهد المتخصص للتكنولوجيا التطبيقية وجدة.'} 
            </p> 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"> 
              <div className="text-center p-3 bg-gray-800/50 rounded-lg"> 
                <div className="text-2xl text-purple-400 mb-1">🎯</div> 
                <div className="text-lg font-bold text-white">{myRealProjects.length}</div> 
                <div className="text-sm text-gray-400">{language === 'fr' ? 'Projets' : language === 'en' ? 'Projects' : 'مشاريع'}</div> 
              </div> 
              <div className="text-center p-3 bg-gray-800/50 rounded-lg"> 
                <div className="text-2xl text-pink-400 mb-1">💻</div> 
                <div className="text-lg font-bold text-white">4+</div> 
                <div className="text-sm text-gray-400">{language === 'fr' ? 'Technologies' : language === 'en' ? 'Technologies' : 'تقنيات'}</div> 
              </div> 
              <div className="text-center p-3 bg-gray-800/50 rounded-lg"> 
                <div className="text-2xl text-green-400 mb-1">✅</div> 
                <div className="text-lg font-bold text-white">{myRealProjects.filter(p => p.status ? p.status[language] === 'En ligne' || p.status[language] === 'Online' || p.status[language] === 'متصل' : true).length}</div> 
                <div className="text-sm text-gray-400">{language === 'fr' ? 'En ligne' : language === 'en' ? 'Online' : 'متصل'}</div> 
              </div> 
              <div className="text-center p-3 bg-gray-800/50 rounded-lg"> 
                <div className="text-2xl text-blue-400 mb-1">📊</div> 
                <div className="text-lg font-bold text-white">{myRealProjects.reduce((total, p) => total + (p.pages || 1), 0)}</div> 
                <div className="text-sm text-gray-400">{language === 'fr' ? 'Pages' : language === 'en' ? 'Pages' : 'صفحات'}</div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 

      {/* Experience/Formation Section */} 
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800"> 
        <div className="max-w-4xl mx-auto"> 
          <div className="text-center mb-16"> 
            <h2 className="text-5xl font-bold mb-6 text-white">{currentText.experience.title}</h2> 
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div> 
          </div> 
          <div className="relative"> 
            <div className="absolute left-0 lg:left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform lg:-translate-x-1/2"></div> 
            {currentText.experience.experiences.map((exp, index) => ( 
              <div 
                key={index} 
                className={`relative mb-12 lg:w-1/2 ${ 
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12' 
                }`} 
              > 
                <div className="absolute top-0 left-0 lg:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-gray-800 transform lg:-translate-x-1/2 -translate-x-2"></div> 
                <div 
                  className={`ml-10 lg:ml-0 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-gray-900 to-gray-800`} 
                > 
                  <div className="flex items-start justify-between mb-4"> 
                    <div className="flex items-start space-x-3"> 
                      <div className="p-2 rounded-lg bg-purple-900/30"> 
                        {index === 0 ? ( 
                          <Laptop className="text-purple-400" size={20} /> 
                        ) : ( 
                          <GraduationCap className="text-pink-400" size={20} /> 
                        )} 
                      </div> 
                      <div> 
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3> 
                        <p className="text-lg font-semibold text-purple-400">{exp.company}</p> 
                      </div> 
                    </div> 
                    <span 
                      className={`px-3 py-1 rounded-full text-sm font-semibold bg-purple-900/50 text-purple-300`} 
                    > 
                      {exp.period} 
                    </span> 
                  </div> 
                  <p className="text-gray-300 mb-6">{exp.description}</p> 
                  <div className="flex flex-wrap gap-2"> 
                    {exp.skills.map((skill, idx) => ( 
                      <span 
                        key={idx} 
                        className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700" 
                      > 
                        {skill} 
                      </span> 
                    ))} 
                  </div> 
                </div> 
              </div> 
            ))} 
            <div 
              className={`relative mt-20 p-8 rounded-2xl shadow-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30`} 
            > 
              <div className="flex items-center space-x-4"> 
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"> 
                  <Book className="text-white" size={24} /> 
                </div> 
                <div> 
                  <h3 className="text-2xl font-bold text-white">{currentText.experience.currentStatus}</h3> 
                  <p className="text-gray-300"> 
                    {currentText.experience.currentDescription} 
                  </p> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 

      {/* Contact Section */} 
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30"> 
        <div className="max-w-7xl mx-auto"> 
          <div className="text-center mb-16"> 
            <h2 className="text-5xl font-bold mb-6 text-white">{currentText.contact.title}</h2> 
            <p className="text-xl text-gray-400 max-w-2xl mx-auto"> 
              {currentText.contact.description} 
            </p> 
          </div> 
          <div className="grid lg:grid-cols-2 gap-16"> 
            <div className={`p-8 rounded-3xl shadow-2xl bg-gray-800`}> 
              <h3 className="text-3xl font-bold mb-8 text-white">{currentText.contact.formTitle}</h3> 
              <form className="space-y-6"> 
                <div className="grid md:grid-cols-2 gap-6"> 
                  <div> 
                    <label className="block text-sm font-medium mb-2 text-gray-300">{currentText.contact.firstName}</label> 
                    <input 
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-gray-900 border-gray-700 text-white`} 
                      placeholder={currentText.contact.firstName} 
                    /> 
                  </div> 
                  <div> 
                    <label className="block text-sm font-medium mb-2 text-gray-300">{currentText.contact.lastName}</label> 
                    <input 
                      type="text" 
                      className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-gray-900 border-gray-700 text-white`} 
                      placeholder={currentText.contact.lastName} 
                    /> 
                  </div> 
                </div> 
                <div> 
                  <label className="block text-sm font-medium mb-2 text-gray-300">{currentText.contact.email}</label> 
                  <input 
                    type="email" 
                    className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-gray-900 border-gray-700 text-white`} 
                    placeholder="email@exemple.com" 
                  /> 
                </div> 
                <div> 
                  <label className="block text-sm font-medium mb-2 text-gray-300">{currentText.contact.message}</label> 
                  <textarea 
                    rows="5" 
                    className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none bg-gray-900 border-gray-700 text-white`} 
                    placeholder={currentText.contact.message} 
                  ></textarea> 
                </div> 
                <button 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    alert( 
                      language === 'fr' 
                        ? 'Message envoyé avec succès ! Je vous répondrai très rapidement.' 
                        : language === 'en' 
                        ? 'Message sent successfully! I will respond very quickly.' 
                        : 'تم إرسال الرسالة بنجاح! سأرد في أسرع وقت.' 
                    ); 
                  }} 
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 font-semibold text-lg" 
                > 
                  {currentText.contact.sendBtn} 
                </button> 
              </form> 
            </div> 
            <div className="space-y-8"> 
              <div className={`p-8 rounded-3xl bg-gray-800 shadow-2xl`}> 
                <h3 className="text-3xl font-bold mb-8 text-white">{currentText.contact.contactTitle}</h3> 
                <div className="space-y-6"> 
                  <a 
                    href="mailto:ooumnia144@gmail.com" 
                    className="flex items-center p-5 rounded-2xl hover:shadow-lg transition-all group bg-gradient-to-r from-purple-900/20 to-pink-900/20" 
                  > 
                    <div className="p-3 rounded-xl bg-purple-900/30 mr-4 group-hover:scale-110 transition-transform"> 
                      <Mail className="text-purple-400" size={24} /> 
                    </div> 
                    <div> 
                      <p className="font-semibold text-white">{currentText.contact.academicEmail}</p> 
                      <p className="text-gray-400">ooumnia144@gmail.com</p> 
                    </div> 
                  </a> 
                  <a 
                    href="tel:0672321517" 
                    className="flex items-center p-5 rounded-2xl hover:shadow-lg transition-all group bg-gradient-to-r from-purple-900/20 to-pink-900/20" 
                  > 
                    <div className="p-3 rounded-xl bg-purple-900/30 mr-4 group-hover:scale-110 transition-transform"> 
                      <Phone className="text-purple-400" size={24} /> 
                    </div> 
                    <div> 
                      <p className="font-semibold text-white">{currentText.contact.phone}</p> 
                      <p className="text-gray-400">06 72 32 15 17</p> 
                    </div> 
                  </a> 
                  <div className="flex items-center p-5 rounded-2xl bg-gradient-to-r from-purple-900/20 to-pink-900/20"> 
                    <div className="p-3 rounded-xl bg-purple-900/30 mr-4"> 
                      <GraduationCap className="text-purple-400" size={24} /> 
                    </div> 
                    <div> 
                      <p className="font-semibold text-white">{currentText.contact.institution}</p> 
                      <p className="text-gray-400">Institut Spécialisé de Technologie Appliquée, Oujda</p> 
                    </div> 
                  </div> 
                  <a 
                    href="https://www.linkedin.com/in/ouali-oumnia/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center p-5 rounded-2xl hover:shadow-lg transition-all group bg-gradient-to-r from-purple-900/20 to-pink-900/20" 
                  > 
                    <div className="p-3 rounded-xl bg-purple-900/30 mr-4 group-hover:scale-110 transition-transform"> 
                      <Linkedin className="text-purple-400" size={24} /> 
                    </div> 
                    <div> 
                      <p className="font-semibold text-white">LinkedIn</p> 
                      <p className="text-gray-400">/in/ouali-oumnia</p> 
                    </div> 
                  </a> 
                </div> 
              </div> 
              <div className={`p-8 rounded-3xl bg-gray-800 shadow-2xl`}> 
                <h4 className="text-2xl font-bold mb-6 text-white">{currentText.contact.availability}</h4> 
                <p className="text-gray-300 mb-4"> 
                  {currentText.contact.availabilityDesc} 
                </p> 
                <ul className="space-y-3 mb-6"> 
                  {currentText.contact.availabilityItems.map((item, index) => ( 
                    <li key={index} className="flex items-center space-x-2 text-gray-300"> 
                      <div 
                        className={`w-2 h-2 rounded-full ${ 
                          index % 2 === 0 ? 'bg-purple-500' : 'bg-pink-500' 
                        }`} 
                      ></div> 
                      <span>{item}</span> 
                    </li> 
                  ))} 
                </ul> 
                <div className="flex items-center space-x-2"> 
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div> 
                  <span className="font-medium text-green-400">{currentText.contact.availabilityStatus}</span> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 

      {/* Footer */} 
      <footer className={`py-12 px-4 bg-gray-900 border-t border-gray-800`}> 
        <div className="max-w-7xl mx-auto"> 
          <div className="flex flex-col md:flex-row justify-between items-center"> 
            <div className="mb-6 md:mb-0"> 
              <div className="text-2xl font-bold text-white mb-2">Oumnia Ouali</div> 
              <p className="text-purple-300"> 
                {language === 'fr' 
                  ? 'Étudiante en Développement Digital - Institut Spécialisé de Technologie Appliquée Oujda' 
                  : language === 'en' 
                  ? 'Student in Digital Development - Specialized Institute of Applied Technology Oujda' 
                  : 'طالبة في التطوير الرقمي - المعهد المتخصص للتكنولوجيا التطبيقية وجدة'} 
              </p> 
            </div> 
            <div className="flex space-x-6 mb-6 md:mb-0"> 
              {[ 
                { icon: Github, href: "https://github.com/oumnia144" }, 
                { icon: Linkedin, href: "https://www.linkedin.com/in/ouali-oumnia/" }, 
                { icon: Mail, href: "mailto:ooumnia144@gmail.com" }, 
                { icon: Phone, href: "tel:0672321517" } 
              ].map(({ icon: Icon, href }, index) => ( 
                <a 
                  key={index} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" 
                > 
                  <Icon size={20} /> 
                </a> 
              ))} 
            </div> 
            <button 
              onClick={() => scrollToSection('home')} 
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all" 
            > 
              {language === 'fr' ? 'Retour en haut ↑' : language === 'en' ? 'Back to top ↑' : 'العودة للأعلى ↑'} 
            </button> 
          </div> 
          <div className="border-t border-white/10 mt-8 pt-8 text-center"> 
            <p className="text-purple-300">{currentText.footer.copyright}</p> 
            <p className="text-purple-400/70 text-sm mt-2"> 
              {currentText.footer.study} 
            </p> 
            <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-500"> 
              <span> 
                {language === 'fr' 
                  ? 'Téléphone : 06 72 32 15 17' 
                  : language === 'en' 
                  ? 'Phone: 06 72 32 15 17' 
                  : 'الهاتف: 06 72 32 15 17'} 
              </span> 
              <span>|</span> 
              <span>Email: ooumnia144@gmail.com</span> 
            </div> 
          </div> 
        </div> 
      </footer> 
    </div> 
  ); 
}