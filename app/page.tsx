"use client";

import { useEffect, useState } from "react";

const Home = () => {
  const [participants, setParticipants] = useState<string>("");
  useEffect(() => {
    fetch("static/participants.txt")
      .then((file) => file.text())
      .then((participants) => {
        setParticipants(participants);
      });
  }, []);

  return (
    <>
      <div className="m-4 flex justify-center">
        <div className="max-w-[40%] info">
          <h1>osu! Gameshow</h1>
          <strong>
            Hosted by{" "}
            <a href="https://osu.ppy.sh/users/18755966" className="link">
              _Kurookami_
            </a>
          </strong>
          <h2>Rounds</h2>
          <h3>Guess The Background</h3>
          <p>
            In this round, players will try to guess what beatmap a background
            comes from, based on seeing only a small part of the background.
            Asking for a hint will make a bigger part of the beatmap available.
          </p>
          <h3>Guess The Beatmap</h3>
          <p>
            Based on the composition of the map only, the participants will have
            to guess what beatmap is shown to them. A hint will reveal a fact
            about the map or something related to the map.
          </p>
          <h3>Guess The Song</h3>
          <p>
            From a very short audio clip, the participants need to give me the
            title of the song that is being played. If they need to, they can
            use one of their hints to reveal a longer audio clip.
          </p>
          <h3>Anagrams</h3>
          <p>
            Inspired by BTMC's mapper anagrams, this round will have the players
            guess what artist name is hidden in the scrambled bunch of letters.
          </p>
          <h3>Trivia</h3>
          <p>
            Every traditional gameshow must have some shape or form of trivia.
            The last round is exactly that.
          </p>
          <h2>Points</h2>
          <p>
            Every correctly answered question will hand out 50 points.
            Logically, the person with the most points at the end of the
            gameshow, wins.
          </p>
          <h2>Prizepool</h2>
          <p>
            The top 3 players will receive prizes, the rest walk away with empty
            hands. Despite these prizes laying on the table, I'd like for
            everyone to have a fun time and enjoy participating in this first
            edition of the osu! gameshow, hosted by me,{" "}
            <strong>_Kurookami_</strong>. Only then will I consider making a
            second edition of this. Let's hope that we can either do this again
            or other people can get the chance to participate in Kurookami's
            osu!gameshow.
          </p>
          <p className="mt-2 text-lg">
            <strong>Prizes</strong>
          </p>
          <ul>
            <li>
              <span className="bg-yellow-600 py-1 px-2 rounded-xl">
                First place: 4 months of osu!supporter
              </span>
            </li>
            <li className="mt-2">
              <span className="bg-zinc-500 py-1 px-2 rounded-xl">
                Second place: 2 months of osu!supporter
              </span>
            </li>
            <li className="mt-2">
              <span className="bg-orange-800 py-1 px-2 rounded-xl">
                Third place: 1 month of osu!supporter
              </span>
            </li>
          </ul>
          <h2>Participants</h2>
          <table>
            <thead>
              <tr className="font-bold text-lg bg-gray-900">
                <td className="pl-1 pr-4 py-1">Discord</td>
                <td className="pl-1 pr-4 py-1">osu!</td>
              </tr>
            </thead>
            <tbody>
              {participants.split("\n").map((p, index) => (
                <tr
                  key={index}
                  className={`border border-slate-900 ${
                    index % 2 == 0 ? "bg-slate-400 text-black" : "bg-gray-600"
                  } font-bold`}
                >
                  <td className="pl-1 pr-4 py-1">{p.split(", ")[0]}</td>
                  <td className="pl-1 pr-4 py-1">{p.split(", ")[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
