import { Globe2, MapPin, TrendingUp, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GlobalPresence = () => {
  const regions = [
    {
      name: 'North America',
      countries: ['United States', 'Canada', 'Mexico'],
      icon: Globe2,
    },
    {
      name: 'Europe',
      countries: ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Italy', 'Spain'],
      icon: Globe2,
    },
    {
      name: 'Asia Pacific',
      countries: ['India', 'China', 'Japan', 'Australia', 'Singapore', 'South Korea'],
      icon: Globe2,
    },
    {
      name: 'Middle East & Africa',
      countries: ['UAE', 'Saudi Arabia', 'South Africa', 'Egypt'],
      icon: Globe2,
    },
  ];

  const achievements = [
    {
      icon: MapPin,
      number: '50+',
      label: 'Countries Served',
    },
    {
      icon: TrendingUp,
      number: '500+',
      label: 'Global Partners',
    },
    {
      icon: Award,
      number: '100+',
      label: 'Export Markets',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-[100px] mt-[80px] bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
         <div className="absolute bottom-0 left-0 w-full h-[25px] bg-gradient-to-t from-background  to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEzIDAgNi0yLjY4NyA2LTZzLTIuNjg3LTYtNi02LTYgMi42ODctNiA2IDIuNjg3IDYgNiA2ek0yNCA2YzAgMy4zMTMgMi42ODcgNiA2IDZzNi0yLjY4NyA2LTYtMi42ODctNi02LTYtNiAyLjY4Ny02IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Global Presence</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Serving pharmaceutical markets worldwide with excellence and reliability
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 text-center card-hover border-2 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Icon className="relative w-12 h-12 mx-auto text-secondary transform group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-display font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{achievement.number}</div>
                  <div className="text-muted-foreground font-medium">{achievement.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Our Global Reach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have established a strong presence across major pharmaceutical markets worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, index) => {
              const Icon = region.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 card-hover border-2 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-xl group-hover:shadow-lg transition-shadow">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{region.name}</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {region.countries.map((country, idx) => (
                          <div key={idx} className="flex items-center text-muted-foreground text-sm">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                            {country}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Global Partners Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'International Quality Standards',
              'Regulatory Compliance',
              'Timely Global Delivery',
              'Competitive Pricing',
              'Technical Support',
              'Custom Solutions',
              'Documentation Support',
              'Long-term Partnerships',
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-secondary font-bold text-xl">✓</span>
                </div>
                <p className="font-medium text-foreground">{feature}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Expand Your Global Reach?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with us to access high-quality pharmaceutical products backed by international certifications
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border hover:bg-secondary/90 text-white font-semibold rounded-lg transition-colors"
          >
            Become a Partner
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlobalPresence;
