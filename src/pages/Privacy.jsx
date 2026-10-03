import React from 'react';
import useSEO from '../hooks/useSEO';

const PRIVACY_SEO = {
    title: 'Privacy Policy | DSquareMart',
    description: 'DSquareMart privacy policy. Learn how we collect, use, and protect your information when you use our services and website.',
    keywords: 'privacy policy, DSquareMart privacy, data protection, terms of use'
};
import Reveal from '../components/Reveal';
import AnimatedText from '../components/AnimatedText';

const Privacy = () => {
    useSEO(PRIVACY_SEO);
    return (
        <div className="bg-[#0B0B0B] min-h-screen">
            {/* Hero Section */}
            <section className="pb-12 pt-40 lg:pb-20 bg-[#121212] border-b border-gray-800 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal>
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                            Legal Information
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight">
                            <AnimatedText text="Privacy Policy" hoverColor="text-white" />
                        </h1>
                    </Reveal>
                    <Reveal delay={300}>
                        <p className="text-lg text-gray-400 font-medium">Last updated: February 12, 2026</p>
                    </Reveal>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-[#0B0B0B] px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="space-y-12 text-gray-400 leading-relaxed text-base md:text-lg">

                        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 italic font-medium text-gray-300">
                            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                        </div>

                        {/* Section: Interpretation and Definitions */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-4">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                <AnimatedText text="Interpretation and Definitions" />
                            </h2>

                            <div className="ml-0 md:ml-12 space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        <AnimatedText text="Interpretation" />
                                    </h3>
                                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        <AnimatedText text="Definitions" />
                                    </h3>
                                    <p className="mb-6">For the purposes of this Privacy Policy:</p>
                                    <ul className="space-y-6">
                                        {[
                                            { term: "Account", desc: "means a unique account created for You to access our Service or parts of our Service." },
                                            { term: "Affiliate", desc: "means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
                                            { term: "Application", desc: "refers to Pin to Pi - Challange Analyst, the software program provided by the Company." },
                                            { term: "Company", desc: "(referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to DSquareMart, surat." },
                                            { term: "Country", desc: "refers to: Gujarat, India" },
                                            { term: "Device", desc: "means any device that can access the Service such as a computer, a cellphone or a digital tablet." },
                                            { term: "Personal Data", desc: "is any information that relates to an identified or identifiable individual." },
                                            { term: "Service", desc: "refers to the Application." },
                                            { term: "Service Provider", desc: "means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used." },
                                            { term: "Usage Data", desc: "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)." },
                                            { term: "You", desc: "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." }
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                                                <p><span className="font-bold text-white">{item.term}:</span> {item.desc}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Section: Collecting and Using Your Personal Data */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-4">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                <AnimatedText text="Collecting and Using Your Personal Data" />
                            </h2>

                            <div className="ml-0 md:ml-12 space-y-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        <AnimatedText text="Types of Data Collected" />
                                    </h3>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2">Personal Data</h4>
                                            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Usage Data.</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2">Usage Data</h4>
                                            <p className="mb-4">Usage Data is collected automatically when using the Service.</p>
                                            <p className="mb-4">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                                            <p className="mb-4">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                                            <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        <AnimatedText text="Use of Your Personal Data" />
                                    </h3>
                                    <p className="mb-6">The Company may use Personal Data for the following purposes:</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            "To provide and maintain our Service",
                                            "To manage Your Account",
                                            "For the performance of a contract",
                                            "To contact You by email/phone/SMS",
                                            "To provide news and special offers",
                                            "To manage Your requests",
                                            "For business transfers",
                                            "For data analysis and trends"
                                        ].map((purpose, idx) => (
                                            <li key={idx} className="bg-[#1a1a1a] p-4 rounded-2xl border border-gray-800 flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,199,60,0.5)]"></div>
                                                <span className="font-semibold text-gray-300 text-sm">{purpose}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        <AnimatedText text="Sharing Your Personal Data" />
                                    </h3>
                                    <p className="mb-4">We may share Your personal information in the following situations:</p>
                                    <ul className="space-y-4">
                                        {[
                                            { label: "With Service Providers", text: "To monitor and analyze the use of our Service, to contact You." },
                                            { label: "For business transfers", text: "During negotiations of any merger, sale of Company assets, or acquisition." },
                                            { label: "With Affiliates", text: "We will require those affiliates to honor this Privacy Policy." },
                                            { label: "With business partners", text: "To offer You certain products, services or promotions." },
                                            { label: "With other users", text: "Information shared in public areas may be viewed by all users." },
                                            { label: "With Your consent", text: "We may disclose Your personal information for any other purpose." }
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                                                <p><span className="font-bold text-white">{item.label}:</span> {item.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-800" />

                        {/* Section: Retention and Transfer */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    <AnimatedText text="Retention of Data" />
                                </h3>
                                <p className="text-sm md:text-base">The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    <AnimatedText text="Transfer of Data" />
                                </h3>
                                <p className="text-sm md:text-base">Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your jurisdiction.</p>
                            </div>
                        </div>

                        {/* Section: Deletion and Disclosure */}
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    <AnimatedText text="Delete Your Personal Data" />
                                </h3>
                                <p className="mb-4">You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                                <p>You may update, amend, or delete Your information at any time by signing in to Your Account, or by contacting Us directly. Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    <AnimatedText text="Disclosure of Data" />
                                </h3>
                                <p className="mb-4 font-bold text-white">Business Transactions</p>
                                <p className="mb-6">If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>

                                <p className="mb-4 font-bold text-white">Law enforcement</p>
                                <p className="mb-6">Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities.</p>

                                <p className="mb-4 font-bold text-white">Other legal requirements</p>
                                <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of the Company, prevent wrongdoing, or protect personal safety.</p>
                            </div>
                        </div>

                        {/* Section: Security, Children, Links */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
                                <h4 className="font-bold text-white mb-2">Security</h4>
                                <p>While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                            </div>
                            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
                                <h4 className="font-bold text-white mb-2">Children's Privacy</h4>
                                <p>Our Service does not address anyone under the age of 13. We do not knowingly collect information from children.</p>
                            </div>
                            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
                                <h4 className="font-bold text-white mb-2">External Links</h4>
                                <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites.</p>
                            </div>
                        </div>

                        {/* Changes to Policy */}
                        <div className="pt-12 border-t border-gray-800">
                            <h3 className="text-xl font-bold text-white mb-4">
                                <AnimatedText text="Changes to this Privacy Policy" />
                            </h3>
                            <p className="mb-4">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                        </div>

                        {/* Contact Us */}
                        <div className="mt-20 p-10 bg-gray-900 rounded-[3rem] text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                            <h3 className="text-2xl font-bold mb-4 relative z-10">Have Questions?</h3>
                            <p className="text-gray-400 mb-8 max-w-md mx-auto relative z-10">If you have any questions about this Privacy Policy, our team is here to help.</p>
                            <a href="mailto:crystalinfohub@gmail.com" className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-300 transition-colors relative z-10 text-lg">
                                crystalinfohub@gmail.com
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
