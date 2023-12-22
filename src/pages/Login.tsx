import styles from './Login.module.scss';
import FilledButton from "../components/FilledButton.tsx";
import {AppUser} from "../utils";
import {appUserStore} from "../stores/appUserStore.ts";
import {useNavigate} from "react-router-dom";
import {useStore} from "@nanostores/react";
import {activePathStore} from "../stores/activePathStore.ts";
import {getRedirectResult, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import {useEffect} from "react";
import {auth} from "../firebase.ts";

const Login = () => {
  const router = useNavigate();
  const activePath = useStore(activePathStore);

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result?.user) {
        const newUser = new AppUser(result.user);
        appUserStore.set(newUser);
        router(activePath);
      }
    })
  }, [activePath, router]);

  return (
    <div className={styles.container}>
      <p>Login</p>
      <FilledButton onClick={async () => {
        const provider = new GoogleAuthProvider();
        await signInWithRedirect(auth, provider);
      }}>ログイン</FilledButton>
    </div>
  )
}

export default Login;