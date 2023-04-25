<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
</script>

<svelte:head>
  <title>Traxpired</title>
</svelte:head>

<div class="flex flex-col h-screen">
  <Navbar />
  <slot />
</div>
