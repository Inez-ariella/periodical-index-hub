import { motion } from 'framer-motion';
import { Newspaper, BookOpen, ScrollText, FileText, Calendar, MapPin, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Article, JenisTerbitan, getPublicationTypeLabel } from '@/lib/data';

interface ArticleCardProps {
  article: Article;
  onViewDetail: (article: Article) => void;
  searchQuery?: string;
  index: number;
}

const getPublicationIcon = (type: JenisTerbitan) => {
  const icons: Record<JenisTerbitan, any> = {
    koran: Newspaper,
    jurnal: BookOpen,
    majalah: ScrollText,
    buletin: FileText,
  };
  return icons[type];
};

const highlightText = (text: string, query: string) => {
  if (!query.trim()) return text;
  
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) => 
    part.toLowerCase() === query.toLowerCase() 
      ? <mark key={i} className="bg-amber-200 dark:bg-amber-900/50 px-0.5 rounded">{part}</mark>
      : part
  );
};

const ArticleCard = ({ article, onViewDetail, searchQuery = '', index }: ArticleCardProps) => {
  const Icon = getPublicationIcon(article.jenisTerbitan);
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="group h-full hover:shadow-card-hover transition-all duration-300 border-border/50 hover:border-accent/30 overflow-hidden">
        <CardContent className="p-0">
          {/* Type Indicator Bar */}
          <div className={`h-1 ${
            article.jenisTerbitan === 'koran' ? 'bg-orange-500' :
            article.jenisTerbitan === 'jurnal' ? 'bg-blue-500' :
            article.jenisTerbitan === 'majalah' ? 'bg-purple-500' :
            'bg-emerald-500'
          }`} />
          
          <div className="p-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <Badge variant={article.jenisTerbitan} className="flex items-center gap-1.5">
                <Icon className="w-3 h-3" />
                {getPublicationTypeLabel(article.jenisTerbitan)}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {formatDate(article.tanggalTerbit)}
              </div>
            </div>

            {/* Title */}
            <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {highlightText(article.judul, searchQuery)}
            </h3>

            {/* Author */}
            <p className="text-sm text-muted-foreground mb-3">
              {highlightText(article.pengarang, searchQuery)}
            </p>

            {/* Media Info */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="font-medium text-foreground">{article.namaMedia}</span>
              {article.volume && (
                <span className="text-muted-foreground/60">
                  Vol. {article.volume}{article.nomor && `, No. ${article.nomor}`}
                </span>
              )}
            </div>

            {/* Subjects */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {article.subjek.slice(0, 3).map((subj) => (
                <Badge key={subj} variant="subject" className="text-xs">
                  {subj}
                </Badge>
              ))}
              {article.subjek.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{article.subjek.length - 3}
                </Badge>
              )}
            </div>

            {/* Abstract Preview */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {article.abstrak}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span className="truncate max-w-[150px]">{article.lokasiKoleksi}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onViewDetail(article)}
                className="group/btn text-primary hover:text-primary"
              >
                <Eye className="w-4 h-4 mr-1" />
                Lihat Detail
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ArticleCard;
