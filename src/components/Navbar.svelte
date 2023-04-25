<script>
  import { page } from "$app/stores";

  let path;
  let iconSrc = "/icon_transparent_dark.png";

  $: path = $page.url.pathname;
</script>

<nav
  class="flex justify-between items-center py-6 px-12 bg-app_black border-b-2 border-b-app_dark/20"
>
  <a href="/">
    <img
      src={iconSrc}
      class="h-12 bg-app_background hover:bg-app_dark border-2 border-app_dark p-2 rounded-lg transition-all duration-300"
      alt="logo"
    />
  </a>
  <div
    class="flex invisible sm:visible sm:gap-8 md:gap-16 lg:gap-24 items-center"
  >
    <a
      href="/"
      class={path === "/"
        ? "nav-link font-medium text-app_primary_light dark:text-app_primary_dark"
        : "nav-link"}>Home</a
    >
    <a
      href="/features"
      class={path === "/features"
        ? "nav-link font-medium text-app_primary_light dark:text-app_primary_dark"
        : "nav-link"}>Features</a
    >
    <a
      href="/privacy-policy"
      class={path === "/privacy-policy"
        ? "nav-link font-medium text-app_primary_light dark:text-app_primary_dark"
        : "nav-link"}>Privacy Policy</a
    >
  </div>
  <a
    href="/"
    class="py-3 px-8 rounded-lg text-white font-semibold bg-app_primary_light dark:bg-app_primary_dark hover:bg-app_primary_light/80 hover:dark:bg-app_primary_dark/80 transition-all duration-300"
    >Download</a
  >
</nav>
