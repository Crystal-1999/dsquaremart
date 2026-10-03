import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import AnimatedText from '../components/AnimatedText';
import useSEO from '../hooks/useSEO';
import {
    Globe,
    Smartphone,
    Layout,
    Cloud,
    ShieldCheck,
    BarChart,
    ArrowRight,
    CheckCircle2,
    Search,
    PencilRuler,
    Code2,
    Rocket,
    Clock,
    Users,
    Zap,
    LifeBuoy
} from 'lucide-react';
import FAQ from '../components/FAQ';

import serviceDataJSON from '../data/services.json';

const LucideIcons = {
    Globe,
    Smartphone,
    Layout,
    Cloud,
    ShieldCheck,
    BarChart,
    LifeBuoy,
    ArrowRight,
    CheckCircle2,
    Search,
    PencilRuler,
    Code2,
    Rocket,
    Clock,
    Users,
    Zap
};

const SERVICES_SEO = {
    title: 'Services | DSquareMart - Digital Solutions & Expertise',
    description: 'Explore DSquareMart services: web development, mobile app development, UI/UX design, cloud solutions, cybersecurity, and more. Future-ready digital solutions.',
    keywords: 'IT services, web development services, mobile app development, UI UX design, cloud solutions, digital solutions, DSquareMart services'
};

