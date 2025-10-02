export default function manifest() {
  return {
    name: 'Vitta',
    short_name: 'Vitta',
    description: 'Seguro de vida, contrata y resuelve problemas con aseguradoras',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}