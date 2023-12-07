import '@/styles/globals.css'
import type { AppProps } from 'next/app'

console.log("Environment:", process.env.NODE_ENV);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
