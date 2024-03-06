<script>
  import EnNumToFa from "../scripts/EnNumToFa";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import books from "../api/book";

  $: default_id = localStorage.getItem("default_id") || 1;
  $: default_class = books.Grades.filter((e) => e.id == default_id)[0];
  $: selected_book = books.Books.filter((e) => e.id == default_id)[0].list;

  function changeGrade(id) {
    localStorage.setItem("default_id", id);
    default_id = id;
  }

  onMount(async () => {
    EnNumToFa(document.getElementsByTagName("body")[0]);
  });
</script>

<main class="flex items-start px-1 font-vazirmatn" in:fade={{ duration: 300 }}>
  <aside
    class="flex flex-col w-1/6 gap-2 p-2 py-4 m-2 border bg-slate-300 rounded-2xl border-slate-400"
  >
    <h2
      class="mb-2 text-lg font-semibold text-center cursor-default text-slate-700"
    >
      پایه های تحصیلی
    </h2>
    <div class="flex flex-col gap-3">
      {#each books.Grades as { name, count, id }}
        <div
          class="flex items-center justify-between p-1 align-middle border-2 cursor-pointer rounded-2xl border-slate-400 bg-slate-400 hover:border-slate-500 group"
          on:click={() => changeGrade(id)}
          aria-hidden="true"
        >
          <h3 class="pr-2 font-medium">{name}</h3>
          <span
            class="w-8 pt-1 ml-0 text-center border-2 rounded-full bg-slate-500 border-slate-500 group-hover:border-slate-600"
            >{count}</span
          >
        </div>
      {/each}
    </div>
  </aside>
  <div
    class="w-5/6 p-2 px-4 m-2 border rounded-2xl bg-slate-300 border-slate-400"
  >
    <h2 class="m-2 mb-4 text-lg font-semibold cursor-default text-slate-700">
      کتاب های درسی - {default_class.name}
    </h2>
    <div class="grid grid-cols-4 gap-4">
      {#each selected_book as { name, img }}
        <div
          class="p-1 border-2 cursor-pointer bg-slate-400 group rounded-2xl border-slate-400 hover:border-slate-500"
        >
          <img
            src={"/books/" + img}
            alt={name}
            class="w-3/5 mx-auto rounded-xl group-hover:drop-shadow-xl"
          />
          <div class="mt-4 mb-2 font-medium text-center text-slate-800">
            {name}
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>
