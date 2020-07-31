const typekit = "https://use.typekit.net/tez0feh.css"
const googleFonts =
  "https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
const title = "Technicolor TMDb"

const Helmet = {
  title,
  titleTemplate: "%s | 2020",
  htmlAttributes: { lang: "en" },
  link: [
    { rel: "stylesheet", href: typekit },
    { rel: "stylesheet", href: googleFonts },
  ],
}

export default Helmet
