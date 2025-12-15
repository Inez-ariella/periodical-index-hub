import { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileSearch, LayoutGrid, List } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SearchFilters from '@/components/SearchFilters';
import ArticleCard from '@/components/ArticleCard';
import ArticleDetailModal from '@/components/ArticleDetailModal';
import ThematicExploration from '@/components/ThematicExploration';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { sampleArticles, Article } from '@/lib/data';

const Index = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    jenisTerbitan: '',
    tahun: '',
    media: '',
    subjek: '',
  });
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    return sampleArticles.filter((article) => {
      // Search query filter
      const query = searchQuery.toLowerCase();
      const matchesQuery =
        !query ||
        article.judul.toLowerCase().includes(query) ||
        article.pengarang.toLowerCase().includes(query) ||
        article.kataKunci.some((k) => k.toLowerCase().includes(query)) ||
        article.subjek.some((s) => s.toLowerCase().includes(query)) ||
        article.abstrak.toLowerCase().includes(query);

      // Type filter
      const matchesType =
        !filters.jenisTerbitan ||
        filters.jenisTerbitan === 'all' ||
        article.jenisTerbitan === filters.jenisTerbitan;

      // Year filter
      const matchesYear =
        !filters.tahun ||
        filters.tahun === 'all' ||
        article.tahunTerbit.toString() === filters.tahun;

      // Media filter
      const matchesMedia =
        !filters.media || filters.media === 'all' || article.namaMedia === filters.media;

      // Subject filter
      const matchesSubject =
        !filters.subjek || filters.subjek === 'all' || article.subjek.includes(filters.subjek);

      return matchesQuery && matchesType && matchesYear && matchesMedia && matchesSubject;
    });
  }, [searchQuery, filters]);

  const scrollToSearch = () => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDetail = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleFindSimilar = (article: Article) => {
    // Set the first subject as the search filter
    if (article.subjek.length > 0) {
      setFilters({ ...filters, subjek: article.subjek[0] });
      setSelectedArticle(null);
      scrollToSearch();
    }
  };

  const handleSubjectClick = (subject: string) => {
    setFilters({ ...filters, subjek: subject });
    scrollToSearch();
  };

  const handleArticleClick = (articleId: string) => {
    const article = sampleArticles.find((a) => a.id === articleId);
    if (article) {
      setSelectedArticle(article);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearchClick={scrollToSearch} />

      <main>
        {/* Hero Section */}
        <HeroSection onSearchClick={scrollToSearch} />

        {/* Search Section */}
        <section ref={searchRef} id="search" className="py-12 scroll-mt-20">
          <div className="container mx-auto px-4">
            <SearchFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filters={filters}
              onFiltersChange={setFilters}
            />

            {/* Results Header */}
            <div className="flex items-center justify-between mt-8 mb-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Hasil Pencarian
                </h2>
                <p className="text-muted-foreground mt-1">
                  Ditemukan{' '}
                  <span className="font-semibold text-foreground">
                    {filteredArticles.length}
                  </span>{' '}
                  artikel
                </p>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-8 px-3"
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-8 px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Results Grid/List */}
            {filteredArticles.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'flex flex-col gap-4'
                }
              >
                {filteredArticles.map((article, index) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onViewDetail={handleViewDetail}
                    searchQuery={searchQuery}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <FileSearch className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Tidak ada artikel ditemukan
                </h3>
                <p className="text-muted-foreground">
                  Coba ubah kata kunci atau filter pencarian Anda
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Thematic Exploration */}
        <ThematicExploration
          onSubjectClick={handleSubjectClick}
          onArticleClick={handleArticleClick}
        />
      </main>

      <Footer />

      {/* Article Detail Modal */}
      <ArticleDetailModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onFindSimilar={handleFindSimilar}
      />
    </div>
  );
};

export default Index;
