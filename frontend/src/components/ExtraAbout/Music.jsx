import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaHeadphones,
  FaHeart,
  FaMusic,
  FaPause,
  FaPlay,
  FaCompactDisc,
  FaStar,
  FaListUl,
  FaTimes,
} from "react-icons/fa";
import { SiSpotify } from "react-icons/si";

const spotifyTrack = (id) => `https://open.spotify.com/track/${id}`;
const spotifySearch = (title, artist) =>
  `https://open.spotify.com/search/${encodeURIComponent(`${title} ${artist}`)}`;

const song = (id, title, artist, duration, trackId = null, extra = {}) => ({
  id,
  title,
  artist,
  duration,
  spotifyId: trackId,
  spotifyUrl: trackId ? spotifyTrack(trackId) : spotifySearch(title, artist),
  ...extra,
});

const tracks = [
  song(1, "Starboy", "The Weeknd", "4:16", "7MXVkk9YMctZqd1Srtv4MB", {
    mood: "Night",
  }),
  song(2, "Blinding Lights", "The Weeknd", "3:20", "0VjIjW4GlUZAMYd2vXMi3b", {
    mood: "Drive",
  }),
  song(3, "Silhouette", "KANA-BOON", "4:02", "1SyKBiKDHefW8JOeMnnSJj", {
    mood: "Energy",
  }),
  song(4, "Co2", "Prateek Kuhad", "2:43", "4WLh56ZjwINYBNhaxLvEhA", {
    mood: "love",
  }),
  song(5, "Blue Bird", "Ikimono-gakari", "3:36", "6Qb7YsA4L2LhkK4Y6P3WF4", {
    mood: "Anime",
  }),
];

const lovedSongs = [
  song(101, "Blue Bird", "Ikimono-gakari", "3:36", "6Qb7YsA4L2LhkK4Y6P3WF4", {
    note: "Anime openings that hit different.",
  }),
  song(102, "Starboy", "The Weeknd", "4:16", "7MXVkk9YMypzN0FGGLoN7", {
    note: "Late-night drive energy.",
  }),
  song(103, "Lofi Study", "Chill Beats", "3:12", "7cFUtLyTsNWe9MmfjWArY2", {
    note: "Default coding soundtrack.",
  }),
  song(104, "Silhouette", "KANA-BOON", "4:02", "1SyKBiKDHefW8JOeMnnSJj", {
    note: "Pure motivation.",
  }),
];

const favouriteArtists = [
  {
    name: "The Weeknd",
    genre: "R&B / Pop",
    plays: "Most replayed",
    spotify: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
  },
  {
    name: "KANA-BOON",
    genre: "J-Rock / Anime",
    plays: "Anime arc",
    spotify: "https://open.spotify.com/artist/6FQcTW2GSSTOH1A7Roundp",
  },
  {
    name: "Lo-Fi Girl",
    genre: "Lo-Fi / Chill",
    plays: "Study hours",
    spotify: "https://open.spotify.com/search/lofi%20girl",
  },
  {
    name: "Imagine Dragons",
    genre: "Alt Rock",
    plays: "Workout mode",
    spotify: "https://open.spotify.com/artist/53XHQfAtn9D86zHRJTc2W1",
  },
];

const musicTaste = [
  { genre: "Lo-Fi & Chill", percent: 90 },
  { genre: "Anime OST", percent: 85 },
  { genre: "Indie / Alt Rock", percent: 70 },
  { genre: "R&B / Pop", percent: 65 },
  { genre: "Electronic", percent: 55 },
];

