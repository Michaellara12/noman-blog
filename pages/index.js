// Components
import AppLayout from "../layout/AppLayout"
import Ingresar from "./ingresar"

// hooks
import useUserData from "../hooks/useUserData"

export default function Home() {

  const { user } = useUserData();

  return (
    // <div>
    //   {user
    //     ? <AppLayout />
    //     : <Ingresar />
    //   }
    // </div>
    <AppLayout />  
  )
}
