import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const LidocaineHydrochloride = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background  mt-[80px] py-[80px]">
        <div className="container mx-auto px-4">
          <Link to="/api-products" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Lidocaine Hydrochloride</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Lidocaine Hydrochloride API for Pharmaceutical Formulations
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are a leading <strong>manufacturer and global supplier of Lidocaine Hydrochloride API</strong>, catering to pharmaceutical 
                  companies worldwide. Our <strong>WHO-GMP and ISO-certified</strong> facility ensures high purity, efficacy, and compliance 
                  with international regulatory standards.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">What is Lidocaine Hydrochloride?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lidocaine Hydrochloride is the water-soluble salt form of lidocaine, a local anesthetic widely used for infiltration, 
                  nerve block, and surface anesthesia. It is also used as an antiarrhythmic agent for acute ventricular arrhythmias. 
                  The hydrochloride form offers better solubility for injectable preparations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">Lidocaine Hydrochloride Specifications</h3>
                <Card className="overflow-hidden">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold bg-muted/50">CAS Number</TableCell>
                        <TableCell>73-78-9</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold bg-muted/50">Molecular Formula</TableCell>
                        <TableCell>C14H22N2O·HCl</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold bg-muted/50">Therapeutic Use</TableCell>
                        <TableCell>Local Anesthesia, Antiarrhythmic</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold bg-muted/50">Grade</TableCell>
                        <TableCell>IP/BP/EP/USP</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold bg-muted/50">Certifications</TableCell>
                        <TableCell>WHO-GMP, ISO, cGMP Compliant</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">Why Choose Our Lidocaine Hydrochloride API</h3>
                <div className="space-y-3">
                  {[
                    'WHO-GMP & ISO Certified Manufacturing – Ensuring the highest quality and safety',
                    'Global Export Expertise – Supplying to regulated and semi-regulated markets',
                    'High Purity & Consistency – Manufactured under strict cGMP guidelines',
                    'Custom Packaging & Bulk Supply – Tailored to client requirements',
                    'Reliable Logistics & On-Time Delivery – Seamless global shipping solutions'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">Applications of Lidocaine Hydrochloride API</h3>
                <p className="text-muted-foreground mb-3">Lidocaine Hydrochloride API is widely used in:</p>
                <div className="space-y-3">
                  {[
                    'Injectable Solutions – For local anesthesia and nerve blocks',
                    'IV Infusions – For cardiac arrhythmia treatment',
                    'Dental Anesthetics – For dental procedures',
                    'Topical Formulations – For surface anesthesia'
                  ].map((app, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{app}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 sticky top-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">Product Details</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Grade</p>
                    <p className="font-medium text-foreground">IP/BP/EP/USP</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">CAS Number</p>
                    <p className="font-medium text-foreground">73-78-9</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Therapeutic Category</p>
                    <p className="font-medium text-foreground">Anesthetic</p>
                  </div>
                </div>

                <div className="border-t pt-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Quality Certifications</h4>
                  <div className="space-y-2">
                    {['WHO-GMP Certified', 'ISO Certified', 'cGMP Compliant'].map((cert, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LidocaineHydrochloride;