const playlists = [
  {
    id: "code-mode",
    name: "Code Mode",
    vibe: "Deep focus while building.",
    color: "from-emerald-600 to-green-400",
    songs: [
      song(201, "Lofi Study", "Chill Beats", "3:12", "7cFUtLyTsNWe9MmfjWArY2"),
      song(
        202,
        "Coding Flow",
        "Chillhop Music",
        "2:58",
        "0aVOFOLvBq0P4wdglG4gA0",
      ),
      song(
        203,
        "Deep Focus",
        "Spotify Focus",
        "4:05",
        "0aVOFOLvBq0P4wdglG4gA0",
      ),
      song(204, "Brain Food", "Spotify", "3:44", "6HicSnfJqH9Ka1tJc0N5Se"),
      song(
        205,
        "Instrumental Study",
        "Focus Flow",
        "3:21",
        "0GNF2CViiZm9DmH7kTlcEX",
      ),
      song(206, "Night Owl", "Lo-Fi Beats", "3:55", "7cFUtLyTsNWe9MmfjWArY2"),
      song(
        207,
        "Productive Morning",
        "Coffee Shop",
        "4:10",
        "0aVOFOLvBq0P4wdglG4gA0",
      ),
      song(
        208,
        "Soft Piano",
        "Peaceful Piano",
        "3:38",
        "0GNF2CViiZm9DmH7kTlcEX",
      ),
    ],
  },
  {
    id: "midnight-drive",
    name: "Midnight Drive",
    vibe: "Windows down, city lights.",
    color: "from-violet-600 to-indigo-400",
    songs: [
      song(301, "Starboy", "The Weeknd", "4:16", "7MXVkk9YMypzN0FGGLoN7"),
      song(
        302,
        "Blinding Lights",
        "The Weeknd",
        "3:20",
        "0VjIjW4GlUZAMYd2vXMi3b",
      ),
      song(303, "After Hours", "The Weeknd", "4:01", "2pycrclN4gT5oG8uPyk8RA"),
      song(
        304,
        "Save Your Tears",
        "The Weeknd",
        "3:35",
        "5QO79kh1waicV47BqGRL3g",
      ),
      song(
        305,
        "One Of The Girls",
        "The Weeknd",
        "4:04",
        "7CyhLxzz5v7D2u1e1pR0Ah",
      ),
      song(306, "Die For You", "The Weeknd", "4:20", "2LBq7whRDNDl1LpLagq4uk"),
    ],
  },
  {
    id: "anime-power",
    name: "Anime Power",
    vibe: "Openings, endings & OST.",
    color: "from-orange-500 to-red-400",
    songs: [
      song(401, "Silhouette", "KANA-BOON", "4:02", "1SyKBiKDHefW8JOeMnnSJj"),
      song(
        402,
        "Blue Bird",
        "Ikimono-gakari",
        "3:36",
        "6Qb7YsA4L2LhkK4Y6P3WF4",
      ),
      song(403, "Gurenge", "LiSA", "3:58", "0BJ2G045q9BJK5NxlF9SGu"),
      song(404, "Idol", "YOASOBI", "3:33", "7gj7VjYNTGXPipG7HkemkX"),
      song(
        405,
        "Peace Sign",
        "Kenshi Yonezu",
        "3:59",
        "3SWsHhPLF7knNyO0BovWcE",
      ),
      song(
        406,
        "Unravel",
        "TK from Ling tosite sigure",
        "3:58",
        "2DiNXP14PschNEhT9M0NO9",
      ),
      song(407, "Again", "YUI", "4:15", "5hQCWevJ33nL8KvfHn2yZe"),
    ],
  },
  {
    id: "slow-mornings",
    name: "Slow Mornings",
    vibe: "Soft start to the day.",
    color: "from-amber-400 to-yellow-300",
    songs: [
      song(501, "Golden Hour", "JVKE", "3:28", "56NEihAvKKS6YvnSXwVrUp"),
      song(
        502,
        "Here Comes The Sun",
        "The Beatles",
        "3:05",
        "6dBcTJWSq6YEnMu9lF7v2L",
      ),
      song(503, "Sunflower", "Post Malone", "2:38", "3KzR3Hz9NfE1oNKKtNmls6"),
      song(
        504,
        "Banana Pancakes",
        "Jack Johnson",
        "3:12",
        "3jPy3M6a0bQ3fNu5xYfASg",
      ),
      song(
        505,
        "Better Together",
        "Jack Johnson",
        "3:27",
        "0IktbUcnAGrvD03AWHE3Gu",
      ),
    ],
  },
];

