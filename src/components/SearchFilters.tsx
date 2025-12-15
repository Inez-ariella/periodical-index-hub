import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { subjects, mediaList, JenisTerbitan } from '@/lib/data';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: {
    jenisTerbitan: string;
    tahun: string;
    media: string;
    subjek: string;
  };
  onFiltersChange: (filters: any) => void;
}

const SearchFilters = ({ searchQuery, onSearchChange, filters, onFiltersChange }: SearchFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 40 }, (_, i) => (currentYear - i).toString());
  }, []);

  const handleSearchChange = (value: string) => {
    onSearchChange(value);
    // Simple autocomplete suggestions
    if (value.length > 2) {
      const allKeywords = ['perpustakaan', 'literasi', 'digital', 'anak', 'pustakawan', 'budaya', 'bahasa', 'pendidikan'];
      const matches = allKeywords.filter(k => k.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(matches.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const clearFilters = () => {
    onFiltersChange({
      jenisTerbitan: '',
      tahun: '',
      media: '',
      subjek: '',
    });
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="bg-card rounded-2xl shadow-card border border-border p-6">
      {/* Main Search Bar */}
      <div className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari judul artikel, topik, penulis, atau kata kunci..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-12 pr-4 h-14 text-base rounded-xl border-2 border-border focus:border-accent transition-colors"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className={`w-5 h-5 transition-colors ${showFilters ? 'text-accent' : 'text-muted-foreground'}`} />
          </Button>
        </div>

        {/* Autocomplete Suggestions */}
        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-20 top-full left-0 right-0 mt-2 bg-popover rounded-xl shadow-lg border border-border overflow-hidden"
            >
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  className="w-full px-4 py-3 text-left hover:bg-accent/10 transition-colors flex items-center gap-2"
                  onClick={() => {
                    onSearchChange(suggestion);
                    setSuggestions([]);
                  }}
                >
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <span>{suggestion}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filter Toggle Button for Mobile */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Filter className="w-4 h-4" />
          <span>Filter Pencarian</span>
          {activeFiltersCount > 0 && (
            <Badge variant="gold" className="text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </button>
        
        {activeFiltersCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Hapus Filter
          </button>
        )}
      </div>

      {/* Expandable Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
              {/* Jenis Terbitan */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Jenis Terbitan</label>
                <Select
                  value={filters.jenisTerbitan}
                  onValueChange={(value) => onFiltersChange({ ...filters, jenisTerbitan: value })}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Semua Jenis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Jenis</SelectItem>
                    <SelectItem value="koran">Surat Kabar</SelectItem>
                    <SelectItem value="jurnal">Jurnal Ilmiah</SelectItem>
                    <SelectItem value="majalah">Majalah</SelectItem>
                    <SelectItem value="buletin">Buletin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tahun Terbit */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Tahun Terbit</label>
                <Select
                  value={filters.tahun}
                  onValueChange={(value) => onFiltersChange({ ...filters, tahun: value })}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Semua Tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Tahun</SelectItem>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Nama Media */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Nama Media</label>
                <Select
                  value={filters.media}
                  onValueChange={(value) => onFiltersChange({ ...filters, media: value })}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Semua Media" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Media</SelectItem>
                    {mediaList.map((media) => (
                      <SelectItem key={media.nama} value={media.nama}>{media.nama}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Subjek/Topik */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Subjek/Topik</label>
                <Select
                  value={filters.subjek}
                  onValueChange={(value) => onFiltersChange({ ...filters, subjek: value })}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Semua Subjek" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Subjek</SelectItem>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchFilters;
