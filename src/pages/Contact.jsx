import React, { useState, useEffect } from 'react';
import { Mail, MapPin, ArrowRight, Send, Globe, ChevronDown, Check, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import useScrollReveal from '../hooks/useScrollReveal';
import useSEO from '../hooks/useSEO';

const CONTACT_SEO = {
    title: 'Contact Us | DSquareMart - Get in Touch',
    description: 'Contact DSquareMart for web development, mobile app development, and digital solutions. We are based in Surat, India. Email, location, and contact form available.',
    keywords: 'contact DSquareMart, Surat IT company, get in touch, project inquiry, DSquareMart email, software company contact'
};
import Reveal from '../components/Reveal';
import AnimatedText from '../components/AnimatedText';

const Contact = () => {
    useSEO(CONTACT_SEO);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            toast.error('Please fill in all required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        try {
            // TODO: Replace this URL with your Google Apps Script Web App URL
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbwR-UQmdjwRaE_u4gjDlknxqX6KFRQsdpOq8PrQjARRStRyCc_BmccE7o5KuLIxCYWZ1g/exec';

            const formDataObj = new URLSearchParams();
            Object.keys(formData).forEach(key => {
                let value = formData[key];
                // Prepend a single quote to the phone number so Google Sheets treats it as text
                if (key === 'phone') {
                    value = `'${value}`;
                }
                formDataObj.append(key, value);
            });

            await fetch(scriptUrl, {
                method: 'POST',
                body: formDataObj,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                mode: 'no-cors'
            });

            setIsSubmitting(false);
            setIsSubmitted(true);
            toast.success('Your message has been sent successfully!');

            // Auto-reset after 2 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 2000);

            // Reset form data after successful submission
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                message: ''
            });
        } catch (error) {
            console.error('Failed to submit form. Error:', error);
            setIsSubmitting(false);
            toast.error('Failed to send message. Please try again later.');
        }
    };

    const handleReset = () => {
        setIsSubmitted(false);
    };

    const contactCard = [
        {
            icon: <Mail className="w-8 h-8 md:w-10 md:h-10" />,
            title: "Email Us",
            text: "Our digital support team is available to assist you.",
            link: "mailto:info@crystalinfotech.com",
            linkLabel: "info@crystalinfotech.com",
            link2: "mailto:crystalinfohub@gmail.com",
            linkLabel2: "crystalinfohub@gmail.com"
        },
        {
            icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
            title: "Follow Us",
            text: "Stay connected and follow our journey on social media for latest updates and insights.",
            isSocials: true,
            socials: [
                { icon: <Facebook className="w-5 h-5" />, link: "https://www.facebook.com/profile.php?id=100091826435140" },
                { icon: <Twitter className="w-5 h-5" />, link: "https://x.com/InfotechCr7947" },
                { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/company/crystalinfohub/posts/?feedView=all" },
                { icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/crystalinfo.tech?igsh=MXRieWJpOWx3dnY3YQ%3D%3D" }
            ]
        },
        {
            icon: <MapPin className="w-8 h-8 md:w-10 md:h-10" />,
            title: "Location",
            text: "We are strategically located in Surat, the textile and diamond hub of India. We're always open to a coffee chat!",
            link: "https://maps.app.goo.gl/cv8vCjkM4LD2YYUZ9",
            linkLabel: "308, Radhika Optima, Mota Varachha, Surat",
            isExternal: true
        }
    ]

    return (
        <div className="bg-[#0B0B0B] min-h-screen overflow-x-hidden">
            <Toaster position="top-right" />
            {/* Hero Section */}
            <section className="relative pb-12 pt-40 lg:pb-20 text-center px-6 overflow-hidden">
                <style jsx>{`
                    @keyframes dotPan {
                        0% { background-position: 0 0; }
                        100% { background-position: 50px 50px; }
                    }
                `}</style>
                <div className="absolute inset-0 opacity-20 -z-10" style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
                    backgroundSize: '50px 50px',
                    animation: 'dotPan 5s linear infinite'
                }}></div>
                <div className="container mx-auto max-w-4xl relative z-10">
                    <Reveal>
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                            Contact Us
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                            <AnimatedText text="Let's Start a " />
                            <span className="text-primary">
                                <AnimatedText text="Conversation" hoverColor="text-white" />
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal delay={400}>
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                            We'd love to hear from you. Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 md:py-24 bg-transparent relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {contactCard.map((item, idx) => (
                            <Reveal key={idx} delay={idx * 150} className="h-full">
                                <div
                                    className="bg-[#1a1a1a] p-8 md:p-12 rounded-[2rem] border border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(77,163,255,0.1)] hover:-translate-y-2 hover:border-primary/20 transition-all duration-500 text-center group h-full flex flex-col items-center cursor-default"
                                >
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 shrink-0 border border-primary/10 group-hover:border-transparent">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 transition-colors duration-300 group-hover:text-primary">
                                        <AnimatedText text={item.title} hoverColor="text-primary" />
                                    </h3>
                                    <p className="text-gray-400 mb-8 font-medium leading-relaxed text-sm md:text-base flex-grow transition-colors duration-300 group-hover:text-gray-300">
                                        {item.text}
                                    </p>
                                    {item.isSocials ? (
                                        <div className="flex items-center gap-4 mt-auto">
                                            {item.socials.map((social, sIdx) => (
                                                <a
                                                    key={sIdx}
                                                    target="_blank"
                                                    href={social.link}
                                                    className="w-12 h-12 rounded-xl bg-[#252525] flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary border border-gray-700 hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                                                >
                                                    {social.icon}
                                                </a>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="mt-auto flex flex-col items-center gap-2 w-full">
                                            <a
                                                href={item.link}
                                                className="inline-flex items-center text-base md:text-[15px] font-black text-primary hover:text-primary transition-all duration-300 break-all group/link relative"
                                                {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                            >
                                                <span className="relative z-10 transition-transform duration-300 group-hover/link:tracking-wider">{item.linkLabel}</span>
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                                            </a>
                                            {item.link2 && (
                                                <a
                                                    href={item.link2}
                                                    className="inline-flex items-center text-base md:text-[15px] font-black text-primary hover:text-primary transition-all duration-300 break-all group/link relative"
                                                    {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                >
                                                    <span className="relative z-10 transition-transform duration-300 group-hover/link:tracking-wider">{item.linkLabel2}</span>
                                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full"></span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            {/* Send a Message */}
            <section className="py-20 md:py-32 bg-[#121212] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #4DA3FF 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <Reveal>
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                                    <AnimatedText text="Send us a Message" />
                                </h2>
                            </Reveal>
                            <Reveal delay={200}>
                                <p className="text-lg text-gray-400 font-medium">Fill out the form below and we'll get back to you shortly.</p>
                            </Reveal>
                        </div>

                        <Reveal delay={400}>
                            <div className="bg-[#1a1a1a] rounded-[2.5rem] shadow-xl shadow-gray-900/50 p-8 md:p-12 lg:p-16 border border-gray-800 relative overflow-hidden">
                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                disabled={isSubmitting}
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full px-6 py-5 bg-[#252525] border border-gray-700 rounded-2xl focus:bg-[#2a2a2a] focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all font-bold text-white placeholder:text-gray-500 disabled:opacity-50"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                disabled={isSubmitting}
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@company.com"
                                                className="w-full px-6 py-5 bg-[#252525] border border-gray-700 rounded-2xl focus:bg-[#2a2a2a] focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all font-bold text-white placeholder:text-gray-500 disabled:opacity-50"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                disabled={isSubmitting}
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full px-6 py-5 bg-[#252525] border border-gray-700 rounded-2xl focus:bg-[#2a2a2a] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-white placeholder:text-gray-500 disabled:opacity-50"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Subject</label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    disabled={isSubmitting}
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    className={`w-full px-6 py-5 bg-[#252525] border rounded-2xl flex items-center justify-between transition-all font-bold text-white cursor-pointer disabled:opacity-50 ${isDropdownOpen ? 'bg-[#2a2a2a] border-secondary ring-4 ring-secondary/10' : 'border-gray-700 hover:bg-[#2a2a2a]'}`}
                                                >
                                                    <span>{formData.subject}</span>
                                                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-primary' : ''}`} />
                                                </button>

                                                {/* Dropdown Menu */}
                                                <div className={`absolute z-10 top-full left-0 right-0 mt-2 bg-[#252525] rounded-2xl shadow-xl shadow-black/50 border border-gray-700 overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                                                    {['General Inquiry', 'Project Proposal', 'Career Opportunity', 'Other'].map((option) => (
                                                        <div
                                                            key={option}
                                                            onClick={() => {
                                                                setFormData(prev => ({ ...prev, subject: option }));
                                                                setIsDropdownOpen(false);
                                                            }}
                                                            className={`px-6 py-4 cursor-pointer flex items-center justify-between transition-colors ${formData.subject === option ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:bg-[#2a2a2a] hover:text-white'}`}
                                                        >
                                                            <span className="font-bold">{option}</span>
                                                            {formData.subject === option && <Check className="w-5 h-5" />}
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Backdrop to close on click outside */}
                                                {isDropdownOpen && (
                                                    <div className="fixed inset-0 z-0" onClick={() => setIsDropdownOpen(false)}></div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            disabled={isSubmitting}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="How can we help you today?"
                                            rows="6"
                                            className="w-full px-6 py-5 bg-[#252525] border border-gray-700 rounded-2xl focus:bg-[#2a2a2a] focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all font-bold text-white placeholder:text-gray-500 resize-none leading-relaxed disabled:opacity-50"
                                        ></textarea>
                                    </div>

                                    <div className="pt-4 text-center">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full md:w-auto px-12 py-5 bg-primary text-black font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-[#b0b8c0] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 text-lg mx-auto cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section >

            {/* Success Popup Modal */}
            <div className={`fixed inset-0 z-[100] flex items-center justify-center p-6 transition-all duration-500 ${isSubmitted ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isSubmitted ? 'opacity-100' : 'opacity-0'}`}
                    onClick={handleReset}
                />

                {/* Modal Content */}
                <div className={`bg-[#1a1a1a] p-8 md:p-12 rounded-[2.5rem] border border-gray-800 shadow-2xl relative z-10 w-full max-w-sm text-center transition-all duration-500 ${isSubmitted ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'}`}>
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-green-500/20 animate-bounce">
                        <Check className="w-10 h-10 stroke-[3]" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4 italic">Thank You!</h3>
                    <p className="text-gray-400 font-medium mb-8 text-base leading-relaxed">
                        Your message has been received. Our team will get back to you soon.
                    </p>
                    <button
                        onClick={handleReset}
                        className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95 cursor-pointer"
                    >
                        Okay, Got it
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
