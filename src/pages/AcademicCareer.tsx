import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Compass, UserCheck, HelpCircle, Wrench, Sparkles, AlertCircle, Award } from 'lucide-react';

type Page = 'home' | 'about' | 'academic' | 'experience';

interface Props {
    onNavigate: (page: Page, section?: string) => void;
}

export default function AcademicCareer({ onNavigate }: Props) {
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
                    <span className="pointer-events-auto text-blue-400">
                        Academic & Career
                    </span>
                    <button
                        onClick={() => onNavigate('experience')}
                        className="cursor-pointer pointer-events-auto hover:text-blue-400 transition-colors text-white"
                    >
                        Experience
                    </button>
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
                    <span className="text-blue-400 font-bold">Academic</span>
                    <button onClick={() => onNavigate('experience')} className="text-zinc-400 hover:text-white">Experience</button>
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
                        <Compass className="w-4 h-4" />
                        ACADEMIC & CAREER
                    </div>
                    <h1 className="text-5xl md:text-8xl lg:text-[7rem] leading-tight font-display font-black uppercase tracking-tighter">
                        Academic & Career <br className="hidden md:inline" />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>Exploration.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed max-w-3xl font-light">
                        Exploring my interests, future opportunities and the path I want to build.
                    </p>
                </motion.div>
            </div>

            {/* ── Content Container ── */}
            <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 space-y-24">

                {/* ── Section: Academic & Career Exploration ── */}
                <section className="space-y-12">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">
                            Academic & Career <span className="text-zinc-500">Exploration</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Card 1: Areas of Study That Interest Me */}
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
                                    <Award className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="font-display font-bold text-2xl uppercase tracking-wide">
                                    Areas of Study That Interest Me
                                </h3>
                                <p className="text-zinc-300 leading-relaxed font-light text-base">
                                    I am mainly interested in areas related to business, cars, motorsport, technology and entrepreneurship. I also find areas like marketing, finance and management interesting because I like understanding how businesses work and how ideas can become successful projects.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                                {['Business', 'Cars', 'Motorsport', 'Technology', 'Entrepreneurship', 'Marketing', 'Finance', 'Management'].map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-zinc-800/60 border border-zinc-700/50 rounded-full text-xs font-mono text-zinc-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Card 2: Careers or Universities I Explored */}
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
                                    <Compass className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="font-display font-bold text-2xl uppercase tracking-wide">
                                    Careers or Universities I Explored
                                </h3>
                                <p className="text-zinc-300 leading-relaxed font-light text-base">
                                    I have explored careers related to business, marketing, finance, entrepreneurship and the automotive industry. I have also considered careers connected to motorsport and sim racing because they combine my interests in cars, technology and business.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                                {['Automotive Industry', 'Sim Racing', 'Motorsport', 'Business Ventures', 'Finance & Tech'].map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-zinc-800/60 border border-zinc-700/50 rounded-full text-xs font-mono text-zinc-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                    {/* 3-Column Grid for Attracts, Doubts, Questions */}
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* What Attracts Me */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="p-8 border border-blue-500/30 rounded-2xl bg-blue-500/5 backdrop-blur-sm space-y-4 hover:border-blue-500/50 transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">MOTIVATION</span>
                                <Sparkles className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="font-display font-bold text-xl uppercase">What Attracts Me</h3>
                            <p className="text-zinc-300 text-sm leading-relaxed font-light">
                                What attracts me the most is having a career where I can work on something I am genuinely interested in, especially cars and business. I like the idea of creating my own projects or business rather than only working for someone else. I also enjoy situations where I can make decisions, solve problems and see the results of my work.
                            </p>
                        </motion.div>

                        {/* What Creates Doubt or Resistance */}
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
                            <h3 className="font-display font-bold text-xl uppercase">What Creates Doubt or Resistance</h3>
                            <p className="text-zinc-300 text-sm leading-relaxed font-light">
                                My main doubt is choosing one specific path because I have several interests. I am not completely sure if I want to follow a traditional university career or try to build a business around something I am passionate about. I also know that some of the areas I am interested in can be competitive and involve financial risks.
                            </p>
                        </motion.div>

                        {/* Questions I Still Have About My Future */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/40 backdrop-blur-sm space-y-4 hover:border-zinc-700 transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">INQUIRY</span>
                                <HelpCircle className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="font-display font-bold text-xl uppercase">Questions I Still Have About My Future</h3>
                            <p className="text-zinc-300 text-sm leading-relaxed font-light">
                                I still have to decide which career would fit me best and whether university is the best option for me. I also want to understand how I could combine my interests in cars, motorsport, technology and business into one career or business.
                            </p>
                        </motion.div>

                    </div>
                </section>

                {/* ── Section: Interview ── */}
                <section className="space-y-12 pt-8">

                    {/* Header */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono tracking-widest font-bold">
                            <Wrench className="w-4 h-4" />
                            SPOTLIGHT
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
                            Interview — <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>Junior</span>
                        </h2>
                        <p className="text-zinc-400 font-light text-base md:text-lg max-w-3xl">
                            I interviewed someone from the motorsport world to learn more about what it is like to work professionally in motorsport.
                        </p>
                    </div>

                    {/* Main Editorial Feature Card (2 Columns on Desktop) */}
                    <div className="grid lg:grid-cols-12 gap-8 items-stretch">

                        {/* Left Column: Image Presentation (5 cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 group min-h-[380px] lg:min-h-full flex flex-col justify-end"
                        >
                            <img
                                src="/junior-foto.jpeg"
                                alt="Santino Chaud & Karting Mechanic Junior"
                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                            <div className="relative z-10 p-8 space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white text-xs font-mono font-bold tracking-widest uppercase">
                                    TRACKSIDE INTERVIEW
                                </div>
                                <p className="text-white font-display font-bold text-xl uppercase">Junior — Karting Mechanic</p>
                                <p className="text-zinc-300 text-xs font-mono">PADDOCK & WORKSHOP INSIGHTS</p>
                            </div>
                        </motion.div>

                        {/* Right Column: Who & Brief Intro (7 cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-7 space-y-6 flex flex-col justify-between"
                        >
                            {/* Who did you interview? */}
                            <div className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/40 backdrop-blur-sm space-y-4">
                                <div className="flex items-center gap-3">
                                    <UserCheck className="w-5 h-5 text-blue-400" />
                                    <h3 className="font-display font-bold text-2xl uppercase">Who did you interview?</h3>
                                </div>
                                <p className="text-zinc-300 leading-relaxed font-light text-base">
                                    I interviewed my karting mechanic, Junior, because he has a lot of experience working with racing karts and motorsport. I chose him because karting is one of my biggest interests, and I wanted to learn more about what it is like to work professionally in motorsport. I interviewed him in person at the karting track.
                                </p>
                            </div>

                            {/* Brief Introduction */}
                            <div className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/40 backdrop-blur-sm space-y-4">
                                <div className="flex items-center gap-3">
                                    <Wrench className="w-5 h-5 text-blue-400" />
                                    <h3 className="font-display font-bold text-2xl uppercase">Brief Introduction</h3>
                                </div>
                                <p className="text-zinc-300 leading-relaxed font-light text-base">
                                    Junior is my karting mechanic and has several years of experience working with racing karts. He works on the setup, maintenance and repairs of the kart, and he also helps drivers improve the performance of their kart during races and practice sessions.
                                </p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Reflection Grid */}
                    <div className="space-y-6">
                        <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-zinc-300">
                            Reflection & Key Takeaways
                        </h3>

                        <div className="grid md:grid-cols-3 gap-6">

                            {/* What I Learnt */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/40 backdrop-blur-sm space-y-4 hover:border-zinc-700 transition-all"
                            >
                                <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">01 / LESSON</span>
                                <h4 className="font-display font-bold text-xl uppercase">What I Learnt</h4>
                                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                                    From the interview, I learnt that working in motorsport requires a lot of experience, attention to detail and teamwork. Junior explained that small changes to the kart can make a big difference in performance, so mechanics need to understand both the technical side of the kart and what the driver needs.
                                </p>
                            </motion.div>

                            {/* What Surprised Me */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/40 backdrop-blur-sm space-y-4 hover:border-zinc-700 transition-all"
                            >
                                <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">02 / INSIGHT</span>
                                <h4 className="font-display font-bold text-xl uppercase">What Surprised Me</h4>
                                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                                    What surprised me was how important communication between the driver and mechanic is. The mechanic needs to understand exactly what the driver feels on track to make the right changes.
                                </p>
                            </motion.div>

                            {/* How It Influenced Me */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="p-8 border border-blue-500/30 rounded-2xl bg-blue-500/5 backdrop-blur-sm space-y-4 hover:border-blue-500/50 transition-all"
                            >
                                <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">03 / IMPACT</span>
                                <h4 className="font-display font-bold text-xl uppercase">How It Influenced Me</h4>
                                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                                    The conversation influenced the way I think about my future because it showed me that there are many different careers connected to motorsport. It made me more interested in finding a way to combine my passion for cars and karting with business, technology or motorsport in the future.
                                </p>
                            </motion.div>

                        </div>
                    </div>

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
