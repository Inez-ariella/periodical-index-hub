import { motion } from 'framer-motion';
import { Newspaper, BookOpen, FileText, ScrollText, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { statistics } from '@/lib/data';

interface HeroSectionProps {
  onSearchClick: () => void;
}

const HeroSection = ({ onSearchClick }: HeroSectionProps) => {
  const stats = [
    { 
      icon: FileText, 
      value: statistics.totalArticles.toLocaleString(), 
      label: 'Artikel Terindeks',
      delay: 0.1 
    },
    { 
      icon: Newspaper, 
      value: statistics.totalMedia.toString(), 
      label: 'Media Berkala',
      delay: 0.2 
    },
    { 
      icon: BookOpen, 
      value: `${statistics.yearRange.start}-${statistics.yearRange.end}`, 
      label: 'Rentang Tahun',
      delay: 0.3 
    },
  ];

  const publicationStats = [
    { icon: Newspaper, count: statistics.categories.koran, label: 'Surat Kabar', color: 'text-orange-400' },
    { icon: BookOpen, count: statistics.categories.jurnal, label: 'Jurnal', color: 'text-blue-400' },
    { icon: ScrollText, count: statistics.categories.majalah, label: 'Majalah', color: 'text-purple-400' },
    { icon: FileText, count: statistics.categories.buletin, label: 'Buletin', color: 'text-emerald-400' },
  ];

  return (
    <section className="relative min-h-[85vh] gradient-hero overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-8"
          >
            <ScrollText className="w-4 h-4" />
            <span>Layanan Referensi Perpustakaan</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Indeks Terbitan Berkala
            <span className="block mt-2 text-amber-400">
              Menelusuri Isu, Gagasan, dan Pengetahuan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-body"
          >
            Sistem pencarian artikel dari surat kabar, jurnal, majalah, dan buletin. 
            Temukan informasi relevan dari koleksi terbitan berkala perpustakaan dengan cepat dan terstruktur.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onSearchClick}
              className="group"
            >
              <Search className="w-5 h-5" />
              Telusuri Artikel
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Jelajahi Koleksi
            </Button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + stat.delay }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white font-display">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Publication Type Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {publicationStats.map((pub) => (
              <div
                key={pub.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80"
              >
                <pub.icon className={`w-4 h-4 ${pub.color}`} />
                <span className="text-sm">{pub.count.toLocaleString()} {pub.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(45, 30%, 97%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
