<script>
    import {onMount} from 'svelte'
    import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
    import { db } from "../db";

    const dataBase = db
    const collectionName = 'accounts'

    //This is the name of Firestore Collection
    const collectionReference = collection(dataBase, collectionName)
    
    let collectionData = []      
    onMount(async ()=> {
      try {
          const snapshot = await getDocs(collectionReference)
          snapshot.docs.forEach(doc => {
            collectionData.push({ ...doc.data(), id: doc.id })
            collectionData = collectionData  // Svelte needs this to update accounts
          })
          // console.log(collectionData)
      } catch (err) {
          console.log("ERROR:" + err.message)
      }
  })
  
  const deleteDocument = async (itemID) => {
    const documentReference = doc(dataBase, collectionName, itemID)
    await deleteDoc(documentReference)
    //const documentDeleted = await deleteDoc(documentReference)
    alert("Deleted" )
    //console.log(documentDeleted)
  }

  </script>
    <h2>List of Accounts</h2>

    {#each collectionData as collectionDataItem }
      <button on:click={()=>{deleteDocument(collectionDataItem.id)}}>Delete</button>
      {collectionDataItem.name}
      ---
      {collectionDataItem.type}
        
        

      <hr>
    {/each}
  
<style>
</style>
  