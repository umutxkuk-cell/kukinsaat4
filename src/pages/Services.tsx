import { useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HD_PAGES } from "../assets/plates";
import { services, type Service } from "../services";
import { SITE_URL, usePageMeta } from "../seo";
import { assetUrl } from "../utils/assetUrl";
import {
  SigClosing,
  SigCrumbs,
  SigEyebrow,
  SigWords,
  useSigInnerMotion,
} from "../signature/motion";
import "../signature/signature.css";

function extractPoints(service: Service): string[] {
  for (const block of service.blocks) {
    if (block.kind === "list" && block.items.length >= 3) return block.items.slice(0, 3);
    if (block.kind === "table" && block.rows.length >= 3) {
      return block.rows.slice(0, 3).map((r) => `${r.title} — ${r.text}`);
    }
    if (block.kind === "steps" && block.items.length >= 3) {
      return block.items.slice(0, 3).map((s) => `${s.title}: ${s.text}`);
    }
  }
  return service.heroMeta;
}

const workingModels = [
  {
    n: "01",
    tag: "MÜSTAKİL UZMANLIK",
    title: "Tek bir aşamada odaklı destek",
    text: "Onaylı bir projeniz varsa yalnızca şantiye uygulamasını; karar aşamasındaysanız yalnızca mühendislik değerlendirmesini veya bağımsız teknik danışmanlığı sınırları net bir kapsamla üstleniriz.",
  },
  {
    n: "02",
    tag: "BÜTÜNCÜL YÜRÜTME",
    title: "Koordinasyondan teslime tek sorumluluk",
    text: "Mimari, statik, elektrik ve mekanik projelerin yapım öncesinde uyumlandırılmasından kaba ve ince yapı imalatlarının tamamlanmasına kadar bütün süreci tek bir iş programı altında toplarız.",
  },
  {
    n: "03",
    tag: "İŞVEREN ADINA YÖNETİM",
    title: "Mevcut yüklenici düzeniyle bağımsız takip",
    text: "Devam eden bir projede mevcut çalışma düzeninizi bozmadan; iş programını, bütçe gerçekleşmelerini ve sahadaki imalat kalitesini işveren adına denetler ve düzenli raporlarız.",
  },
];

