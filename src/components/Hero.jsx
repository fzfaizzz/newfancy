import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-dvh flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0 bg-primary">
                <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80"
                    alt="Professional barber cutting hair"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-primary/40"></div>
            </div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full flex flex-col items-center text-center mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4"
                >
                    <span className="text-secondary/80 tracking-widest uppercase text-sm font-semibold relative before:content-[''] before:w-8 before:h-px before:bg-accent before:absolute before:-left-12 before:top-1/2 after:content-[''] after:w-8 after:h-px after:bg-accent after:absolute after:-right-12 after:top-1/2">
                        Jogeshwari East, Mumbai
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-secondary leading-tight mb-8"
                >
                    Make Your Own <span className="gold-gradient-text">Style</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-secondary/70 max-w-2xl mb-12 font-light leading-relaxed tracking-wide"
                >
                    Professional haircuts, beard styling, shaving, facial services at affordable prices.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="#booking"
                        className="group relative inline-flex items-center justify-center px-10 py-5 bg-accent text-primary font-bold tracking-widest uppercase text-sm rounded-sm overflow-hidden transition-all hover:bg-accent-hover hover:shadow-[0_0_25px_rgba(198,161,91,0.6)]"
                    >
                        BOOK NOW
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
