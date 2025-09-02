import FeaturesSection from "./Features"
import Footer from "./Footer"
import Aurora from "./ui/Aurora"
import { KenshoHero } from "./ui/bg"
import Navbar from "./ui/Navbar"
import LoveSection from "./Who"

export function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Navbar />
        <Aurora
          colorStops={["#A65E09", "#603601", "#C55300"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="absolute inset-0">
        <KenshoHero />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
      </div>
      <FeaturesSection />
      <LoveSection />
      <Footer />
    </div>
  )
}

