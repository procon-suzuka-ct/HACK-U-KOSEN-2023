import styles from './Login.module.scss';
import FilledButton from "../components/FilledButton.tsx";
import {AppUser} from "../utils";
import {appUserStore} from "../stores/appUserStore.ts";
import {useNavigate} from "react-router-dom";
import {useStore} from "@nanostores/react";
import {activePathStore} from "../stores/activePathStore.ts";

const Login = () => {
  const router = useNavigate();
  const activePath = useStore(activePathStore);

  return (
    <div className={styles.container}>
      <p>Login</p>
      <FilledButton onClick={() => {
        AppUser.login().then((user) => {
          appUserStore.set(user);
          router(activePath);
        })
      }}>ログイン</FilledButton>
    </div>
  )
}

export default Login;