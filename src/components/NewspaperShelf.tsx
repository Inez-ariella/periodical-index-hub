import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, ExternalLink, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Article, sampleArticles } from '@/lib/data';
import FlipbookViewer from './FlipbookViewer';

interface NewspaperShelfProps {
  onArticleClick: (article: Article) => void;
}

// Group articles by media name
const groupByMedia = (articles: Article[]) => {
  const grouped = new Map<string, Article[]>();
  articles.forEach(article => {
    const existing = grouped.get(article.namaMedia) || [];
    existing.push(article);
    grouped.set(article.namaMedia, existing);
  });
  return Array.from(grouped.entries()).map(([media, articles]) => ({
    media,
    articles,
    thumbnail: articles[0].fotoUrl,
  }));
};

const ITEMS_PER_SHELF = 6;
const ITEMS_PER_SHELF_MOBILE = 2;

const NewspaperShelf = ({ onArticleClick }: NewspaperShelfProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedMedia, setExpandedMedia] = useState<string | null>(null);
  const [flipbookOpen, setFlipbookOpen] = useState(false);
  const [selectedMediaForFlipbook, setSelectedMediaForFlipbook] = useState<string | null>(null);
  const [initialArticleId, setInitialArticleId] = useState<string | undefined>(undefined);

  const mediaGroups = useMemo(() => groupByMedia(sampleArticles), []);
  
  const totalPages = Math.ceil(mediaGroups.length / ITEMS_PER_SHELF);
  
  const currentItems = mediaGroups.slice(
    currentPage * ITEMS_PER_SHELF,
    (currentPage + 1) * ITEMS_PER_SHELF
  );

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  const handleMediaClick = (media: string) => {
    setExpandedMedia(expandedMedia === media ? null : media);
  };

  const handleOpenFlipbook = (mediaName: string, articleId?: string) => {
    setSelectedMediaForFlipbook(mediaName);
    setInitialArticleId(articleId);
    setFlipbookOpen(true);
  };

  const handleCloseFlipbook = () => {
    setFlipbookOpen(false);
    setSelectedMediaForFlipbook(null);
    setInitialArticleId(undefined);
  };

  const getArticlesForMedia = (mediaName: string) => {
    return mediaGroups.find(g => g.media === mediaName)?.articles || [];
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Wooden shelf background */}
      <div className="absolute inset-0 bg-shelf" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-shelf-foreground mb-3">
            Jelajahi Koleksi Koran
          </h2>
          <p className="text-shelf-muted max-w-2xl mx-auto">
            Telusuri koleksi koran digital kami seperti menjelajahi rak perpustakaan. 
            Klik pada surat kabar untuk melihat artikel yang tersedia.
          </p>
        </motion.div>

        {/* Wooden Shelf Display */}
        <div className="relative">
          {/* Shelf with newspapers */}
          <div className="bg-shelf-wood rounded-t-lg p-6 md:p-8 min-h-[320px] relative shadow-shelf">
            {/* Wood grain texture overlay */}
            <div className="absolute inset-0 bg-wood-grain opacity-30 rounded-t-lg pointer-events-none" />
            
            {/* Newspapers grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 relative z-10">
              <AnimatePresence mode="wait">
                {currentItems.map((group, index) => (
                  <motion.div
                    key={group.media}
                    initial={{ opacity: 0, y: 20, rotateY: -15 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer perspective-1000"
                    onClick={() => handleMediaClick(group.media)}
                  >
                    {/* Newspaper standing */}
                    <div className="relative transform-style-preserve-3d transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                      {/* Newspaper thumbnail */}
                      <div className="relative bg-white rounded-sm shadow-newspaper overflow-hidden aspect-[3/4]">
                        {group.thumbnail ? (
                          <img
                            src={group.thumbnail}
                            alt={group.media}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                        
                        {/* Masthead overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3">
                          <h3 className="font-display text-white text-sm font-bold truncate">
                            {group.media}
                          </h3>
                          <p className="text-white/70 text-xs">
                            {group.articles.length} artikel
                          </p>
                        </div>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      
                      {/* Paper edge effect */}
                      <div className="absolute -right-1 top-1 bottom-1 w-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-r-sm shadow-sm" />
                      <div className="absolute -right-2 top-2 bottom-2 w-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-r-sm" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Shelf plank */}
          <div className="h-6 bg-shelf-plank rounded-b-lg shadow-plank relative">
            <div className="absolute inset-0 bg-wood-grain opacity-20" />
            {/* Shelf edge highlight */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-b from-amber-200/30 to-transparent" />
          </div>
          
          {/* Shelf support brackets */}
          <div className="flex justify-between px-8 -mt-2">
            <div className="w-4 h-8 bg-shelf-bracket rounded-b-sm shadow-md" />
            <div className="w-4 h-8 bg-shelf-bracket rounded-b-sm shadow-md" />
          </div>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="bg-shelf-wood/80 border-shelf-border text-shelf-foreground hover:bg-shelf-wood disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentPage
                      ? 'bg-accent scale-125'
                      : 'bg-shelf-muted/50 hover:bg-shelf-muted'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="bg-shelf-wood/80 border-shelf-border text-shelf-foreground hover:bg-shelf-wood disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Expanded Media Articles */}
        <AnimatePresence>
          {expandedMedia && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 overflow-hidden"
            >
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Artikel dari {expandedMedia}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleOpenFlipbook(expandedMedia)}
                      className="bg-accent hover:bg-accent/90"
                    >
                      <Newspaper className="w-4 h-4 mr-2" />
                      Buka Flipbook
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedMedia(null)}
                    >
                      Tutup
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mediaGroups
                    .find(g => g.media === expandedMedia)
                    ?.articles.map((article, idx) => (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group bg-secondary/50 rounded-lg p-4 cursor-pointer hover:bg-secondary transition-colors"
                        onClick={() => handleOpenFlipbook(expandedMedia, article.id)}
                      >
                        <div className="flex gap-3">
                          {article.fotoUrl && (
                            <img
                              src={article.fotoUrl}
                              alt={article.judul}
                              className="w-16 h-20 object-cover rounded shadow-sm flex-shrink-0"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground text-sm line-clamp-2 group-hover:text-accent transition-colors">
                              {article.judul}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {article.halamanKolom}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {article.tanggalTerbit}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs text-accent flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            Buka di Flipbook
                          </span>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Flipbook Viewer */}
        {selectedMediaForFlipbook && (
          <FlipbookViewer
            articles={getArticlesForMedia(selectedMediaForFlipbook)}
            mediaName={selectedMediaForFlipbook}
            isOpen={flipbookOpen}
            onClose={handleCloseFlipbook}
            initialArticleId={initialArticleId}
          />
        )}
      </div>
    </section>
  );
};

export default NewspaperShelf;
