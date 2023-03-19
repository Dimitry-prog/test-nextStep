import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from './page.module.css'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Home Page</h1>
      <Link href="pages/about">Go to About Page</Link>
      <Link href="/users">Go to Users Page</Link>
    </main>
  )
}
