import {useNavigate} from "react-router-dom";
import {ReactNode, useEffect} from "react";
import {appUserStore} from "./stores/appUserStore.ts";
import {useStore} from "@nanostores/react";
import {auth} from "./firebase.ts";
import {AppUser} from "./utils";

const Template = (props: { children: ReactNode }) => {
  const router = useNavigate();
  const appUser = useStore(appUserStore);
  useEffect(() => {
    if (!appUser) {
      return auth.onAuthStateChanged((user) => {
        if (user) {
          const newUser = new AppUser(user);
          appUserStore.set(newUser);
        } else {
          router("/login");
        }
      })
    }
  }, [appUser, router])

  return (
    <div>
      {props.children}
    </div>
  )
}

export default Template;
