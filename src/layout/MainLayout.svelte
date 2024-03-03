<script>
  import Navbar from "../components/Navbar.svelte";
</script>

<div class="flex flex-col">
  <Navbar />
  <div class="mt-16"><slot /></div>
</div>
