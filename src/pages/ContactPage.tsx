import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy } from "lucide-react";
import Contact from "../components/Contact";
import { HD_PAGES } from "../assets/plates";
import { COMPANY } from "../company";
import { SITE_URL, usePageMeta } from "../seo";
import { assetUrl } from "../utils/assetUrl";
import {
  SigCrumbs,
  SigEyebrow,
  SigWords,
  useSigInnerMotion,
} from "../signature/motion";
import "../signature/signature.css";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${COMPANY.address[0]}, ${COMPANY.address[1]}`,
)}`;

export default function ContactPage() {
  usePageMeta({
    title: "İletişim | KUK İnşaat — Başiskele, Kocaeli",
    description:
      "Projenizi değerlendirmek için KUK İnşaat ile iletişime geçin. Ovacık Mah. Çuhane Cad. No:176, Başiskele, Kocaeli. Telefon ve e-posta ile doğrudan ulaşım.",
    path: "/iletisim",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "İletişim", item: `${SITE_URL}/iletisim` },
        ],
      },
    ],
  });

  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useSigInnerMotion(rootRef, heroRef);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${COMPANY.email}`;
    }
  };

  const scrollToForm = () => {
    document.getElementById("iletisim-formu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="sgi-page" ref={rootRef}>
      {/* BÖLÜM 01 — OBSİDYEN KOLONAD AÇILIŞI & 3 SÜTUNLU MİMARİ ERİŞİM DİZİNİ */}
      <section className="sgi-cinema-hero" style={{ minHeight: "clamp(640px, 86svh, 860px)" }} ref={heroRef}>
        <figure className="sgi-cinema-hero__bg">
          <img
            src={assetUrl(HD_PAGES.contactColonnade)}
            alt="Alacakaranlıkta sıcak aydınlatmalı kireçtaşı kolonaddan sakin ufuk çizgisine bakış — mimari konsept görseli"
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
            data-sgi-parallax="0.05"
          />
          <div
            className="sgi-cinema-hero__shade"
            style={{
              background:
                "linear-gradient(180deg, rgba(16, 19, 21, 0.58) 0%, rgba(16, 19, 21, 0.42) 45%, rgba(20, 23, 25, 0.94) 100%)",
            }}
            aria-hidden="true"
          />
        </figure>

        <div className="sgi-cinema-hero__inner">
          <SigCrumbs items={[{ label: "Ana Sayfa", to: "/" }, { label: "İletişim" }]} />

          <div className="sgi-cinema-hero__grid">
            <div className="sgi-cinema-hero__main">
              <SigEyebrow index="01">İLETİŞİM · BAŞİSKELE MERKEZ</SigEyebrow>
              <h1 className="sgi-display" data-sgi="words">
                <SigWords text="Yeni bir yapıyı birlikte değerlendirelim." />
              </h1>
              <p className="sgi-prose--large" data-sgi="rise">
                Arsanız, hazırlık aşamasındaki projeniz ya da devam eden uygulamanız için bize doğrudan ulaşabilir veya ön görüşme formunu iletebilirsiniz.
              </p>
            </div>
          </div>

          <div className="sgi-contact-channels" data-sgi="stagger">
            {/* 01 · TELEFON */}
            <article className="sgi-channel">
              <div>
                <small>01 · DOĞRUDAN TELEFON</small>
                <strong>{COMPANY.phone}</strong>
                <p>Mesai saatleri içinde mühendislik ve uygulama ekibimizle doğrudan görüşebilirsiniz.</p>
              </div>
              <div className="sgi-channel__links">
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="sgi-link"
                  aria-label={`${COMPANY.name}'ı telefonla ara`}
                  data-ga-event="telefon_tikla"
                  data-ga-category="iletisim"
                  data-ga-label="İletişim sayfası · telefon"
                >
                  <span>Hemen Arayın</span>
                  <ArrowUpRight size={14} />
                </a>
                <button type="button" className="sgi-link" onClick={scrollToForm}>
                  <span>Formu Aç</span>
                  <ArrowDown size={14} />
                </button>
              </div>
            </article>

            {/* 02 · E-POSTA */}
            <article className="sgi-channel">
              <div>
                <small>02 · E-POSTA VE PROJE DOSYASI</small>
                <strong>{COMPANY.email}</strong>
                <p>Mimari pafta, imar durumu belgesi veya keşif notlarınızı doğrudan iletebilirsiniz.</p>
              </div>
              <div className="sgi-channel__links">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="sgi-link"
                  aria-label={`${COMPANY.name}'a e-posta gönder`}
                  data-ga-event="eposta_tikla"
                  data-ga-category="iletisim"
                  data-ga-label="İletişim sayfası · e-posta"
                >
                  <span>E-posta Yazın</span>
                  <ArrowUpRight size={14} />
                </a>
                <button type="button" className="sgi-link" onClick={copyEmail}>
                  {copied ? (
                    <>
                      <span>Kopyalandı</span>
                      <Check size={13} />
                    </>
                  ) : (
                    <>
                      <span>Adresi Kopyala</span>
                      <Copy size={12} />
                    </>
                  )}
                </button>
              </div>
            </article>

            {/* 03 · MERKEZ OFİS */}
            <article className="sgi-channel">
              <div>
                <small>03 · MERKEZ ADRESİ</small>
                <strong>Başiskele, Kocaeli</strong>
                <p>
                  {COMPANY.address[0]}, {COMPANY.address[1]}
                </p>
              </div>
              <div className="sgi-channel__links">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sgi-link"
                  aria-label="Başiskele merkez adresini haritada görüntüleyin"
                >
                  <span>Haritada Açın</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BÖLÜM 02 — SICAK KİREÇTAŞI ÖN GÖRÜŞME FORMU (EMAILJS ENTEGRASYONU KORUNMUŞ) */}
      <Contact />
    </main>
  );
}
