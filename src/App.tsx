import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DienstenOverzicht from "./pages/DienstenOverzicht";
import SpieOpSchutting from "./pages/SpieOpSchutting";
import GlazenSchuifwanden from "./pages/GlazenSchuifwanden";
import OnderZonwering from "./pages/OnderZonwering";
import Zijwand from "./pages/Zijwand";
import LosseMontage from "./pages/LosseMontage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/diensten" element={<DienstenOverzicht />} />
          <Route path="/diensten/spie-op-schutting" element={<SpieOpSchutting />} />
          <Route path="/diensten/glazen-schuifwanden" element={<GlazenSchuifwanden />} />
          <Route path="/diensten/onder-zonwering" element={<OnderZonwering />} />
          <Route path="/diensten/zijwand" element={<Zijwand />} />
          <Route path="/diensten/losse-montage" element={<LosseMontage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
