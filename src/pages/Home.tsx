import styles from './Home.module.scss';
import {Image, Layer, Stage} from 'react-konva';
import top_santa from "../assets/person/top_santa.png"
import case_show from "../assets/system/showcase.png"
import button_next from "../assets/system/button.png"
import {Cake} from "../utils/cake.ts";
import {useEffect, useState} from "react";
import useImage from 'use-image';
import {getRedirectResult, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import {auth} from "../firebase.ts";
import {appUserStore} from "../stores/appUserStore.ts";
import {AppUser} from "../utils";
import {useNavigate} from "react-router-dom";


const URLImage = (props: { cake: Cake, x: number, y: number, width: number, height: number }) => {
  console.log(props.cake.imageURL);
  const [image] = useImage(props.cake.imageURL);
  return (
    <Image image={image} x={props.x} y={props.y} width={props.width} height={props.height}/>
  );
}


const Home = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [showcase] = useImage(case_show);
  const router = useNavigate();

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result?.user) {
        const newUser = new AppUser(result.user);
        appUserStore.set(newUser);
      }
    })
  }, []);

  useEffect(() => {
    Cake.getCakes().then((cakes) => {
      for (let i = cakes.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1));
        const tmp = cakes[i];
        cakes[i] = cakes[r];
        cakes[r] = tmp;
      }
      setCakes(cakes);
    });
  }, []);

  return (
    <div className={styles.container}>
      <header>
        けーきやさんた
        <div className={styles.content}>
          <a onClick={async () => {
            const provider = new GoogleAuthProvider();
            await signInWithRedirect(auth, provider);
          }}>ログイン </a>
          お問い合わせ
        </div>

      </header>
      <main>
        <div className={styles.sentence}>
          <img className={styles.santa} src={top_santa}/>
          <h1>いらっしゃいませ！</h1>
          <p>サンタさんのケーキこうじょうへようこそ！</p>
          <p>ことしもたのしいクリスマスがやってきたね</p>
          <p>せっかくのクリスマス、きみだけのケーキをつくってみない？</p>
          <p>ぼくたちがみんなのケーキをとどけるね</p>
          <p>かわいいケーキのちゅうもん、まってるよ☆</p>
        </div>
        <h2>みんなのケーキ</h2>
        <p>みんなはどんなけーきをつくったのかな？</p>
        <img src={case_show}/>
        <Stage>
          <Layer>
            <Image image={showcase} x={0} y={0} width={800} height={600}/>
            {
              cakes.length !== 0 &&
                <URLImage
                    cake={cakes[0]}
                    x={0}
                    y={0}
                    width={800}
                    height={600}/>
            }
          </Layer>
        </Stage>
        <a onClick={() => router("/design")}><img alt={"next button"} src={button_next}/></a>
      </main>
    </div>
  )
}

export default Home;
