import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Newspaper, BookOpen, ScrollText, FileText, Calendar, 
  MapPin, Tag, Hash, Bookmark, Search, Copy, CheckCircle2
} from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Article, JenisTerbitan, getPublicationTypeLabel } from '@/lib/data';
import { toast } from '@/hooks/use-toast';

interface ArticleDetailModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  onFindSimilar: (article: Article) => void;
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

const ArticleDetailModal = ({ article, isOpen, onClose, onFindSimilar }: ArticleDetailModalProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const Icon = getPublicationIcon(article.jenisTerbitan);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? 'Dihapus dari Favorit' : 'Disimpan ke Favorit',
      description: isSaved 
        ? 'Artikel telah dihapus dari daftar favorit Anda.'
        : 'Artikel telah ditambahkan ke daftar favorit Anda.',
    });
  };

  const handleCopyInfo = () => {
    const info = `${article.judul}\n${article.pengarang}\n${article.namaMedia}, ${formatDate(article.tanggalTerbit)}\n${article.lokasiKoleksi}`;
    navigator.clipboard.writeText(info);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: 'Disalin',
      description: 'Informasi artikel telah disalin ke clipboard.',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          {/* Type Badge */}
          <div className="flex items-center justify-between mb-4">
            <Badge variant={article.jenisTerbitan} className="flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5" />
              {getPublicationTypeLabel(article.jenisTerbitan)}
            </Badge>
          </div>

          {/* Title */}
          <DialogTitle className="font-display text-2xl font-bold text-foreground leading-tight pr-8">
            {article.judul}
          </DialogTitle>

          {/* Author */}
          <p className="text-base text-muted-foreground mt-2">
            oleh <span className="text-foreground font-medium">{article.pengarang}</span>
          </p>
        </DialogHeader>

        {/* Content */}
        <div className="space-y-6 mt-4">
          {/* Abstract */}
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-accent" />
              Abstrak / Ringkasan
            </h4>
            <p className="text-muted-foreground leading-relaxed bg-secondary/30 p-4 rounded-lg">
              {article.abstrak}
            </p>
          </div>

          <Separator />

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Media Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Newspaper className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground">Nama Media</p>
                  <p className="font-medium">{article.namaMedia}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground">Tanggal Terbit</p>
                  <p className="font-medium">{formatDate(article.tanggalTerbit)}</p>
                </div>
              </div>

              {(article.volume || article.nomor) && (
                <div className="flex items-start gap-3">
                  <Hash className="w-4 h-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground">Volume / Nomor</p>
                    <p className="font-medium">
                      {article.volume && `Vol. ${article.volume}`}
                      {article.volume && article.nomor && ', '}
                      {article.nomor && `No. ${article.nomor}`}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground">Halaman / Kolom</p>
                  <p className="font-medium">{article.halamanKolom}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground">Lokasi Koleksi</p>
                  <p className="font-medium">{article.lokasiKoleksi}</p>
                </div>
              </div>

              {article.issn && (
                <div className="flex items-start gap-3">
                  <Hash className="w-4 h-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground">ISSN</p>
                    <p className="font-medium font-mono">{article.issn}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Subjects */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4 text-accent" />
              Subjek / Topik
            </h4>
            <div className="flex flex-wrap gap-2">
              {article.subjek.map((subj) => (
                <Badge key={subj} variant="subject" className="px-3 py-1">
                  {subj}
                </Badge>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Hash className="w-4 h-4 text-accent" />
              Kata Kunci
            </h4>
            <div className="flex flex-wrap gap-2">
              {article.kataKunci.map((kw) => (
                <Badge key={kw} variant="outline" className="px-3 py-1">
                  {kw}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant={isSaved ? 'default' : 'outline'}
              onClick={handleSave}
              className="flex-1 sm:flex-none"
            >
              <Bookmark className={`w-4 h-4 mr-2 ${isSaved ? 'fill-current' : ''}`} />
              {isSaved ? 'Tersimpan' : 'Simpan ke Favorit'}
            </Button>
            
            <Button
              variant="outline"
              onClick={() => onFindSimilar(article)}
              className="flex-1 sm:flex-none"
            >
              <Search className="w-4 h-4 mr-2" />
              Artikel Serupa
            </Button>

            <Button
              variant="outline"
              onClick={handleCopyInfo}
              className="flex-1 sm:flex-none"
            >
              {copied ? (
                <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 mr-2" />
              )}
              {copied ? 'Tersalin' : 'Salin Info'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleDetailModal;
