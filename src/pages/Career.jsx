import React from 'react';
import { Briefcase, Rocket, Users, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import AnimatedText from '../components/AnimatedText';
import useSEO from '../hooks/useSEO';

const CAREER_SEO = {
    title: 'Careers | DSquareMart - Join Our Team',
    description: 'Join DSquareMart. We are hiring React developers, UI/UX designers, backend developers in Surat, India. Growth opportunities, flexible hours, and a collaborative team.',
    keywords: 'DSquareMart careers, jobs in Surat, React developer jobs, UI UX designer hiring, backend developer India, tech jobs Surat'
};

const Career = () => {
    useSEO(CAREER_SEO);
    const openings = [
        {
            title: "Senior React Developer",
            type: "Full-time",
            location: "Surat, India (On-site)",
            experience: "3+ Years",
            description: "We are looking for an experienced React developer to lead our frontend team and build scalable web applications.",
            skills: ["React.js", "TypeScript", "Tailwind CSS", "Redux"]
        },
        {
            title: "UI/UX Designer",
            type: "Full-time",
            location: "Surat, India (On-site)",
            experience: "2+ Years",
            description: "Create intuitive and visually stunning designs for our web and mobile applications.",
            skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
        },
        {
            title: "Backend Developer (Node.js)",
            type: "Full-time",
            location: "Surat, India (On-site)",
            experience: "2+ Years",
            description: "Build robust APIs and manage database architecture for our growing products.",
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
        }
    ];
    const perks = [
        { icon: <Rocket className="w-6 h-6" />, title: "Growth Opportunities", desc: "Continuous learning and career advancement paths." },
        { icon: <Users className="w-6 h-6" />, title: "Collaborative Team", desc: "Work with passionate and talented individuals." },
        { icon: <Clock className="w-6 h-6" />, title: "Flexible Hours", desc: "Maintain a healthy work-life balance." },
        { icon: <MapPin className="w-6 h-6" />, title: "Modern Office", desc: "A creative workspace in the heart of the city." },
    ];

    return (
        <div className="bg-[#0B0B0B] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-48 pb-20 md:pt-64 md:pb-32 bg-[#121212] overflow-hidden">
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
                            Join Our Team
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 cursor-default">
                            <AnimatedText text="Build Your Future with " />
                            <span className="text-primary inline-block">
                                <AnimatedText text="DSquareMart" hoverColor="text-white" />
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal delay={400}>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
                            We are always looking for creative, talented, and passionate individuals to join our growing team. If you love technology and innovation, we'd love to meet you.
                        </p>
                    </Reveal>
                    <Reveal delay={600}>
                        <a href="#openings" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold text-lg rounded-xl hover:bg-[#b0b8c0] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            View Open Positions
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </Reveal>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-24 bg-transparent relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 cursor-default">
                                <AnimatedText text="Why Work " />
                                <span className="text-primary inline-block">
                                    <AnimatedText text="With Us?" hoverColor="text-white" />
                                </span>
                            </h2>
                        </Reveal>
                        <Reveal delay={200}>
                            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
                        </Reveal>
                        <Reveal delay={300}>
                            <p className="text-gray-400 text-lg font-medium">
                                We provide an environment where you can grow, learn, and make an impact.
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {perks.map((perk, idx) => (
                            <Reveal key={idx} delay={idx * 150} className="group">
                                <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 border border-gray-800 h-full">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        {perk.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        <AnimatedText text={perk.title} hoverColor="text-primary" />
                                    </h3>
                                    <p className="text-gray-400 font-medium">{perk.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section id="openings" className="py-24 bg-[#121212] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Reveal>
                            <div className="inline-flex items-center px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-full text-primary text-xs font-black tracking-widest uppercase mb-6 shadow-sm">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                                Current Opportunities
                            </div>
                        </Reveal>
                        <Reveal delay={200}>
                            <h2 className="text-3xl md:text-5xl font-black text-white cursor-default">
                                <AnimatedText text="Find Your " />
                                <span className="text-primary inline-block">
                                    <AnimatedText text="Perfect Role" hoverColor="text-white" />
                                </span>
                            </h2>
                        </Reveal>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {openings.map((job, idx) => (
                            <Reveal key={idx} delay={idx * 200}>
                                <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg border border-gray-800 hover:border-primary/50 transition-all duration-700">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                        <div className="flex-grow">
                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                <h3 className="text-2xl font-bold text-white">
                                                    <AnimatedText text={job.title} hoverColor="text-primary" />
                                                </h3>
                                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">{job.type}</span>
                                            </div>
                                            <div className="flex items-center text-gray-400 text-sm font-bold mb-4">
                                                <MapPin className="w-4 h-4 mr-1" /> {job.location}
                                                <span className="mx-3">•</span>
                                                <Briefcase className="w-4 h-4 mr-1" /> {job.experience}
                                            </div>
                                            <p className="text-gray-400 mb-6 font-medium">{job.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {job.skills.map((skill, sIdx) => (
                                                    <span key={sIdx} className="px-3 py-1 bg-[#252525] text-gray-300 text-sm font-semibold rounded-lg border border-gray-700">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 pt-2">
                                            <a href={`mailto:crystalinfohub@gmail.com?subject=Application for ${job.title}`} className="inline-flex items-center justify-center px-6 py-3 bg-primary text-black font-bold rounded-xl hover:bg-[#b0b8c0] transition-colors w-full md:w-auto">
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

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
                                            <AnimatedText text="Join Our Team?" hoverColor="text-white" />
                                        </span>
                                    </h2>
                                </Reveal>
                                <Reveal delay={400}>
                                    <p className="text-gray-300 text-lg md:text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
                                        Take the next step in your career with DSquareMart. We are always looking for passionate people to help us build the future.
                                    </p>
                                </Reveal>
                                <Reveal delay={600}>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                        <a href="#openings" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-primary text-black font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:bg-[#b0b8c0] transition-all transform hover:-translate-y-1 active:scale-95 min-w-[200px]">
                                            View Openings <ArrowRight className="w-5 h-5 ml-2" />
                                        </a>
                                        <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white/10 text-white font-black uppercase tracking-widest border border-white/20 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md min-w-[200px]">
                                            Contact Us
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

export default Career;
