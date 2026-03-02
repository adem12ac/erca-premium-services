import { AnimatedSection } from "@/components/AnimatedSection";
import renovationImg from "@/assets/renovation.jpeg";
import heatingImg from "@/assets/heating.jpeg";
import buildingImg from "@/assets/building.jpeg";

const projects = [
  { title: "Komplettsanierung Mehrfamilienhaus", category: "Sanierung", desc: "Vollständige Modernisierung eines 12-Parteien-Mehrfamilienhauses in Essen – inklusive neuer Bäder, Böden und Elektrik.", image: renovationImg },
  { title: "Heizungsmodernisierung Seniorenwohnanlage", category: "Heizung & Sanitär", desc: "Installation einer neuen Heizungsanlage mit hydraulischem Abgleich für eine Seniorenwohnanlage mit 40 Einheiten.", image: heatingImg },
  { title: "Objektbetreuung Studentenwohnheim", category: "Objektbetreuung", desc: "Full-Service-Gebäudemanagement für ein Studentenwohnheim mit 120 Apartments – inklusive Winterdienst und Grünanlagenpflege.", image: buildingImg },
  { title: "Badsanierung Pflegeheim", category: "Sanierung", desc: "Barrierefreie Badsanierung in einem Pflegeheim – 15 Einheiten nach DIN 18040 umgebaut.", image: renovationImg },
  { title: "Gebäudeservice Gewerbeimmobilie", category: "Gebäudeservice", desc: "Laufende technische Betreuung und Gebäudeservice für eine Gewerbeimmobilie in Essen-Rüttenscheid.", image: buildingImg },
  { title: "Notdienst-Einsatz Rohrbruch", category: "Heizung & Sanitär", desc: "Sofortiger 24h-Notdienst-Einsatz bei Rohrbruch in einer Wohnanlage – Schadensbegrenzung und Reparatur innerhalb von 4 Stunden.", image: heatingImg },
];

const Referenzen = () => (
  <div className="pt-20">
    <section className="bg-section-alt py-20 lg:py-28">
      <div className="container text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-green">Referenzen</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">Ergebnisse, die für sich sprechen</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Ausgewählte Referenzprojekte aus unserem Portfolio.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card h-full">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="inline-block rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">{p.category}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Referenzen;
