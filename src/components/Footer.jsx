
import { Instagram, Facebook, Twitter, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#06111d] pt-20 pb-10 border-t border-white/5 text-secondary">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="#" className="flex items-center mb-6">
                            <span className="font-display font-bold text-2xl tracking-widest uppercase">
                                NEW FANCY <span className="text-accent">SALON</span>
                            </span>
                        </a>
                        <p className="text-secondary/60 leading-relaxed font-light text-sm mb-6 max-w-xs">
                            Premium grooming services in Jogeshwari East. Experience the perfect blend of modern technique and traditional barbering.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary hover:bg-accent hover:text-primary hover:border-accent transition-all"><Instagram size={18} /></a>
                            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary hover:bg-accent hover:text-primary hover:border-accent transition-all"><Facebook size={18} /></a>
                            <a href="#" aria-label="Twitter" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary hover:bg-accent hover:text-primary hover:border-accent transition-all"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display text-xl font-bold mb-6 text-white tracking-wide">Explore</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "#" },
                                { name: "About Us", href: "#experience" },
                                { name: "Services", href: "#services" },
                                { name: "Client Reviews", href: "#reviews" },
                                { name: "Contact", href: "#location" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-secondary/60 hover:text-accent transition-colors font-light text-sm tracking-wide">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-2">
                        <h3 className="font-display text-xl font-bold mb-6 text-white tracking-wide">Contact Info</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 text-secondary/60 font-light text-sm leading-relaxed">
                                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                                <span>
                                    NEW FANCY SALON, KARNIK BLDNG, METRO STN, Jogeshwari East, Mumbai 400069
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-secondary/60 font-light text-sm">
                                <Phone className="text-accent shrink-0" size={18} />
                                <a href="tel:+919833550328" className="hover:text-accent transition-colors">
                                    +91 98335 50328
                                </a>
                            </li>
                            <li className="flex items-start gap-4 text-secondary/60 font-light text-sm">
                                <Clock className="text-accent shrink-0 mt-1" size={18} />
                                <span>Open Daily: 9:00 AM – 10:30 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-secondary/40 text-xs tracking-wider">
                        &copy; {new Date().getFullYear()} NEW FANCY SALON. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-secondary/40 hover:text-accent text-xs tracking-wider transition-colors">Privacy Policy</a>
                        <a href="#" className="text-secondary/40 hover:text-accent text-xs tracking-wider transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
