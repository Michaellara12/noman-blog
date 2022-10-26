import { googleAuthProvider, auth } from "../lib/firebase"

export function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInPopup(googleAuthProvider)
    };
    return (
        <button onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    )
}

function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign out</button>
}