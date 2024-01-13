'use client';
import { useEffect, useState } from 'react';

interface Users {
  name: string;
  time: string;
  timeStamp: string;
  _id: string;
}

export default function LeaderBoards() {
  const [users, setUsers] = useState<Users[]>([]);
  let place = 0;
  useEffect(() => {
    (async () => {
      try {
        let res = await fetch('https://wheres-waldo-api.adaptable.app/users');
        if (res.ok) {
          let usersRes = await res.json();
          const sortedUsers = usersRes.data.sort(
            (a, b) => parseFloat(a.time) - parseFloat(b.time),
          );
          setUsers(sortedUsers);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <div className="flex h-screen flex-col items-center bg-stone-900">
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
        <div className="mt-14 rounded-md bg-stone-800 text-white sm:w-full md:w-2/3 lg:w-1/2">
          <div className="grid h-max grid-cols-4 rounded-t-md bg-stone-700 p-2 px-4">
            <div>Place</div>
            <div>Username</div>
            <div>Time</div>
            <div>Date</div>
          </div>
          {users.map((user) => (
            <div
              key={user._id}
              className="col-span-4 grid h-max grid-cols-4 p-2 px-4"
            >
              <div>{++place}</div>
              <div>{user.name}</div>
              <div>{user.time}s</div>
              <div>{formatDate(user.timeStamp)}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
