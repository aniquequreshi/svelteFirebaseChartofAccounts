<script>
import {
    createUserWithEmailAndPassword, 
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

import {auth} from '../db'


// todo: implement error catching by logging error.message

let email = "abc" + "@qc.cuny.edu" 
let password = '1234Temp'

const createUser = async () => {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    console.log(cred.user)
    //signOutUser()
  }

const signOutUser = async () =>{
    const signedOut = await signOut(auth)
    console.log('signed out')
}

const signInUser = async () => {
    const cred = await signInWithEmailAndPassword(auth, email, password)
    console.log(cred.user)
    //signoutUser()
  }

// onAuthStateChanged is called automatically by firebase
// we can unsubscribe, but on page refresh, it will be subscribed again
const unsubscribeAuthStateChange = onAuthStateChanged(auth, (user) => {
    console.log('user status change', user)
})


</script>

Created User
<button on:click={signInUser}>sign in</button>
<button on:click={signOutUser}>sign out</button>
<button on:click={createUser}>create user</button>
<button on:click={unsubscribeAuthStateChange}>unsubscribe</button>