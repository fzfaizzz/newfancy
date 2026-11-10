import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Team() {
    const team = [
        {
            name: "Javed Ali",
            role: "Senior Barber",
            image: "./javed Ali.png",
        },
        {
            name: "Amit Singh",
            role: "Hair Specialist",
            image: "./team-amit.png",
        },
        {
            name: "Sunil Verma",
            role: "Beard Expert",
            image: "./team-sunil.png",
        }
    ];

    return (
        <section className="py-24 bg-beige text-primary">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16">
                    <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">Our Team</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6"
                    >
                        Meet The <span className="text-accent">Artists</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "80px" }}
                        viewport={{ once: true }}
                        className="h-[2px] bg-accent mx-auto"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative overflow-hidden rounded-sm bg-white shadow-lg"
                        >
                            <div className="aspect-4/5 w-full relative overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-500 flex items-center justify-center">
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <a href="#" aria-label="Instagram" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-white transition-colors"><Instagram size={18} /></a>
                                        <a href="#" aria-label="Twitter" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-white transition-colors"><Twitter size={18} /></a>
                                        <a href="#" aria-label="Facebook" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-white transition-colors"><Facebook size={18} /></a>
                                    </div>
                                </div>

                                {/* Gold bottom bar animation */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700 ease-out"></div>
                            </div>

                            {/* Card Info */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
                                <p className="text-accent uppercase tracking-widest text-xs font-bold">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
