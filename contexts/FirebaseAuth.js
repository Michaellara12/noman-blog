// Next JS
import { useRouter } from "next/router";

// Hooks
import { useAuth } from "./AuthContext"

// components
import Loader from '../utils/Loader'


// <-----------------------------------------------------------> //


export function publicPage(Component) {
  return function PublicPage(props) {
    const { currentUser } = useAuth();
    const router =useRouter();

    if (currentUser) {
      router.replace("/");
    }

    return <Component {...props} />;
  }
}




export function privatePage(Component) {

  return function PrivatePage(props) {
    const { currentUser } = useAuth();
    const router = useRouter();
    

    if (!currentUser) {
      router.replace("/ingresar");
      return <Loader />
    }

    return <Component {...props} />;
  }
}