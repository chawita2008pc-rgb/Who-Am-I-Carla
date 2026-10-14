import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Briefcase, Building2, ClipboardList, Sparkles, AlertCircle, CheckCircle2, HardHat } from 'lucide-react';

type Page = 'home' | 'about' | 'academic' | 'experience';

interface Props {
    onNavigate: (page: Page, section?: string) => void;
}

export default function RealWorldExperience({ onNavigate }: Props) {
    return (
        <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-600">

            {/* ── Navbar ── */}
            <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 lg:px-12 py-6 flex justify-between items-center pointer-events-none">
                <button
                    onClick={() => onNavigate('home')}
                    className="font-display font-bold text-xl tracking-wider text-white pointer-events-auto cursor-pointer"
                >
                    S.CHAUD
                </button>
                <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
                    <button
                        onClick={() => onNavigate('home', 'athletics')}
                        className="cursor-pointer pointer-events-auto hover:text-blue-400 transition-colors text-white"
                    >
                        Athletics
                    </button>
                    <button
                        onClick={() => onNavigate('about')}
                        className="cursor-pointer pointer-events-auto hover:text-blue-400 transition-colors text-white"
                    >
                        About
                    </button>
                    <button
                        onClick={() => onNavigate('academic')}
                        className="cursor-pointer pointer-events-auto hover:text-blue-400 transition-colors text-white"
                    >
                        Academic & Career
                    </button>
                    <span className="pointer-events-auto text-blue-400">
                        Experience
                    </span>
                </div>
            </nav>

            {/* Mobile Navigation bar */}
            <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
                <button
                    onClick={() => onNavigate('home')}
                    className="font-display font-bold text-lg tracking-wider text-white"
                >
                    S.CHAUD
                </button>
                <div className="flex gap-4 text-xs font-medium tracking-wider uppercase">
                    <button onClick={() => onNavigate('home', 'athletics')} className="text-zinc-400 hover:text-white">Athletics</button>
                    <button onClick={() => onNavigate('about')} className="text-zinc-400 hover:text-white">About</button>
                    <button onClick={() => onNavigate('academic')} className="text-zinc-400 hover:text-white">Academic</button>
                    <span className="text-blue-400 font-bold">Experience</span>
                </div>
            </div>

            {/* ── Hero Section ── */}
            <div className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono tracking-widest font-bold">
                        <Briefcase className="w-4 h-4" />
                        REAL WORLD EXPERIENCE
                    </div>
                    <h1 className="text-5xl md:text-8xl lg:text-[7rem] leading-tight font-display font-black uppercase tracking-tighter">
                        Real World <br className="hidden md:inline" />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>Experience.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed max-w-3xl font-light">
                        My internship in an architecture business, and what I took from it.
                    </p>
                </motion.div>
            </div>

            {/* ── Content Container ── */}
            <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 space-y-24">

                {/* ── Section: Internship / Pasantía ── */}
                <section className="space-y-12">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
                            Internship <span className="text-zinc-500">/ Pasantía</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Card 1: Where I Did My Internship */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/40 backdrop-blur-sm flex flex-col justify-between hover:border-zinc-700 transition-all space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">FOCUS 01</span>
                                    <Building2 className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="font-display font-bold text-2xl uppercase tracking-wide">
                                    Where I Did My Internship
                                </h3>
                                <p className="text-zinc-300 leading-relaxed font-light text-base">
                                    I did the internship with 4 friends, Rama, Cacu, Fonde and Vini. We did it in Vini's uncle's architecture business, so we were able to see how a real business in that area works from the inside.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                                {['Rama', 'Cacu', 'Fonde', 'Vini', 'Architecture Business'].map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-zinc-800/60 border border-zinc-700/50 rounded-full text-xs font-mono text-zinc-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Card 2: What I Observed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/40 backdrop-blur-sm flex flex-col justify-between hover:border-zinc-700 transition-all space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">FOCUS 02</span>
                                    <ClipboardList className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="font-display font-bold text-2xl uppercase tracking-wide">
                                    What I Observed
                                </h3>
                                <p className="text-zinc-300 leading-relaxed font-light text-base">
                                    They taught us the process of house making and construction, how to handle problems when they come up, the administration things, the employees and how to handle them, and how the money is handled. Everything was related exactly to the architecture business.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                                {['House Construction', 'Problem Handling', 'Administration', 'Employees', 'Money Handling'].map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-zinc-800/60 border border-zinc-700/50 rounded-full text-xs font-mono text-zinc-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                    {/* 3-Column Grid: Myself, Surprised, Confirmed */}
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* What I Learned About Myself */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="p-8 border border-blue-500/30 rounded-2xl bg-blue-500/5 backdrop-blur-sm space-y-4 hover:border-blue-500/50 transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">MYSELF</span>
                                <Sparkles className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="font-display font-bold text-xl uppercase">What I Learned About Myself</h3>
                            <p className="text-zinc-300 text-sm leading-relaxed font-light">
                                I learned that I kinda like doing the administration things. It seemed very interesting and also very difficult how to build a house. I would not study architecture, but I really liked learning about it.
                            </p>
                        </motion.div>

                        {/* What Surprised and Challenged Me */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/40 backdrop-blur-sm space-y-4 hover:border-zinc-700 transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">CHALLENGES</span>
                                <AlertCircle className="w-5 h-5 text-zinc-500" />
                            </div>
                            <h3 className="font-display font-bold text-xl uppercase">What Surprised and Challenged Me</h3>
                            <p className="text-zinc-300 text-sm leading-relaxed font-light">
                                I was surprised by how difficult house building is, and also how difficult it is to manage people. It is a lot more work than it looks from the outside.
                            </p>
                        </motion.div>

                        {/* What It Confirmed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="p-8 border border-blue-500/30 rounded-2xl bg-blue-500/5 backdrop-blur-sm space-y-4 hover:border-blue-500/50 transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">CONFIRMED</span>
                                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="font-display font-bold text-xl uppercase">What It Confirmed</h3>
                            <p className="text-zinc-300 text-sm leading-relaxed font-light">
                                It confirmed that I have interest in working. Being inside a real business and seeing how everything runs made me want to work and be part of something like that.
                            </p>
                        </motion.div>

                    </div>
                </section>

                {/* ── Section: Takeaway ── */}
                <section className="space-y-8 pt-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono tracking-widest font-bold">
                            <HardHat className="w-4 h-4" />
                            TAKEAWAY
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
                            What I Take <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>With Me.</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 md:p-12 border border-zinc-800 rounded-3xl bg-zinc-900/40 backdrop-blur-sm"
                    >
                        <p className="text-zinc-300 leading-relaxed font-light text-base md:text-xl max-w-4xl">
                            The internship showed me a side of work I had never seen before. I did not come out of it wanting to study architecture, but I came out of it knowing that I like the administration and management part of a business, and that I want to work. Seeing how a real business handles money, people and problems every day is something I will keep in mind when I decide what I want to do.
                        </p>
                    </motion.div>
                </section>

            </main>

            {/* ── Footer ── */}
            <footer className="w-full border-t border-zinc-900 py-16 bg-[#050505]">
                <div className="container mx-auto px-6 lg:px-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h2 className="font-display font-black text-3xl mb-2">SANTINO CHAUD</h2>
                        <p className="text-zinc-500 flex items-center justify-center md:justify-start gap-2">
                            <MapPin size={16} /> Buenos Aires, Argentina
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
}