const moodMusic = [
  {
    id: "late-night",
    emoji: "🌙",
    mood: "Late Night",
    desc: "Quiet hours & deep thoughts.",
    songs: [
      song(601, "Starboy", "The Weeknd", "4:16", "7MXVkk9YMypzN0FGGLoN7"),
      song(602, "After Hours", "The Weeknd", "4:01", "2pycrclN4gT5oG8uPyk8RA"),
      song(603, "Lofi Study", "Chill Beats", "3:12"),
      song(604, "Midnight City", "M83", "4:03", "2abaCW3tePeqo5X5RN485o"),
    ],
  },
  {
    id: "coding",
    emoji: "💻",
    mood: "Coding",
    desc: "Focus locked. No distractions.",
    songs: [
      song(
        701,
        "Deep Focus",
        "Spotify Focus",
        "4:05",
        "0aVOFOLvBq0P4wdglG4gA0",
      ),
      song(702, "Brain Food", "Spotify", "3:44", "6HicSnfJqH9Ka1tJc0N5Se"),
      song(703, "Coding Flow", "Chillhop Music", "2:58"),
      song(
        704,
        "Soft Piano",
        "Peaceful Piano",
        "3:38",
        "0GNF2CViiZm9DmH7kTlcEX",
      ),
    ],
  },
  {
    id: "energy",
    emoji: "🏃",
    mood: "Energy",
    desc: "High tempo. High momentum.",
    songs: [
      song(
        801,
        "Believer",
        "Imagine Dragons",
        "3:24",
        "0pqnGHJpmpxLKifKnFdQu9",
      ),
      song(802, "Silhouette", "KANA-BOON", "4:02", "1SyKBiKDHefW8JOeMnnSJj"),
      song(803, "Thunder", "Imagine Dragons", "3:07", "1oDd1xKjbXegim3JJ1Tp7Z"),
      song(804, "Stronger", "Kanye West", "5:12", "4EWCNWgDSBE7EEEHL7F8PI"),
    ],
  },
  {
    id: "relax",
    emoji: "😌",
    mood: "Relax",
    desc: "Unwind and breathe.",
    songs: [
      song(901, "Golden Hour", "JVKE", "3:28", "56NEihAvKKS6YvnSXwVrUp"),
      song(
        902,
        "Banana Pancakes",
        "Jack Johnson",
        "3:12",
        "3jPy3M6a0bQ3fNu5xYfASg",
      ),
      song(
        903,
        "Better Together",
        "Jack Johnson",
        "3:27",
        "0IktbUcnAGrvD03AWHE3Gu",
      ),
      song(904, "Sunflower", "Post Malone", "2:38", "3KzR3Hz9NfE1oNKKtNmls6"),
    ],
  },
  {
    id: "anime",
    emoji: "🎬",
    mood: "Anime",
    desc: "Stories that inspire.",
    songs: [
      song(
        1001,
        "Blue Bird",
        "Ikimono-gakari",
        "3:36",
        "6Qb7YsA4L2LhkK4Y6P3WF4",
      ),
      song(1002, "Gurenge", "LiSA", "3:58", "0BJ2G045q9BJK5NxlF9SGu"),
      song(1003, "Idol", "YOASOBI", "3:33", "7gj7VjYNTGXPipG7HkemkX"),
      song(1004, "Again", "YUI", "4:15", "5hQCWevJ33nL8KvfHn2yZe"),
    ],
  },
  {
    id: "drive",
    emoji: "🚗",
    mood: "Drive",
    desc: "Road playlist on repeat.",
    songs: [
      song(
        1101,
        "Blinding Lights",
        "The Weeknd",
        "3:20",
        "0VjIjW4GlUZAMYd2vXMi3b",
      ),
      song(1102, "Starboy", "The Weeknd", "4:16", "7MXVkk9YMypzN0FGGLoN7"),
      song(
        1103,
        "Save Your Tears",
        "The Weeknd",
        "3:35",
        "5QO79kh1waicV47BqGRL3g",
      ),
      song(1104, "Midnight City", "M83", "4:03", "2abaCW3tePeqo5X5RN485o"),
    ],
  },
];

