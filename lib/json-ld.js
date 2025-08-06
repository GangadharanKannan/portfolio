export const getPersonJsonLd = () => {
  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    "url": "https://gangadharan.dev/",
    "description": "Gangadharan is a passionate Full Stack Developer and Technology Enthusiast with expertise in modern web technologies.",
    "name": "Gangadharan",
    "givenName": "Gangadharan",
    "familyName": "",
    "gender": "Male",
    "jobTitle": "Full Stack Developer",
    "knowsAbout": [
      {
        "@type": "Thing",
        "name": "Web Development"
      },
      {
        "@type": "Thing",
        "name": "Software Engineering"
      },
      {
        "@type": "Thing",
        "name": "React.js"
      },
      {
        "@type": "Thing",
        "name": "Node.js"
      },
      {
        "@type": "Thing",
        "name": "JavaScript"
      },
      {
        "@type": "Thing",
        "name": "TypeScript"
      }
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "English"
      },
      {
        "@type": "Language",
        "name": "Tamil"
      }
    ],
    "nationality": [
      {
        "@type": "Country",
        "name": "India"
      }
    ]
  }
}