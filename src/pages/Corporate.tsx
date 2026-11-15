import { useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { HD_PAGES } from "../assets/plates";
import { COMPANY } from "../company";
import { phases } from "../data";
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

const managementChapters = [
  {
    n: "01",
    title: "Proje ile saha arasındaki mesafeyi kapatmak",
    text: "Uygulama sorunlarının çoğu, detayların sahada nasıl imal edileceği erken düşünülmediğinde ortaya çıkar. Çizimleri yalnızca kâğıt üzerinde değil; imalat sırası, birleşim koşulu ve malzeme toleransıyla birlikte değerlendiririz.",
  },
  {
    n: "02",
    title: "Dört disiplini tek yapı üzerinden okumak",
    text: "Mimari, statik, elektrik ve mekanik kararlar birbirinden kopuk ele alınmaz. Bir açıklık, şaft veya cephe detayı değiştiğinde tüm disiplinlerdeki karşılığı yapım öncesinde netleştirilir.",
  },
  {
    n: "03",
    title: "Ölçülü taahhüt ve açık bilgilendirme",
    text: "Çalışma kalitemizi üstlendiğimiz iş sayısıyla değil, kapsamı baştan doğru tanımlanmış yapılar tamamlamakla ölçeriz. Ortaya çıkan her değişiklik teknik gerekçesi, süre ve bütçe etkisiyle birlikte paylaşılır.",
  },
];

const phaseVisuals = [
  {
    image: HD_PAGES.servicesPavilion,
    alt: "Altın saat ışığında dingin yansıma havuzu ve traverten konsol saçaklı çağdaş mimari pavyon — mimari konsept görseli",
    output: "Saha analizi ve kapsam çerçevesi",
  },
  {
    image: HD_PAGES.corporateStudio,
    alt: "Gün ışığı alan traverten çalışma masası üzerinde mimari paftalar ve doğal taş numuneleri — mimari konsept görseli",
    output: "Yapılabilirlik, bütçe aralığı ve teknik risk tablosu",
  },
  {
    image: HD_PAGES.typologyMixed,
    alt: "Tepe ışığı alan çift kat yüksekliğinde kireçtaşı ve meşe akustik panelli çağdaş atriyum — mimari konsept görseli",
    output: "Uyumlandırılmış uygulama projeleri ve detay kararları",
  },
  {
    image: HD_PAGES.typologyCommercial,
    alt: "Altın saat ışığında dikey traverten cephe kayıtları ve bronz doğramalı çağdaş yapı cephesi — mimari konsept görseli",
    output: "İş programına bağlı kontrollü saha imalatı",
  },
  {
    image: HD_PAGES.contactColonnade,
    alt: "Alacakaranlıkta sıcak aydınlatmalı kireçtaşı kolonaddan sakin ufuk çizgisine bakış — mimari konsept görseli",
    output: "Eksiksiz teslim kaydı ve teslim sonrası muhataplık",
  },
];

export default function CorporatePage() {
  usePageMeta({
    title: "Kurumsal | KUK İnşaat — Başiskele, Kocaeli",
    description:
      "KUK İnşaat'ın çalışma anlayışı, mühendislik yaklaşımı ve şirket bilgileri. Başiskele merkezli; İzmit ve Kocaeli genelinde çalışan inşaat ve mühendislik firması.",
    path: "/kurumsal",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Kurumsal", item: `${SITE_URL}/kurumsal` },
        ],
      },
    ],
  });

  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  useSigInnerMotion(rootRef, heroRef);

  const currentPhase = phases[activePhase] ?? phases[0];
  const currentVisual = phaseVisuals[activePhase] ?? phaseVisuals[0];

  return (
    <main className="sgi-page" ref={rootRef}>
      {/* BÖLÜM 01 — OBSİDYEN KURUMSAL MANİFESTO VE APERTURE ATÖLYE SAHNESİ */}
      <section className="sgi-theme-obsidian sgi-obsidian-masthead" ref={heroRef}>
        <div className="sgi-container">
          <SigCrumbs items={[{ label: "Ana Sayfa", to: "/" }, { label: "Kurumsal" }]} />

          <div className="sgi-statement-top" data-sgi="rise">
            <SigEyebrow index="01">KURUMSAL YAKLAŞIM</SigEyebrow>
            <span className="sgi-meta-note">BAŞİSKELE · KOCAELİ</span>
          </div>

          <h1 className="sgi-display" style={{ maxWidth: "18.5ch" }} data-sgi="words">
            <SigWords text="Mimarinin dinginliğini, mühendisliğin kesinliğiyle kuruyoruz." />
          </h1>

          <div className="sgi-hairline" data-sgi="hairline" aria-hidden="true" />

          <div className="sgi-statement-grid" data-sgi="rise">
            <dl className="sgi-statement-specs">
              <div className="sgi-spec">
                <dt>Merkez</dt>
                <dd>Başiskele, Kocaeli</dd>
              </div>
              <div className="sgi-spec">
                <dt>Faaliyet</dt>
                <dd>İnşaat · Proje · Mühendislik</dd>
              </div>
              <div className="sgi-spec">
                <dt>Çalışma Düzeni</dt>
                <dd>Tek Muhatap · Kayıtlı Süreç</dd>
              </div>
            </dl>

            <div className="sgi-statement-body">
              <p className="sgi-prose--large">
                KUK İnşaat; Başiskele, İzmit ve Kocaeli çevresinde konut, ticari ve karma kullanımlı yapılar için proje koordinasyonunu, mühendislik değerlendirmesini ve saha uygulamasını tek bir standart altında buluşturan bir yapım firmasıdır.
              </p>
            </div>
          </div>
        </div>

        <div className="sgi-aperture-stage" style={{ marginTop: "clamp(56px, 6.5vw, 88px)" }} data-sgi-aperture>
          <figure className="sgi-aperture-frame">
            <img
              src={assetUrl(HD_PAGES.corporateStudio)}
              alt="Gün ışığı alan traverten çalışma masası üzerinde mimari paftalar ve doğal taş numuneleri — mimari konsept görseli"
              width={1600}
              height={900}
              loading="eager"
              decoding="async"
              data-sgi-parallax="0.05"
            />
            <figcaption className="sgi-badge">Mimari Konsept Görseli</figcaption>
          </figure>
        </div>
      </section>

      {/* BÖLÜM 02 — YÖNETİM ANLAYIŞIMIZ (SICAK KİREÇTAŞI STICKY CHAPTERS) */}
      <section className="sgi-section sgi-theme-limestone" id="yonetim-anlayisi">
        <div className="sgi-container sgi-sticky-chapters">
          <div className="sgi-sticky-chapters__lead">
            <SigEyebrow index="02">YÖNETİM ANLAYIŞIMIZ</SigEyebrow>
            <h2 className="sgi-h2" data-sgi="words">
              <SigWords text="İyi uygulama, sahada verilen küçük kararların toplamıdır." />
            </h2>
            <p className="sgi-prose" data-sgi="rise">
              Hiçbir detayı şantiye anının tesadüfüne bırakmaz; kapanacak her imalatı önceden doğrular ve gerekçesiyle kayda geçiririz.
            </p>
          </div>

          <ol className="sgi-sticky-chapters__list" data-sgi="stagger">
            {managementChapters.map((chapter) => (
              <li key={chapter.n} className="sgi-chapter-item">
                <div className="sgi-chapter-item__head">
                  <span>{chapter.n}</span>
                  <h3>{chapter.title}</h3>
                </div>
                <p>{chapter.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BÖLÜM 03 — ÇALIŞMA YÖNTEMİMİZ (ANA SAYFA CAPABILITIES KALİTESİNDE ETKİLEŞİMLİ 5 AŞAMA) */}
      <section className="sgi-section sgi-theme-ivory" id="calisma-yontemi">
        <div className="sgi-container">
          <div className="sgi-header-split">
            <div>
              <SigEyebrow index="03">ÇALIŞMA YÖNTEMİMİZ</SigEyebrow>
              <h2 className="sgi-h2" data-sgi="words">
                <SigWords text="Keşiften teslime, beş aşamalı berrak bir düzen." />
              </h2>
            </div>
            <div className="sgi-header-split__aside" data-sgi="rise">
              <p className="sgi-prose">
                Her aşama bir öncekinin doğrulanmış çıktısıyla başlar; belirsizlikler varsayımla bir sonraki adıma taşınmaz.
              </p>
            </div>
          </div>

          <div className="sgi-interactive-grid">
            <div className="sgi-stage-col">
              <div className="sgi-stage-frame" data-sgi="curtain">
                {phaseVisuals.map((vis, index) => (
                  <figure
                    key={phases[index].number}
                    className={`sgi-stage-slide${activePhase === index ? " is-active" : ""}`}
                    aria-hidden={activePhase !== index}
                  >
                    <img
                      src={assetUrl(vis.image)}
                      alt={vis.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
                <div className="sgi-stage-shade" aria-hidden="true" />
                <div className="sgi-stage-caption" aria-live="polite">
                  <span>
                    AŞAMA {currentPhase.number} / 05 · MİMARİ KONSEPT
                  </span>
                  <strong>{currentVisual.output}</strong>
                </div>
              </div>
            </div>

            <ol className="sgi-rows-col" data-sgi="stagger">
              {phases.map((phase, index) => {
                const isCurrent = activePhase === index;
                return (
                  <li key={phase.number}>
                    <button
                      type="button"
                      className={`sgi-row sgi-row--no-icon${isCurrent ? " is-active" : ""}`}
                      onMouseEnter={() => setActivePhase(index)}
                      onFocus={() => setActivePhase(index)}
                      onClick={() => setActivePhase(index)}
                    >
                      <span className="sgi-row__index">{phase.number}</span>
                      <div className="sgi-row__content">
                        <h3>{phase.title}</h3>
                        <p>{phase.text}</p>
                        <span className="sgi-row__subnote">
                          ÇIKTI · {phaseVisuals[index]?.output ?? currentVisual.output}
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* BÖLÜM 04 — KURUMSAL KÜNYE (SAF MİMARİ ÇİZGİLER) */}
      <section className="sgi-section sgi-theme-limestone">
        <div className="sgi-container sgi-sticky-chapters">
          <div className="sgi-sticky-chapters__lead">
            <SigEyebrow index="04">ŞİRKET BİLGİLERİ</SigEyebrow>
            <h2 className="sgi-h2" style={{ fontSize: "clamp(26px, 2.9vw, 40px)" }} data-sgi="words">
              <SigWords text="KUK Proje Mühendislik İnşaat Ticaret Limited Şirketi" />
            </h2>
            <div style={{ marginTop: 28 }} data-sgi="rise">
              <Link className="sgi-link" to="/hizmetlerimiz">
                <span>Tüm Hizmetlerimiz</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div style={{ gridColumn: "7 / span 6" }} data-sgi="rise">
            <dl className="sgi-dossier-dl">
              <div>
                <dt>Resmi Unvan</dt>
                <dd>KUK Proje Mühendislik İnşaat Ticaret Limited Şirketi</dd>
              </div>
              <div>
                <dt>Merkez Adresi</dt>
                <dd>
                  {COMPANY.address[0]}, {COMPANY.address[1]}
                </dd>
              </div>
              <div>
                <dt>Hizmet Bölgesi</dt>
                <dd>Başiskele, İzmit ve Kocaeli çevresi</dd>
              </div>
              <div>
                <dt>Faaliyet Kapsamı</dt>
                <dd>İnşaat Uygulamaları · Mühendislik · Teknik Koordinasyon · Süreç Yönetimi · Danışmanlık</dd>
              </div>
              <div>
                <dt>E-posta</dt>
                <dd>
                  <a href={`mailto:${COMPANY.email}`} className="sgi-link" style={{ fontFamily: "var(--sans)", fontSize: "15.5px", textTransform: "none", letterSpacing: 0 }}>
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href={`tel:${COMPANY.phoneHref}`} className="sgi-link" style={{ fontFamily: "var(--sans)", fontSize: "15.5px", textTransform: "none", letterSpacing: 0 }}>
                    {COMPANY.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <SigClosing
        index="05"
        title="Yapınızın kapsamını ilk görüşmede birlikte netleştirelim."
        secondaryTo="/hizmetlerimiz"
        secondaryLabel="HİZMETLERİMİZ"
      />
    </main>
  );
}