const Music = () => {
  const [activeSong, setActiveSong] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(new Set([1, 3, 101]));
  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (!modal) return undefined;
    const onKey = (e) => e.key === "Escape" && setModal(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modal]);

  const playSong = (track) => {
    setActiveSong(track);
    setIsPlaying(true);
    window.open(track.spotifyUrl, "_blank", "noopener,noreferrer");
  };

  const toggleLike = (id) => {
    setLiked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const openPlaylist = (id) => {
    const pl = playlists.find((p) => p.id === id);
    if (pl) setModal({ type: "playlist", data: pl });
  };

  const openMood = (id) => {
    const mood = moodMusic.find((m) => m.id === id);
    if (mood) setModal({ type: "mood", data: mood });
  };

  const openRotation = () =>
    setModal({
      type: "rotation",
      data: { title: "My Current Rotation", songs: tracks },
    });

  const openNowPlaying = () =>
    setModal({
      type: "nowPlaying",
      data: { title: "What I'm Listening To", songs: tracks },
    });

  return (
    <main className="font-spotify-body relative min-h-screen overflow-hidden bg-[#121212] pb-32 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-28 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 text-sm font-medium text-[#b3b3b3] transition hover:text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] transition group-hover:bg-[#333]">
              <FaArrowLeft className="text-xs" />
            </span>
            Beyond the Code
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1DB954]/15 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-[#1DB954]">
            <SiSpotify /> MUSIC
          </span>
        </header>

        {/* Spotify-style hero banner */}
        <section className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a472a] via-[#121212] to-[#121212] p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#1DB954]">
                <FaHeadphones /> My Soundtrack
              </p>
              <h1 className="font-spotify-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                GAURAV&apos;S
                <span className="block text-[#1DB954]">MIX</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#b3b3b3] sm:text-base">
                Lo-fi for coding, anime OST for motivation, and The Weeknd for
                midnight drives. Tap any song to open it on Spotify.
              </p>
            </div>
            <button
              type="button"
              onClick={openNowPlaying}
              className="flex min-w-[260px] items-center gap-4 rounded-xl bg-[#282828]/80 p-4 text-left transition hover:bg-[#333]"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#1DB954] to-[#169c46] shadow-lg">
                <SiSpotify className="text-2xl text-black" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1DB954]">
                  Now Playing
                </p>
                <p className="truncate font-bold">{activeSong.title}</p>
                <p className="truncate text-sm text-[#b3b3b3]">
                  {activeSong.artist}
                </p>
              </div>
            </button>
          </div>
        </section>

        <div className="space-y-8">
          {/* Taste + Artists row */}
          <div className="grid gap-6 lg:grid-cols-5">
            <SectionCard
              icon={<FaStar />}
              label="My Music Taste"
              title="Genres I gravitate toward"
              className="lg:col-span-2"
            >
              <div className="space-y-4">
                {musicTaste.map((item) => (
                  <div key={item.genre}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="font-medium text-white">
                        {item.genre}
                      </span>
                      <span className="font-semibold text-[#1DB954]">
                        {item.percent}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#535353]">
                      <div
                        className="h-full rounded-full bg-[#1DB954]"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard
              icon={<FaCompactDisc />}
              label="Favourite Artists"
              title="On repeat, always"
              className="lg:col-span-3"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {favouriteArtists.map((artist) => (
                  <a
                    key={artist.name}
                    href={artist.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg bg-[#282828] p-3 transition hover:bg-[#333]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1DB954] font-spotify-display text-xl text-black">
                      {artist.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-bold group-hover:text-[#1DB954]">
                        {artist.name}
                      </p>
                      <p className="text-xs text-[#b3b3b3]">{artist.genre}</p>
                      <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1DB954]">
                        {artist.plays}
                      </p>
                    </div>
                    <SiSpotify className="shrink-0 text-[#b3b3b3] transition group-hover:text-[#1DB954]" />
                  </a>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Love + Playlists */}
          <div className="grid gap-6 lg:grid-cols-2">
            <SectionCard
              icon={<FaHeart />}
              label="Love"
              title="Songs that stay with me"
            >
              <div className="space-y-1">
                {lovedSongs.map((track, i) => (
                  <SongRow
                    key={track.id}
                    track={track}
                    index={i}
                    active={activeSong.id === track.id}
                    isPlaying={isPlaying}
                    isLiked={liked.has(track.id)}
                    onPlay={() => playSong(track)}
                    onLike={() => toggleLike(track.id)}
                    note={track.note}
                  />
                ))}
              </div>
            </SectionCard>

            <SectionCard
              icon={<FaListUl />}
              label="My Playlists"
              title="Curated vibes"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {playlists.map((pl) => (
                  <button
                    key={pl.id}
                    type="button"
                    onClick={() => openPlaylist(pl.id)}
                    className="group rounded-lg bg-[#282828] p-4 text-left transition hover:bg-[#333]"
                  >
                    <div
                      className={`mb-4 flex h-28 items-end rounded-md bg-gradient-to-br ${pl.color} p-3 shadow-lg`}
                    >
                      <SiSpotify className="text-2xl text-black/70" />
                    </div>
                    <h4 className="font-spotify-display text-lg text-white">
                      {pl.name}
                    </h4>
                    <p className="mt-1 text-xs text-[#b3b3b3]">{pl.vibe}</p>
                    <p className="mt-2 text-[11px] font-bold text-[#1DB954]">
                      {pl.songs.length} songs · Open
                    </p>
                  </button>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Current Rotation */}
          <SectionCard
            icon={<FaMusic />}
            label="My Current Rotation"
            title="What I'm listening to right now"
          >
            <button
              type="button"
              onClick={openRotation}
              className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1DB954] hover:underline"
            >
              View all {tracks.length} songs →
            </button>
            <div className="rounded-lg bg-[#181818]">
              {tracks.map((track, i) => (
                <SongRow
                  key={track.id}
                  track={track}
                  index={i}
                  active={activeSong.id === track.id}
                  isPlaying={isPlaying}
                  isLiked={liked.has(track.id)}
                  onPlay={() => playSong(track)}
                  onLike={() => toggleLike(track.id)}
                />
              ))}
            </div>
          </SectionCard>

          {/* Mood */}
          <SectionCard
            icon={<FaHeadphones />}
            label="Music According to My Mood"
            title="Right sound, right moment"
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {moodMusic.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openMood(item.id)}
                  className="rounded-lg bg-[#282828] p-4 text-left transition hover:bg-[#333]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <h4 className="font-spotify-display text-lg">
                      {item.mood}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm text-[#b3b3b3]">{item.desc}</p>
                  <p className="mt-3 text-[11px] font-bold text-[#1DB954]">
                    {item.songs.length} songs · Open on Spotify
                  </p>
                </button>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full bg-[#282828] px-6 py-3 text-sm font-semibold text-[#b3b3b3] transition hover:bg-[#333] hover:text-white"
          >
            <FaArrowLeft className="text-xs" />
            Back to About
          </Link>
        </div>
      </div>

      {/* Bottom player bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#282828] bg-[#181818] px-4 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-4">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#1DB954]">
              <SiSpotify className="text-xl text-black" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{activeSong.title}</p>
              <p className="truncate text-xs text-[#b3b3b3]">{activeSong.artist}</p>
            </div>
            <button
              onClick={() => toggleLike(activeSong.id)}
              className={`hidden sm:block ${liked.has(activeSong.id) ? "text-[#1DB954]" : "text-[#b3b3b3] hover:text-white"}`}
            >
              <FaHeart className="text-sm" />
            </button>
          </div>

          <button
            onClick={() => playSong(activeSong)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
            aria-label="Open on Spotify"
          >
            {isPlaying ? <FaPause className="text-xs" /> : <FaPlay className="ml-0.5 text-xs" />}
          </button>

          <div className="hidden flex-1 items-center justify-end md:flex">
            <a
              href={activeSong.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#1ed760] hover:scale-105"
            >
              <SiSpotify />
              Open in Spotify
            </a>
          </div>
        </div>
      </div>

      {modal && (
        <SongModal
          modal={modal}
          onClose={() => setModal(null)}
          activeSong={activeSong}
          isPlaying={isPlaying}
          liked={liked}
          onPlay={playSong}
          onLike={toggleLike}
        />
      )}
    </main>
  );
};

const SongRow = ({
  track,
  index,
  active,
  isPlaying,
  isLiked,
  onPlay,
  onLike,
  note,
}) => (
  <div
    className={`group flex items-center gap-3 rounded-md px-3 py-2 transition ${
      active ? "bg-[#333]" : "hover:bg-[#282828]"
    }`}
  >
    <span className="w-5 text-center text-sm text-[#b3b3b3] group-hover:hidden">
      {index + 1}
    </span>
    <button
      onClick={onPlay}
      className="hidden w-5 text-[#1DB954] group-hover:block"
      aria-label={`Open ${track.title} on Spotify`}
    >
      {active && isPlaying ? (
        <FaPause className="text-xs" />
      ) : (
        <FaPlay className="text-xs" />
      )}
    </button>

    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#282828]">
      <SiSpotify className="text-[#1DB954]" />
    </div>

    <div className="min-w-0 flex-1">
      <p
        className={`truncate text-sm font-medium ${active ? "text-[#1DB954]" : "text-white"}`}
      >
        {track.title}
      </p>
      <p className="truncate text-xs text-[#b3b3b3]">
        {note ? `${track.artist} · ${note}` : track.artist}
      </p>
    </div>

    {track.mood && (
      <span className="hidden rounded-full bg-[#282828] px-2 py-0.5 text-[10px] text-[#b3b3b3] sm:inline">
        {track.mood}
      </span>
    )}

    <button
      onClick={onLike}
      className={`${isLiked ? "text-[#1DB954]" : "text-[#b3b3b3] opacity-0 group-hover:opacity-100 hover:text-white"}`}
    >
      <FaHeart className="text-sm" />
    </button>

    <span className="text-xs text-[#b3b3b3]">{track.duration}</span>

    <a
      href={track.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#b3b3b3] opacity-0 transition hover:text-[#1DB954] group-hover:opacity-100"
      aria-label={`Open ${track.title} on Spotify`}
      onClick={(e) => e.stopPropagation()}
    >
      <SiSpotify />
    </a>
  </div>
);

const SongModal = ({
  modal,
  onClose,
  activeSong,
  isPlaying,
  liked,
  onPlay,
  onLike,
}) => {
  const { type, data } = modal;
  const songs = data.songs ?? [];
  const title = data.name ?? data.mood ?? data.title;
  const subtitle =
    type === "playlist"
      ? data.vibe
      : type === "mood"
        ? data.desc
        : "Tap any song to open on Spotify";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
      />
      <div className="relative flex max-h-[88vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-[#282828] sm:rounded-2xl">
        <div className="bg-gradient-to-b from-[#1a472a] to-[#282828] px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1DB954]">
                <SiSpotify />{" "}
                {type === "playlist"
                  ? "Playlist"
                  : type === "mood"
                    ? "Mood Mix"
                    : "Queue"}
              </p>
              <h3 className="font-spotify-display mt-2 text-3xl text-white">
                {title}
              </h3>
              <p className="mt-1 text-sm text-[#b3b3b3]">{subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-2 py-2">
          {songs.map((track, i) => (
            <SongRow
              key={track.id}
              track={track}
              index={i}
              active={activeSong.id === track.id}
              isPlaying={isPlaying}
              isLiked={liked.has(track.id)}
              onPlay={() => onPlay(track)}
              onLike={() => onLike(track.id)}
            />
          ))}
        </div>

        <div className="border-t border-[#333] px-6 py-3 text-center">
          <p className="text-xs text-[#b3b3b3]">
            {songs.length} songs · Powered by Spotify
          </p>
        </div>
      </div>
    </div>
  );
};

const SectionCard = ({ icon, label, title, children, className = "" }) => (
  <section className={`rounded-2xl bg-[#181818] p-6 sm:p-7 ${className}`}>
    <div className="mb-5 flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DB954] text-black">
        {icon}
      </span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1DB954]">
          {label}
        </p>
        <h2 className="font-spotify-display text-2xl text-white sm:text-[1.65rem]">
          {title}
        </h2>
      </div>
    </div>
    {children}
  </section>
);

export default Music;
