export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HVACBusiness"],
        "@id": "https://cinarsogutmabeyazesya.com/#business",
        name: "Çınar Klima & Beyaz Eşya Servisi",
        url: "https://cinarsogutmabeyazesya.com",
        telephone: "+905075866063",
        description:
          "Ankara genelinde klima tamiri, bakım, montaj, gaz dolumu ve beyaz eşya servis hizmetleri.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ankara",
          addressRegion: "Ankara",
          addressCountry: "TR",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Ankara",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+905075866063",
          contactType: "customer service",
          availableLanguage: "Turkish",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Klima ve Beyaz Eşya Servis Hizmetleri",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Klima Tamiri" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Klima Bakımı" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Klima Montajı" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Klima Gaz Dolumu" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beyaz Eşya Tamiri" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beyaz Eşya Bakımı" } },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
