<script>
  import '../app.css';
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl normal-case" href="/">dogInder</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a href="/liked"> ❤️ </a></li>
      <!-- <li><a>About</a></li> -->
    </ul>
  </div>
</div>

<slot />
