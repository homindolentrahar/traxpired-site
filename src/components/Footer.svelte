<script>
  import Icon from "@iconify/svelte";

  let iconSrc = "/icon_transparent_dark.png";
  let year = new Date().getFullYear();
</script>

<footer
  class="grid grid-cols-3 items-start gap-16 px-20 py-10 bg-app_light dark:bg-app_background text-app_black dark:text-app_white"
>
  <div class="container">
    <div class="flex flex-row items-center gap-4">
      <img
        src={iconSrc}
        class="h-10 bg-app_background border-2 border-app_dark p-1 rounded-lg"
        alt="logo"
      />
      <h1 class="title">Traxpired</h1>
    </div>
    <p class="text">
      Traxpired is an app to track and manage your expiry things easily. So you
      can have full control to do preventive measurement in order keeping your
      things don't go to waste
    </p>
    <p class="text">
      Design with 💖 by Yolkkreate &#169; {year}
    </p>
  </div>
  <div class="container">
    <h1 class="title">Sitemap</h1>
    <div class="flex flex-col gap-2">
      <a href="/" class="footer-link">Home</a>
      <a href="/features" class="footer-link">Features</a>
      <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
      <a href="/" class="footer-link">Download</a>
    </div>
  </div>
  <div class="container">
    <h1 class="title">Contact</h1>
    <p class="text">Reach us on these following accounts:</p>
    <div class="flex flex-row gap-4">
      <a
        href="https://www.instagram.com/yolkkreate/"
        target="_blank"
        class="group social-button"
      >
        <Icon
          icon="ph:instagram-logo"
          width="24"
          height="24"
          class="group-hover:text-app_white group-hover:dark:text-app_black transition-all duration-300"
        />
      </a>
      <a href="mailto:yolkkreate.dev@gmail.com" class="group social-button">
        <Icon
          icon="ph:envelope-light"
          width="24"
          height="24"
          class="group-hover:text-app_white group-hover:dark:text-app_black transition-all duration-300"
        />
      </a>
    </div>
  </div>
</footer>
