import styles from './Home.module.scss';
import {Image, Layer, Stage} from 'react-konva';
import top_santa from "../assets/person/top_santa.png"
import case_show from "../assets/system/showcase.png"
import button_next from "../assets/system/button.png"
import {Cake} from "../utils/cake.ts";
import {useEffect, useState} from "react";
import useImage from 'use-image';


const URLImage = (props: { cake: Cake, x: number, y: number, width: number, height: number }) => {
  console.log(props.cake.imageURL);
  const [image] = useImage(props.cake.imageURL);
  return (
    <Image image={image} x={props.x} y={props.y} width={props.width} height={props.height}/>
  );
}


const Home = () => {


  const width = window.innerWidth;
  const centerx = width / 2;
  const containtwidth = width /8;

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
        <Stage width={width} height={3 * containtwidth}>
          <Layer>
            <Image image={showcase} x={centerx/2} y={0} width={4 * containtwidth} height={3 * containtwidth}/>
            {
              cakes.length !== 0 &&
              cakes.map((cake, index) => (
                <URLImage cake={cake} x={centerx/2 + (index % 4) * containtwidth + containtwidth * 0.4 } y={Math.floor(index / 4) * containtwidth + containtwidth} width={containtwidth} height={containtwidth}/>
              ))
}
          </Layer>
        </Stage>
        <a href="/Design"><img src={button_next}/></a>
      </main>

    </div>
  )
}

export default Home;
