import styles from './Payment.module.scss';
import FilledButton from "../components/FilledButton.tsx";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";

const Payment = () => {
  const router = useNavigate();
  const [price, setPrice] = useState<string | null>("");

  const [cardNumber, setCardNumber] = useState<string | null>("");
  const [expirationDate, setExpirationDate] = useState<string | null>("");
  const [securityCode, setSecurityCode] = useState<string | null>("");

  useEffect(() => {
    const value = localStorage.getItem("price");
    setPrice(value ?? price);
  }, [price]);
  const register = () => {
    router("/finish");
  }

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cardNumber) {
      if (cardNumber.length >= 16) {
        return;
      }
    }
    const value = e.target.value;
    setCardNumber(value.replace(/[^0-9]/g, ""));
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>お支払い</div>
      <div className={styles.price}>合計金額：{price}円</div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>クレジットカード</div>
        <div className={styles.cardContent}>
          <div className={styles.cardContentTitle}>カード番号</div>
          <TextField label={"カード番号"} type="text" id="cc-number" inputMode="numeric" autoComplete="cc-number"
                     variant="outlined"
                     title="14〜16桁の番号を入力してください"
                     value={cardNumber}
                     onChange={handleCardNumber}
          />
          <div className={styles.cardContentTitle}>有効期限</div>
          <TextField label={"有効期限"} type="text" id="cc-exp" inputMode="numeric" autoComplete="cc-exp"
                     variant="outlined"
                     title="MM/YYの形式で入力してください"
                     value={expirationDate}
                     onChange={(e) => setExpirationDate(e.target.value)}
          />
          <div className={styles.cardContentTitle}>セキュリティコード</div>
          <TextField label={"セキュリティコード"} type="text" id="cc-csc" inputMode="numeric" autoComplete="cc-csc"
                     variant="outlined"
                     title="3〜4桁の番号を入力してください"
                     value={securityCode}
                     onChange={(e) => setSecurityCode(e.target.value)}
          />
        </div>
        <div className={styles.registerButton}><FilledButton onClick={register}>確定</FilledButton></div>
      </div>
    </div>
  )
}

export default Payment;
