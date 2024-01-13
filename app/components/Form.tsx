'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormType {
  gameEnded: boolean;
  timer: number;
}

export default function Form({ gameEnded, timer }: FormType) {
  const [name, setName] = useState('');
  const router = useRouter();

  async function fetchUsers() {
    let data = {
      name: name,
      time: formatTimer(),
    };
    try {
      let res = await fetch('https://wheres-waldo-api.adaptable.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push('/leaderboard');
      }
    } catch (err) {
      console.log(err);
    }
  }

  const formatTimer = () => {
    const minutes = Math.floor(timer / (60 * 1000));
    const seconds = Math.floor((timer % (60 * 1000)) / 1000);
    const milliseconds = timer % 1000;

    const formattedSeconds = `${minutes * 60 + seconds}`;

    const formattedMilliseconds = `${String(milliseconds).padStart(3, '0')}`;

    return `${formattedSeconds}.${formattedMilliseconds}`;
  };

  return (
    <>
      {gameEnded && (
        <>
          <div className="fixed inset-0 flex flex-col items-center justify-center">
            <div className="rounded-md bg-stone-900 p-4">
              <div className="text-lg font-medium text-white">
                You finished in {formatTimer()}s!
              </div>
              <div className=" mb-3 text-sm text-gray-300">
                Submit your score to the leaderboard
              </div>
              <form action="" className="flex flex-col gap-2">
                <label htmlFor="name" className="block text-gray-300">
                  Username
                </label>
                <input
                  type="text"
                  id="name"
                  className="h-10 rounded-md border border-stone-300 bg-transparent px-1 text-gray-300"
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  type="button"
                  className="h-10 transform self-start rounded-md bg-yellow-400 px-4 font-semibold text-gray-900 transition hover:bg-yellow-300
                  active:bg-yellow-500"
                  onClick={() => fetchUsers()}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
