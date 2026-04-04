
import { motion } from "framer-motion";
import { Scissors, Sparkles, Droplets, Users } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Scissors size={32} />,
            title: "Haircut",
            desc: "Precision cutting tailored to your personal style and face shape.",
            price: "₹150",
        },
        {
            icon: <Users size={32} />,
            title: "Beard Trim",
            desc: "Expert beard shaping, lining, and trimming for a sharp look.",
            price: "₹80",
        },
        {
            icon: <Droplets size={32} />,
            title: "Clean Shave",
            desc: "Traditional hot towel wet shave for ultimate smoothness.",
            price: "₹100",
        },
        {
            icon: <Sparkles size={32} />,
            title: "Facial",
            desc: "Deep cleansing facial to rejuvenate and refresh your skin.",
            price: "₹399",
        }
    ];

    return (
        <section id="services" className="py-24 bg-beige text-primary relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">Our Expertise</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary"
                    >
                        What We Provide To Our <span className="text-accent">Customers</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "80px" }}
                        viewport={{ once: true }}
                        className="h-[2px] bg-accent mx-auto"
                    />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-black/5 hover:border-accent shadow-sm hover:shadow-[0_15px_30px_rgba(198,161,91,0.15)] group transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="text-accent mb-6 w-14 h-14 bg-beige flex items-center justify-center rounded-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
                            <p className="text-primary/70 mb-8 leading-relaxed text-sm font-light min-h-[60px]">{service.desc}</p>
                            <div className="flex justify-between items-center pt-4 border-t border-black/5">
                                <span className="text-xl font-bold text-accent font-display">{service.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
