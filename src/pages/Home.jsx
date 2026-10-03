import React, { useState, useEffect } from 'react';
import { ChevronRight, Globe, Layers, TrendingUp, Target, ArrowRight, Users, Heart, Clock, Headphones, Quote, Star, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import useSEO from '../hooks/useSEO';
import AnimatedText from '../components/AnimatedText';
import '../styles/animations.css';

/** Hero: one cursor, slow speed, start delay, types full line with middle phrase in accent, hover effects */
const HeroTypewriter = ({ startDelay = 600, speed = 130 }) => {
    const fullText = "Empowering Your \nDigital Vision \nInto Reality.";
    const [currentIndex, setCurrentIndex] = useState(0);
    const [started, setStarted] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [hoveredChar, setHoveredChar] = useState(null);

    useEffect(() => {
        const t = setTimeout(() => setStarted(true), startDelay);
        return () => clearTimeout(t);
    }, [startDelay]);

    useEffect(() => {
        if (started && currentIndex < fullText.length) {
            const t = setTimeout(() => setCurrentIndex((i) => i + 1), speed);
            return () => clearTimeout(t);
        }
    }, [started, currentIndex, speed]);

    useEffect(() => {
        const id = setInterval(() => setShowCursor((c) => !c), 500);
        return () => clearInterval(id);
    }, []);

    const currentText = fullText.slice(0, currentIndex);
    const typing = currentIndex < fullText.length;

    const line1End = fullText.indexOf("\n");
    const line2End = fullText.indexOf("\n", line1End + 1);

    const renderChar = (char, absoluteIndex) => {
        if (char === "\n") return <br key={`br-${absoluteIndex}`} />;
        if (char === " ") return <span key={absoluteIndex} className="inline-block">{"\u00A0"}</span>;

        const isAccentLine = absoluteIndex > line1End && absoluteIndex <= line2End;
        const isHovered = hoveredChar === absoluteIndex;

        return (
            <span
                key={absoluteIndex}
                onMouseEnter={() => setHoveredChar(absoluteIndex)}
                onAnimationEnd={() => setHoveredChar(null)}
                className={`inline-block transition-transform duration-200 cursor-default ${isHovered ? 'animate-rubberBand' : ''} ${isAccentLine ? 'text-home-accent hover:text-white' : ''}`}
            >
                {char}
            </span>
        );
    };

    return (
        <span>
            {currentText.split("").map((char, i) => renderChar(char, i))}
            {typing && (
                <span className={`ml-0.5 inline-block w-1 h-[0.85em] bg-current align-baseline transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`} />
            )}
        </span>
    );
};


const TestimonialCarousel = () => {
    const testimonials = [
        {
            text: "They understood what we wanted and made everything easy to use. Highly recommended!",
            name: "Arun",
            role: "Delhi, India",
            img: "https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg"
        },
        {
            text: "DSquareMart fixed our old system and made it work much better. Their team really knows what they're doing and works very carefully.",
            name: "Sarah Johnson",
            role: "Los Angeles, USA",
            img: "https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg"
        },
        {
            text: "They worked well and finished our website before the deadline. The result was better than we imagined.",
            name: "Deep Patel",
            role: "Mumbai, India",
            img: "https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg"
        },
        {
            text: "They are dependable and very good at their work. They delivered our mobile app early, and it was better than we hoped.",
            name: "David Kim",
            role: "Toronto, Canada",
            img: "https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg"
        },
        {
            text: "We needed good security. They made a system that is safe and simple to use.",
            name: "Lisa Patel",
            role: "Los Angeles, USA",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDwH1z1CCTJ_4-ES5U2x9YRQcn_8V1u4ZUQ&s"
        },
        {
            text: "The design they made is very good. Since we launched it, our users are much more active.",
            name: "James Wilson",
            role: "Berlin, Germany",
            img: "https://img.freepik.com/premium-vector/young-man-avatar-character_24877-9475.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsPerView(1);
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2);
            } else {
                setCardsPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isPaused || isDragging) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(interval);
    }, [isPaused, isDragging, currentIndex, cardsPerView]);

    const maxIndex = testimonials.length - cardsPerView;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(maxIndex);
        }
    };

    const goToSlide = (index) => {
        if (index <= maxIndex) {
            setCurrentIndex(index);
        }
    };

    const handleDragStart = (e) => {
        setIsDragging(true);
        const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        const diff = clientX - startX;
        setDragOffset(diff);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;

        const threshold = 50;
        if (dragOffset > threshold) {
            prevSlide();
        } else if (dragOffset < -threshold) {
            nextSlide();
        }

        setIsDragging(false);
        setDragOffset(0);
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Carousel Controls */}
            <div className="flex justify-end gap-2 mb-8 md:absolute md:-top-24 md:right-0">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-[#1a1a1a] border border-gray-800 text-white hover:bg-home-accent hover:text-black hover:border-home-accent transition-all shadow-sm active:scale-95 group z-20"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-[#1a1a1a] border border-gray-800 text-white hover:bg-home-accent hover:text-black hover:border-home-accent transition-all shadow-sm active:scale-95 group z-20"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>

            {/* Carousel Viewport */}
            <div
                className={`overflow-hidden py-4 -mx-4 px-4 sm:mx-0 sm:px-0 cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                <div
                    className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-out'}`}
                    style={{
                        transform: `translateX(calc(-${currentIndex * (100 / cardsPerView)}% + ${dragOffset}px))`,
                        userSelect: 'none'
                    }}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 px-3"
                            style={{ width: `${100 / cardsPerView}%` }}
                        >
                            <div className="h-full bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800 hover:border-home-accent/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col pointer-events-none">
                                <Quote className="absolute top-8 right-8 w-10 h-10 text-home-accent/20 group-hover:text-home-accent/40 transition-colors" />

                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <p className="text-gray-400 mb-8 relative z-10 leading-relaxed flex-grow">"{item.text}"</p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#0B0B0B] shadow-md flex-shrink-0">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm">{item.name}</h3>
                                        <p className="text-xs font-bold text-home-accent capitalize">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Pagination */}
            <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`transition-all cursor-pointer duration-300 rounded-full ${currentIndex === idx ? 'w-12 h-3 bg-home-accent' : 'w-3 h-3 bg-gray-300 hover:bg-home-accent/50'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const HOME_SEO = {
    title: 'DSquareMart | Home - IT Development & Software Solutions Company',
    description: 'DSquareMart is a leading IT development company. We offer web development, mobile app development (iOS & Android), UI/UX design, cloud solutions, and digital transformation services. Partner with us for scalable, future-ready software.',
    keywords: 'IT development company, software development company India, web development, mobile app development, iOS app development, Android app development, React development, UI UX design, cloud solutions, digital transformation, DSquareMart, Surat'
};

const Home = () => {
    useSEO(HOME_SEO);

    const serviceCard = [
        { icon: <Globe className="w-7 h-7" />, title: "Discover", text: "In-depth research to challenge assumptions and uncover real opportunities.", slug: "cloud-solutions" },
        { icon: <Layers className="w-7 h-7" />, title: "Design", text: "Crafting intuitive, unique interfaces that users love to interact with.", slug: "ui-ux-design" },
        { icon: <TrendingUp className="w-7 h-7" />, title: "Build", text: "Engineering robust, scalable solutions using the latest tech stacks.", slug: "web-development" },
        { icon: <Target className="w-7 h-7" />, title: "Deliver", text: "Continuous improvement and support to ensure sustained, long-term success.", slug: "maintenance-support" }
    ]
    const whyChooseCard = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "Top-Tier Talent",
            desc: "Access a dedicated team of senior developers and architects who live and breathe technology."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Client-First Approach",
            desc: "We don't just take orders; we partner with you to understand your core business challenges."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Rapid Delivery",
            desc: "Agile methodologies ensure we ship features fast without compromising on code quality or security."
        },
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "24/7 Reliability",
            desc: "Our support doesn't sleep. Round-the-clock monitoring ensures your systems are always operational."
        }
    ]

    const [activeTab, setActiveTab] = useState('Frontend');

    const techStacks = [
        { name: "React", icon: "/tech_stack/react.svg", category: "Frontend" },
        { name: "Next.js", icon: "/tech_stack/nextjs.svg", category: "Frontend" },
        { name: "HTML5", icon: "/tech_stack/html5.svg", category: "Frontend" },
        { name: "CSS3", icon: "/tech_stack/css3.svg", category: "Frontend" },
        { name: "JavaScript", icon: "/tech_stack/javascript.svg", category: "Frontend" },
        { name: "Tailwind CSS", icon: "/tech_stack/tailwindcss.svg", category: "Frontend" },
        { name: "TypeScript", icon: "/tech_stack/typescript.svg", category: "Frontend" },
        { name: "jQuery", icon: "/tech_stack/jquery.svg", category: "Frontend" },
        { name: "Bootstrap", icon: "/tech_stack/bootstrap.svg", category: "Frontend" },
        { name: "Node.js", icon: "/tech_stack/nodejs.svg", category: "Backend" },
        { name: "PHP", icon: "/tech_stack/php.svg", category: "Backend" },
        { name: "Laravel", icon: "/tech_stack/laravel.svg", category: "Backend" },
        { name: "NestJS", icon: "/tech_stack/nestjs.svg", category: "Backend" },
        { name: "ExpressJs", icon: "/tech_stack/express.svg", category: "Backend" },
        { name: "SQL", icon: "/tech_stack/sqlite.svg", category: "Backend" },
        { name: "PostgreSQL", icon: "/tech_stack/postgresql.svg", category: "Backend" },
        { name: "MongoDB", icon: "/tech_stack/mongodb.svg", category: "Backend" },
        { name: "EJS", icon: "/tech_stack/ejs.png", category: "Backend" },
        { name: "Flutter", icon: "/tech_stack/flutter.svg", category: "Mobile" },
        { name: "Dart", icon: "/tech_stack/dart.svg", category: "Mobile" },
        { name: "Swift", icon: "/tech_stack/swift.svg", category: "Mobile" },
        { name: "Kotlin", icon: "/tech_stack/kotlin.svg", category: "Mobile" },
        { name: "Xcode", icon: "/tech_stack/xcode.svg", category: "Tools" },
        { name: "Android Studio", icon: "/tech_stack/android.svg", category: "Tools" },
        { name: "VS Code", icon: "/tech_stack/vscode.svg", category: "Tools" },
        { name: "Git", icon: "/tech_stack/git.svg", category: "Tools" },
        { name: "AWS", icon: "/tech_stack/aws.svg", category: "Cloud" },
        { name: "Docker", icon: "/tech_stack/docker.svg", category: "Cloud" },
        { name: "Firebase", icon: "/tech_stack/firebase.svg", category: "Cloud" },
        { name: "Vercel", icon: "/tech_stack/vercel.svg", category: "Cloud" }
    ];

    const categories = ['Frontend', 'Backend', 'Mobile', 'Tools', 'Cloud'];

    const filteredTechs = techStacks.filter(tech => tech.category === activeTab);

    const [isHeroVisible, setIsHeroVisible] = useState(false);
    useEffect(() => {
        setIsHeroVisible(true);
    }, []);

    return (
        <div className="overflow-x-hidden bg-[#0B0B0B]">
            {/* Hero Section */}
            <section className="relative h-auto flex items-center pt-40 sm:pt-32 pb-20 overflow-hidden bg-transparent">
                <style>{`
                    @keyframes dotPan {
                        0% { background-position: 0 0; }
                        100% { background-position: 50px 50px; }
                    }
                `}</style>
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
                    backgroundSize: '50px 50px',
                    animation: 'dotPan 5s linear infinite'
                }}></div>
                <div className="absolute top-0 right-0 -mr-32 -mt-32 w-120 h-120 bg-home-accent/5 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-120 h-120 bg-home-accent/5 rounded-full blur-3xl opacity-40"></div>

                <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
                            <div className="inline-flex items-center px-4 py-2 bg-home-accent/10 text-home-accent rounded-full text-sm font-bold tracking-[0.2em] uppercase">
                                <span className="flex h-2 w-2 rounded-full bg-home-accent mr-2 animate-ping"></span>
                                IT Excellence Redefined
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight min-h-[160px] md:min-h-[180px] lg:min-h-[220px]">
                                <HeroTypewriter startDelay={1800} speed={140} />
                            </h1>

                            <p className="text-base md:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                                DSquareMart offers top-quality software development and IT consulting. We build strong, easy-to-use solutions that help businesses grow.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
                                <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-home-accent text-black font-bold rounded-2xl shadow-2xl shadow-home-accent/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95">
                                    Get Started <ChevronRight className="w-5 h-5" />
                                </Link>
                                <Link to="/about" className="w-full sm:w-auto px-10 py-5 text-white font-bold rounded-2xl border-2 border-gray-800 hover:bg-gray-900 transition-all flex items-center justify-center group">
                                    Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Visual Content */}
                        <div className="lg:w-1/2 relative mt-12 lg:mt-0">
                            <div className="relative z-10 animate-float">
                                <div className="absolute inset-0 bg-home-accent/10 rounded-[3rem] blur-2xl -z-10 animate-pulse"></div>
                                <img
                                    src="/images/home_hero.webp"
                                    alt="IT Solutions"
                                    className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] rounded-3xl"
                                />
                            </div>

                            {/* Floating Element 1 */}
                            <div className="absolute top-0 -right-6 lg:-right-12 glass p-5 rounded-2xl shadow-2xl z-20 hidden sm:block animate-bounce">
                                <div className="flex items-center gap-4">
                                    <div className="bg-home-accent p-3 rounded-xl shadow-lg shadow-home-accent/10">
                                        <TrendingUp className="text-black w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-black text-white uppercase">Scalable</h3>
                                        <p className="text-[10px] font-bold text-gray-400">Infrastructure</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Element 2 */}
                            <div className="absolute -bottom-8 -left-6 lg:-left-12 glass p-5 rounded-2xl shadow-2xl z-20 hidden md:block animate-bounce">
                                <div className="flex items-center gap-4">
                                    <div className="bg-home-accent p-3 rounded-xl shadow-lg shadow-home-accent/50">
                                        <Target className="text-black w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-black text-white uppercase">99.9% Uptime</h3>
                                        <p className="text-[10px] font-bold text-gray-400">Reliable Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-[#0B0B0B] to-[#121212] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, var(--color-home-accent) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-home-accent/10 rounded-full blur-3xl -mt-96"></div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                        <Reveal>
                            <div className="inline-flex items-center px-4 py-2 bg-home-accent/10 text-home-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-home-accent mr-2"></span>
                                How We Work
                            </div>
                        </Reveal>
                        <Reveal delay={200}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                                <AnimatedText text="Our " />
                                <span className="text-home-accent">
                                    <AnimatedText text="Development" hoverColor="text-white" />
                                </span>
                                <AnimatedText text=" Process" />
                            </h2>
                        </Reveal>
                        <Reveal delay={300}>
                            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium">
                                A rigorous, user-centric process to ensure every line of code adds maximum value to your business.
                            </p>
                        </Reveal>
                    </div>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {serviceCard.map((service, index) => (
                            <Reveal key={index} delay={index * 150}>
                                <Link
                                    to={`/services/${service.slug}`}
                                    className="group block h-full transition-all duration-700"
                                >
                                    <div className="h-full p-7 md:p-8 bg-[#1a1a1a] rounded-2xl md:rounded-[1.5rem] border border-gray-800 hover:border-home-accent/20 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(251,146,60,0.1)] transition-all duration-500 hover:-translate-y-2">
                                        <div className="mb-6 w-14 h-14 bg-home-accent text-black rounded-xl flex items-center justify-center shadow-lg shadow-home-accent/30 group-hover:scale-110 transition-all duration-500">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black mb-3 text-white transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {service.text}
                                        </p>
                                        <div className="mt-8 flex items-center text-home-accent font-bold text-sm tracking-tight group-hover:gap-2 transition-all">
                                            View Details <ChevronRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 md:py-28 bg-transparent relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-home-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Image Side */}
                        <Reveal className="w-full lg:w-1/2 relative">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-br from-home-accent/10 to-home-accent/5 rounded-3xl -rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
                                <img
                                    src="/images/home_about.webp"
                                    alt="Who We Are"
                                    className="relative z-10 rounded-2xl shadow-xl object-cover w-full h-[350px] sm:h-[420px] md:h-[480px]"
                                />
                            </div>
                        </Reveal>

                        {/* Text Side */}
                        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                            <Reveal>
                                <div className="inline-flex items-center px-4 py-2 bg-home-accent/10 text-home-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                                    <span className="flex h-2 w-2 rounded-full bg-home-accent mr-2"></span>
                                    About the Company
                                </div>
                            </Reveal>

                            <Reveal delay={200}>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    <AnimatedText text="Innovating with Purpose" /> <br className="hidden sm:block" />
                                    <span className="text-home-accent">
                                        <AnimatedText text="Day After Day" hoverColor="text-white" />
                                    </span>
                                </h2>
                            </Reveal>

                            <Reveal delay={300}>
                                <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium mb-8 md:mb-10">
                                    At DSquareMart, we build solutions that support business growth. Our mission is to turn complicated technology into something simple for users.
                                </p>
                            </Reveal>

                            {/* Stats Grid */}
                            <Reveal delay={400}>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
                                    {[
                                        { value: "5+", label: "Years" },
                                        { value: "80+", label: "Projects" },
                                        { value: "30+", label: "Clients" },
                                        { value: "10+", label: "Team" }
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-4 bg-[#1a1a1a] rounded-xl hover:bg-[#252525] transition-colors duration-300">
                                            <h3 className="text-2xl md:text-3xl font-black text-white leading-none mb-1">{stat.value}</h3>
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>

                            {/* CTA */}
                            <Reveal delay={500}>
                                <Link to="/about" className="inline-flex items-center px-8 py-4 bg-home-accent text-black text-sm font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-home-accent/30 active:scale-95 group">
                                    Learn More
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* App & Web Section */}
            <section className="py-20 md:py-28 bg-[#121212] text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,146,60,0.08),transparent_70%)]"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Side */}
                        <div className="w-full lg:w-1/2 order-1">
                            <Reveal>
                                <div className="inline-flex items-center px-4 py-2 bg-home-accent/10 text-home-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-home-accent/20">
                                    <span className="flex h-2 w-2 rounded-full bg-home-accent mr-2"></span>
                                    What We Do
                                </div>
                            </Reveal>

                            <Reveal delay={200}>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
                                    <AnimatedText text="Beyond Limits in " /> <br className="hidden sm:block" />
                                    <span className="text-home-accent">
                                        <AnimatedText text="App & Web" hoverColor="text-white" />
                                    </span>
                                    <AnimatedText text=" Development" />
                                </h2>
                            </Reveal>

                            <Reveal delay={300}>
                                <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium mb-8 md:mb-10">
                                    Our passion pushes us to create digital products that raise the bar. From easy-to-use mobile apps to powerful web platforms, we deliver great quality.
                                </p>
                            </Reveal>

                            <Reveal delay={500}>
                                <Link to="/services" className="inline-flex items-center px-8 py-4 bg-home-accent text-black text-sm font-bold rounded-xl transition-all shadow-lg hover:bg-blue-600 hover:shadow-home-accent/30 active:scale-95 group">
                                    Explore Our Tech
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Reveal>
                        </div>
                        {/* Image Side */}
                        <Reveal className="w-full lg:w-1/2 order-2">
                            <div className="relative group">
                                <div className="absolute -inset-1 from-home-accent/30 to-home-accent/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                                <img
                                    src="/images/home_app_web.webp"
                                    alt="App & Web Development"
                                    className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-2xl group-hover:scale-[1.01] transition-transform duration-500"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Tech Stacks Section */}
            <section className="py-24 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <Reveal>
                            <div className="inline-flex items-center px-4 py-2 bg-home-accent/10 text-home-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-home-accent mr-2"></span>
                                Technology Suite
                            </div>
                        </Reveal>
                        <Reveal delay={200}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                <AnimatedText text="Our " />
                                <span className="text-home-accent">
                                    <AnimatedText text="Tech Stacks" hoverColor="text-white" />
                                </span>
                            </h2>
                        </Reveal>
                        <Reveal delay={300}>
                            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-medium">
                                We use the most modern and reliable technologies and AI-assisted tools in our coding to build scalable solutions that stand the test of time.
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* Filter Tabs */}
                <Reveal>
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                                    ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105'
                                    : 'bg-[#1a1a1a] text-gray-500 hover:bg-[#252525] hover:shadow-md border border-transparent'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                    {filteredTechs.map((tech, idx) => (
                        <Reveal key={idx} delay={(idx % 6) * 100}>
                            <div className="group flex flex-col items-center gap-4 transition-all duration-500">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1a1a1a] rounded-3xl flex items-center justify-center p-5 shadow-sm border border-gray-800 group-hover:bg-[#252525] group-hover:shadow-2xl group-hover:border-home-accent/20 group-hover:-translate-y-2 transition-all duration-500">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-full h-full object-contain transition-all duration-700 transform group-hover:scale-110"
                                    />
                                </div>
                                <div className="text-center">
                                    <span className="text-[10px] md:text-xs font-black text-gray-400 group-hover:text-home-accent transition-colors uppercase tracking-[0.2em]">{tech.name}</span>
                                    <p className="text-[8px] font-bold text-gray-300 uppercase mt-1">{tech.category}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 md:py-32 bg-[#0F0F0F] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, var(--color-home-accent) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-home-accent/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* Header Content */}
                        <div className="lg:w-1/3 lg:sticky lg:top-32">
                            <Reveal>
                                <div className="inline-flex items-center px-4 py-2 bg-[#1a1a1a] border border-home-accent/20 text-home-accent rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
                                    <span className="flex h-2 w-2 rounded-full bg-home-accent mr-2 animate-pulse"></span>
                                    Why Choose Us
                                </div>
                            </Reveal>
                            <Reveal delay={200}>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1]">
                                    <AnimatedText text="Designed for" /> <br />
                                    <span className="text-home-accent">
                                        <AnimatedText text="Growth & Scale." hoverColor="text-white" />
                                    </span>
                                </h2>
                            </Reveal>
                            <Reveal delay={300}>
                                <p className="text-lg text-gray-500 leading-relaxed font-medium mb-6">
                                    We go beyond writing code. We build strong, scalable digital systems that help your business grow in today's digital world.
                                </p>
                            </Reveal>

                            <Reveal delay={400}>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-2xl border border-gray-800 shadow-sm">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="text-white font-black text-sm">30+ Happy Clients</p>
                                            <p className="text-gray-400 text-xs font-bold">Globally Trusted</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Why Choose Cards */}
                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 md:gap-8">
                            {whyChooseCard.map((card, idx) => (
                                <Reveal key={idx} delay={idx * 150}>
                                    <div className="group p-8 bg-[#1a1a1a] rounded-3xl border border-gray-800 hover:border-home-accent/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                                        <div className="w-12 h-12 bg-home-accent/10 rounded-2xl flex items-center justify-center text-home-accent mb-6 group-hover:bg-home-accent group-hover:text-black transition-all duration-300">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-black text-white mb-3">
                                            <AnimatedText text={card.title} hoverColor="text-home-accent" />
                                        </h3>
                                        <p className="text-gray-400 font-medium leading-relaxed">{card.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 relative">
                        <Reveal>
                            <div className="inline-flex items-center px-4 py-2 bg-home-accent/10 text-home-accent rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-home-accent mr-2"></span>
                                What Clients Say
                            </div>
                        </Reveal>
                        <Reveal delay={200}>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                <AnimatedText text="Trusted by " />
                                <span className="text-home-accent">
                                    <AnimatedText text="Businesses" hoverColor="text-white" />
                                </span>
                                <AnimatedText text=" Worldwide" />
                            </h2>
                        </Reveal>
                        <Reveal delay={300}>
                            <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed">
                                Don't just take our word for it. Here's what our clients have to say about working with DSquareMart.
                            </p>
                        </Reveal>
                    </div>
                    <TestimonialCarousel />
                </div>
            </section>

            {/* FAQ Section */}
            <Reveal>
                <FAQ />
            </Reveal>

            {/* CTA Section */}
            <section className="py-24 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <Reveal>
                        <div className="relative rounded-[2rem] md:rounded-[3rem] bg-[#1a1a1a] border border-gray-800 p-12 md:p-16 lg:p-20 overflow-hidden text-center shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-b from-home-accent/5 to-transparent opacity-50 pointer-events-none"></div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-home-accent/5 rounded-full blur-3xl"></div>

                            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                                <Reveal delay={200}>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                                        <AnimatedText text="Ready to Build Something" /> <br className="hidden md:block" />
                                        <span className="text-home-accent inline-block">
                                            <AnimatedText text="Extraordinary?" hoverColor="text-white" />
                                        </span>
                                    </h2>
                                </Reveal>
                                <Reveal delay={400}>
                                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                                        Let's turn your vision into a digital masterpiece. Scalable, secure, and designed for tomorrow's growth.
                                    </p>
                                </Reveal>
                                <Reveal delay={600}>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
                                        <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-home-accent text-black font-bold text-lg rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group/btn min-w-[200px]">
                                            Get Started Now
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                        <Link to="/services" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all backdrop-blur-md min-w-[200px] group">
                                            View Services
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
