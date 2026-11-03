import { useState } from "react";
import { MapPin, Navigation, ShieldCheck } from "lucide-react";

const ADDRESS_LINE_1 = "ERCA Dienstleistungen";
const ADDRESS_LINE_2 = "Erkan Catak";
const ADDRESS_LINE_3 = "Juliusstraße 21";
const ADDRESS_LINE_4 = "45128 Essen";

const MAP_QUERY = "Juliusstra%C3%9Fe+21%2C+45128+Essen";
const EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&z=16&output=embed`;
const ROUTE_SRC = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;
const PLACE_SRC = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export const MapEmbed = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="map-card">
      <div className="map-info">
        <p className="eyebrow">STANDORT</p>
        <h3>
          ERCA Dienstleistungen
          <br />
          <em>in Essen</em>
        </h3>
        <address className="map-address">
          <MapPin size={18} />
          <span>
            {ADDRESS_LINE_1}
            <br />
            {ADDRESS_LINE_2}
            <br />
            {ADDRESS_LINE_3}
            <br />
            {ADDRESS_LINE_4}
          </span>
        </address>
        <div className="map-actions">
          <a className="button button-small" href={ROUTE_SRC} target="_blank" rel="noopener noreferrer">
            Route planen <Navigation size={16} />
          </a>
          <a className="text-link" href={PLACE_SRC} target="_blank" rel="noopener noreferrer">
            In Google Maps öffnen <Navigation size={16} />
          </a>
        </div>
        <p className="map-privacy">
          <ShieldCheck size={15} />
          Die Karte wird erst nach Ihrer Zustimmung geladen. Dabei werden Daten an Google übertragen.
        </p>
      </div>

      <div className="map-frame">
        {loaded ? (
          <iframe
            title="Standort von ERCA Dienstleistungen, Juliusstraße 21, 45128 Essen"
            src={EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="map-placeholder">
            <MapPin size={30} />
            <strong>Juliusstraße 21 · 45128 Essen</strong>
            <p>
              Klicken Sie auf „Karte laden“, um die Ansicht von Google Maps zu sehen. Erst dann
              werden Daten an Google übertragen.
            </p>
            <button type="button" className="button button-small" onClick={() => setLoaded(true)}>
              Karte laden
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
