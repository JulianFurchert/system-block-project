import Head from 'next/head'
import { Header } from './Header'

type LayoutProps = {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div >
      <Head>
        <title>System Blocks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
