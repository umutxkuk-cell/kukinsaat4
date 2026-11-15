import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import { COMPANY } from "../company";
import { projects } from "../data";
import { Eyebrow, HOME_IMAGES, MaskedWords } from "./parts";
import "./home.css";

type CapabilityEntry = {
  n: string;
  slug: string;
  title: string;
  summary: string;
  caption: string;
  image: string;
  alt: string;
};

const capabilities: CapabilityEntry[] = [
  {
    n: "01",
    slug: "insaat-ve-yapi-uygulamalari",
    title: "İnşaat ve Yapı Uygulamaları",
    summary: "Onaylı projeleri, kaba yapıdan ince işçiliğe kadar planlı bir şantiye düzeniyle hayata geçiriyoruz.",
    caption: "Konut, ticari ve karma kullanımlı yapılar",
    image: HOME_IMAGES.capability01,
    alt: "Sıcak kireçtaşı geçitten sakin bir iç avluya ve koyu bronz doğramalı cam galeriye bakış — mimari konsept görseli",
  },
  {
    n: "02",
    slug: "muhendislik-hizmetleri",
    title: "Mühendislik Hizmetleri",
    summary: "Taşıyıcı sistem ve uygulama kararlarını, yapı güvenliği ile sahadaki uygulanabilirlik dengesinde değerlendiriyoruz.",
    caption: "Yapısal değerlendirme ve detay bütünlüğü",
    image: HOME_IMAGES.capability02,
    alt: "Brüt beton yüzeyde akşamüstü yan ışığıyla belirginleşen kalıp dokusu ve derz ritmi — mimari konsept görseli",
  },
  {
    n: "03",
    slug: "proje-gelistirme-ve-teknik-koordinasyon",
    title: "Proje Geliştirme ve Teknik Koordinasyon",
    summary: "Mimari ve mühendislik disiplinlerini uygulama başlamadan ortak bir dilde buluşturuyoruz.",
    caption: "Disiplinler arası tam uyum",
    image: HOME_IMAGES.capability03,
    alt: "Doğal tepe ışığı alan çift kat yüksekliğinde kireçtaşı ve meşe detaylı iç mekân — mimari konsept görseli",
  },
  {
    n: "04",
    slug: "proje-ve-uygulama-sureclerinin-yonetimi",
    title: "Proje ve Uygulama Süreçlerinin Yönetimi",
    summary: "Takvim, bütçe ve kalite adımlarını işveren adına şeffaf bir düzende izliyor ve yönetiyoruz.",
    caption: "Süre, bütçe ve nitelik takibi",
    image: HOME_IMAGES.capability04,
    alt: "Altın saat ışığında traverten dikey cephe kayıtları ve koyu bronz doğramalar — mimari konsept görseli",
  },
  {
    n: "05",
    slug: "teknik-danismanlik",
    title: "Teknik Danışmanlık",
    summary: "Yatırım veya uygulama kararları öncesinde bağımsız ve net teknik değerlendirme sunuyoruz.",
    caption: "Karar öncesi bağımsız bakış",
    image: HOME_IMAGES.capability05,
    alt: "Kireçtaşı yüzey üzerinde doğal ışıkla aydınlanan beton, çelik, meşe ve cam malzeme etüdü — mimari konsept görseli",
  },
];

const approachChapters = [
  {
    n: "01",
    title: "İhtiyacı Doğru Anlamak",
    text: "Arsanın koşullarını, beklentiyi ve bütçe çerçevesini işe başlamadan yerinde değerlendiririz. Belirsizlikleri varsayımla geçiştirmek yerine ilk günden netleştiririz.",
  },
  {
    n: "02",
    title: "Tasarım ve Uygulamayı Uyumlamak",
    text: "Mimari kararların sahada değer kaybetmemesi için tüm disiplinleri yapım öncesinde ortak bir zeminde buluştururuz. Doğru hazırlık, uygulama sürecini sakin ve öngörülebilir kılar.",
  },
  {
    n: "03",
    title: "Koordineli Yürütmek ve Teslim Etmek",
    text: "Takvimi, bütçeyi ve işçilik kalitesini aynı düzende takip eder; işvereni her aşamada açık biçimde bilgilendiririz. Süreci her detayı kontrol edilmiş bir teslimle tamamlarız.",
  },
];

