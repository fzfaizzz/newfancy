
import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, User, Phone, Clock, MessageSquare, CheckCircle, X } from "lucide-react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        notes: "",
    });
    const [showToast, setShowToast] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const services = [
        "Haircut - ₹150",
        "Beard Trim - ₹80",
        "Clean Shave - ₹100",
        "Facial - ₹399",
    ];

    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
        "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
        "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
        "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
        "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
        "09:00 PM", "09:30 PM", "10:00 PM",
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setShowToast(true);
        setFormData({ name: "", phone: "", service: "", date: "", time: "", notes: "" });

        setTimeout(() => setShowToast(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="booking" className="py-24 bg-primary text-secondary relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Book Your Visit</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                            Schedule Your <br />
                            <span className="gold-gradient-text">Appointment</span>
                        </h2>
                        <p className="text-secondary/70 text-lg leading-relaxed font-light mb-10 max-w-md">
                            Reserve your spot at New Fancy Salon. We will call you on <strong className="text-accent">098335 50328</strong> to confirm your slot.
                        </p>

                        <div className="space-y-6 bg-white/5 border border-accent/20 p-8 rounded-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                    <Phone className="text-accent" size={20} />
                                </div>
                                <div>
                                    <p className="text-secondary/50 text-xs uppercase tracking-widest">Phone</p>
                                    <a href="tel:+919833550328" className="text-lg font-bold hover:text-accent transition-colors">+91 98335 50328</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                    <Clock className="text-accent" size={20} />
                                </div>
                                <div>
                                    <p className="text-secondary/50 text-xs uppercase tracking-widest">Hours</p>
                                    <p className="text-lg font-bold">9:00 AM – 10:30 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm backdrop-blur-sm space-y-6">
                            <h3 className="text-2xl font-display font-bold mb-2">Fill Your Details</h3>
                            <p className="text-secondary/50 text-sm mb-6">All fields marked with * are required</p>

                            {/* Name */}
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Full Name *"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-sm text-secondary placeholder-secondary/30 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            {/* Phone */}
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number *"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-sm text-secondary placeholder-secondary/30 focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            {/* Service */}
                            <div className="relative">
                                <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={18} />
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-sm text-secondary appearance-none focus:outline-none focus:border-accent transition-colors cursor-pointer"
                                >
                                    <option value="" disabled className="bg-primary text-secondary">Select Service *</option>
                                    {services.map((s) => (
                                        <option key={s} value={s} className="bg-primary text-secondary">{s}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Date & Time */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-secondary focus:outline-none focus:border-accent transition-colors"
                                />
                                <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-sm text-secondary appearance-none focus:outline-none focus:border-accent transition-colors cursor-pointer"
                                >
                                    <option value="" disabled className="bg-primary text-secondary">Time Slot *</option>
                                    {timeSlots.map((t) => (
                                        <option key={t} value={t} className="bg-primary text-secondary">{t}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Notes */}
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 text-accent" size={18} />
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder="Additional Notes (optional)"
                                    rows={3}
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-sm text-secondary placeholder-secondary/30 focus:outline-none focus:border-accent transition-colors resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-5 bg-accent hover:bg-accent-hover text-primary font-bold tracking-widest uppercase text-sm rounded-sm transition-all hover:shadow-[0_0_25px_rgba(198,161,91,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></span>
                                        Booking...
                                    </>
                                ) : (
                                    "Confirm Appointment"
                                )}
                            </button>

                            <p className="text-secondary/40 text-xs text-center mt-4">
                                We will call you on <span className="text-accent font-semibold">098335 50328</span> to confirm your slot.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Success Toast */}
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-8 left-1/2 bg-green-600 text-white px-8 py-5 rounded-sm shadow-2xl z-100 flex items-center gap-4 w-[90vw] max-w-[350px] sm:w-[350px] sm:min-w-[350px]"
                >
                    <CheckCircle size={28} className="shrink-0" />
                    <div>
                        <p className="font-bold text-lg">Request Sent!</p>
                        <p className="text-white/80 text-sm">We will contact you shortly to confirm.</p>
                    </div>
                    <button onClick={() => setShowToast(false)} className="ml-auto text-white/60 hover:text-white">
                        <X size={20} />
                    </button>
                </motion.div>
            )}
        </section>
    );
}
