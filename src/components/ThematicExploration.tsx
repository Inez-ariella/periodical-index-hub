import { motion } from 'framer-motion';
import { 
  Laptop, Baby, BookOpenCheck, Languages, 
  GraduationCap, Cpu, Briefcase, Heart, Users, Palette,
  TrendingUp, Clock, Star
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { sampleArticles, subjects } from '@/lib/data';

interface ThematicExplorationProps {
  onSubjectClick: (subject: string) => void;
  onArticleClick: (articleId: string) => void;
}

const subjectIcons: Record<string, any> = {
  'Literasi Digital': Laptop,
  'Literasi Anak': Baby,
  'Pustakawan & Perpustakaan': BookOpenCheck,
  'Bahasa & Budaya': Languages,
  'Pendidikan': GraduationCap,
  'Teknologi Informasi': Cpu,
  'Ekonomi & Bisnis': Briefcase,
  'Kesehatan': Heart,
  'Sosial Politik': Users,
  'Seni & Sastra': Palette,
};

const subjectColors: Record<string, string> = {
  'Literasi Digital': 'from-blue-500 to-cyan-500',
  'Literasi Anak': 'from-pink-500 to-rose-500',
  'Pustakawan & Perpustakaan': 'from-amber-500 to-orange-500',
  'Bahasa & Budaya': 'from-purple-500 to-violet-500',
  'Pendidikan': 'from-green-500 to-emerald-500',
  'Teknologi Informasi': 'from-slate-500 to-gray-600',
  'Ekonomi & Bisnis': 'from-yellow-500 to-amber-500',
  'Kesehatan': 'from-red-500 to-rose-500',
  'Sosial Politik': 'from-indigo-500 to-blue-500',
  'Seni & Sastra': 'from-fuchsia-500 to-pink-500',
};

const ThematicExploration = ({ onSubjectClick, onArticleClick }: ThematicExplorationProps) => {
  // Get recent articles (sorted by date)
  const recentArticles = [...sampleArticles]
    .sort((a, b) => new Date(b.tanggalTerbit).getTime() - new Date(a.tanggalTerbit).getTime())
    .slice(0, 5);

  // Simulated popular articles
  const popularArticles = sampleArticles.slice(0, 4);

  // Get article counts per subject
  const subjectCounts = subjects.reduce((acc, subject) => {
    acc[subject] = sampleArticles.filter(a => a.subjek.includes(subject)).length;
    return acc;
  }, {} as Record<string, number>);

  // Timeline data (years with article counts)
  const yearCounts = sampleArticles.reduce((acc, article) => {
    const year = article.tahunTerbit;
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const years = Object.keys(yearCounts).map(Number).sort((a, b) => b - a);

  return (
    <section id="explore" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Eksplorasi Tematik
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jelajahi koleksi artikel berdasarkan kategori, topik, atau periode waktu tertentu
          </p>
        </motion.div>

        {/* Subject Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <BookOpenCheck className="w-5 h-5 text-accent" />
            Kategori Subjek
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {subjects.map((subject, index) => {
              const Icon = subjectIcons[subject] || BookOpenCheck;
              const gradientColor = subjectColors[subject] || 'from-gray-500 to-slate-500';
              
              return (
                <motion.button
                  key={subject}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => onSubjectClick(subject)}
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] border-border/50 hover:border-accent/30 overflow-hidden">
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${gradientColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-medium text-sm text-foreground mb-1 line-clamp-2">
                        {subject}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {subjectCounts[subject]} artikel
                      </p>
                    </CardContent>
                  </Card>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Articles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Artikel Terbaru
            </h3>
            <Card>
              <CardContent className="p-0 divide-y divide-border">
                {recentArticles.map((article, index) => (
                  <button
                    key={article.id}
                    onClick={() => onArticleClick(article.id)}
                    className="w-full p-4 text-left hover:bg-accent/5 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {article.judul}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {article.namaMedia} • {new Date(article.tanggalTerbit).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Popular / Most Searched */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Paling Sering Ditelusur
            </h3>
            <Card>
              <CardContent className="p-0 divide-y divide-border">
                {popularArticles.map((article, index) => (
                  <button
                    key={article.id}
                    onClick={() => onArticleClick(article.id)}
                    className="w-full p-4 text-left hover:bg-accent/5 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <Star className="flex-shrink-0 w-5 h-5 text-amber-500 fill-amber-500" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {article.judul}
                        </h4>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {article.subjek.slice(0, 2).map((s) => (
                            <Badge key={s} variant="subject" className="text-xs">
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Timeline */}
            <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-8 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Timeline Publikasi
            </h3>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-end justify-between gap-2 h-24">
                  {years.map((year) => {
                    const count = yearCounts[year];
                    const maxCount = Math.max(...Object.values(yearCounts));
                    const height = (count / maxCount) * 100;
                    
                    return (
                      <div key={year} className="flex-1 flex flex-col items-center gap-1">
                        <div 
                          className="w-full bg-gradient-to-t from-accent to-amber-400 rounded-t transition-all hover:from-amber-600 hover:to-amber-400"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-xs text-muted-foreground font-medium">{year}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThematicExploration;
