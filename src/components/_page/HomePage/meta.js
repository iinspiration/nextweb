export function getMeta() {
  const ogImage = ''

  const meta = {
    main: {
      title: 'Hotel Management System',
      description: 'description',
      keywords: 'HTMS',
      openGraph: {
        title: 'HTMS',
        description: 'description',
        images: [{ url: ogImage }],
        site_name: 'qweasdzxc.org',
      },
    },
  }

  return meta
}

export function getSchema() {
  const schema = {}

  return schema
}
