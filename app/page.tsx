'use client';

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-stone-900 pt-0">
      <nav className="sticky top-0 z-10 flex h-20 w-screen items-center bg-stone-900 px-8 text-white">
        <a
          href="/"
          className="cursor-pointer rounded-md px-3 py-2 text-2xl font-medium hover:bg-stone-800"
        >
          Pirate
          <span className="text-yellow-400">Hunt</span>
        </a>
        <a
          href="/leaderboard"
          className="ml-auto cursor-pointer rounded-md px-3 py-2 text-xl font-medium hover:bg-stone-800"
        >
          Leaderboard
        </a>
      </nav>
      <main className="mt-10 flex grow flex-col items-center">
        <div className="flex flex-col items-center gap-4 self-center rounded-md bg-stone-800 p-8 text-white shadow-lg sm:w-full md:w-2/3 lg:w-1/2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/where-s-waldo-8e291.appspot.com/o/onepiece.png?alt=media&token=4574a1c6-1fc7-4d62-aaa8-fa2ffbf87daf"
            alt=""
            width={500}
            height={500}
            className="rounded-md"
          />
          <div className="text-lg">
            Dive into the vibrant world of One Piece with my exciting
            &quot;Where&lsquo;s Waldo?&quot;-style game. Your mission: Find
            Roronoa Zoro, Trafalgar D. Water Law, and Boa Hancock in lively,
            crowded scenes. Test your observation skills and enjoy the thrill of
            spotting these iconic characters in unexpected places!
          </div>
          <a
            href="/start"
            className="transform rounded-md bg-yellow-400 px-4 py-2 font-medium text-gray-800 shadow-md transition hover:bg-yellow-300 active:bg-yellow-500"
          >
            Start Game
          </a>
        </div>
      </main>
    </div>
  );
}
