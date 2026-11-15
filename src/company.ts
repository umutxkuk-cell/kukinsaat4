/* Single source of truth for the company identity shown across the site.
   Phone and e-mail were supplied by the owner; the street address is the one published
   on the company's public website (kukinsaat.com). */
export const COMPANY = {
  name: "KUK İnşaat",
  brand: "KUK",
  descriptor: "İNŞAAT",
  slogan: "Kaliteyle Kurulur",
  url: "https://www.kukinsaat.com",
  city: "Kocaeli",
  email: "umut@kukinsaat.com",
  phone: "+90 543 741 05 41",
  phoneHref: "+905437410541",
  address: ["Ovacık Mah. Çuhane Cad. No:176", "Başiskele, Kocaeli"],
} as const;
