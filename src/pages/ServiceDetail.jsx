import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import AnimatedText from '../components/AnimatedText';
import useSEO from '../hooks/useSEO';
import {
    CheckCircle2,
    Layout,
    Smartphone,
    Globe,
    ShieldCheck,
    BarChart,
    LifeBuoy,
    ArrowRight,
    Zap,
    Users,
    Atom,
    Code2,
    Cpu,
    Database,
    Figma,
    Layers,
    Monitor,
    Shield,
    Workflow,
    BarChart3,
    Search,
    MessageSquare,
    Settings,
    Activity,
    Cloud,
    Terminal,
    Box,
    FileText,
    Rocket,
    ShieldAlert,
    Target,
    ExternalLink,
    Flame,
    Bug,
    Gauge,
    GitBranch,
    Blocks,
    PenTool,
    Palette,
    Eye,
    Facebook,
    MonitorPlay,
    Server
} from 'lucide-react';
import FAQ from '../components/FAQ';

import serviceDataJSON from '../data/services.json';

const LucideIcons = {
    CheckCircle2,
    Layout,
    Smartphone,
    Globe,
    ShieldCheck,
    BarChart,
    LifeBuoy,
    ArrowRight,
    Zap,
    Users,
    Atom,
    Code2,
    Cpu,
    Database,
    Figma,
    Layers,
    Monitor,
    Shield,
    Workflow,
    BarChart3,
    Search,
    MessageSquare,
    Settings,
    Activity,
    Cloud,
    Terminal,
    Box,
    FileText,
    Rocket,
    ShieldAlert,
    Target,
    ExternalLink,
    Flame,
    Bug,
    Gauge,
    GitBranch,
    Blocks,
    PenTool,
    Palette,
    Eye,
    Facebook,
    MonitorPlay,
    Server
};

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { services } = serviceDataJSON;
    const service = services.find(s => s.slug === id);

    useSEO(service ? {
        title: `${service.title} Solutions | DSquareMart`,
        description: service.longDescription || service.description,
        keywords: `${service.title}, ${service.title} services, DSquareMart ${service.title}, ${service.techStack?.map(t => t.name).join(', ') || ''}`
    } : {});

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!service) {
            navigate('/services');
        }
    }, [id, service, navigate]);

    if (!service) return null;

    return (
        <div className="pt-20 bg-[#0B0B0B] min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-[#121212]">
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

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Reveal>
                            <div className="w-24 h-24 bg-[#1a1a1a] rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl text-white border border-gray-800">
                                {(() => {
                                    const HeroIcon = LucideIcons[service.icon] || Layout;
                                    return <HeroIcon size={40} />;
                                })()}
                            </div>
                        </Reveal>
                        <Reveal delay={200}>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 cursor-default">
                                <AnimatedText text={`${service.title} `} />
                                <span className="text-primary italic inline-block">
                                    <AnimatedText text="Solutions." hoverColor="text-white" />
                                </span>
                            </h1>
                        </Reveal>
                        <Reveal delay={400}>
                            <p className="text-xl text-gray-300 leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-[#0B0B0B]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <Reveal>
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight cursor-default">
                                    <AnimatedText text="Deep Dive Into Our " />
                                    <br />
                                    <span className="text-primary inline-block">
                                        <AnimatedText text={`${service.title} `} hoverColor="text-white" />
                                    </span>
                                    <AnimatedText text="Services." />
                                </h2>
                            </Reveal>
                            <Reveal delay={200}>
                                <p className="text-lg text-gray-400 font-medium leading-relaxed mb-8">
                                    {service.longDescription}
                                </p>
                            </Reveal>
                            <Reveal delay={300}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-gray-300 font-bold text-sm tracking-tight">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {service.features.map((feature, idx) => (
                                    <Reveal key={idx} delay={idx * 150}>
                                        <div className="p-8 bg-[#1a1a1a] rounded-3xl border border-gray-800 hover:border-primary/20 hover:bg-[#202020] hover:shadow-xl transition-all duration-700 group h-full">
                                            <h4 className="text-lg font-black text-white mb-3 group-hover:text-primary transition-colors">
                                                <AnimatedText text={feature.title} hoverColor="text-primary" />
                                            </h4>
                                            <p className="text-sm text-gray-400 leading-relaxed font-medium">{feature.desc}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-[#121212] overflow-hidden relative">
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 cursor-default">
                                <AnimatedText text="Execution " />
                                <span className="text-primary italic inline-block">
                                    <AnimatedText text="Process" hoverColor="text-white" />
                                </span>
                            </h2>
                        </Reveal>
                        <Reveal delay={200}>
                            <p className="text-gray-400 text-lg font-medium">How we turn your requirement into a successful reality.</p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.process.map((step, idx) => (
                            <Reveal key={idx} delay={idx * 150}>
                                <div className="relative group">
                                    {idx < service.process.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 left-[80%] w-full h-[2px] bg-gradient-to-r from-gray-800 to-transparent z-0"></div>
                                    )}
                                    <div className="relative z-10 text-center">
                                        <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-gray-800 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 text-white">
                                            <span className="text-2xl font-black">{idx + 1}</span>
                                        </div>
                                        <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tight">
                                            <AnimatedText text={step.title} hoverColor="text-primary" />
                                        </h4>
                                        <p className="text-sm text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-24 bg-[#0B0B0B]">
                <div className="container mx-auto px-6">
                    <Reveal>
                        <div className="bg-[#1a1a1a] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl border border-gray-800">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                            <Reveal delay={200}>
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-12 relative z-10 cursor-default">
                                    <AnimatedText text="Technologies " />
                                    <span className="text-primary italic inline-block">
                                        <AnimatedText text="We Use" hoverColor="text-white" />
                                    </span>
                                </h2>
                            </Reveal>

                            <div className="flex flex-wrap justify-center gap-6 relative z-10">
                                {service.techStack.map((tech, idx) => {
                                    const isImagePath = tech.icon.startsWith('/') || tech.icon.startsWith('http');
                                    const IconComponent = !isImagePath ? (LucideIcons[tech.icon] || Code2) : null;

                                    return (
                                        <Reveal key={idx} delay={300 + idx * 50}>
                                            <div className="group px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-white font-bold tracking-tight hover:border-primary hover:-translate-y-1 transition-all duration-300 cursor-default flex items-center gap-3 shadow-lg">
                                                <div className="flex items-center justify-center w-6 h-6 shrink-0">
                                                    {isImagePath ? (
                                                        <img
                                                            src={tech.icon}
                                                            alt={tech.name}
                                                            className="w-full h-full object-contain filter brightness-100 transition-all duration-300"
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                const slug = tech.name.toLowerCase().replace(/\s+/g, '-');
                                                                e.target.src = `https://cdn.simpleicons.org/${slug}/white`;
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="text-primary group-hover:text-white transition-colors duration-300">
                                                            <IconComponent className="w-5 h-5" />
                                                        </div>
                                                    )}
                                                </div>
                                                <span>{tech.name}</span>
                                            </div>
                                        </Reveal>
                                    );
                                })}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* FAQ Section */}
            <Reveal>
                <FAQ />
            </Reveal>

            {/* Final CTA */}
            <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] opacity-30"></div>
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px] opacity-30"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <Reveal>
                        <div className="max-w-7xl mx-auto relative rounded-[3rem] md:rounded-[4rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden group">
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-1000"></div>

                            <div className="relative z-10 px-6 py-16 md:px-16 md:py-24 flex flex-col items-center text-center">
                                <Reveal delay={200}>
                                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-xs font-black tracking-[0.2em] uppercase mb-10 rounded-full shadow-[0_0_20px_rgba(77,163,255,0.2)]">
                                        <Zap className="w-4 h-4 mr-2.5 fill-primary" />
                                        <span>Future-Proof Your Business</span>
                                    </div>
                                </Reveal>

                                <Reveal delay={300}>
                                    <h3 className="text-3xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight cursor-default">
                                        <AnimatedText text="Scale your " />
                                        <span className="text-primary italic inline-block">
                                            <AnimatedText text="impact" hoverColor="text-white" />
                                        </span>
                                        <AnimatedText text={` with expert ${service.title}.`} />
                                    </h3>
                                </Reveal>

                                <Reveal delay={400}>
                                    <p className="text-base md:text-xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                        Don't settle for mediocre. Partner with DSquareMart to build robust, scalable, and stunning digital experiences that drive real results.
                                    </p>
                                </Reveal>

                                <Reveal delay={600}>
                                    <div className="flex flex-col lg:flex-row gap-4 justify-center w-full lg:w-auto items-center">
                                        <Link to="/contact" className="w-full lg:w-max px-8 py-4 bg-primary text-black hover:bg-[#b0b8c0] font-black text-base uppercase tracking-widest rounded-2xl shadow-[0_10px_30px_rgba(77,163,255,0.3)] hover:shadow-[0_15px_40px_rgba(77,163,255,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                                            Start Project <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                        </Link>
                                        <button onClick={() => navigate('/contact')} className="w-full lg:w-max px-8 py-4 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-black text-base uppercase tracking-widest rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer">
                                            <Users className="w-5 h-5 text-gray-500" />
                                            Book a Call
                                        </button>
                                    </div>
                                </Reveal>

                                <Reveal delay={800}>
                                    <div className="mt-20 pt-10 border-t border-white/10 w-full">
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                                            <div className="flex flex-col items-center group/stat">
                                                <span className="text-white font-black text-2xl md:text-3xl mb-1 group-hover/stat:text-primary transition-colors">99%</span>
                                                <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Client Satisfaction</span>
                                            </div>
                                            <div className="flex flex-col items-center group/stat">
                                                <span className="text-white font-black text-2xl md:text-3xl mb-1 group-hover/stat:text-primary transition-colors">24/7</span>
                                                <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Priority Support</span>
                                            </div>
                                            <div className="flex flex-col items-center group/stat">
                                                <span className="text-white font-black text-2xl md:text-3xl mb-1 group-hover/stat:text-primary transition-colors">150+</span>
                                                <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Global Deliveries</span>
                                            </div>
                                            <div className="flex flex-col items-center group/stat">
                                                <span className="text-white font-black text-2xl md:text-3xl mb-1 group-hover/stat:text-primary transition-colors">15x</span>
                                                <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Avg. Scalability</span>
                                            </div>
                                        </div>
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

export default ServiceDetail;
