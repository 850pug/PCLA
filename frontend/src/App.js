import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

// Pages
import Home from "@/pages/Home";
import Mission from "@/pages/about/Mission";
import Framework from "@/pages/about/Framework";
import Team from "@/pages/about/Team";
import Partners from "@/pages/about/Partners";
import Recovery from "@/pages/Recovery";
import Housing from "@/pages/recovery/Housing";
import Belonging from "@/pages/recovery/Belonging";
import Purpose from "@/pages/recovery/Purpose";
import Health from "@/pages/recovery/Health";
import Autonomy from "@/pages/recovery/Autonomy";
import Programs from "@/pages/Programs";
import Impact from "@/pages/Impact";
import Stories from "@/pages/Stories";
import GetInvolved from "@/pages/GetInvolved";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";

// Wireframes
import WireframeIndex from "@/pages/wireframes/WireframeIndex";
import WireframeHomepage from "@/pages/wireframes/WireframeHomepage";
import WireframeAbout from "@/pages/wireframes/WireframeAbout";
import WireframeRecovery from "@/pages/wireframes/WireframeRecovery";
import WireframePrograms from "@/pages/wireframes/WireframePrograms";
import WireframePrint from "@/pages/wireframes/WireframePrint";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/framework" element={<Framework />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/recovery/housing" element={<Housing />} />
            <Route path="/recovery/belonging" element={<Belonging />} />
            <Route path="/recovery/purpose" element={<Purpose />} />
            <Route path="/recovery/health" element={<Health />} />
            <Route path="/recovery/autonomy" element={<Autonomy />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Wireframe Routes */}
            <Route path="/wireframes" element={<WireframeIndex />} />
            <Route path="/wireframes/homepage" element={<WireframeHomepage />} />
            <Route path="/wireframes/about" element={<WireframeAbout />} />
            <Route path="/wireframes/recovery" element={<WireframeRecovery />} />
            <Route path="/wireframes/programs" element={<WireframePrograms />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
