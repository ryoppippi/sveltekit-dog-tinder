<script>
  import '../app.css';
  import { base } from '$app/paths';
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl normal-case" href={`${base}/`}>dogInder</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a href={`${base}/liked`}> ❤️ </a></li>
      <!-- <li><a>About</a></li> -->
    </ul>
  </div>
</div>

<slot />

<img src="https://visitor-badge.glitch.me/badge?page_id=sveltekit-dog-tinder" alt="visitor badge" hidden />
