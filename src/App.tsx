import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import APIProducts from "./pages/APIProducts";
import Contact from "./pages/Contact";
import GlobalPresence from "./pages/GlobalPresence";
import NotFound from "./pages/NotFound";
import Acebrophylline from "./pages/products/Acebrophylline";
import AmbroxolHydrochloride from "./pages/products/AmbroxolHydrochloride";
import AtorvastatinCalcium from "./pages/products/AtorvastatinCalcium";
import Benzocaine from "./pages/products/Benzocaine";
import Carbamazepine from "./pages/products/Carbamazepine";
import LidocaineBase from "./pages/products/LidocaineBase";
import LidocaineHydrochloride from "./pages/products/LidocaineHydrochloride";
import Meloxicam from "./pages/products/Meloxicam";
import Meglumine from "./pages/products/Meglumine";
import Mesalazine from "./pages/products/Mesalazine";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/api-products" element={<APIProducts />} />
          <Route path="/products/acebrophylline" element={<Acebrophylline />} />
          <Route path="/products/ambroxol-hydrochloride" element={<AmbroxolHydrochloride />} />
          <Route path="/products/atorvastatin-calcium" element={<AtorvastatinCalcium />} />
          <Route path="/products/benzocaine" element={<Benzocaine />} />
          <Route path="/products/carbamazepine" element={<Carbamazepine />} />
          <Route path="/products/lidocaine-base" element={<LidocaineBase />} />
          <Route path="/products/lidocaine-hydrochloride" element={<LidocaineHydrochloride />} />
          <Route path="/products/meloxicam" element={<Meloxicam />} />
          <Route path="/products/meglumine" element={<Meglumine />} />
          <Route path="/products/mesalazine" element={<Mesalazine />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