const Services = () => {
    useSEO(SERVICES_SEO);
    const { services } = serviceDataJSON;

    const processSteps = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Discovery",
            desc: "We dive deep into your requirements and business goals."
        },
        {
            icon: <PencilRuler className="w-6 h-6" />,
            title: "Design",
            desc: "Crafting the visual and functional blueprint of your product."
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Development",
            desc: "Writing clean, efficient, and scalable code for your solution."
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Delivery",
            desc: "Launching your product and providing ongoing support."
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative pt-48 pb-20 md:pt-64 md:pb-32 bg-[#121212] overflow-hidden">
                {/* Background Pattern */}
                <style jsx>{`
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
                <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <Reveal>
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-widest uppercase mb-8 border border-white/10">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            Our Expertise
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 cursor-default">
                            <AnimatedText text="Future-Ready " />
                            <span className="text-primary inline-block">
                                <AnimatedText text="Digital Solutions." hoverColor="text-white" />
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal delay={400}>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
                            We combine cutting-edge technology with creative excellence to deliver software solutions that drive growth, efficiency, and scale.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="py-24 bg-transparent relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 cursor-default">
                                <AnimatedText text="Services We " />
                                <span className="text-primary inline-block">
                                    <AnimatedText text="Provide" hoverColor="text-white" />
                                </span>
                            </h2>
                        </Reveal>
                        <Reveal delay={200}>
                            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
                        </Reveal>
                        <Reveal delay={300}>
                            <p className="text-gray-400 text-lg font-medium">
                                Comprehensive technology services tailored to your specific business needs.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, idx) => (
                            <Reveal
                                key={idx}
                                delay={idx * 150}
                                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                                className="group p-6 bg-[#1a1a1a] rounded-[2rem] border border-gray-800 hover:border-primary/20 hover:bg-[#202020] hover:shadow-2xl transition-all duration-700 relative overflow-hidden flex flex-col h-full"
                            >
                                {/* Service Background shape */}
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full group-hover:bg-primary/5 transition-colors duration-500"></div>

                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg bg-[#252525] text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110 p-4`}>
                                    {(() => {
                                        const isImagePath = service.icon.startsWith('/') || service.icon.startsWith('http');
                                        if (isImagePath) {
                                            return (
                                                <img
                                                    src={service.icon}
                                                    alt={service.title}
                                                    className="w-8 h-8 object-contain filter brightness-100 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg'; // Generic fallback
                                                    }}
                                                />
                                            );
                                        }
                                        const IconComponent = LucideIcons[service.icon] || Layout;
                                        return <IconComponent className="w-8 h-8" />;
                                    })()}
                                </div>

                                <h3 className="text-2xl font-black text-white mb-5 group-hover:text-primary transition-colors">
                                    <AnimatedText text={service.title} hoverColor="text-white" />
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-8 font-medium">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {service.featuresList.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center text-sm font-bold text-gray-400">
                                            <CheckCircle2 className="w-4 h-4 mr-3 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link to={`/services/${service.slug}`} className="mt-auto inline-flex items-center text-primary font-black text-xs uppercase tracking-widest transition-all">
                                    View Details <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 bg-[#121212] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="lg:w-1/2">
                            <Reveal>
                                <div className="inline-flex items-center px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-full text-secondary text-xs font-black tracking-widest uppercase mb-6 shadow-sm">
                                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                                    Step by Step
                                </div>
                            </Reveal>
                            <Reveal delay={200}>
                                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 cursor-default">
                                    <AnimatedText text="How We " />
                                    <span className="text-primary italic inline-block">
                                        <AnimatedText text="Deliver" hoverColor="text-white" />
                                    </span>
                                    <AnimatedText text=" Results." />
                                </h2>
                            </Reveal>
                            <Reveal delay={300}>
                                <p className="text-lg text-gray-400 font-medium mb-12 leading-relaxed">
                                    Our process is built on transparency, collaboration, and high standards of execution. From initial discovery to final deployment, we ensure every step is optimized for your success.
                                </p>
                            </Reveal>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <Reveal delay={400} className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#252525] flex flex-shrink-0 items-center justify-center shadow-lg text-primary border border-gray-800">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white mb-1 uppercase tracking-tight transition-colors duration-300 hover:text-primary cursor-default">
                                            <AnimatedText text="On-Time Delivery" hoverColor="text-primary" />
                                        </h4>
                                        <p className="text-sm text-gray-400 font-medium">Efficient workflows for rapid turnaround.</p>
                                    </div>
                                </Reveal>
                                <Reveal delay={500} className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#252525] flex flex-shrink-0 items-center justify-center shadow-lg text-primary border border-gray-800">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white mb-1 uppercase tracking-tight transition-colors duration-300 hover:text-primary cursor-default">
                                            <AnimatedText text="Expert Team" hoverColor="text-primary" />
                                        </h4>
                                        <p className="text-sm text-gray-400 font-medium">Senior developers at every stage.</p>
                                    </div>
                                </Reveal>
                                <Reveal delay={600} className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#252525] flex flex-shrink-0 items-center justify-center shadow-lg text-primary border border-gray-800">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white mb-1 uppercase tracking-tight transition-colors duration-300 hover:text-primary cursor-default">
                                            <AnimatedText text="Rapid Response" hoverColor="text-primary" />
                                        </h4>
                                        <p className="text-sm text-gray-400 font-medium">Real-time collaboration & updates.</p>
                                    </div>
                                </Reveal>
                                <Reveal delay={700} className="flex gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#252525] flex flex-shrink-0 items-center justify-center shadow-lg text-primary border border-gray-800">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white mb-1 uppercase tracking-tight transition-colors duration-300 hover:text-primary cursor-default">
                                            <AnimatedText text="Quality First" hoverColor="text-primary" />
                                        </h4>
                                        <p className="text-sm text-gray-400 font-medium">Rigorous testing & high standards.</p>
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="space-y-8 relative">
                                {/* Connector Line */}
                                <div className="absolute left-[31px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary via-blue-200 to-transparent hidden sm:block"></div>

                                {processSteps.map((step, idx) => (
                                    <Reveal key={idx} delay={idx * 200} className="flex gap-8 group items-center relative z-10">
                                        <div className="w-16 h-16 rounded-3xl bg-[#252525] flex flex-shrink-0 items-center justify-center shadow-xl border border-gray-800 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            {step.icon}
                                        </div>
                                        <div className="p-6 md:p-8 bg-[#1a1a1a] rounded-3xl border border-gray-800 shadow-sm flex-grow group-hover:shadow-xl transition-all duration-300">
                                            <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight transition-colors duration-300 hover:text-primary cursor-default">
                                                <AnimatedText text={`${idx + 1}. ${step.title}`} hoverColor="text-primary" />
                                            </h4>
                                            <p className="text-gray-400 font-medium">{step.desc}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <Reveal>
                <FAQ />
            </Reveal>

            {/* CTA Section */}
            <section className="py-24 bg-transparent relative">
                <div className="container mx-auto px-6">
                    <Reveal>
                        <div className="relative rounded-[2rem] md:rounded-[2rem] bg-[#1a1a1a] border border-gray-800 p-12 md:p-16 lg:p-20 overflow-hidden text-center shadow-2xl transition-all duration-500">
                            {/* Simple Background Gradient - Very Subtle */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>

                            <div className="relative z-10 text-center max-w-4xl mx-auto">
                                <Reveal delay={200}>
                                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight cursor-default">
                                        <AnimatedText text="Ready to " />
                                        <span className="text-primary italic inline-block">
                                            <AnimatedText text="Accelerate" hoverColor="text-white" />
                                        </span>
                                        <AnimatedText text=" Your Digital Journey?" />
                                    </h2>
                                </Reveal>
                                <Reveal delay={400}>
                                    <p className="text-gray-300 text-lg md:text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
                                        Let's build something extraordinary together. Whether you're a startup or an enterprise, we have the expertise to scale your vision.
                                    </p>
                                </Reveal>
                                <Reveal delay={600}>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                        <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-primary text-black font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:bg-[#b0b8c0] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
                                            Start a Project <ArrowRight className="w-5 h-5" />
                                        </Link>
                                        <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white font-black uppercase tracking-widest border border-white/20 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center">
                                            Talk to Expert
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

export default Services;
