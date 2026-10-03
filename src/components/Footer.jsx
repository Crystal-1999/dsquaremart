import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, ChevronRight, Bot } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100091826435140" },
        { icon: Twitter, href: "https://x.com/InfotechCr7947" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/crystalinfohub/posts/?feedView=all" },
        { icon: Instagram, href: "https://www.instagram.com/crystalinfo.tech?igsh=MXRieWJpOWx3dnY3YQ%3D%3D" },
    ];

    return (
        <footer className="bg-transparent border-t border-gray-800">
            {/* Upper Footer */}
            <div className="container mx-auto px-6 pt-24 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center inline-block py-2">
                            <img
                                src="/images/dsquaremart_logo.png"
                                alt="D Square Mart"
                                className="h-28 md:h-36 lg:h-40 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-500 leading-relaxed font-medium text-sm">
                            Empowering businesses with cutting-edge IT solutions. We use AI-assisted tools in our coding and development to deliver faster, high-quality software. From mobile innovations to scalable web architectures, we deliver excellence at every step of your digital journey.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((link, i) => (
                                <a key={i} target='_blank' href={link.href} className="w-9 h-9 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                                    <link.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Our Services</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Web Development', path: '/services/web-development' },
                                { name: 'Mobile App Development', path: '/services/mobile-app-development' },
                                { name: 'UI/UX Design', path: '/services/ui-ux-design' },
                                { name: 'IT Consulting', path: '/services/it-consulting' },
                                { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
                                { name: 'Maintenance & Support', path: '/services/maintenance-support' }
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link to={service.path} className="text-gray-400 hover:text-primary font-semibold text-sm transition-colors flex items-center group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-gray-600 group-hover:text-primary transition-colors" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to={link === 'Home' ? '/' : link === 'About Us' ? '/about' : `/${link.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-primary font-semibold text-sm transition-colors flex items-center group"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-2 text-gray-600 group-hover:text-primary transition-colors" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Get In Touch</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <div className="bg-primary/10 p-2.5 rounded-lg text-gray-400 mr-4 shrink-0 shadow-sm">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Email reaching</p>
                                    <a href="mailto:info@crystalinfotech.com" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors block mb-1">
                                        info@crystalinfotech.com
                                    </a>
                                    <a href="mailto:crystalinfohub@gmail.com" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors block">
                                        crystalinfohub@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-primary/10 p-2.5 rounded-lg text-gray-400 mr-4 shrink-0 shadow-sm">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Official Address</p>
                                    <a href="https://maps.app.goo.gl/cv8vCjkM4LD2YYUZ9" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-bold text-sm hover:text-primary transition-colors">308, Radhika Optima, Mota Varachha, Surat</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-gray-800 pt-8 pb-12">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-bold text-gray-500">
                        © {currentYear} <span className="text-gray-200">DSquareMart IT Solutions</span>. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-8 text-xs font-bold text-gray-400">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <Bot className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-gray-400">We use AI tools in our coding & development</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold text-gray-200 tracking-tighter">System Operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
