import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaClock,
  FaCoffee,
  FaChevronRight,
  FaTimes,
  FaMoon,
  FaCompass,
  FaLayerGroup,
  FaCopy,
  FaCheck,
  FaIdBadge,
} from "react-icons/fa";

import cod1 from "../../assets/AboutPage/GamesImages/callOfDuty/wallpaperflare.com_wallpaper (1).jpg";
import cod2 from "../../assets/AboutPage/GamesImages/callOfDuty/wallpaperflare.com_wallpaper (12).jpg";
import clash1 from "../../assets/AboutPage/GamesImages/clash-of-clans/wallpaperflare.com_wallpaper (3).jpg";
import clash2 from "../../assets/AboutPage/GamesImages/clash-of-clans/wallpaperflare.com_wallpaper (5).jpg";
import gta1 from "../../assets/AboutPage/GamesImages/Gta/wallpaperflare.com_wallpaper (1).jpg";
import gta2 from "../../assets/AboutPage/GamesImages/Gta/wallpaperflare.com_wallpaper (4).jpg";
import nfs from "../../assets/AboutPage/GamesImages/Nfs/wallpaperflare.com_wallpaper (11).jpg";
import pokemon1 from "../../assets/AboutPage/GamesImages/Pokemon/1177506.jpg";
import pokemon2 from "../../assets/AboutPage/GamesImages/Pokemon/wallpaperflare.com_wallpaper (8).jpg";
import spiderman1 from "../../assets/AboutPage/GamesImages/Spiderman/wallpaperflare.com_wallpaper (1).jpg";
import spiderman2 from "../../assets/AboutPage/GamesImages/Spiderman/wallpaperflare.com_wallpaper (4).jpg";
import valorant1 from "../../assets/AboutPage/GamesImages/valorant/1345035.jpeg";
import valorant2 from "../../assets/AboutPage/GamesImages/valorant/1356617.jpeg";

const games = [
  {
    name: "Valorant",
    genre: "Competitive FPS",
    mood: "Focused",
    image: valorant1,
    secondary: valorant2,
    description:
      "A tactical shooter where precision, strategy and quick decisions matter.",
    accent: "#ff4655",
    glow: "rgba(255,70,85,0.25)",
    span: "col-span-2 row-span-2",
  },
  {
    name: "Grand Theft Auto",
    genre: "Open World",
    mood: "Exploring",
    image: gta1,
    secondary: gta2,
    description:
      "Open worlds, freedom, chaos and stories that make every session different.",
    accent: "#22c55e",
    glow: "rgba(34,197,94,0.2)",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Call of Duty",
    genre: "FPS / Action",
    mood: "Intense",
    image: cod1,
    secondary: cod2,
    description:
      "Fast-paced combat, intense matches and the thrill of competitive gameplay.",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.22)",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Need for Speed",
    genre: "Racing",
    mood: "Adrenaline",
    image: nfs,
    secondary: nfs,
    description:
      "Speed, cars, customization and the satisfaction of pushing limits.",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.22)",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Spider-Man",
    genre: "Action / Adventure",
    mood: "Immersive",
    image: spiderman1,
    secondary: spiderman2,
    description:
      "Swinging through the city and experiencing the world from a superhero's perspective.",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.2)",
    span: "col-span-1 row-span-2",
  },
  {
    name: "Pokémon",
    genre: "Adventure / RPG",
    mood: "Nostalgic",
    image: pokemon1,
    secondary: pokemon2,
    description:
      "A nostalgic world of exploration, collecting, battles and memorable characters.",
    accent: "#eab308",
    glow: "rgba(234,179,8,0.22)",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Clash of Clans",
    genre: "Strategy",
    mood: "Planning",
    image: clash1,
    secondary: clash2,
    description:
      "Building, planning attacks and creating strategies to overcome opponents.",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.22)",
    span: "col-span-1 row-span-1",
  },
  {
    name: "Clash Royale",
    genre: "Strategy",
    mood: "Quick rounds",
    image: clash2,
    secondary: clash1,
    description:
      "Short strategic battles where timing and decision making make the difference.",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.22)",
    span: "col-span-1 row-span-1",
  },
];

const gameUsernames = [
  {
    game: "Valorant",
    username: "izumi#0408",
    platform: "Riot ID",
    accent: "#ff4655",
  },
  {
    game: "Call of Duty",
    username: "gauravsingh0248",
    platform: "Activision",
    accent: "#f97316",
  },
  {
    game: "GTA Online",
    username: "gauravsingh0248",
    platform: "Rockstar",
    accent: "#22c55e",
  },
  {
    game: "Clash of Clans",
    username: "Gauravsingh0248",
    platform: "Supercell ID",
    accent: "#f59e0b",
  },
  {
    game: "Clash Royale",
    username: "GauravSingh0248",
    platform: "Supercell ID",
    accent: "#a855f7",
  },
  {
    game: "Pokémon GO",
    username: "Gaurav0408",
    platform: "Niantic",
    accent: "#eab308",
  },
];

