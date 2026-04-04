import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-primary text-secondary relative z-20">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                            We Have <span className="gold-gradient-text">10+ Years</span> Of Experience
                        </h2>

                        <p className="text-secondary/70 text-lg leading-relaxed font-light">
                            We pride ourselves on providing a premium grooming experience. Enjoy our friendly staff, fair prices, and a comfortable vibe designed strictly for the modern gentleman&apos;s ultimate satisfaction.
                        </p>

                        <div className="bg-white/5 border border-accent/20 p-8 rounded-sm backdrop-blur-sm max-w-md space-y-4 shadow-[0_4px_30px_rgba(11,28,45,0.5)]">
                            <div>
                                <p className="text-accent text-sm font-bold tracking-widest uppercase mb-1">Business Hours</p>
                                <p className="text-xl font-semibold">Open Daily: <span className="font-light">9:00 AM – 10:30 PM</span></p>
                            </div>
                            <div className="w-full h-px bg-accent/20 my-4"></div>
                            <div>
                                <p className="text-accent text-sm font-bold tracking-widest uppercase mb-1">Call Us Now</p>
                                <a href="tel:+919833550328" className="flex items-center gap-3 text-2xl font-bold font-display hover:text-accent transition-colors duration-300">
                                    <Phone className="text-accent" size={24} />
                                    +91 98335 50328
                                </a>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="#booking"
                                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-accent text-accent font-bold tracking-widest uppercase text-sm rounded-sm transition-all hover:bg-accent hover:text-primary hover:shadow-[0_0_20px_rgba(198,161,91,0.4)]"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Circular Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Outer decorative ring */}
                            <div className="absolute inset-0 border border-accent/30 rounded-full scale-105 animate-[spin_20s_linear_infinite]"></div>
                            {/* Image wrap */}
                            <div className="absolute inset-0 rounded-full border-8 border-accent/20 overflow-hidden shadow-[0_0_40px_rgba(198,161,91,0.2)]">
                                <img
                                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80"
                                    alt="Barber Experience"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            {/* Overlay graphic */}
                            <div className="absolute -bottom-4 right-10 bg-accent text-primary p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(11,28,45,0.7)]">
                                <span className="font-display font-bold text-4xl block leading-none mb-1">10</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Years<br />Exp</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
