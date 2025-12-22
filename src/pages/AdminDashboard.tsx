import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  LogOut, Plus, Edit, Trash2, Search, Home, Newspaper, 
  Calendar, User as UserIcon, FileText, ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Article, sampleArticles } from '@/lib/data';
import logoPerpusnas from '@/assets/logo-perpusnas.png';

const AdminDashboard = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>(sampleArticles);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState({
    judul: '',
    pengarang: '',
    subjek: '',
    abstrak: '',
    namaMedia: '',
    tanggalTerbit: '',
    halamanKolom: '',
    kataKunci: '',
    lokasiKoleksi: '',
    fotoUrl: '',
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    toast.success('Logout berhasil');
    navigate('/admin');
  };

  const filteredArticles = articles.filter(article =>
    article.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.pengarang.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.namaMedia.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      judul: '',
      pengarang: '',
      subjek: '',
      abstrak: '',
      namaMedia: '',
      tanggalTerbit: '',
      halamanKolom: '',
      kataKunci: '',
      lokasiKoleksi: '',
      fotoUrl: '',
    });
    setEditingArticle(null);
  };

  const handleAddArticle = () => {
    const newArticle: Article = {
      id: String(Date.now()),
      judul: formData.judul,
      pengarang: formData.pengarang,
      subjek: formData.subjek.split(',').map(s => s.trim()),
      abstrak: formData.abstrak,
      namaMedia: formData.namaMedia,
      jenisTerbitan: 'koran',
      tanggalTerbit: formData.tanggalTerbit,
      tahunTerbit: new Date(formData.tanggalTerbit).getFullYear(),
      halamanKolom: formData.halamanKolom,
      kataKunci: formData.kataKunci.split(',').map(k => k.trim()),
      lokasiKoleksi: formData.lokasiKoleksi,
      fotoUrl: formData.fotoUrl || '/placeholder.svg',
    };

    setArticles([newArticle, ...articles]);
    toast.success('Artikel berhasil ditambahkan');
    setIsAddDialogOpen(false);
    resetForm();
  };

  const handleEditArticle = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      judul: article.judul,
      pengarang: article.pengarang,
      subjek: article.subjek.join(', '),
      abstrak: article.abstrak,
      namaMedia: article.namaMedia,
      tanggalTerbit: article.tanggalTerbit,
      halamanKolom: article.halamanKolom,
      kataKunci: article.kataKunci.join(', '),
      lokasiKoleksi: article.lokasiKoleksi,
      fotoUrl: article.fotoUrl || '',
    });
  };

  const handleUpdateArticle = () => {
    if (!editingArticle) return;

    const updatedArticles = articles.map(article => {
      if (article.id === editingArticle.id) {
        return {
          ...article,
          judul: formData.judul,
          pengarang: formData.pengarang,
          subjek: formData.subjek.split(',').map(s => s.trim()),
          abstrak: formData.abstrak,
          namaMedia: formData.namaMedia,
          tanggalTerbit: formData.tanggalTerbit,
          tahunTerbit: new Date(formData.tanggalTerbit).getFullYear(),
          halamanKolom: formData.halamanKolom,
          kataKunci: formData.kataKunci.split(',').map(k => k.trim()),
          lokasiKoleksi: formData.lokasiKoleksi,
          fotoUrl: formData.fotoUrl || '/placeholder.svg',
        };
      }
      return article;
    });

    setArticles(updatedArticles);
    toast.success('Artikel berhasil diperbarui');
    setEditingArticle(null);
    resetForm();
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      setArticles(articles.filter(article => article.id !== id));
      toast.success('Artikel berhasil dihapus');
    }
  };

  const ArticleForm = ({ onSubmit, submitLabel }: { onSubmit: () => void; submitLabel: string }) => (
    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
      <div className="space-y-2">
        <Label htmlFor="judul">Judul Artikel *</Label>
        <Input
          id="judul"
          value={formData.judul}
          onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="pengarang">Pengarang *</Label>
          <Input
            id="pengarang"
            value={formData.pengarang}
            onChange={(e) => setFormData({ ...formData, pengarang: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="namaMedia">Nama Media *</Label>
          <Input
            id="namaMedia"
            value={formData.namaMedia}
            onChange={(e) => setFormData({ ...formData, namaMedia: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="tanggalTerbit">Tanggal Terbit *</Label>
          <Input
            id="tanggalTerbit"
            type="date"
            value={formData.tanggalTerbit}
            onChange={(e) => setFormData({ ...formData, tanggalTerbit: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="halamanKolom">Halaman & Kolom</Label>
          <Input
            id="halamanKolom"
            placeholder="Hal. 1, Kol. 1-3"
            value={formData.halamanKolom}
            onChange={(e) => setFormData({ ...formData, halamanKolom: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subjek">Subjek (pisahkan dengan koma)</Label>
        <Input
          id="subjek"
          placeholder="Literasi, Pendidikan, Budaya"
          value={formData.subjek}
          onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="abstrak">Abstrak / Ringkasan *</Label>
        <Textarea
          id="abstrak"
          rows={4}
          value={formData.abstrak}
          onChange={(e) => setFormData({ ...formData, abstrak: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="kataKunci">Kata Kunci (pisahkan dengan koma)</Label>
        <Input
          id="kataKunci"
          placeholder="literasi, perpustakaan, membaca"
          value={formData.kataKunci}
          onChange={(e) => setFormData({ ...formData, kataKunci: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lokasiKoleksi">Lokasi Koleksi</Label>
        <Input
          id="lokasiKoleksi"
          placeholder="Arsip Koran 2024"
          value={formData.lokasiKoleksi}
          onChange={(e) => setFormData({ ...formData, lokasiKoleksi: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fotoUrl">URL Foto Kliping</Label>
        <Input
          id="fotoUrl"
          placeholder="https://..."
          value={formData.fotoUrl}
          onChange={(e) => setFormData({ ...formData, fotoUrl: e.target.value })}
        />
      </div>

      <Button onClick={onSubmit} variant="hero" className="w-full">
        {submitLabel}
      </Button>
    </div>
  );

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <img 
                src={logoPerpusnas} 
                alt="Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="font-display font-bold text-lg">Admin Dashboard</h1>
                <p className="text-xs text-muted-foreground">Kelola Indeks Surat Kabar</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">Beranda</span>
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{articles.length}</p>
                  <p className="text-sm text-muted-foreground">Total Artikel</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {new Set(articles.map(a => a.namaMedia)).size}
                  </p>
                  <p className="text-sm text-muted-foreground">Media</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2024</p>
                  <p className="text-sm text-muted-foreground">Tahun</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {new Set(articles.map(a => a.pengarang)).size}
                  </p>
                  <p className="text-sm text-muted-foreground">Penulis</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions & Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" className="gap-2">
                <Plus className="w-4 h-4" />
                Tambah Artikel
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Tambah Artikel Baru</DialogTitle>
                <DialogDescription>
                  Isi data artikel surat kabar yang akan ditambahkan
                </DialogDescription>
              </DialogHeader>
              <ArticleForm onSubmit={handleAddArticle} submitLabel="Tambah Artikel" />
            </DialogContent>
          </Dialog>
        </div>

        {/* Articles Table */}
        <Card>
          <CardHeader>
            <CardTitle>Daftar Artikel</CardTitle>
            <CardDescription>
              Menampilkan {filteredArticles.length} dari {articles.length} artikel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]">Judul</TableHead>
                    <TableHead>Media</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Penulis</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredArticles.slice(0, 20).map((article) => (
                    <TableRow key={article.id}>
                      <TableCell className="font-medium">
                        <div className="line-clamp-2">{article.judul}</div>
                        <div className="flex gap-1 mt-1 flex-wrap">
                          {article.subjek.slice(0, 2).map((s, i) => (
                            <Badge key={i} variant="subject" className="text-xs">
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="koran">{article.namaMedia}</Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {new Date(article.tanggalTerbit).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </TableCell>
                      <TableCell>{article.pengarang}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEditArticle(article)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Edit Artikel</DialogTitle>
                                <DialogDescription>
                                  Perbarui data artikel surat kabar
                                </DialogDescription>
                              </DialogHeader>
                              <ArticleForm onSubmit={handleUpdateArticle} submitLabel="Simpan Perubahan" />
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteArticle(article.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredArticles.length > 20 && (
              <p className="text-sm text-muted-foreground text-center mt-4">
                Menampilkan 20 dari {filteredArticles.length} artikel. Gunakan pencarian untuk filter.
              </p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
