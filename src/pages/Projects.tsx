import { useRef, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { HD_PAGES } from "../assets/plates";
import { projects, type Project } from "../data";
import { SITE_URL, usePageMeta } from "../seo";
import { assetUrl } from "../utils/assetUrl";
import {
  SigClosing,
  SigCrumbs,
  SigEyebrow,
  SigWords,
  useSigInnerMotion,
} from "../signature/motion";
import NotFoundPage from "./NotFound";
import "../signature/signature.css";

const typologies = [
  {
    n: "01",
    tag: "KONUT YAPILARI",
    title: "Konut Yapıları",
    summary: "Müstakil konutlardan çok katlı yaşam yapılarına kadar; arsanın yönelimini, mahremiyet kurgusunu ve cephe-iç mekân sürekliliğini taşıyıcı sistem kararlarıyla eşzamanlı ele alıyoruz.",
    caption: "Oran, doğal ışık ve uzun ömürlü detay bütünlüğü",
    image: HD_PAGES.servicesPavilion,
    alt: "Altın saat ışığında dingin yansıma havuzu ve traverten konsol saçaklı çağdaş mimari pavyon — mimari konsept görselleştirmesi",
    to: "/hizmetlerimiz/insaat-ve-yapi-uygulamalari",
  },
  {
    n: "02",
    tag: "TİCARİ YAPILAR",
    title: "Ticari Yapılar",
    summary: "Ticari yapılarda işletme dayanımı ve açılış takvimi yatırım kararının doğrudan parçasıdır. Yoğun mekanik ve elektrik altyapısını taşıyıcı sistemle çakışmadan çözüyoruz.",
    caption: "Esnek mekân kurgusu ve öngörülebilir teslim takvimi",
    image: HD_PAGES.typologyCommercial,
    alt: "Altın saat ışığında dikey traverten cephe kayıtları ve bronz doğramalı çağdaş yapı cephesi — mimari konsept görselleştirmesi",
    to: "/hizmetlerimiz/proje-ve-uygulama-sureclerinin-yonetimi",
  },
  {
    n: "03",
    tag: "KARMA KULLANIM",
    title: "Karma Kullanımlı Yapılar",
    summary: "Ticari birimler ile yaşam alanlarını aynı yapıda buluşturan projelerde; giriş-dolaşım ayrımını, şaft sürekliliğini ve akustik sınırları yapım öncesinde tüm disiplinlerle netleştiriyoruz.",
    caption: "Farklı işlevlerin tek yapıda sessiz uyumu",
    image: HD_PAGES.typologyMixed,
    alt: "Tepe ışığı alan çift kat yüksekliğinde kireçtaşı ve meşe akustik panelli çağdaş atriyum — mimari konsept görselleştirmesi",
    to: "/hizmetlerimiz/proje-gelistirme-ve-teknik-koordinasyon",
  },
];

const publicationGates = [
  {
    n: "01",
    tag: "TAMAMLANMA",
    title: "Saha imalatının eksiksiz kapanması",
    text: "Devam eden, yarım kalmış veya kabul sürecini tamamlamamış hiçbir yapıyı bitmiş proje referansı gibi sunmuyoruz.",
  },
  {
    n: "02",
    tag: "TEYİTLİ KAYIT",
    title: "Gerçek konum, yıl ve kapsam bilgisi",
    text: "Yayımlanan her projede ilçe, yapı türü, tamamlanma yılı ve KUK İnşaat'ın üstlendiği gerçek hizmet sınırları açıkça belirtilir.",
  },
  {
    n: "03",
    tag: "YAZILI YAYIM İZNİ",
    title: "İşveren gizliliği ve yayım mutabakatı",
    text: "İşverenle yazılı yayım mutabakatı bulunmayan özel konut veya ticari yatırımlar kamuya açık portföye dahil edilmez.",
  },
];

export function ProjectsPage() {
  usePageMeta({
    title: "Projelerimiz ve Referans Yaklaşımımız | KUK İnşaat",
    description:
      "KUK İnşaat portföy ve referans ilkesi: yalnızca tamamlanmış ve bilgileri doğrulanmış projeler yayımlanır. Kocaeli konut, ticari ve karma kullanım çalışma alanlarımız.",
    path: "/projelerimiz",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Projelerimiz", item: `${SITE_URL}/projelerimiz` },
        ],
      },
    ],
  });

  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [activeTypology, setActiveTypology] = useState(0);

  useSigInnerMotion(rootRef, heroRef);

  const currentTypology = typologies[activeTypology] ?? typologies[0];

  return (
    <main className="sgi-page" ref={rootRef}>
      {/* BÖLÜM 01 — ALACAKARANLIK TAŞ AVLU SİNEMA AÇILIŞI */}
      <section className="sgi-cinema-hero" ref={heroRef}>
        <figure className="sgi-cinema-hero__bg">
          <img
            src={assetUrl(HD_PAGES.projectsCourtyard)}
            alt="Alacakaranlıkta doğal taş kütleler, ince bronz doğramalar ve dingin yansıma havuzlu konut avlusu — mimari konsept çalışması"
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
            data-sgi-parallax="0.05"
          />
          <div className="sgi-cinema-hero__shade" aria-hidden="true" />
        </figure>

        <div className="sgi-cinema-hero__inner">
          <SigCrumbs items={[{ label: "Ana Sayfa", to: "/" }, { label: "Projelerimiz" }]} />

          <div className="sgi-cinema-hero__grid">
            <div className="sgi-cinema-hero__main">
              <SigEyebrow index="01">SEÇİLİ İŞLER VE PORTFÖY</SigEyebrow>
              <h1 className="sgi-display" data-sgi="words">
                <SigWords text="Yalnızca tamamlanmış ve doğrulanmış yapılar." />
              </h1>
              <p className="sgi-prose--large" data-sgi="rise">
                Tamamlanmamış ya da başka bir firmaya ait hiçbir çalışmayı referans vitrini olarak göstermiyoruz. Mimari konsept etütleri ile gerçek uygulama kayıtlarını birbirinden açıkça ayırıyoruz.
              </p>
            </div>

            <div className="sgi-cinema-hero__aside">
              <span className="sgi-badge" style={{ position: "static", whiteSpace: "nowrap" }}>
                Mimari Konsept Görseli
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BÖLÜM 02 — KAVİSLİ KİREÇTAŞI KATMAN & ETKİLEŞİMLİ YAPI TİPOLOJİLERİ SAHNESİ */}
      <section className="sgi-section sgi-theme-limestone sgi-after-hero">
        <div className="sgi-container">
          {projects.length > 0 && (
            <div style={{ marginBottom: "clamp(72px, 8vw, 112px)" }}>
              <div className="sgi-header-split">
                <div>
                  <SigEyebrow index="02">SEÇİLİ PORTFÖY</SigEyebrow>
                  <h2 className="sgi-h2" data-sgi="words">
                    <SigWords text="Doğrulanmış proje kayıtları." />
                  </h2>
                </div>
              </div>
              <ol className="sgi-rows-col" data-sgi="stagger">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Link to={`/projelerimiz/${project.slug}`} className="sgi-row">
                      <span className="sgi-row__index">{project.index}</span>
                      <div className="sgi-row__content">
                        <h3>{project.name}</h3>
                        <p>
                          {project.category} · {project.location} · {project.year} · {project.area}
                        </p>
                      </div>
                      <span className="sgi-row__icon" aria-hidden="true">
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="sgi-header-split">
            <div>
              <SigEyebrow index="02">ÇALIŞMA ALANLARIMIZ</SigEyebrow>
              <h2 className="sgi-h2" data-sgi="words">
                <SigWords text="Üç yapı ölçeğinde mühendislik ve uygulama odağımız." />
              </h2>
            </div>
            <div className="sgi-header-split__aside" data-sgi="rise">
              <p className="sgi-prose">
                Başiskele, İzmit ve Kocaeli genelinde üstlendiğimiz her yapı türü, kendine özgü bir koordinasyon ve detay disipliniyle yürütülür.
              </p>
            </div>
          </div>

          <div className="sgi-interactive-grid">
            <div className="sgi-stage-col">
              <div className="sgi-stage-frame" data-sgi="curtain">
                {typologies.map((item, idx) => (
                  <figure
                    key={item.n}
                    className={`sgi-stage-slide${activeTypology === idx ? " is-active" : ""}`}
                    aria-hidden={activeTypology !== idx}
                  >
                    <img
                      src={assetUrl(item.image)}
                      alt={item.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
                <div className="sgi-stage-shade" aria-hidden="true" />
                <div className="sgi-stage-caption" aria-live="polite">
                  <span>{currentTypology.n} / 03 · MİMARİ KONSEPT</span>
                  <strong>{currentTypology.caption}</strong>
                </div>
              </div>
            </div>

            <ol className="sgi-rows-col" data-sgi="stagger">
              {typologies.map((item, idx) => {
                const isCurrent = activeTypology === idx;
                return (
                  <li key={item.n}>
                    <Link
                      to={item.to}
                      className={`sgi-row${isCurrent ? " is-active" : ""}`}
                      aria-label={`${item.title} için ilgili uzmanlık sayfasına git`}
                      onMouseEnter={() => setActiveTypology(idx)}
                      onFocus={() => setActiveTypology(idx)}
                    >
                      <span className="sgi-row__index">{item.n}</span>
                      <div className="sgi-row__content">
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
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

      {/* BÖLÜM 03 — REFERANS YAYIM STANDARTLARI VE ARŞİV DURUMU */}
      <section className="sgi-section sgi-theme-ivory">
        <div className="sgi-container">
          <div className="sgi-header-split">
            <div>
              <SigEyebrow index="03">REFERANS İLKEMİZ</SigEyebrow>
              <h2 className="sgi-h2" data-sgi="words">
                <SigWords text="Bir projenin arşivimize girmesi için üç şeffaf koşul." />
              </h2>
            </div>
            <div className="sgi-header-split__aside" data-sgi="rise">
              <p className="sgi-prose">
                Güvenilir bir portföy, abartılı görsellerle değil; yerinde doğrulanabilir yapım kayıtlarıyla kurulur.
              </p>
            </div>
          </div>

          <div className="sgi-columns-3" data-sgi="stagger">
            {publicationGates.map((gate) => (
              <article key={gate.n} className="sgi-col">
                <div className="sgi-col__meta">
                  <span>{gate.n}</span>
                  <span>{gate.tag}</span>
                </div>
                <div>
                  <h3>{gate.title}</h3>
                  <p>{gate.text}</p>
                </div>
              </article>
            ))}
          </div>

          {projects.length === 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
                marginTop: "clamp(40px, 4.5vw, 60px)",
                paddingTop: "clamp(32px, 3.6vw, 44px)",
                borderTop: "1px solid var(--sgi-border)",
              }}
              data-sgi="rise"
            >
              <div>
                <SigEyebrow>GÜNCEL ARŞİV DURUMU</SigEyebrow>
                <p className="sgi-prose--large" style={{ marginTop: 12 }}>
                  Şu anda bu sayfada herkese açık yayımlanmış bir proje kaydı bulunmuyor. Üstlendiğimiz çalışmalarda yukarıdaki üç koşul tamamlandığında her yapı gerçek konum ve kapsam bilgisiyle burada yer alır.
                </p>
              </div>
              <Link className="sgi-link" to="/iletisim">
                <span>Projenizi Konuşalım</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <SigClosing
        index="04"
        title="Planladığınız yapıyı mühendislik ve uygulama gözüyle değerlendirelim."
        secondaryTo="/hizmetlerimiz"
        secondaryLabel="HİZMET ALANLARIMIZ"
      />
    </main>
  );
}

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  return <ProjectDetail project={project} />;
}

function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useSigInnerMotion(rootRef, heroRef, [project.slug]);

  usePageMeta({
    title: `${project.name} | Projelerimiz | KUK İnşaat`,
    description: project.summary,
    path: `/projelerimiz/${project.slug}`,
  });

  return (
    <main className="sgi-page" ref={rootRef}>
      <section className="sgi-cinema-hero sgi-cinema-hero--compact" ref={heroRef}>
        <figure className="sgi-cinema-hero__bg">
          <img src={project.image} alt={`${project.name} — ${project.category}`} loading="eager" decoding="async" />
          <div className="sgi-cinema-hero__shade" aria-hidden="true" />
        </figure>
        <div className="sgi-cinema-hero__inner">
          <SigCrumbs
            items={[
              { label: "Ana Sayfa", to: "/" },
              { label: "Projelerimiz", to: "/projelerimiz" },
              { label: project.name },
            ]}
          />
          <div className="sgi-cinema-hero__grid">
            <div className="sgi-cinema-hero__main">
              <SigEyebrow index={project.index}>
                {project.category} · {project.location}
              </SigEyebrow>
              <h1 className="sgi-display">{project.name}</h1>
              <p className="sgi-prose--large">{project.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sgi-section sgi-theme-limestone sgi-after-hero">
        <div className="sgi-container sgi-sticky-chapters">
          <div className="sgi-sticky-chapters__lead">
            <SigEyebrow index="01">GENEL BAKIŞ</SigEyebrow>
            <h2 className="sgi-h2">Mimari kararlar ve uygulama notları.</h2>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <p className="sgi-prose--large">{project.description}</p>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginTop: 36 }}>
              <Link className="sgi-link" to="/projelerimiz">
                <ArrowLeft size={14} /> <span>Tüm Projeler</span>
              </Link>
              {next && next.slug !== project.slug && (
                <Link className="sgi-link" to={`/projelerimiz/${next.slug}`}>
                  <span>Sonraki Proje: {next.name}</span> <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <SigClosing title="Benzer bir yapı için kapsamı birlikte değerlendirelim." />
    </main>
  );
}
