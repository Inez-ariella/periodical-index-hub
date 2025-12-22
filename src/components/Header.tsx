import { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoPerpusnas from '@/assets/logo-perpusnas.png';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header = ({ onSearchClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Telusur', href: '#search' },
    { label: 'Eksplorasi', href: '#explore' },
    { label: 'Bantuan', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={logoPerpusnas} 
              alt="Logo Perpustakaan Nasional" 
              className="h-14 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg text-foreground leading-tight">
                Indeks Surat Kabar
              </h1>
              <p className="text-xs text-muted-foreground -mt-0.5">
                UPT Perpustakaan Proklamator Bung Karno
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="hero"
              size="sm"
              onClick={onSearchClick}
              className="hidden sm:flex"
            >
              <Search className="w-4 h-4" />
              Telusuri
            </Button>
            
            <Link to="/admin">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Admin</span>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <nav className="py-4 space-y-2">
                {navLinks.map((link) => (
                  link.href.startsWith('/') ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                ))}
                <Link
                  to="/admin"
                  className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin Login
                </Link>
                <div className="px-4 pt-2">
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={() => {
                      onSearchClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    <Search className="w-4 h-4" />
                    Telusuri Artikel
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
