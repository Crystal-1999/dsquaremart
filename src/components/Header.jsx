import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Linkedin, Instagram, PhoneCall } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Career', path: '/career' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isActive = (linkPath, currentPath) => {
        if (linkPath === '/services' && currentPath.startsWith('/service')) {
            return true;
        }
        return currentPath === linkPath;
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            {/* Main Navbar */}
            <nav className={`transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-2xl backdrop-blur-xl mx-4 md:mx-8 rounded-2xl mt-2' : 'w-full bg-[#0B0B0B]/90 py-5'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group py-2">
                        <img
                            src="/images/dsquaremart_logo.png"
                            alt="D Square Mart"
                            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 scale-[1.5] md:scale-[2] lg:scale-[2.5] origin-left group-hover:scale-[1.6] md:group-hover:scale-[2.1] lg:group-hover:scale-[2.6]"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 text-sm font-black uppercase tracking-widest transition-all relative group italic ${isActive(link.path, location.pathname) ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-transform duration-300 origin-left ${isActive(link.path, location.pathname) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </Link>
                        ))}
                        <div className="ml-6 h-8 w-px bg-gray-200"></div>
                        <Link to="/contact" className="ml-6 px-7 py-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-primary/30 active:scale-95 flex items-center italic group">
                            <PhoneCall className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                            <AnimatedText text="Get a Quote" enableHover={false} />
                        </Link>
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-100 transition-all duration-300 active:scale-90 focus:outline-none"
                        >
                            <div className={`transition-transform duration-500 ${isMobileMenuOpen ? 'rotate-180 scale-110' : 'rotate-0'}`}>
                                {isMobileMenuOpen ? <X className="w-8 h-8 text-primary" /> : <Menu className="w-8 h-8" />}
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Mobile Menu Drawer */}
            <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>

                {/* Drawer */}
                <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#1a1a1a] shadow-2xl transition-transform duration-700 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Drawer Header */}
                    <div
                        style={{
                            transitionDelay: isMobileMenuOpen ? '100ms' : '0ms',
                            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                            opacity: isMobileMenuOpen ? 1 : 0
                        }}
                        className="p-6 flex justify-between items-center border-b border-gray-800 italic transition-all duration-700"
                    >
                        <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="flex items-center py-2">
                            <img
                                src="/images/dsquaremart_logo.png"
                                alt="D Square Mart"
                                className="h-10 md:h-12 w-auto object-contain scale-[1.5] origin-left"
                            />
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-gray-400 hover:text-primary transition-all focus:outline-none hover:rotate-90"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Nav Links */}
                    <div className="flex-grow overflow-y-auto py-8 px-8 flex flex-col space-y-6 italic">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    transitionDelay: isMobileMenuOpen ? `${index * 80 + 200}ms` : '0ms',
                                    transform: isMobileMenuOpen ? 'translateY(0) rotate(0)' : 'translateY(20px) rotate(2deg)',
                                    opacity: isMobileMenuOpen ? 1 : 0
                                }}
                                className={`text-2xl font-black uppercase tracking-[0.1em] transition-all duration-700 ${isActive(link.path, location.pathname) ? 'text-primary' : 'text-gray-100 hover:text-primary'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div
                        style={{
                            transitionDelay: isMobileMenuOpen ? '700ms' : '0ms',
                            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(30px)',
                            opacity: isMobileMenuOpen ? 1 : 0
                        }}
                        className="p-8 border-t border-gray-800 italic transition-all duration-700"
                    >
                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full py-5 bg-primary text-white text-center font-black uppercase tracking-widest rounded-2xl shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all hover:bg-blue-600 group"
                        >
                            <PhoneCall className="w-5 h-5 group-hover:animate-bounce" />
                            <AnimatedText text="Get a Quote" enableHover={false} />
                        </Link>

                        <div className="flex justify-center space-x-6 mt-8">
                            {[
                                { Icon: Facebook, color: 'hover:text-blue-500' },
                                { Icon: Twitter, color: 'hover:text-sky-400' },
                                { Icon: Linkedin, color: 'hover:text-blue-700' },
                                { Icon: Instagram, color: 'hover:text-pink-500' }
                            ].map(({ Icon, color }, i) => (
                                <Icon
                                    key={i}
                                    style={{
                                        transitionDelay: isMobileMenuOpen ? `${800 + i * 50}ms` : '0ms',
                                        transform: isMobileMenuOpen ? 'scale(1)' : 'scale(0.5)',
                                        opacity: isMobileMenuOpen ? 1 : 0
                                    }}
                                    className={`w-6 h-6 text-gray-400 ${color} transition-all duration-500 cursor-pointer hover:scale-125`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
