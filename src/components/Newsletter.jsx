
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="py-24 bg-accent text-primary relative overflow-hidden">
            {/* Texture/Pattern subtle background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Get <span className="text-white">10% Discount</span>
                    </h2>
                    <p className="text-primary/80 lg:text-xl font-medium mb-10 max-w-2xl mx-auto">
                        Subscribe to our newsletter to receive news, updates, free stuff, and a 10% discount on your next visit!
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row max-w-2xl mx-auto shadow-2xl"
                    onSubmit={(e) => { e.preventDefault(); alert("Subscribed Successfully!"); }}
                >
                    <div className="relative grow">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-primary/50" />
                        </div>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            className="w-full pl-12 pr-4 py-5 bg-white text-primary placeholder-primary/50 border-none focus:outline-none focus:ring-2 focus:ring-primary rounded-t-sm sm:rounded-l-sm sm:rounded-tr-none font-medium h-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-primary text-secondary hover:bg-black font-bold uppercase tracking-widest text-sm px-10 py-5 transition-colors rounded-b-sm sm:rounded-r-sm sm:rounded-bl-none shrink-0"
                    >
                        Subscribe
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
