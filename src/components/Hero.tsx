import { KenshoHero } from "./ui/bg"

// Put your content on top of the background
export function Hero() {
  return (
    <div className="relative bg-black min-h-screen">
      <KenshoHero />
      <div className="relative z-10">
        {/* Your content here */}
        <h1>Your content goes here</h1>
      </div>
    </div>
  )
}