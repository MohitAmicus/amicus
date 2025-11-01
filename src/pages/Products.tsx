import { Pill, Microscope, FlaskConical, Leaf, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import productsHero from '@/assets/products-hero.jpg';

const Products = () => {
  const productCategories = [
    {
      icon: Pill,
      title: 'Active Pharmaceutical Ingredients (APIs)',
      description: 'High-quality APIs manufactured under stringent cGMP conditions for various therapeutic categories',
      features: [
        'Cardiovascular APIs',
        'Anti-diabetic APIs',
        'Anti-inflammatory APIs',
        'Neurological APIs',
        'Custom API synthesis',
      ],
    },
    {
      icon: FlaskConical,
      title: 'Pharmaceutical Intermediates',
      description: 'Critical building blocks for API synthesis with exceptional purity and consistency',
      features: [
        'Custom intermediates',
        'Complex molecule synthesis',
        'Scale-up capabilities',
        'Quality documentation',
        'Regulatory support',
      ],
    },
    {
      icon: Microscope,
      title: 'Excipients',
      description: 'Pharmaceutical-grade excipients that meet international pharmacopoeia standards',
      features: [
        'Binders and fillers',
        'Disintegrants',
        'Lubricants',
        'Coating materials',
        'Controlled release excipients',
      ],
    },
    {
      icon: Leaf,
      title: 'Nutraceuticals',
      description: 'Science-backed nutritional supplements supporting health and wellness',
      features: [
        'Vitamins and minerals',
        'Herbal extracts',
        'Amino acids',
        'Probiotics',
        'Specialty formulations',
      ],
    },
  ];

  const qualityFeatures = [
    'WHO-GMP Certified Manufacturing',
    'FDA-Approved Facility',
    'ISO Quality Standards',
    'Comprehensive Testing',
    'Full Documentation',
    'Regulatory Compliance',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
        <section className="py-[100px] mt-[80px] relative  flex items-center justify-center overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white animate-fade-up">Our Products</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive pharmaceutical solutions meeting global quality standards
            </p>
          </div>
        </section>

      {/* Product Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Product Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a diverse range of pharmaceutical products manufactured to the highest quality standards
            </p>
          </div>
          <div className="space-y-8">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 card-hover border-2 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-xl group-hover:shadow-lg transition-shadow">
                          <Icon className="w-8 h-8 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
                          <p className="text-muted-foreground mb-4">{category.description}</p>
                          {category.title === 'Active Pharmaceutical Ingredients (APIs)' && (
                            <a
                              href="/api-products"
                              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors"
                            >
                              View All APIs
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Products:</h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-muted">
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Quality Assurance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every product undergoes rigorous testing and quality control to ensure compliance with international standards
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {qualityFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary font-bold text-xl">✓</span>
                </div>
                <h3 className="font-semibold text-foreground">{feature}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-foreground ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our team can develop custom pharmaceutical solutions tailored to your specific requirements
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
