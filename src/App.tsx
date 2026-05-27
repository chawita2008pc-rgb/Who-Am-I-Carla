import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Mail, Instagram, MapPin } from 'lucide-react';
import ScrollExpandMedia from './components/ui/scroll-expansion-hero';
import About from './pages/About';

export default function App() {
  const [page, setPage] = useState<'home' | 'about'>('home');

  if (page === 'about') return <About onNavigate={setPage} />;

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-600">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 lg:px-12 py-6 flex justify-between items-center pointer-events-none">
        <a href="#hero" className="font-display font-bold text-xl tracking-wider text-white pointer-events-auto">S.CHAUD</a>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#athletics" className="cursor-pointer pointer-events-auto hover:text-blue-400 transition-colors">Athletics</a>
          <button onClick={() => setPage('about')} className="cursor-pointer pointer-events-auto hover:text-blue-400 transition-colors">About</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="w-full">
        <ScrollExpandMedia
          mediaType="video"
          mediaSrc="/karting-hero.mov"
          bgImageSrc="/karting-bg.jpeg"
          title="SANTINO CHAUD"
          date="BUENOS AIRES • ARGENTINA"
          scrollToExpand="SCROLL TO START ENGINES"
          textBlend={true}
        >
          <div className="max-w-4xl mx-auto py-12 md:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-light mb-8 text-zinc-300">
              Chasing speed on the track <br />
              <span className="font-bold text-white italic">and on the tarmac.</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light">
              Athletics (100m, 200m, Long Jump, Triple Jump) & Karting. <br/> 
              Staying elite fit to break records and jump gears into the motorsport world.
            </p>
          </div>
        </ScrollExpandMedia>
      </div>

      {/* Athletics Section */}
      <section id="athletics" className="w-full py-24 carbon-pattern border-t border-zinc-900 border-b relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono tracking-widest font-bold">
                  <Trophy className="w-4 h-4" />
                  ATHLETICS
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter">
                  Raw <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>Power.</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                  Training for explosive speed and vertical power. Specializing in sprints and jumps, transforming athletic conditioning into split-second reaction times behind the wheel.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {['100M DASH', '200M DASH', 'LONG JUMP', 'TRIPLE JUMP'].map((event, idx) => (
                    <div key={idx} className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/50 backdrop-blur-sm">
                      <p className="font-mono text-zinc-500 text-xs mb-1">EVENT 0{idx + 1}</p>
                      <p className="font-display font-bold uppercase">{event}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800">
                <video
                  src="/super.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="font-mono tracking-widest text-sm text-blue-400">CURRENT FOCUS</p>
                  <p className="text-2xl font-bold font-display uppercase">Elite Conditioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* About CTA */}
      <section className="w-full py-32 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="font-mono text-zinc-500 text-sm tracking-widest uppercase">Beyond the track</p>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter">
            Who is <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>Santino?</span>
          </h2>
          <button
            onClick={() => setPage('about')}
            className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-display font-black uppercase tracking-widest text-lg rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Who Am I
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </motion.div>
      </section>

      {/* Footer / Contact */}
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

