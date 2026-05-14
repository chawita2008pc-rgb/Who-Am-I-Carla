import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Flag, Gauge, Mail, Instagram, MapPin } from 'lucide-react';
import ScrollExpandMedia from './components/ui/scroll-expansion-hero';

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-600">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 lg:px-12 py-6 flex justify-between items-center pointer-events-none">
        <a href="#hero" className="font-display font-bold text-xl tracking-wider text-white pointer-events-auto">S.CHAUD</a>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#athletics" className="cursor-pointer pointer-events-auto hover:text-blue-400 transition-colors">Athletics</a>
          <a href="#motorsport" className="cursor-pointer pointer-events-auto hover:text-blue-400 transition-colors">Motorsport</a>
          <a href="#passion" className="cursor-pointer pointer-events-auto hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="w-full">
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc="https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070"
          bgImageSrc="https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070"
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
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070" 
                  alt="Track Athletics" 
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

      {/* Karting Section (ScrollHero) */}
      <div id="motorsport" className="w-full relative z-20">
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc="https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=2000"
          bgImageSrc="https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=2000"
          title="KARTING MOTORSPORT"
          scrollToExpand="SCROLL TO ENTER PADDOCK"
          textBlend={false}
        >
          <div className="w-full max-w-6xl mx-auto py-12 md:py-24">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 border-l-2 border-blue-500 pl-6 py-2">
                <h3 className="font-display text-4xl font-black mb-4">THE PATH TO PRO</h3>
                <p className="text-zinc-400">
                  Karting is where champions are made. Honing race craft, tire management, and overtaking skills at the limits of grip.
                </p>
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/80 p-8 rounded-2xl flex flex-col justify-center items-start border border-zinc-800">
                  <Flag className="mb-4 text-blue-500" size={32} />
                  <p className="font-mono text-zinc-500 text-xs mb-2">OBJECTIVE</p>
                  <p className="font-bold text-xl uppercase">Podium Finishes</p>
                </div>
                <div className="bg-zinc-900/80 p-8 rounded-2xl flex flex-col justify-center items-start border border-zinc-800">
                  <Gauge className="mb-4 text-blue-500" size={32} />
                  <p className="font-mono text-zinc-500 text-xs mb-2">PRECISION</p>
                  <p className="font-bold text-xl uppercase">Apex Hunting</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollExpandMedia>
      </div>

      {/* Passion for Cars */}
      <section id="passion" className="py-24 px-6 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-4">Automotive <span className="text-blue-500">Passion</span></h2>
             <p className="text-zinc-400 max-w-2xl mx-auto">From engineering to aesthetics, the love for cars goes beyond the track.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 aspect-video rounded-xl overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Sportscar" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="aspect-square md:aspect-auto rounded-xl overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Engine" />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>
          </div>
        </div>
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

