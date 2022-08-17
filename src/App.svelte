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
  <Create />
  <List />
</main>

<style>
</style>
