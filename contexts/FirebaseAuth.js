// Next JS
import { useRouter } from "next/router";

// Hooks
import { useAuth } from "./AuthContext"


export function publicPage(Component) {
  return function PublicPage(props) {
    const { currentUser } = useAuth();
    const router =useRouter();

    if (currentUser) {
      router.replace("/");
      return <h1>Loading...</h1>
    }

    return <Component {...props} />;
  }
}


export function privatePage(Component) {
  return function PrivatePage(props) {
    const { currentUser } = useAuth();
    const router =useRouter();

    if (!currentUser) {
      router.replace("/login");
      return <h1>Loading...</h1>
    }

    return <Component {...props} />;
  }
}