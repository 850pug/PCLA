import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

// Pages
import Home from "@/pages/Home";
import History from "@/pages/about/History";
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

// Team member bio pages
import MichaelKierszenblat from "@/pages/about/team/michael-kierszenblat";
import NadunNirosha from "@/pages/about/team/nadun-nirosha";
import NabilaKassam from "@/pages/about/team/nabila-kassam";
import JenBallantyne from "@/pages/about/team/jen-ballantyne";
import SaharKouhestani from "@/pages/about/team/sahar-kouhestani";
import AnastasiaHumenuk from "@/pages/about/team/anastasia-humenuk";
import DeannaAlexander from "@/pages/about/team/deanna-alexander";
import DebbieReid from "@/pages/about/team/debbie-reid";
import JeannineCorrigan from "@/pages/about/team/jeannine-corrigan";
import MichelleMikota from "@/pages/about/team/michelle-mikota";
import SusieInnes from "@/pages/about/team/susie-innes";
import VanessaRoberts from "@/pages/about/team/vanessa-roberts";
import ScottRoberts from "@/pages/about/team/scott-roberts";
import CamilaNunes from "@/pages/about/team/camila-nunes";
import NancyTu from "@/pages/about/team/nancy-tu";
import SimiRajput from "@/pages/about/team/simi-rajput";
import SibShaw from "@/pages/about/team/sib-shaw";
import EdYee from "@/pages/about/team/ed-yee";
import HarshThakkar from "@/pages/about/team/harsh-thakkar";
import RehanKhan from "@/pages/about/team/rehan-khan";

// Story pages
import HousingStory1 from "@/pages/stories/housingstory1";
import PurposeStory1 from "@/pages/stories/purposestory1";
import HealthStory1 from "@/pages/stories/healthstory1";
import BelongingStory1 from "@/pages/stories/belongingstory1";
import AutonomyStory1 from "@/pages/stories/autonomystory1";
import PartnerStory1 from "@/pages/stories/partnerstory1";
import PartnerStory2 from "@/pages/stories/partnerstory2";

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
            <Route path="/about/history" element={<History />} />
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
            
            {/* Leadership Team Bio Pages */}
            <Route path="/about/team/michael-kierszenblat" element={<MichaelKierszenblat />} />
            <Route path="/about/team/nadun-nirosha" element={<NadunNirosha />} />
            <Route path="/about/team/nabila-kassam" element={<NabilaKassam />} />
            <Route path="/about/team/jen-ballantyne" element={<JenBallantyne />} />
            <Route path="/about/team/sahar-kouhestani" element={<SaharKouhestani />} />
            <Route path="/about/team/anastasia-humenuk" element={<AnastasiaHumenuk />} />
            <Route path="/about/team/deanna-alexander" element={<DeannaAlexander />} />
            <Route path="/about/team/debbie-reid" element={<DebbieReid />} />
            <Route path="/about/team/jeannine-corrigan" element={<JeannineCorrigan />} />
            <Route path="/about/team/michelle-mikota" element={<MichelleMikota />} />
            <Route path="/about/team/susie-innes" element={<SusieInnes />} />
            <Route path="/about/team/vanessa-roberts" element={<VanessaRoberts />} />
            <Route path="/about/team/scott-roberts" element={<ScottRoberts />} />
            <Route path="/about/team/camila-nunes" element={<CamilaNunes />} />
            <Route path="/about/team/nancy-tu" element={<NancyTu />} />
            <Route path="/about/team/simi-rajput" element={<SimiRajput />} />
            <Route path="/about/team/sib-shaw" element={<SibShaw />} />
            <Route path="/about/team/ed-yee" element={<EdYee />} />
            <Route path="/about/team/harsh-thakkar" element={<HarshThakkar />} />
            <Route path="/about/team/rehan-khan" element={<RehanKhan />} />

            {/* Story Pages */}
            <Route path="/stories/housingstory1" element={<HousingStory1 />} />
            <Route path="/stories/purposestory1" element={<PurposeStory1 />} />
            <Route path="/stories/healthstory1" element={<HealthStory1 />} />
            <Route path="/stories/belongingstory1" element={<BelongingStory1 />} />
            <Route path="/stories/autonomystory1" element={<AutonomyStory1 />} />
            <Route path="/stories/partnerstory1" element={<PartnerStory1 />} />
            <Route path="/stories/partnerstory2" element={<PartnerStory2 />} />
            
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
