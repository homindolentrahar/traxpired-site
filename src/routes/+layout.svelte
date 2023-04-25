<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<svelte:head>
  <title>Traxpired</title>
</svelte:head>

<div class="flex flex-col h-screen">
  <Navbar />
  <div class="flex-grow py-8 px-16">
    <slot />
  </div>
  <Footer />
</div>
