import styles from './Home.module.scss';
import top_santa from "../assets/person/top_santa.png"
import cakes_cake from "../assets/cakes/normal.png"
import case_show from "../assets/system/showcase.png"
import button_next from "../assets/system/button.png"

const Home = () => {
  return (
    <div className={styles.container}>
      <header>
        けーきやさんた
        <div className={styles.content}>
          <a href="/Login">ログイン        </a>
          お問い合わせ
        </div>
        
      </header>
      <main>
        <div className={styles.sentence}>
        <img className={styles.santa} src={top_santa} />
        <h1>いらっしゃいませ！</h1>
        <p>サンタさんのケーキこうじょうへようこそ！</p>
        <p>ことしもたのしいクリスマスがやってきたね</p>
        <p>せっかくのクリスマス、きみだけのケーキをつくってみない？</p>
        <p>ぼくたちがみんなのケーキをとどけるね</p>
        <p>かわいいケーキのちゅうもん、まってるよ☆</p>
        </div>
        <h2>みんなのケーキ</h2>
        <p>みんなはどんなけーきをつくったのかな？</p>
        <img src={case_show}  />

        <a href="/Design"><img src={button_next}  /></a>
      </main>
      
    </div>
  )
}

export default Home;
