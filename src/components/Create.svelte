<script>
    import {
      collection, addDoc, serverTimestamp
    } from 'firebase/firestore'
  
    import { db } from "../db";
    const collectionReference = collection(db, 'accounts')

    let name = ''
    let type = ''
    let formData = {'name': name, 'type':type}

    const validate = () => {
        // Validate Data Here
        addData()
    }
    

const addData = async ()=> {
    try {
    const docRef = await addDoc(collectionReference, {
        'name': name, 
        'type':type,
        'user':"user id",  // to be implemented
        'created':serverTimestamp()
    })
    name = ""
    type = ""
    // alert("Saved: " + docRef.id)
    
    } catch (err) {
        console.log("ERROR Creating:" + err.message)
    }
}
//addData()

</script>
<h2>Create a New Account</h2>
<form name="formCreate" on:submit|preventDefault={validate}>
<input type="text" name="name" bind:value={name} placeholder="Account Name">    
<input type="text" name="type" bind:value={type} placeholder="Type">    
<button type="submit">Save</button>

</form>
<hr>