
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Satisfaction() {
    const reviews = [
        {
            text: "Their facial service is surprisingly good for the price. My skin felt so clean and fresh afterwards.",
            name: "Abishek",
        },
        {
            text: "Friendly staff, fair prices, and a comfortable vibe. My go-to grooming spot in Mumbai.",
            name: "Pramit Bhowmik",
        }
    ];

    return (
        <section className="py-24 bg-primary text-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-l-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">Customer Satisfaction</span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-secondary"
                        >
                            We’ll Do Our Best <br />
                            <span className="gold-gradient-text">To Satisfy You</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start md:items-end bg-white/5 p-6 rounded-sm border border-accent/20 backdrop-blur-sm"
                    >
                        <div className="flex text-accent drop-shadow-sm mb-2">
                            {[...Array(4)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
                            <Star size={28} fill="currentColor" className="opacity-50" />
                        </div>
                        <span className="font-bold text-xl font-display">4.1 Stars</span>
                        <span className="text-secondary/60 text-sm tracking-wide">(326+ Google Reviews)</span>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-primary border border-white/10 p-10 rounded-sm relative group hover:border-accent/50 transition-colors shadow-2xl"
                        >
                            <Quote size={40} className="text-accent/20 absolute top-8 right-8 group-hover:text-accent/40 transition-colors" />
                            <div className="flex text-accent mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-secondary/80 lg:text-xl italic leading-relaxed mb-8 relative z-10 font-light max-w-lg">
                                &quot;{review.text}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/20 border border-accent rounded-full flex items-center justify-center text-accent font-bold font-display text-xl">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold font-display text-lg tracking-wide">{review.name}</h4>
                                    <span className="text-accent uppercase tracking-widest text-xs font-semibold">Verified Client</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
