// Structured Data schemas for SEO

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://meloveranda.nl/#business",
  "name": "MeloVeranda - Melo Montage Service",
  "alternateName": "MeloVeranda",
  "description": "Specialist in luxe overkappingen, veranda's en glazen schuifwanden in Limburg. Vakkundig werk met 10 jaar garantie.",
  "url": "https://meloveranda.nl",
  "telephone": "+31627344288",
  "email": "info@meloveranda.nl",
  "priceRange": "€€-€€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jan Campertstraat 13 GB 41",
    "addressLocality": "Heerlen",
    "postalCode": "6416SG",
    "addressCountry": "NL",
    "addressRegion": "Limburg"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.8673,
    "longitude": 5.9722
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Limburg"
    },
    {
      "@type": "Country",
      "name": "Nederland"
    },
    {
      "@type": "Country", 
      "name": "België"
    }
  ],
  "serviceType": [
    "Veranda's",
    "Overkappingen",
    "Glazen Schuifwanden",
    "Terrasoverkappingen",
    "Tuinkamers"
  ],
  "openingHours": [
    "Mo-Fr 08:00-17:00",
    "Sa 09:00-16:00"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Veranda & Overkapping Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Veranda Montage",
          "description": "Professionele montage van luxe veranda's"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Glazen Schuifwanden",
          "description": "Montage van glazen schuifwanden voor veranda's"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Overkappingen",
          "description": "Terrasoverkappingen en tuinkamers"
        }
      }
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Melo"
  },
  "slogan": "Vakkundig werk, 10 jaar garantie"
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://meloveranda.nl/#organization",
  "name": "MeloVeranda - Melo Montage Service",
  "alternateName": "MeloVeranda",
  "url": "https://meloveranda.nl",
  "logo": "https://meloveranda.nl/favicon-512x512.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+31627344288",
    "contactType": "customer service",
    "availableLanguage": ["Dutch", "English"],
    "areaServed": "NL"
  },
  "sameAs": []
});

export const getServiceSchema = (serviceName: string, serviceDescription: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://meloveranda.nl/#business"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Limburg"
    },
    {
      "@type": "Country",
      "name": "Nederland"
    },
    {
      "@type": "Country",
      "name": "België"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": serviceName,
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serviceName,
          "description": serviceDescription
        }
      }
    ]
  }
});

export const getBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://meloveranda.nl${crumb.url}`
  }))
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://meloveranda.nl/#website",
  "url": "https://meloveranda.nl",
  "name": "MeloVeranda",
  "description": "Specialist in luxe overkappingen, veranda's en glazen schuifwanden in Limburg",
  "publisher": {
    "@type": "Organization",
    "@id": "https://meloveranda.nl/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://meloveranda.nl/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "nl-NL"
});