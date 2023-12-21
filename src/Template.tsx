import {useLocation, useNavigate} from "react-router-dom";
import {ReactNode, useEffect} from "react";
import {appUserStore} from "./stores/appUserStore.ts";
import {useStore} from "@nanostores/react";
import {auth} from "./firebase.ts";
import {AppUser} from "./utils";
import {activePathStore} from "./stores/activePathStore.ts";

const Template = (props: { children: ReactNode }) => {
  const router = useNavigate();
  const appUser = useStore(appUserStore);
  const location = useLocation();
  const activePath = useStore(activePathStore);

  useEffect(() => {
    if (!appUser) {
      return auth.onAuthStateChanged((user) => {
        if (user) {
          const newUser = new AppUser(user);
          appUserStore.set(newUser);
        } else {
          if (location.pathname === "/login") return;
          activePathStore.set(location.pathname);
          router("/login");
        }
      })
    }
    if (appUser && location.pathname === "/login") {
      router(activePath);
    }
  }, [activePath, appUser, location.pathname, router])

  return (
    <div>
      {props.children}
    </div>
  )
}

export default Template;
