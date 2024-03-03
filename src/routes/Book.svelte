<script>
  import EnNumToFa from "./../assets/EnNumToFa";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  onMount(async () => {
    EnNumToFa(document.getElementsByTagName("body")[0]);
  });
</script>

<main class="flex font-vazirmatn" in:fade={{ duration: 300 }}>
  <aside
    class="flex flex-col w-1/6 gap-2 p-2 m-2 border bg-slate-300 rounded-2xl border-slate-400"
  >
    <h2 class="text-lg font-semibold text-center cursor-default text-slate-700">
      پایه های تحصیلی
    </h2>
    <div class="flex flex-col gap-2">
      <div
        class="flex items-center justify-between p-1 align-middle border cursor-pointer rounded-2xl border-slate-400 bg-slate-400 hover:border-slate-500 group"
      >
        <h3 class="pr-2">اول ابتدایی</h3>
        <span
          class="w-8 pt-1 ml-0 text-center border rounded-full bg-slate-500 border-slate-500 group-hover:border-slate-600"
          >5</span
        >
      </div>
      <div
        class="flex items-center justify-between p-1 align-middle border cursor-pointer rounded-2xl border-slate-400 bg-slate-400 hover:border-slate-500 group"
      >
        <h3 class="pr-2">دوم ابتدایی</h3>
        <span
          class="w-8 pt-1 ml-0 text-center border rounded-full bg-slate-500 border-slate-500 group-hover:border-slate-600"
          >8</span
        >
      </div>
      <div
        class="flex items-center justify-between p-1 align-middle border cursor-pointer rounded-2xl border-slate-400 bg-slate-400 hover:border-slate-500 group"
      >
        <h3 class="pr-2">سوم ابتدایی</h3>
        <span
          class="w-8 pt-1 ml-0 text-center border rounded-full bg-slate-500 border-slate-500 group-hover:border-slate-600"
          >9</span
        >
      </div>
      <div
        class="flex items-center justify-between p-1 align-middle border cursor-pointer rounded-2xl border-slate-400 bg-slate-400 hover:border-slate-500 group"
      >
        <h3 class="pr-2">چهارم ابتدایی</h3>
        <span
          class="w-8 pt-1 ml-0 text-center border rounded-full bg-slate-500 border-slate-500 group-hover:border-slate-600"
          >9</span
        >
      </div>
      <div
        class="flex items-center justify-between p-1 align-middle border cursor-pointer rounded-2xl border-slate-400 bg-slate-400 hover:border-slate-500 group"
      >
        <h3 class="pr-2">پنجم ابتدایی</h3>
        <span
          class="w-8 pt-1 ml-0 text-center border rounded-full bg-slate-500 border-slate-500 group-hover:border-slate-600"
          >9</span
        >
      </div>
      <div
        class="flex items-center justify-between p-1 align-middle border cursor-pointer rounded-2xl border-slate-400 bg-slate-400 hover:border-slate-500 group"
      >
        <h3 class="pr-2">ششم ابتدایی</h3>
        <span
          class="w-8 pt-1 ml-0 text-center border rounded-full bg-slate-500 border-slate-500 group-hover:border-slate-600"
          >12</span
        >
      </div>
    </div>
  </aside>
  <div
    class="p-2 px-4 m-2 border rounded-2xl grow bg-slate-300 border-slate-400"
  >
    <h2 class="m-2 mb-4 text-lg font-semibold cursor-default text-slate-700">
      کتاب های درسی - پایه اول
    </h2>
    <div class="grid grid-cols-4 gap-4">
      <div
        class="p-1 border-2 cursor-pointer bg-slate-400 rounded-2xl border-slate-400 hover:border-slate-500"
      >
        <img
          src="http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1402-1403/C101.jpg"
          alt="bookimage"
          class="w-3/5 mx-auto rounded-xl"
        />
        <div class="mt-4 mb-2 font-medium text-center text-slate-800">
          کتاب قرآن
        </div>
      </div>
      <div
        class="p-1 border-2 cursor-pointer bg-slate-400 rounded-2xl border-slate-400 hover:border-slate-500"
      >
        <img
          src="http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1402-1403/C103.jpg"
          alt="bookimage"
          class="w-3/5 mx-auto rounded-xl"
        />
        <div class="mt-4 mb-2 font-medium text-center text-slate-800">
          کتاب فارسی
        </div>
      </div>
      <div
        class="p-1 border-2 cursor-pointer bg-slate-400 rounded-2xl border-slate-400 hover:border-slate-500"
      >
        <img
          src="http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1402-1403/C104.jpg"
          alt="bookimage"
          class="w-3/5 mx-auto rounded-xl"
        />
        <div class="mt-4 mb-2 font-medium text-center text-slate-800">
          کتاب نگارش فارسی
        </div>
      </div>
      <div
        class="p-1 border-2 cursor-pointer bg-slate-400 rounded-2xl border-slate-400 hover:border-slate-500"
      >
        <img
          src="http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1402-1403/C105.jpg"
          alt="bookimage"
          class="w-3/5 mx-auto rounded-xl"
        />
        <div class="mt-4 mb-2 font-medium text-center text-slate-800">
          کتاب ریاضی
        </div>
      </div>
      <div
        class="p-1 border-2 cursor-pointer bg-slate-400 rounded-2xl border-slate-400 hover:border-slate-500"
      >
        <img
          src="http://www.chap.sch.ir/sites/default/files/styles/image_node_book/public/book_image/1402-1403/C106.jpg"
          alt="bookimage"
          class="w-3/5 mx-auto rounded-xl"
        />
        <div class="mt-4 mb-2 font-medium text-center text-slate-800">
          کتاب علوم تجربی
        </div>
      </div>
    </div>
  </div>
</main>
