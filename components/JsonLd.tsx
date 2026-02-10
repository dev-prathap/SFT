export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Susan Future Technologies Pvt Ltd",
    "alternateName": "SFT Aerospace",
    "url": "https://susanfuture.tech",
    "logo": "https://susanfuture.tech/logo.png",
    "sameAs": [
      "https://twitter.com/sftaerospace",
      "https://linkedin.com/company/susan-future-technologies"
    ],
    "description": "Pioneering persistent aerial intelligence through HAWKE aerostats for surveillance and monitoring applications."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
