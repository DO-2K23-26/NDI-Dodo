export default function page() {
  return (
    <main>

    <p>Home Page</p>
      <div class="fixed left-20 top-0 bottom-0 flex flex-col items-center justify-center">
        <div id="slide-bar" class="grid grid-cols-1 divide-y rounded-md bg-zinc-800">
            <button value="1" type="button" class="m-2 px-2 py-2 text-sm font-medium bg-cyan-900 rounded-full focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"></button>
            <button value="2" type="button" class="m-2 px-2 py-2 text-sm font-medium bg-cyan-50 rounded-full  focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"></button>
            <button value="3" type="button" class="m-2 px-2 py-2 text-sm font-medium bg-cyan-50 rounded-full focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"></button>
            <button value="4" type="button" class="m-2 px-2 py-2 text-sm font-medium bg-cyan-50 rounded-full hover:bg-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"></button>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4 place-items">
        <div class="col bg-blue-800"></div>
        <div class="col-span-11 bg-red-800">
          <div class="h-96">h-32</div>
        </div>
      </div>
    </main>
  )
}
