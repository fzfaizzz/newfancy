import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
    const points = [
        "Friendly Staff",
        "Fair Pricing",
        "Comfortable Environment",
        "Highly Rated Facial Service"
    ];

    return (
        <section className="py-24 bg-white text-primary overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image Model */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-4/5 w-full max-w-md mx-auto relative rounded-sm overflow-hidden z-10">
                            <img
                                src="https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?auto=format&fit=crop&q=80"
                                alt="Bearded Model Haircut"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        {/* Background design block */}
                        <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-beige rounded-sm z-0 border border-accent/20"></div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                            We Care About Your <br /> <span className="gold-gradient-text">Hair & Style</span>
                        </h2>

                        <p className="text-primary/70 text-lg leading-relaxed font-light mb-8 max-w-lg">
                            When it comes to your look, experience makes the difference. Step into a world of tailored luxury grooming designed to make you feel confident and refreshed.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {points.map((point, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <span className="text-accent">
                                        <CheckCircle2 size={24} />
                                    </span>
                                    <span className="text-lg font-medium tracking-wide">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#booking"
                            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-secondary font-bold tracking-widest uppercase text-sm rounded-sm transition-all hover:bg-accent border space-x-2 shadow-lg"
                        >
                            Book Appointment
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