const workingTypologies = ["Konut Yapıları", "Ticari Yapılar", "Karma Kullanım"];

/* BÖLÜM 01 — BRAND STATEMENT */
export function BrandStatement() {
  return (
    <section className="sig-section sig-theme-obsidian sig-statement kt-after-hero">
      <div className="sig-container">
        <div className="sig-statement__top" data-sig="rise">
          <Eyebrow index="01">KUK İNŞAAT</Eyebrow>
          <span className="sig-meta-note">BAŞİSKELE · KOCAELİ</span>
        </div>

        <h2 className="sig-display sig-statement__title" data-sig="words">
          <MaskedWords text="İyi bir yapı, doğru kararların sessizce bir araya gelmesiyle kurulur." />
        </h2>

        <div className="sig-hairline" data-sig="hairline" aria-hidden="true" />

        <div className="sig-statement__grid">
          <p className="sig-statement__tag" data-sig="rise">
            Konut · Ticari · Karma Kullanım
          </p>
          <div className="sig-statement__body" data-sig="rise">
            <p className="sig-prose sig-prose--large">
              KUK İnşaat; Kocaeli ve çevresinde mimari duyarlılığı mühendislik disipliniyle bir araya getiren bir uygulama ve proje firmasıdır. İlk değerlendirmeden anahtar teslime kadar her süreci tek bir standart ve açık sorumlulukla yürütürüz.
            </p>
            <Link
              className="sig-link sig-link--light"
              to="/kurumsal"
              data-ga-event="kurumsal_incele_tikla"
              data-ga-category="navigasyon"
            >
              <span>Kurumsal Yaklaşımımız</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* BÖLÜM 02 — OUR CAPABILITIES / HİZMETLER */
export function CapabilitiesSection() {
  const [active, setActive] = useState(0);
  const current = capabilities[active];

  return (
    <section className="sig-section sig-theme-limestone sig-capabilities" id="hizmetler">
      <div className="sig-container">
        <div className="sig-header-split">
          <div>
            <Eyebrow index="02">HİZMET ALANLARI</Eyebrow>
            <h2 className="sig-h2" data-sig="words">
              <MaskedWords text="Beş uzmanlık, tek bir bütün." />
            </h2>
          </div>
          <div className="sig-header-split__aside" data-sig="rise">
            <p className="sig-prose">
              İhtiyacınız projenin tek bir aşamasında da olabilir, tamamında da. Kapsamı baştan netleştirir, süreci aynı özenle yönetiriz.
            </p>
            <Link
              className="sig-link"
              to="/hizmetlerimiz"
              data-ga-event="hizmetler_incele_tikla"
              data-ga-category="navigasyon"
            >
              <span>Tüm Hizmetlerimiz</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="sig-cap-grid">
          <div className="sig-cap-stage-wrap">
            <div className="sig-cap-stage" data-sig="curtain">
              {capabilities.map((item, index) => (
                <figure
                  key={item.slug}
                  className={`sig-cap-slide${active === index ? " is-active" : ""}`}
                  aria-hidden={active !== index}
                >
                  <img src={item.image} alt={item.alt} width={1122} height={1402} loading="lazy" decoding="async" />
                </figure>
              ))}
              <div className="sig-cap-stage__shade" aria-hidden="true" />
              <div className="sig-cap-stage__caption" aria-live="polite">
                <span>{current.n} / 05 · MİMARİ KONSEPT</span>
                <strong>{current.caption}</strong>
              </div>
            </div>
          </div>

          <ol className="sig-cap-list" data-sig="stagger">
            {capabilities.map((item, index) => {
              const isCurrent = active === index;
              return (
                <li key={item.slug}>
                  <Link
                    to={`/hizmetlerimiz/${item.slug}`}
                    className={`sig-cap-row${isCurrent ? " is-active" : ""}`}
                    aria-label={`${item.title} hizmet sayfasını incele`}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                  >
                    <span className="sig-cap-row__index">{item.n}</span>
                    <div className="sig-cap-row__content">
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                    </div>
                    <span className="sig-cap-row__icon" aria-hidden="true">
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
  );
}

/* BÖLÜM 03 — ARCHITECTURAL EXPERIENCE */
export function ArchitecturalExperience() {
  return (
    <section className="sig-section sig-theme-obsidian sig-atmosphere">
      <div className="sig-atmosphere__stage" data-sig-aperture>
        <figure className="sig-atmosphere__frame">
          <img
            src={HOME_IMAGES.atmosphere}
            alt="Alacakaranlıkta kıyı peyzajına yerleşen kireçtaşı ve koyu cam çağdaş mimari yapı — mimari konsept görseli"
            width={1916}
            height={821}
            loading="lazy"
            decoding="async"
            data-sig-parallax="0.06"
          />
          <figcaption className="sig-badge-caption">Mimari Konsept Görselleştirmesi</figcaption>
        </figure>
      </div>

      <div className="sig-container sig-atmosphere__copy">
        <div>
          <Eyebrow index="03">MİMARİ ATMOSFER</Eyebrow>
          <h2 className="sig-h2" data-sig="words">
            <MaskedWords text="Mekânın değeri, malzeme ve ışığın kurduğu dengede hissedilir." />
          </h2>
        </div>
        <div className="sig-atmosphere__aside" data-sig="rise">
          <p className="sig-prose">
            Kalıcı yapılar gösterişle değil; doğru oran, nitelikli malzeme ve özenli uygulamayla ortaya çıkar. Her projede tasarımın ilk günkü dinginliğini sahada korumayı esas alıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}

/* BÖLÜM 04 — OUR APPROACH */
export function ApproachSection() {
  return (
    <section className="sig-section sig-theme-ivory sig-approach">
      <div className="sig-container sig-approach__grid">
        <div className="sig-approach__lead">
          <Eyebrow index="04">ÇALIŞMA YAKLAŞIMIMIZ</Eyebrow>
          <h2 className="sig-h2" data-sig="words">
            <MaskedWords text="Karmaşıklığı sadeleştiren bir düzen." />
          </h2>
          <p className="sig-prose" data-sig="rise">
            Her iş, kapsamın açıkça konuşulmasıyla başlar ve teslim sonrasına kadar aynı özenle ilerler.
          </p>
        </div>

        <ol className="sig-approach__chapters" data-sig="stagger">
          {approachChapters.map((chapter) => (
            <li key={chapter.n} className="sig-chapter">
              <div className="sig-chapter__head">
                <span>{chapter.n}</span>
                <h3>{chapter.title}</h3>
              </div>
              <p>{chapter.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* BÖLÜM 05 — SELECTED WORKS / PROJECTS */
export function SelectedWorks() {
  return (
    <section className="sig-section sig-theme-limestone sig-works">
      <div className="sig-container">
        {projects.length > 0 ? (
          <>
            <div className="sig-header-split">
              <div>
                <Eyebrow index="05">SEÇİLİ İŞLER</Eyebrow>
                <h2 className="sig-h2" data-sig="words">
                  <MaskedWords text="Tamamlanmış ve doğrulanmış yapılar." />
                </h2>
              </div>
              <div className="sig-header-split__aside" data-sig="rise">
                <Link className="sig-link" to="/projelerimiz">
                  <span>Tüm Projelerimiz</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
            <div className="sig-works-list" data-sig="stagger">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/projelerimiz/${project.slug}`}
                  className="sig-work-card"
                  data-cursor="view"
                  data-cursor-label="İNCELE ↗"
                >
                  <figure className="sig-work-card__media" data-sig="curtain">
                    <img src={project.image} alt={`${project.name} — ${project.category}, ${project.location}`} loading="lazy" />
                  </figure>
                  <div className="sig-work-card__meta">
                    <span>
                      {project.index} · {project.category}
                    </span>
                    <h3>{project.name}</h3>
                    <p>
                      {project.location} · {project.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="sig-works__monograph">
            <Link
              to="/projelerimiz"
              className="sig-works__visual"
              aria-label="Projelerimiz ve portföy yaklaşımımız sayfasına git"
              data-cursor="view"
              data-cursor-label="PORTFÖY ↗"
            >
              <figure className="sig-works__figure" data-sig="curtain">
                <img
                  src={HOME_IMAGES.portfolioConcept}
                  alt="Kademeli doğal taş kütleler ve peyzajlı iç avludan oluşan akşamüstü konut yerleşimi — mimari konsept çalışması"
                  width={1448}
                  height={1086}
                  loading="lazy"
                  decoding="async"
                  data-sig-parallax="0.04"
                />
                <figcaption className="sig-badge-caption">Mimari Konsept Çalışması</figcaption>
              </figure>
            </Link>

            <div className="sig-works__narrative">
              <Eyebrow index="05">SEÇİLİ İŞLER VE PORTFÖY</Eyebrow>
              <h2 className="sig-h2" data-sig="words">
                <MaskedWords text="Yalnızca doğrulanmış yapılar." />
              </h2>
              <p className="sig-prose" data-sig="rise">
                Tamamlanmamış ya da bilgileri teyit edilmemiş hiçbir çalışmayı referans olarak göstermiyoruz. Yayımlanan her proje kaydı, gerçek konum ve kapsam bilgisiyle portföy sayfamızda yer alır.
              </p>
              <ul className="sig-typologies" data-sig="rise" aria-label="Çalışma alanlarımız">
                {workingTypologies.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div data-sig="rise">
                <Link
                  className="sig-link"
                  to="/projelerimiz"
                  data-ga-event="proje_portfoy_tikla"
                  data-ga-category="projeler"
                >
                  <span>Projelerimiz Sayfası</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* BÖLÜM 06 — FINAL CONTACT / CLOSING EXPERIENCE */
export function ClosingExperience() {
  return (
    <section className="sig-section sig-theme-obsidian sig-closing">
      <div className="sig-container">
        <figure className="sig-closing__visual" data-sig="curtain">
          <img
            src={HOME_IMAGES.closingHorizon}
            alt="Alacakaranlıkta sıcak aydınlatmalı kireçtaşı kolonaddan sakin ufuk çizgisine bakış — mimari konsept görseli"
            width={1672}
            height={941}
            loading="lazy"
            decoding="async"
            data-sig-parallax="0.05"
          />
          <div className="sig-closing__fade" aria-hidden="true" />
        </figure>

        <div className="sig-closing__body">
          <Eyebrow index="06">İLETİŞİM</Eyebrow>
          <h2 className="sig-display sig-closing__title" data-sig="words">
            <MaskedWords text="Yeni bir yapıyı birlikte değerlendirelim." />
          </h2>

          <div className="sig-closing__footer" data-sig="rise">
            <p className="sig-prose">
              Arsanız, projeniz veya devam eden işiniz için Başiskele merkezimizde ya da sahada bir araya gelebiliriz.
            </p>
            <div className="sig-closing__actions">
              <div className="sig-closing__buttons">
                <Link
                  className="t-button t-primary sig-cta-btn"
                  to="/iletisim"
                  aria-label="Görüşme planla: iletişim sayfasına git"
                  data-ga-event="gorusme_planla_tikla"
                  data-ga-category="iletisim"
                  data-ga-label="Ana sayfa · kapanış görüşme planla"
                  data-cursor-magnetic
                >
                  <span data-magnetic-inner>
                    GÖRÜŞME PLANLA <ArrowUpRight size={14} />
                  </span>
                </Link>
                <Link className="sig-ghost-btn" to="/hizmetlerimiz">
                  HİZMETLERİMİZ
                </Link>
              </div>
              <div className="sig-closing__direct">
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  aria-label={`${COMPANY.name} telefon: ${COMPANY.phone}`}
                  data-ga-event="telefon_tikla"
                  data-ga-category="iletisim"
                >
                  <Phone size={15} /> {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  aria-label={`${COMPANY.name} e-posta: ${COMPANY.email}`}
                  data-ga-event="eposta_tikla"
                  data-ga-category="iletisim"
                >
                  <Mail size={15} /> {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
