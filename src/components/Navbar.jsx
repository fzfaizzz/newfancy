import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#experience" },
        { name: "Services", href: "#services" },
        { name: "Reviews", href: "#reviews" },
        { name: "Location", href: "#location" },
        { name: "Contact", href: "#booking" },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
                <a href="#" className="flex items-center group">
                    <span className="font-display font-bold text-xl md:text-2xl tracking-widest text-secondary uppercase">
                        NEW FANCY <span className="text-accent">SALON</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-secondary text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href="#booking" className="bg-accent hover:bg-accent-hover text-primary font-bold px-7 py-3 rounded-sm transition-all hover:shadow-[0_0_20px_rgba(198,161,91,0.5)] tracking-widest uppercase text-xs border border-accent">
                        BOOK APPOINTMENT
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button className="lg:hidden p-2 text-secondary hover:text-accent transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/10 shadow-xl flex flex-col p-6 gap-4"
                    >
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-display font-medium text-secondary hover:text-accent border-b border-white/5 pb-4 transition-colors">
                                {link.name}
                            </a>
                        ))}
                        <a href="#booking" className="bg-accent text-primary font-bold px-4 py-4 text-center rounded-sm mt-2 tracking-widest uppercase hover:bg-accent-hover transition-colors shadow-lg" onClick={() => setIsOpen(false)}>
                            Book Appointment
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
