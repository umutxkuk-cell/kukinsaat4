import { Link } from "react-router";
import { COMPANY } from "../company";
import { services } from "../services";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer className="terminal-footer">
      <div className="terminal-container">
        <div className="footer-directory">
          <div className="footer-card footer-card--brand">
            <Link to="/" className="footer-logo" aria-label={`${COMPANY.name} ana sayfaya dön`}>
              <Logo />
            </Link>
            <p>{COMPANY.slogan}. Kocaeli merkezli inşaat ve mühendislik firması.</p>
            <span>
              {COMPANY.address[0]}
              <br />
              {COMPANY.address[1]}
            </span>
          </div>
          <div className="footer-card">
            <span className="micro-label">KEŞFET</span>
            <Link to="/" aria-label="Ana sayfaya git">Ana Sayfa</Link>
            <Link to="/kurumsal" aria-label="Kurumsal sayfasına git">Kurumsal</Link>
            <Link to="/hizmetlerimiz" aria-label="Hizmetlerimiz sayfasına git">Hizmetlerimiz</Link>
            <Link to="/projelerimiz" aria-label="Projelerimiz sayfasına git">Projelerimiz</Link>
            <Link to="/iletisim" aria-label="İletişim sayfasına git">İletişim</Link>
          </div>
          <div className="footer-card">
            <span className="micro-label">HİZMETLER</span>
            {services.map((service) => (
              <Link key={service.slug} to={`/hizmetlerimiz/${service.slug}`} aria-label={`${service.title} hizmetini incele`}>
                {service.title}
              </Link>
            ))}
          </div>
          <div className="footer-card footer-card--contact">
            <span className="micro-label">BİZE ULAŞIN</span>
            <a
              href={`mailto:${COMPANY.email}`}
              aria-label={`${COMPANY.name}'a e-posta gönder: ${COMPANY.email}`}
              data-ga-event="eposta_tikla"
              data-ga-category="iletisim"
              data-ga-label="Alt bilgi · e-posta"
            >
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phoneHref}`}
              aria-label={`${COMPANY.name}'ı ara: ${COMPANY.phone}`}
              data-ga-event="telefon_tikla"
              data-ga-category="iletisim"
              data-ga-label="Alt bilgi · telefon"
            >
              {COMPANY.phone}
            </a>
            <p>
              {COMPANY.address[0]}
              <br />
              {COMPANY.address[1]}
            </p>
            <Link
              className="t-button t-primary footer-card__cta"
              to="/iletisim"
              aria-label="İletişim sayfasına git"
              data-ga-event="iletisim_sayfasi_tikla"
              data-ga-category="navigasyon"
              data-ga-label="Alt bilgi · iletişim sayfası"
              data-cursor-magnetic
            >
              <span data-magnetic-inner>İLETİŞİM SAYFASI</span>
            </Link>
          </div>
        </div>
        <div className="footer-legal">
          <span>
            {COMPANY.name} © {new Date().getFullYear()} — {COMPANY.slogan}.
          </span>
          <div>
            <a href={`mailto:${COMPANY.email}`} aria-label={`E-posta gönder: ${COMPANY.email}`} data-ga-event="eposta_tikla" data-ga-category="iletisim" data-ga-label="Alt çizgi · e-posta">
              E-POSTA
            </a>
            <a href={`tel:${COMPANY.phoneHref}`} aria-label={`Telefon: ${COMPANY.phone} numarasını ara`} data-ga-event="telefon_tikla" data-ga-category="iletisim" data-ga-label="Alt çizgi · telefon">
              TELEFON
            </a>
            <Link to="/" aria-label="Ana sayfaya dön">
              ANA SAYFA ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
