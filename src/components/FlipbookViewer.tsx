import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Maximize2,
  Minimize2,
  BookOpen,
  Calendar,
  MapPin,
  Tag,
  FileText,
  Bookmark,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Article } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

interface FlipbookViewerProps {
  articles: Article[];
  mediaName: string;
  isOpen: boolean;
  onClose: () => void;
  initialArticleId?: string;
}

const FlipbookViewer = ({ 
  articles, 
  mediaName, 
  isOpen, 
  onClose,
  initialArticleId 
}: FlipbookViewerProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'left' | 'right'>('right');
  const [showInfo, setShowInfo] = useState(true);
  const { toast } = useToast();

  // Sort articles by page number
  const sortedArticles = [...articles].sort((a, b) => {
    const pageA = parseInt(a.halamanKolom.match(/\d+/)?.[0] || '0');
    const pageB = parseInt(b.halamanKolom.match(/\d+/)?.[0] || '0');
    return pageA - pageB;
  });

  // Set initial page based on article ID
  useEffect(() => {
    if (initialArticleId && isOpen) {
      const index = sortedArticles.findIndex(a => a.id === initialArticleId);
      if (index !== -1) {
        setCurrentPage(index);
      }
    }
  }, [initialArticleId, isOpen, sortedArticles]);

  const currentArticle = sortedArticles[currentPage];
  const totalPages = sortedArticles.length;

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setFlipDirection('left');
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setFlipDirection('right');
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  const handleShare = () => {
    if (currentArticle) {
      navigator.clipboard.writeText(
        `${currentArticle.judul} - ${mediaName} (${currentArticle.tanggalTerbit})`
      );
      toast({
        title: "Berhasil disalin!",
        description: "Informasi artikel telah disalin ke clipboard.",
      });
    }
  };

  const handleSave = () => {
    toast({
      title: "Artikel disimpan!",
      description: "Artikel telah ditambahkan ke koleksi Anda.",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Page flip animation variants
  const pageVariants = {
    enter: (direction: 'left' | 'right') => ({
      rotateY: direction === 'right' ? -90 : 90,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
    exit: (direction: 'left' | 'right') => ({
      rotateY: direction === 'right' ? 90 : -90,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: 'easeIn' as const,
      },
    }),
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col"
      >
        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between px-4 md:px-8 py-4 bg-gradient-to-b from-black/50 to-transparent"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h1 className="font-display text-lg md:text-xl font-bold text-white">
                {mediaName}
              </h1>
              <p className="text-sm text-white/60">
                Halaman {currentPage + 1} dari {totalPages}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden md:flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomOut}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <span className="text-xs text-white/60 min-w-[40px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomIn}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleResetZoom}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            {/* Toggle Info */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowInfo(!showInfo)}
              className="h-10 w-10 text-white hover:bg-white/20"
            >
              <FileText className="w-5 h-5" />
            </Button>

            {/* Fullscreen */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="h-10 w-10 text-white hover:bg-white/20"
            >
              {isFullscreen ? (
                <Minimize2 className="w-5 h-5" />
              ) : (
                <Maximize2 className="w-5 h-5" />
              )}
            </Button>

            {/* Close */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-10 w-10 text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Flipbook Area */}
          <div className="flex-1 flex items-center justify-center relative p-4">
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="absolute left-2 md:left-8 z-10 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="absolute right-2 md:right-8 z-10 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 transition-all hover:scale-110"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Book Container */}
            <div 
              className="relative perspective-1000"
              style={{ transform: `scale(${zoom})` }}
            >
              {/* Book Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/40 blur-xl rounded-full" />
              
              {/* Book Spread */}
              <div className="relative flex">
                {/* Left Page (Previous) */}
                <motion.div
                  className="hidden md:block w-[280px] lg:w-[350px] xl:w-[400px] h-[400px] lg:h-[500px] xl:h-[560px] bg-gradient-to-l from-gray-100 to-gray-200 rounded-l-sm shadow-2xl relative overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {currentPage > 0 && sortedArticles[currentPage - 1] && (
                    <>
                      {sortedArticles[currentPage - 1].fotoUrl ? (
                        <img
                          src={sortedArticles[currentPage - 1].fotoUrl}
                          alt="Previous page"
                          className="w-full h-full object-cover object-center opacity-60"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    </>
                  )}
                  {currentPage === 0 && (
                    <div className="w-full h-full bg-gradient-to-r from-amber-50 to-amber-100 flex items-center justify-center">
                      <div className="text-center p-8">
                        <BookOpen className="w-16 h-16 text-amber-700/50 mx-auto mb-4" />
                        <h3 className="font-display text-xl font-bold text-amber-900/80">
                          {mediaName}
                        </h3>
                        <p className="text-amber-800/60 text-sm mt-2">Koleksi Digital</p>
                      </div>
                    </div>
                  )}
                  {/* Book spine shadow */}
                  <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-black/30 to-transparent" />
                </motion.div>

                {/* Book Spine */}
                <div className="hidden md:block w-3 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 shadow-inner" />

                {/* Right Page (Current) */}
                <AnimatePresence mode="wait" custom={flipDirection}>
                  <motion.div
                    key={currentPage}
                    custom={flipDirection}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-[280px] sm:w-[320px] md:w-[280px] lg:w-[350px] xl:w-[400px] h-[400px] sm:h-[450px] lg:h-[500px] xl:h-[560px] bg-white rounded-r-sm md:rounded-r-sm rounded-l-sm md:rounded-l-none shadow-2xl relative overflow-hidden"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'left center',
                    }}
                  >
                    {currentArticle?.fotoUrl ? (
                      <img
                        src={currentArticle.fotoUrl}
                        alt={currentArticle.judul}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <FileText className="w-24 h-24 text-gray-300" />
                      </div>
                    )}
                    
                    {/* Page fold effect */}
                    <div className="absolute left-0 inset-y-0 w-4 bg-gradient-to-r from-black/10 to-transparent" />
                    
                    {/* Page number */}
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      {currentArticle?.halamanKolom}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <AnimatePresence>
            {showInfo && currentArticle && (
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="w-full md:w-[380px] lg:w-[420px] bg-card/95 backdrop-blur-md border-l border-border overflow-hidden flex flex-col"
              >
                <ScrollArea className="flex-1">
                  <div className="p-6">
                    {/* Article Badge */}
                    <Badge className="bg-accent/20 text-accent hover:bg-accent/30 mb-4">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Surat Kabar
                    </Badge>

                    {/* Title */}
                    <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground leading-tight mb-2">
                      {currentArticle.judul}
                    </h2>

                    {/* Author */}
                    <p className="text-muted-foreground text-sm mb-4">
                      oleh <span className="text-accent font-medium">{currentArticle.pengarang}</span>
                    </p>

                    {/* Thumbnail in info */}
                    {currentArticle.fotoUrl && (
                      <div className="relative rounded-lg overflow-hidden mb-6 border border-border">
                        <img
                          src={currentArticle.fotoUrl}
                          alt={currentArticle.judul}
                          className="w-full h-48 object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Abstract */}
                    <div className="mb-6">
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                        <FileText className="w-4 h-4 text-accent" />
                        Ringkasan Artikel
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed bg-secondary/50 rounded-lg p-4">
                        {currentArticle.abstrak}
                      </p>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-secondary/30 rounded-lg p-3">
                        <p className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                          <BookOpen className="w-3 h-3" />
                          Nama Media
                        </p>
                        <p className="font-medium text-foreground text-sm">
                          {currentArticle.namaMedia}
                        </p>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3">
                        <p className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                          <Tag className="w-3 h-3" />
                          Halaman / Kolom
                        </p>
                        <p className="font-medium text-foreground text-sm">
                          {currentArticle.halamanKolom}
                        </p>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3">
                        <p className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                          <Calendar className="w-3 h-3" />
                          Tanggal Terbit
                        </p>
                        <p className="font-medium text-foreground text-sm">
                          {formatDate(currentArticle.tanggalTerbit)}
                        </p>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3">
                        <p className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                          <MapPin className="w-3 h-3" />
                          Lokasi Koleksi
                        </p>
                        <p className="font-medium text-foreground text-sm">
                          {currentArticle.lokasiKoleksi}
                        </p>
                      </div>
                    </div>

                    {/* Subjects */}
                    <div className="mb-6">
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                        <Tag className="w-4 h-4 text-accent" />
                        Subjek / Topik
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentArticle.subjek.map((subj, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="bg-accent/10 border-accent/30 text-accent"
                          >
                            {subj}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Keywords */}
                    <div className="mb-6">
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        Kata Kunci
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentArticle.kataKunci.map((keyword, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="text-xs"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollArea>

                {/* Action Buttons */}
                <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSave}
                      className="flex-1 bg-accent hover:bg-accent/90"
                    >
                      <Bookmark className="w-4 h-4 mr-2" />
                      Simpan
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleShare}
                      className="flex-1"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Bagikan
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Page Thumbnails */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-4 md:px-8 py-4 bg-gradient-to-t from-black/50 to-transparent"
        >
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {sortedArticles.map((article, idx) => (
              <button
                key={article.id}
                onClick={() => {
                  setFlipDirection(idx > currentPage ? 'right' : 'left');
                  setCurrentPage(idx);
                }}
                className={`
                  relative flex-shrink-0 w-12 h-16 md:w-16 md:h-20 rounded-sm overflow-hidden border-2 transition-all
                  ${idx === currentPage 
                    ? 'border-accent ring-2 ring-accent/30 scale-110' 
                    : 'border-transparent hover:border-white/30 opacity-60 hover:opacity-100'
                  }
                `}
              >
                {article.fotoUrl ? (
                  <img
                    src={article.fotoUrl}
                    alt={`Page ${idx + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-500">{idx + 1}</span>
                  </div>
                )}
                {idx === currentPage && (
                  <div className="absolute inset-0 bg-accent/20" />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FlipbookViewer;
