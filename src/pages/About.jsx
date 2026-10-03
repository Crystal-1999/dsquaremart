import React from 'react';
import { Target, Eye, Rocket, Users, Award, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import AnimatedText from '../components/AnimatedText';
import useSEO from '../hooks/useSEO';

const ABOUT_SEO = {
    title: 'About Us | DSquareMart - Technology Solutions Provider',
    description: 'Learn about DSquareMart, a leading technology solutions provider. Our mission, vision, and team are dedicated to redefining the digital landscape and helping businesses innovate.',
    keywords: 'about DSquareMart, technology company India, software company Surat, digital transformation, IT solutions, mission vision, tech team'
};

const About = () => {
    useSEO(ABOUT_SEO);
    return (
        <div className="bg-[#0B0B0B] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-48 pb-12 overflow-hidden bg-transparent">
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
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-50 -z-10"></div>

                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Reveal>
                            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                                Empowering Innovation
                            </span>
                        </Reveal>
                        <Reveal delay={200}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
                                <AnimatedText text="Redefining the " />
                                <span className="text-primary">
                                    <AnimatedText text="Digital Landscape" hoverColor="text-white" />
                                </span>
                                <AnimatedText text=" for Tomorrow." />
                            </h1>
                        </Reveal>
                        <Reveal delay={400}>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-4xl mx-auto font-medium">
                                DSquareMart is a leading technology solutions provider dedicated to helping businesses navigate the complexities of the digital age with innovative strategies and cutting-edge development. We use AI tools in our coding and development process to deliver faster, higher-quality solutions.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 md:py-20 bg-[#121212]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Mission */}
                        <Reveal className="h-full">
                            <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-800 group h-full">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-white mb-6 uppercase tracking-tight">
                                    <AnimatedText text="Our Mission" hoverColor="text-primary" />
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                    To empower businesses globally by providing innovative, scalable, and reliable technology solutions that drive growth, efficiency, and exceptional user experiences. We strive to be the bridge between complex technology and business success.
                                </p>
                            </div>
                        </Reveal>

                        {/* Vision */}
                        <Reveal delay={200} className="h-full">
                            <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-800 group h-full">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <Eye className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-white mb-6 uppercase tracking-tight">
                                    <AnimatedText text="Our Vision" hoverColor="text-primary" />
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                    To be the most trusted global partner for digital transformation, recognized for our commitment to excellence, integrity, and the continuous pursuit of technological advancement that shapes a better future for all.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="lg:w-1/2">
                            <Reveal>
                                <div className="relative">
                                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
                                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                        <img
                                            src="/images/about-bg.webp"
                                            alt="Team collaboration"
                                            className="w-full h-[500px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                                        <div className="absolute bottom-8 left-8 right-8 text-white">
                                            <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">Our Workplace</p>
                                            <h3 className="text-2xl font-bold">
                                                <AnimatedText text="Innovation at the core of everything we do." hoverColor="text-primary" />
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-8 -right-8 bg-[#1a1a1a] p-8 rounded-3xl shadow-2xl border border-gray-800 hidden lg:block animate-bounce">
                                        <div className="flex items-center gap-4">
                                            <div className="text-5xl font-black text-primary">5+</div>
                                            <div className="text-sm font-bold text-white uppercase tracking-widest leading-tight">
                                                Years of <br /> Excellence
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="lg:w-1/2">
                            <Reveal delay={200}>
                                <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                                    Established 2019
                                </div>
                            </Reveal>
                            <Reveal delay={300}>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 uppercase tracking-tight">
                                    <AnimatedText text="Our Journey & " />
                                    <br />
                                    <span className="text-primary inline-block">
                                        <AnimatedText text="Passion for Tech" hoverColor="text-white" />
                                    </span>
                                </h2>
                            </Reveal>
                            <Reveal delay={400}>
                                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                                    <p>
                                        Founded with a vision to bridge the gap between business needs and technological possibilities, DSquareMart has evolved from a small team of enthusiasts into a powerhouse of digital innovation.
                                    </p>
                                    <p>
                                        Over the years, we have partnered with startups and industry giants alike, delivering bespoke solutions that solve real-world problems. Our culture is built on curiosity, collaboration, and a relentless drive for perfection.
                                    </p>
                                </div>
                            </Reveal>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-8">
                                {[
                                    "Expert Developers",
                                    "Proven Track Record",
                                    "Agile Methodology",
                                    "Round-the-clock Support"
                                ].map((item, idx) => (
                                    <Reveal key={idx} delay={500 + (idx * 100)}>
                                        <div className="flex items-center gap-3 bg-[#1a1a1a] p-4 rounded-xl border border-gray-800">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-bold text-white">{item}</span>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-[#0F0F0F] text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,146,60,0.05),transparent_70%)]"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-6 text-center mb-16 relative z-10">
                    <Reveal>
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Core Values</span>
                    </Reveal>
                    <Reveal delay={200}>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
                            <AnimatedText text="What Drives Us " />
                            <span className="text-primary inline-block">
                                <AnimatedText text="Every Day" hoverColor="text-white" />
                            </span>
                        </h2>
                    </Reveal>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { icon: <ShieldCheck className="w-10 h-10" />, title: "Integrity", desc: "We believe in complete transparency and honest communication in every partnership." },
                            { icon: <Rocket className="w-10 h-10" />, title: "Innovation", desc: "We constantly explore emerging technologies to stay ahead of the curve." },
                            { icon: <Award className="w-10 h-10" />, title: "Excellence", desc: "We never settle for 'good enough'. We aim for extraordinary in everything we do." },
                            { icon: <Users className="w-10 h-10" />, title: "Client Success", desc: "Our success is measured solely by the success and growth of our clients." },
                        ].map((value, idx) => (
                            <Reveal key={idx} delay={idx * 150} className="h-full">
                                <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 group h-full">
                                    <div className="text-primary mb-8 transform group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">
                                        <AnimatedText text={value.title} hoverColor="text-primary" />
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed font-medium">{value.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-transparent relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="relative rounded-[2rem] md:rounded-[3rem] bg-[#1a1a1a] border border-gray-800 p-12 md:p-16 lg:p-20 overflow-hidden text-center shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50 pointer-events-none"></div>

                            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                                <Reveal delay={200}>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                                        <AnimatedText text="Ready to Build Something" /> <br className="hidden md:block" />
                                        <span className="text-primary inline-block">
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
                                        <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold text-lg rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group/btn min-w-[200px]">
                                            Get Started Now
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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

export default About;
