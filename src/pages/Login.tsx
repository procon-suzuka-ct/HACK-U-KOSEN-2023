import styles from './Login.module.scss';
import FilledButton from "../components/FilledButton.tsx";
import {AppUser} from "../utils";
import {appUserStore} from "../stores/appUserStore.ts";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const router = useNavigate();

  return (
    <div className={styles.container}>
      <p>Login</p>
      <FilledButton onClick={() => {
        AppUser.login().then((user) => {
          appUserStore.set(user);
          router("/");
        })
      }}>ログイン</FilledButton>
    </div>
  )
}

export default Login;
