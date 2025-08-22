import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/basics"
          rel="noopener noreferrer"
        >
          Basics
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/exit"
          rel="noopener noreferrer"
        >
          Exit
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/triggers"
          rel="noopener noreferrer"
        >
          Triggers
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/search"
          rel="noopener noreferrer"
        >
          Search
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/notifs"
          rel="noopener noreferrer"
        >
          Notification
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/todo"
          rel="noopener noreferrer"
        >
          Todo
        </a>
      </main>
    </div>
  );
}
