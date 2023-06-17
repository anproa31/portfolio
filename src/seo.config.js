export const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL

export default {
  defaultTitle: 'An Quoc Bui | Developer',
  titleTemplate: '%s | An Quoc Bui',
  description:
    "A full-stack engineer specializing in building & designing scalable applications with great user experience.",
  openGraph: {
    title: 'An Quoc Bui',
    description:
      "A full-stack engineer specializing in building & designing scalable applications with great user experience.",
    images: [
      {
        url: `${baseUrl}api/og?title=home`,
        width: 1200,
        height: 600,
        alt: `An Quoc Bui | Developer`,
      },
    ],
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'An Quoc Bui',
  },
  twitter: {
    handle: '@BuiiiAn',
    site: '@BuiiiAn',
    cardType: 'summary_large_image',
  },
}
