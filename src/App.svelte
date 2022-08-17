<script>
import Create from "./components/Create.svelte";
import List from "./components/List.svelte";

let appTitle = "Chart of Accounts"
// let showCreate = true
// let showList = true

</script>

<svelte:head><title>{appTitle}</title></svelte:head>

<main>
  <h1>{appTitle}</h1>
  <!-- {#if showCreate} -->
    <Create />
  <!-- {/if} -->
  <List />
</main>

<style>
</style>
