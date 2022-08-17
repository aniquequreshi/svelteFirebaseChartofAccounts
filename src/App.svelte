<script>
import Create from "./components/Create.svelte";
import List from "./components/List.svelte";
import UserCreate from "./components/UserCreate.svelte";



let appTitle = "Chart of Accounts"


</script>

<svelte:head><title>{appTitle}</title></svelte:head>

<main>
  <h1>{appTitle}</h1>
  
  <UserCreate />
  <h1 style="color: red;">Database is locked in Firebase Console.</h1>
  <Create />
  <List />
</main>

<style>
</style>
