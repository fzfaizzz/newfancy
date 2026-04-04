
import { motion } from "framer-motion";
import { Navigation } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="bg-primary text-secondary">
            <div className="w-full h-[500px] md:h-[600px] relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30157.653153899842!2d72.81077807431639!3d19.120521200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d308cf363b%3A0x6665401e1b43b881!2sNEW%20FANCY%20SALON!5e0!3m2!1sen!2sin!4v1772445360419!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%) contrast(120%)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full object-cover"
                ></iframe>

                {/* Overlay Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-4 left-4 right-4 sm:right-auto md:bottom-8 md:left-12 lg:left-24 bg-primary border-t-4 border-accent p-6 md:p-10 max-w-sm rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                    <h3 className="text-3xl font-display font-bold mb-4 text-white">Find Us</h3>
                    <p className="text-secondary/80 leading-relaxed font-light text-sm mb-6">
                        NEW FANCY SALON, KARNIK BLDNG, METRO STN, Jogeshwari East, Mumbai 400069
                    </p>
                    <a href="https://maps.google.com/maps?cid=7378363749444155521" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors uppercase tracking-widest text-sm font-bold bg-white/5 px-6 py-3 border border-accent/20 hover:border-accent">
                        <Navigation size={18} /> Get Directions
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