export default function ServicesPage() {
  usePageMeta({
    title: "Hizmetlerimiz | İnşaat, Mühendislik ve Proje Yönetimi — KUK İnşaat",
    description:
      "KUK İnşaat'ın Kocaeli ve çevresindeki beş uzmanlık alanı: inşaat ve yapı uygulamaları, mühendislik hizmetleri, teknik koordinasyon, süreç yönetimi ve teknik danışmanlık.",
    path: "/hizmetlerimiz",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Hizmetlerimiz", item: `${SITE_URL}/hizmetlerimiz` },
        ],
      },
    ],
  });

  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useSigInnerMotion(rootRef, heroRef);

  const current = services[active] ?? services[0];

  return (
    <main className="sgi-page" ref={rootRef}>
      {/* BÖLÜM 01 — SİNEMATİK MİMARİ PAVYON AÇILIŞI */}
      <section className="sgi-cinema-hero" ref={heroRef}>
        <figure className="sgi-cinema-hero__bg">
          <img
            src={assetUrl(HD_PAGES.servicesPavilion)}
            alt="Altın saat ışığında dingin yansıma havuzu ve traverten konsol saçaklı çağdaş mimari pavyon — mimari konsept görseli"
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
            data-sgi-parallax="0.05"
          />
          <div className="sgi-cinema-hero__shade" aria-hidden="true" />
        </figure>

        <div className="sgi-cinema-hero__inner">
          <SigCrumbs items={[{ label: "Ana Sayfa", to: "/" }, { label: "Hizmetlerimiz" }]} />

          <div className="sgi-cinema-hero__grid">
            <div className="sgi-cinema-hero__main">
              <SigEyebrow index="01">UZMANLIK ALANLARIMIZ</SigEyebrow>
              <h1 className="sgi-display" data-sgi="words">
                <SigWords text="Beş uzmanlık alanı, tek bir yapım standardı." />
              </h1>
              <p className="sgi-prose--large" data-sgi="rise">
                İhtiyacınız tek bir aşamada da olabilir, yapının tamamında da. Kapsamı ilk günden netleştirir, tüm süreci aynı mühendislik disipliniyle yürütürüz.
              </p>
            </div>

            <div className="sgi-cinema-hero__aside">
              <span className="sgi-badge" style={{ position: "static" }}>
                Mimari Konsept Görseli
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BÖLÜM 02 — KAVİSLİ KİREÇTAŞI KATMAN & ETKİLEŞİMLİ UZMANLIK SAHNESİ */}
      <section className="sgi-section sgi-theme-limestone sgi-after-hero">
        <div className="sgi-container">
          <div className="sgi-header-split">
            <div>
              <SigEyebrow index="02">HİZMET DİZİNİ</SigEyebrow>
              <h2 className="sgi-h2" data-sgi="words">
                <SigWords text="İhtiyacın aşaması, hizmet kapsamını belirler." />
              </h2>
            </div>
            <div className="sgi-header-split__aside" data-sgi="rise">
              <p className="sgi-prose">
                Her başlığa tıklayarak ilgili uzmanlığın kendi detay sayfasına geçebilir veya aşağıdaki kapsam monografilerini inceleyebilirsiniz.
              </p>
            </div>
          </div>

          <div className="sgi-interactive-grid">
            <div className="sgi-stage-col">
              <Link
                to={`/hizmetlerimiz/${current.slug}`}
                aria-label={`${current.title} detay sayfasına git`}
                data-cursor="view"
                data-cursor-label="İNCELE ↗"
                style={{ display: "block" }}
              >
                <div className="sgi-stage-frame" data-sgi="curtain">
                  {services.map((srv, index) => (
                    <figure
                      key={srv.slug}
                      className={`sgi-stage-slide${active === index ? " is-active" : ""}`}
                      aria-hidden={active !== index}
                    >
                      <img
                        src={assetUrl(srv.image)}
                        alt={srv.imageAlt}
                        width={srv.imageWidth}
                        height={srv.imageHeight}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  ))}
                  <div className="sgi-stage-shade" aria-hidden="true" />
                  <div className="sgi-stage-caption" aria-live="polite">
                    <span>{current.n} / 05 · MİMARİ KONSEPT</span>
                    <strong>{current.note}</strong>
                  </div>
                </div>
              </Link>
            </div>

            <ol className="sgi-rows-col" data-sgi="stagger">
              {services.map((srv, index) => {
                const isCurrent = active === index;
                return (
                  <li key={srv.slug}>
                    <Link
                      to={`/hizmetlerimiz/${srv.slug}`}
                      className={`sgi-row${isCurrent ? " is-active" : ""}`}
                      aria-label={`${srv.title} hizmet sayfasını incele`}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                    >
                      <span className="sgi-row__index">{srv.n}</span>
                      <div className="sgi-row__content">
                        <h3>{srv.title}</h3>
                        <p>{srv.short}</p>
                      </div>
                      <span className="sgi-row__icon" aria-hidden="true">
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* BÖLÜM 03 — BEŞ EDİTORYAL MONOGRAFİ BÖLÜMÜ (SAAS KUTUSU DEĞİL, AÇIK MİMARİ KOMPOZİSYON) */}
      {services.map((service, index) => {
        const flip = index % 2 === 1;
        const theme = index % 2 === 0 ? "sgi-theme-ivory" : "sgi-theme-limestone";
        const points = extractPoints(service);
        return (
          <section key={service.slug} id={`hizmet-${service.n}`} className={`sgi-section ${theme}`}>
            <div className="sgi-container">
              <div className={`sgi-monograph${flip ? " sgi-monograph--flip" : ""}`}>
                <Link
                  to={`/hizmetlerimiz/${service.slug}`}
                  className="sgi-monograph__visual"
                  aria-label={`${service.title} detay sayfasına git`}
                  data-cursor="view"
                  data-cursor-label="DETAY ↗"
                >
                  <figure className="sgi-monograph__figure" data-sgi="curtain">
                    <img
                      src={assetUrl(service.image)}
                      alt={service.imageAlt}
                      width={service.imageWidth}
                      height={service.imageHeight}
                      loading="lazy"
                      decoding="async"
                      data-sgi-parallax="0.04"
                    />
                    <figcaption className="sgi-badge">Mimari Konsept Görseli</figcaption>
                  </figure>
                </Link>

                <div className="sgi-monograph__narrative">
                  <SigEyebrow index={service.n}>{service.note}</SigEyebrow>
                  <h2 className="sgi-h2" data-sgi="words">
                    <SigWords text={service.title} />
                  </h2>
                  <p className="sgi-prose" data-sgi="rise">
                    {service.short}
                  </p>

                  <ul className="sgi-monograph-points" data-sgi="rise">
                    {points.map((pt, pIdx) => (
                      <li key={pt}>
                        <span>0{pIdx + 1}</span>
                        <div>{pt}</div>
                      </li>
                    ))}
                  </ul>

                  <ul className="sgi-typologies" data-sgi="rise">
                    {service.heroMeta.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 28 }} data-sgi="rise">
                    <Link className="sgi-link" to={`/hizmetlerimiz/${service.slug}`}>
                      <span>Uzmanlık Detayını İnceleyin</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* BÖLÜM 04 — ÇALIŞMA KURGULARI (OBSİDYEN 3 SÜTUNLU MİMARİ MATRİS) */}
      <section className="sgi-section sgi-theme-obsidian" id="calisma-modelleri">
        <div className="sgi-container">
          <div className="sgi-header-split">
            <div>
              <SigEyebrow index="03">ÇALIŞMA MODELLERİ</SigEyebrow>
              <h2 className="sgi-h2" data-sgi="words">
                <SigWords text="Projenin ölçeğine uyum sağlayan üç yürütme kurgusu." />
              </h2>
            </div>
            <div className="sgi-header-split__aside" data-sgi="rise">
              <p className="sgi-prose">
                Hizmetlerimizi tekil bir teknik görev olarak ya da tüm disiplinleri birleştiren bütünleşik bir uygulama modeliyle sunuyoruz.
              </p>
            </div>
          </div>

          <div className="sgi-columns-3" data-sgi="stagger">
            {workingModels.map((model) => (
              <article key={model.n} className="sgi-col">
                <div className="sgi-col__meta">
                  <span>{model.n}</span>
                  <span>{model.tag}</span>
                </div>
                <div>
                  <h3>{model.title}</h3>
                  <p>{model.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SigClosing
        index="04"
        title="Hangi hizmet kurgusunun projenize uygun olduğunu birlikte netleştirelim."
        secondaryTo="/kurumsal"
        secondaryLabel="KURUMSAL YAKLAŞIMIMIZ"
      />
    </main>
  );
}