const moods = [
  {
    icon: <FaCoffee />,
    title: "Unwind",
    text: "A few rounds after a long day — nothing serious, just switching off.",
  },
  {
    icon: <FaCompass />,
    title: "Explore",
    text: "Open worlds and story-driven games when I want to slow down.",
  },
  {
    icon: <FaMoon />,
    title: "Late nights",
    text: "Sometimes one more match turns into an hour. It happens.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Variety",
    text: "FPS one week, racing the next. I jump between genres freely.",
  },
];

const Gaming = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [hoveredGame, setHoveredGame] = useState(games[0]);
  const [copiedId, setCopiedId] = useState(null);

  const copyUsername = async (username, id) => {
    try {
      await navigator.clipboard.writeText(username);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050508] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 70% 10%, ${hoveredGame.glow}, transparent 60%)`,
          }}
        />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-violet-600/8 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/6 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-28 pt-28 sm:px-8">
        {/* Nav */}
        <div className="mb-20 flex items-center justify-between">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/2 px-4 py-2.5 text-sm text-white/50 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:text-white"
          >
            <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-0.5" />
            Back to About
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/2 px-4 py-2 text-xs font-medium tracking-wide text-white/40 sm:flex">
            <FaClock className="text-white/30" />
            Free time activity
          </div>
        </div>

        {/* Hero */}
        <section className="grid items-end gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/35">
              Off the clock
            </p>

            <h1 className="mt-5 text-[clamp(2.75rem,8vw,5.5rem)] font-light leading-[0.95] tracking-tight">
              Games I
              <span className="block font-semibold italic text-white/90">
                pick up sometimes.
              </span>
            </h1>

            <p className="mt-8 max-w-md text-base leading-7 text-white/45 sm:text-lg">
              I'm not really a gamer — just someone who enjoys a good game when
              there's free time. A casual way to relax, reset and step away from
              screens full of code.
            </p>

            <a
              href="#library"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
            >
              Browse the collection
              <FaChevronRight className="text-[10px] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Featured spotlight */}
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-4xl blur-3xl transition-all duration-700"
              style={{ background: hoveredGame.glow }}
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/3 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={hoveredGame.image}
                  alt={hoveredGame.name}
                  className="h-full w-full object-cover transition duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050508] via-[#050508]/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      background: `${hoveredGame.accent}22`,
                      color: hoveredGame.accent,
                      border: `1px solid ${hoveredGame.accent}44`,
                    }}
                  >
                    {hoveredGame.mood}
                  </span>
                  <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                    {hoveredGame.name}
                  </h2>
                  <p className="mt-1 text-sm text-white/40">
                    {hoveredGame.genre}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context strip */}
        <section className="mt-28 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/30">
              Why games?
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight sm:text-4xl">
              A break from
              <span className="font-semibold"> the usual routine.</span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/45">
            <p>
              Between projects, classes and everything else, I like having
              something completely unrelated to coding to dip into. No ranks to
              grind, no identity attached — just whatever sounds fun that day.
            </p>
            <p>
              Some evenings it's a quick match. Other times it's wandering
              through an open world with no real goal. Either way, it's free
              time well spent.
            </p>
          </div>
        </section>

        {/* Mood cards */}
        <section className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {moods.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/6 bg-white/2 p-5 transition duration-300 hover:border-white/12 hover:bg-white/4"
            >
              <span className="text-sm text-white/30 transition group-hover:text-white/50">
                {item.icon}
              </span>
              <h3 className="mt-4 font-medium text-white/85">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/35">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* In-game usernames */}
        <section id="ids" className="mt-28">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/30">
                In-game IDs
              </p>
              <h2 className="mt-3 text-3xl font-light sm:text-4xl">
                Find me <span className="font-semibold">in-game.</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/35">
                Usernames across the games I actually play online — tap to copy.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/2 px-4 py-2 text-xs text-white/35">
              <FaIdBadge className="text-white/25" />
              {gameUsernames.length} accounts
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {gameUsernames.map((entry) => (
              <UsernameCard
                key={entry.game}
                entry={entry}
                copied={copiedId === entry.game}
                onCopy={() => copyUsername(entry.username, entry.game)}
              />
            ))}
          </div>
        </section>

        {/* Bento library */}
        <section id="library" className="mt-32">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/30">
                Collection
              </p>
              <h2 className="mt-3 text-3xl font-light sm:text-4xl">
                Titles on <span className="font-semibold">rotation.</span>
              </h2>
            </div>
            <p className="text-sm text-white/30">
              {games.length} games · hover to preview
            </p>
          </div>

          <div className="grid auto-rows-45 grid-cols-2 gap-3 sm:auto-rows-50 lg:grid-cols-4">
            {games.map((game, index) => (
              <BentoCard
                key={game.name}
                game={game}
                index={index}
                onHover={() => setHoveredGame(game)}
                onClick={() => setSelectedGame(game)}
              />
            ))}
          </div>
        </section>

        {/* Coding parallel — subtle, not identity */}
        <section className="mt-32 overflow-hidden rounded-[1.75rem] border border-white/6 bg-linear-to-br from-white/3 to-transparent p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/30">
                Side note
              </p>
              <h2 className="mt-4 text-3xl font-light leading-tight sm:text-4xl">
                Different worlds,
                <span className="font-semibold"> similar muscles.</span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/40">
                Games and code both reward patience and iteration — try, fail,
                adjust, try again. I don't play to get better at programming,
                but the overlap is kind of nice.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["Patience", "Experimentation", "Problem solving", "Focus"].map(
                (skill, i) => (
                  <div
                    key={skill}
                    className="rounded-xl border border-white/6 bg-black/20 px-5 py-4"
                  >
                    <span className="text-[10px] font-bold tracking-[0.3em] text-white/20">
                      0{i + 1}
                    </span>
                    <p className="mt-2 text-sm font-medium text-white/70">
                      {skill}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-32 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/25">
            That's about it
          </p>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-white/40">
            No stream schedule, no hot takes — just games I enjoy when life
            gives me a little room to breathe.
          </p>

          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-6 py-3 text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
          >
            <FaArrowLeft className="text-xs" />
            Back to About
          </Link>
        </section>
      </div>

      {/* Modal */}
      {selectedGame && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-md sm:items-center sm:p-5"
          onClick={() => setSelectedGame(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-t-3xl border border-white/10 bg-[#0a0a0f] shadow-2xl sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-52 sm:h-64">
              <img
                src={selectedGame.secondary}
                alt={selectedGame.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent" />

              <button
                onClick={() => setSelectedGame(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/60 backdrop-blur-md transition hover:text-white"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <span
                className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                style={{
                  background: `${selectedGame.accent}22`,
                  color: selectedGame.accent,
                  border: `1px solid ${selectedGame.accent}44`,
                }}
              >
                {selectedGame.mood}
              </span>

              <h3 className="mt-4 text-3xl font-semibold">
                {selectedGame.name}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-widest text-white/30">
                {selectedGame.genre}
              </p>

              <p className="mt-6 leading-7 text-white/50">
                {selectedGame.description}
              </p>

              <p className="mt-6 rounded-xl border border-white/5 bg-white/2 p-4 text-sm leading-6 text-white/40">
                One of those titles I come back to when I have an hour to spare
                — nothing more complicated than that.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

const UsernameCard = ({ entry, copied, onCopy }) => (
  <button
    type="button"
    onClick={onCopy}
    className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/6 bg-white/2 px-4 py-3.5 text-left transition duration-300 hover:border-white/12 hover:bg-white/4"
  >
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2">
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: entry.accent }}
        />
        <p className="truncate text-sm font-medium text-white/80">
          {entry.game}
        </p>
      </div>
      <p className="mt-1 truncate font-mono text-sm text-white/55">
        {entry.username}
      </p>
      <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/25">
        {entry.platform}
      </p>
    </div>

    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition duration-300 ${
        copied
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
          : "border-white/8 bg-white/3 text-white/30 group-hover:border-white/16 group-hover:text-white/60"
      }`}
    >
      {copied ? (
        <FaCheck className="text-xs" />
      ) : (
        <FaCopy className="text-xs" />
      )}
    </span>
  </button>
);

const BentoCard = ({ game, index, onHover, onClick }) => (
  <button
    onClick={onClick}
    onMouseEnter={onHover}
    onFocus={onHover}
    className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 text-left transition duration-500 hover:border-white/16 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${game.span}`}
  >
    <img
      src={game.image}
      alt={game.name}
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10 transition duration-500 group-hover:from-black/95" />

    <div
      className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
      style={{
        background: `linear-gradient(135deg, ${game.glow} 0%, transparent 60%)`,
      }}
    />

    <div className="absolute left-4 top-4 text-[10px] font-bold tracking-widest text-white/30">
      {String(index + 1).padStart(2, "0")}
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
      <p
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{ color: game.accent }}
      >
        {game.mood}
      </p>
      <h3 className="mt-1 text-lg font-semibold leading-tight sm:text-xl">
        {game.name}
      </h3>
      <p className="mt-1 text-xs text-white/35">{game.genre}</p>
    </div>
  </button>
);

export default Gaming;
