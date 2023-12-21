import styles from './Home.module.scss';
import {Stage, Layer, Image} from 'react-konva';
import top_santa from "../assets/person/top_santa.png"
import case_show from "../assets/system/showcase.png"
import button_next from "../assets/system/button.png"
import {Cake} from "../utils/cake.ts";
import {useEffect, useState} from "react";
import useImage from 'use-image';


const URLImage = (cake : Cake, x:number, y:number, width:number, height:number) => {
  console.log(cake.imageURL);
  const [image] = useImage(cake.imageURL);
  return (
    <Image image={image} x={x} y={y} width={width} height={height}/>
  );
}


const Home = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [showcase] = useImage(case_show);

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
          <a href="/Login">ログイン </a>
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
              URLImage(cakes[1], 0, 0, 800, 600)
            }
          </Layer>
        </Stage>
        <a href="/Design"><img src={button_next}/></a>
      </main>

    </div>
  )
}

export default Home;
