<script>
  import Home from "./routes/Home.svelte";
  import Book from "./routes/Book.svelte";
  import Router from "svelte-spa-router";
  import MainLayout from "./layout/MainLayout.svelte";

  const routes = {
    "/": Home,
    "/book": Book,
  };
</script>

<MainLayout>
  <Router {routes} />
</MainLayout>
