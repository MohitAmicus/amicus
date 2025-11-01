import { Pill, ExternalLink, CheckCircle, Award, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import productsHero from '@/assets/products-hero.jpg';

const APIProducts = () => {
  const apiProducts = [
    { name: 'Acebrophylline', grade: 'API', casNo: '96989-76-3', slug: 'acebrophylline', category: 'Respiratory' },
    { name: 'Ambroxol Hydrochloride', grade: 'API', casNo: '23828-92-4', slug: 'ambroxol-hydrochloride', category: 'Respiratory' },
    { name: 'Atorvastatin Calcium', grade: 'API', casNo: '134523-03-8', slug: 'atorvastatin-calcium', category: 'Cardiovascular' },
    { name: 'Benzocaine', grade: 'API', casNo: '94-09-7', slug: 'benzocaine', category: 'Anesthetic' },
    { name: 'Carbamazepine', grade: 'API', casNo: '298-46-4', slug: 'carbamazepine', category: 'Neurological' },
    { name: 'Lidocaine Base', grade: 'API', casNo: '137-58-6', slug: 'lidocaine-base', category: 'Anesthetic' },
    { name: 'Lidocaine Hydrochloride', grade: 'API', casNo: '73-78-9', slug: 'lidocaine-hydrochloride', category: 'Anesthetic' },
    { name: 'Meloxicam', grade: 'API', casNo: '71125-38-7', slug: 'meloxicam', category: 'Anti-inflammatory' },
    { name: 'Meglumine', grade: 'API', casNo: '6284-40-8', slug: 'meglumine', category: 'Excipient' },
    { name: 'Mesalazine', grade: 'API', casNo: '89-57-6', slug: 'mesalazine', category: 'Anti-inflammatory' },
  ];

  const capabilities = [
    {
      icon: Award,
      title: 'WHO-GMP Certified',
      description: 'All APIs manufactured in WHO-GMP certified facilities'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control for every batch'
    },
    {
      icon: CheckCircle,
      title: 'Regulatory Compliance',
      description: 'Full documentation and regulatory support'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative py-[100px] mt-[80px] flex items-center justify-center overflow-hidden">
         <div className="absolute bottom-0 left-0 w-full h-[25px] bg-gradient-to-t from-background  to-transparent pointer-events-none z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${productsHero})`,
          }}
        />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-32 h-32 bg-secondary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* <div className="inline-flex items-center gap-3 mb-4 animate-fade-up">
            <Pill className="w-12 h-12 text-secondary" />
          </div> */}
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white animate-fade-up">
            Active Pharmaceutical Ingredients
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            High-quality APIs manufactured under stringent cGMP conditions
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Products Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Our API Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of pharmaceutical grade active ingredients for various therapeutic applications
            </p>
          </div>
          
          <Card className="p-6 md:p-8 animate-fade-in overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-foreground">Product Name</TableHead>
                  <TableHead className="font-semibold text-foreground">Category</TableHead>
                  <TableHead className="font-semibold text-foreground">Grade</TableHead>
                  <TableHead className="font-semibold text-foreground">CAS No.</TableHead>
                  <TableHead className="font-semibold text-foreground text-right">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiProducts.map((product, index) => (
                  <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {product.category}
                      </span>
                    </TableCell>
                    <TableCell>{product.grade}</TableCell>
                    <TableCell className="text-muted-foreground">{product.casNo}</TableCell>
                    <TableCell className="text-right">
                      <a
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-1 text-primary hover:text-primary-hover transition-colors font-medium"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-3">Custom API Development</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Need a custom API or looking for a specific active ingredient? Our team can help develop tailored solutions for your requirements.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-lg transition-colors"
              >
                Contact Our Team
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Quality Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every API is manufactured and tested according to international pharmacopoeia standards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['WHO-GMP', 'FDA Approved', 'ISO Certified', 'cGMP Compliant'].map((standard, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">{standard}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APIProducts;
