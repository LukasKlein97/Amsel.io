import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Smartphone, Monitor } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-slate-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            WIR GESTALTEN
            <br />
            ARBEITSSICHERHEIT.
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Von der digitalen Gefährdungsbeurteilung bis zur mobilen Begehung lösen wir als Technologiepartner komplexe
            Herausforderungen im Bereich der Arbeitsschutz-Software und darüber hinaus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              Demo anfordern
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              Mehr erfahren
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-700">
            <div className="flex items-center gap-4">
              <div className="bg-slate-800 p-3 rounded-lg">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Web-Plattform</h3>
                <p className="text-sm text-gray-400">Zentrale Verwaltung</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-800 p-3 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Mobile App</h3>
                <p className="text-sm text-gray-400">Begehungen vor Ort</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-800 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Compliance</h3>
                <p className="text-sm text-gray-400">Rechtssicherheit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
