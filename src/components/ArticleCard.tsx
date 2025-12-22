import { motion } from 'framer-motion';
import { Newspaper, Calendar, MapPin, Eye, ImageIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Article } from '@/lib/data';

interface ArticleCardProps {
  article: Article;
  onViewDetail: (article: Article) => void;
  searchQuery?: string;
  index: number;
}

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
          <div className="h-1 bg-orange-500" />
          
          {/* Newspaper Photo */}
          <div className="relative w-full h-48 bg-secondary/30 overflow-hidden">
            {article.fotoUrl ? (
              <img 
                src={article.fotoUrl} 
                alt={`Foto kliping: ${article.judul}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/50">
                <ImageIcon className="w-12 h-12 mb-2" />
                <span className="text-xs">Foto Kliping</span>
              </div>
            )}
            {/* Media Badge Overlay */}
            <div className="absolute top-3 left-3">
              <Badge variant="koran" className="flex items-center gap-1.5 shadow-md">
                <Newspaper className="w-3 h-3" />
                Surat Kabar
              </Badge>
            </div>
          </div>
          
          <div className="p-5">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-sm font-medium text-foreground">{article.namaMedia}</span>
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
