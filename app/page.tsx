import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <><head>
      <title>Welcome to DuckyHQ</title>
    </head><body>
      <div className={styles.landing}>
        <h1>Welcome to DuckyHQ</h1>
        <div className="break"></div>
        <h3>subtitle</h3>
      </div>
    </body></>
  )
}
