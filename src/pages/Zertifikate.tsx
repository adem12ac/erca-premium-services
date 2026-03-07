import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

import img01 from "@/assets/imgur/img01.jpeg";
import img02 from "@/assets/imgur/img02.jpeg";
import img03 from "@/assets/imgur/img03.jpeg";
import img04 from "@/assets/imgur/img04.jpeg";
import img05 from "@/assets/imgur/img05.jpeg";
import img06 from "@/assets/imgur/img06.jpeg";
import img07 from "@/assets/imgur/img07.jpeg";
import img08 from "@/assets/imgur/img08.jpeg";
import img09 from "@/assets/imgur/img09.jpeg";
import img10 from "@/assets/imgur/img10.jpeg";
import img11 from "@/assets/imgur/img11.jpeg";
import img12 from "@/assets/imgur/img12.jpeg";
import img13 from "@/assets/imgur/img13.jpeg";
import img14 from "@/assets/imgur/img14.jpeg";
import img15 from "@/assets/imgur/img15.jpeg";
import img16 from "@/assets/imgur/img16.jpeg";
import img17 from "@/assets/imgur/img17.jpeg";
import img18 from "@/assets/imgur/img18.jpeg";
import img19 from "@/assets/imgur/img19.jpeg";

const certificates = [
  { img: img18, title: "TÜV SÜD – Aufzugswärter", org: "TÜV SÜD Industrie Service GmbH" },
  { img: img16, title: "TÜV Saarland – Brandschutztüren", org: "TÜV Saarland Bildung + Consulting GmbH" },
  { img: img17, title: "TÜV Saarland – Haustechnik B", org: "TÜV Saarland Bildung + Consulting GmbH" },
  { img: img19, title: "Elektrotechnisch unterwiesene Person", org: "Elektronikschule Tettnang" },
  { img: img02, title: "DISCHER Technik – System D3", org: "DISCHER Technik GmbH" },
  { img: img03, title: "DISCHER – Systeme M5, D3, D1", org: "DISCHER Technik GmbH" },
  { img: img06, title: "BGW – Sicherheitsbeauftragte", org: "BGW Berufsgenossenschaft" },
  { img: img07, title: "BGW – Arbeitssicherheit", org: "BGW Berufsgenossenschaft" },
  { img: img11, title: "Würth – Fugenabdichtung Bauhandwerk", org: "Akademie Würth" },
  { img: img10, title: "BGW – Aufbauseminar Haustechnik", org: "BGW Berufsgenossenschaft" },
  { img: img01, title: "Verkehrswacht – PKW-Sicherheitstraining", org: "Verkehrswacht" },
  { img: img04, title: "Gabelstapler-Fahrausweis", org: "UF Gabelstapler GmbH" },
  { img: img05, title: "KODRA – Teilnahmebescheinigung", org: "Walter Fischer GmbH & Co." },
  { img: img08, title: "Völker – Pflegebetten Reparatur", org: "Völker Besserer Service" },
  { img: img12, title: "Völker – Technische Kontrollen", org: "Völker Besserer Service" },
  { img: img09, title: "Schulungszertifikat – Pflegebetten", org: "Völker Besserer Service" },
  { img: img14, title: "MEBEDO – Elektroprüfung VDE", org: "MEBEDO GmbH" },
  { img: img15, title: "AWO – Therapeutischer Garten", org: "AWO Bildungsstätte Pforzen" },
  { img: img13, title: "TÜV SÜD – Aufzugswärter (alt)", org: "TÜV SÜD Industrie Service GmbH" },
];

const Zertifikate = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useSEO({
    title: "Zertifikate & Qualifikationen – ERCA Dienstleistungen Essen",
    description: "Über 25 Zertifikate von TÜV, BGW, Würth Akademie und mehr. ERCA Dienstleistungen in Essen steht für geprüfte Qualität und kontinuierliche Weiterbildung seit über 30 Jahren.",
    canonical: "https://erca-service.de/zertifikate",
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-section-alt py-20 lg:py-28">
        <div className="container text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Qualifikationen</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Unsere Zertifikate
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
              Über 30 Jahre kontinuierliche Fortbildung bei TÜV, BGW, Würth Akademie und weiteren renommierten Institutionen. Hier finden Sie unsere Qualifikationsnachweise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
            {certificates.map((cert, i) => (
              <AnimatedSection key={cert.title} delay={Math.min(i * 0.05, 0.4)}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="mb-6 block w-full overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover group text-left break-inside-avoid focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Zertifikat anzeigen: ${cert.title}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-display text-sm font-bold text-foreground">{cert.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{cert.org}</p>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-md p-4"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-label="Zertifikat-Vorschau"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 rounded-full bg-background/20 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/40"
                aria-label="Schließen"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={certificates[lightboxIndex].img}
                alt={certificates[lightboxIndex].title}
                className="max-h-[85vh] w-auto rounded-2xl shadow-elevated"
              />
              <div className="mt-4 text-center">
                <p className="font-display text-lg font-bold text-primary-foreground">{certificates[lightboxIndex].title}</p>
                <p className="text-sm text-primary-foreground/70">{certificates[lightboxIndex].org}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Zertifikate;
