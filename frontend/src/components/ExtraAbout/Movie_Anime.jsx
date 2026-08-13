import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaFilm,
  FaPlay,
  FaStar,
  FaTimes,
} from "react-icons/fa";

import useActiveSection from "../../hooks/useActiveSection";
import useActivePreview from "../../hooks/useActivePreview";
import {
  SECTIONS,
  NAV_CATEGORIES,
  hollywoodMovies,
  hindiMovies,
  seriesList,
  allTimeFavorites,
  animeList,
  animeRecommendations,
  getMovieById,
  heroPreview,
  suzumeOutroWallpaper,
} from "../../data/movieData";

const DEFAULT_PREVIEW = hollywoodMovies[0];

const PREVIEW_SECTIONS = new Set([
  "hollywood",
  "hindi",
  "series",
  "favorites",
  "anime",
  "recommendations",
]);

const OUTRO_SECTIONS = new Set(["profile", "philosophy", "closing"]);

const CAROUSEL_SECTIONS = new Set(["hollywood", "hindi"]);

const getCenterCarouselCardId = (track) => {
  if (!track) return null;

  const trackRect = track.getBoundingClientRect();
  const centerX = trackRect.left + trackRect.width / 2;
  const cards = track.querySelectorAll("[data-carousel-card]");

  let bestId = null;
  let bestDistance = Infinity;

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(cardCenter - centerX);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestId = card.dataset.previewId ?? null;
    }
  });

  return bestId;
};

const MovieAnime = () => {
  const [modalMovie, setModalMovie] = useState(null);
  const [selectedFavorite, setSelectedFavorite] = useState(allTimeFavorites[0]);
  const [previewKey, setPreviewKey] = useState(0);
  const [previewOverrideId, setPreviewOverrideId] = useState(null);
  const [hoverPreviewId, setHoverPreviewId] = useState(null);
  const [carouselPreviewId, setCarouselPreviewId] = useState(null);

  const activeSection = useActiveSection("hero");
  const observedPreviewId = useActivePreview();

  const sectionDefaultPreview = useMemo(() => {
    const map = {
      hollywood: hollywoodMovies[0],
      hindi: hindiMovies[0],
      series: seriesList[0],
      favorites: selectedFavorite,
      anime: animeList[0],
      recommendations: animeRecommendations[0],
    };
    return map[activeSection] ?? DEFAULT_PREVIEW;
  }, [activeSection, selectedFavorite]);

  const resolvedPreviewId = useMemo(() => {
    if (hoverPreviewId) return hoverPreviewId;
    if (CAROUSEL_SECTIONS.has(activeSection) && carouselPreviewId) {
      return carouselPreviewId;
    }
    if (observedPreviewId) return observedPreviewId;
    if (previewOverrideId) return previewOverrideId;
    return sectionDefaultPreview.id;
  }, [
    hoverPreviewId,
    activeSection,
    carouselPreviewId,
    observedPreviewId,
    previewOverrideId,
    sectionDefaultPreview.id,
  ]);

  const displayMovie = useMemo(
    () => getMovieById(resolvedPreviewId) ?? sectionDefaultPreview,
    [resolvedPreviewId, sectionDefaultPreview]
  );

  const showMoviePreview = PREVIEW_SECTIONS.has(activeSection);
  const showOutroWallpaper = OUTRO_SECTIONS.has(activeSection);

  // Hand off pill-selection override once scroll lands on a different favorite panel
  const favoriteIds = useMemo(
    () => new Set(allTimeFavorites.map((f) => f.id)),
    []
  );

  useEffect(() => {
    if (activeSection !== "favorites") {
      setPreviewOverrideId(null);
      return;
    }
    if (
      previewOverrideId &&
      observedPreviewId &&
      favoriteIds.has(observedPreviewId) &&
      observedPreviewId !== previewOverrideId
    ) {
      setPreviewOverrideId(null);
    }
  }, [activeSection, observedPreviewId, previewOverrideId, favoriteIds]);

  useEffect(() => {
    if (!CAROUSEL_SECTIONS.has(activeSection)) {
      setCarouselPreviewId(null);
    }
  }, [activeSection]);

  const handleCarouselPreview = useCallback((movieId) => {
    if (!movieId) return;
    setPreviewOverrideId(null);
    setCarouselPreviewId(movieId);
    setPreviewKey((k) => k + 1);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openModal = (movie) => setModalMovie(movie);
  const closeModal = () => setModalMovie(null);

  const handleFavoriteSelect = (fav) => {
    setSelectedFavorite(fav);
    setPreviewOverrideId(fav.id);
    setPreviewKey((k) => k + 1);

    requestAnimationFrame(() => {
      document
        .querySelector(`[data-preview-id="${fav.id}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  const handleCardHover = useCallback((movie) => {
    setPreviewOverrideId(null);
    setHoverPreviewId(movie.id);
  }, []);

  useEffect(() => {
    if (showMoviePreview || showOutroWallpaper) {
      setPreviewKey((k) => k + 1);
    }
  }, [displayMovie.id, showMoviePreview, showOutroWallpaper]);

  const handleCardHoverEnd = useCallback(() => {
    setHoverPreviewId(null);
  }, []);

  const sectionTheme = useMemo(() => {
    const themes = {
      hero: { accent: "#f59e0b", glow: "rgba(245,158,11,0.15)" },
      hollywood: { accent: "#3b82f6", glow: "rgba(59,130,246,0.18)" },
      hindi: { accent: "#dc2626", glow: "rgba(220,38,38,0.2)" },
      series: { accent: "#8b5cf6", glow: "rgba(139,92,246,0.18)" },
      favorites: { accent: "#f59e0b", glow: "rgba(245,158,11,0.2)" },
      anime: { accent: "#a855f7", glow: "rgba(168,85,247,0.22)" },
      recommendations: { accent: "#22d3ee", glow: "rgba(34,211,238,0.18)" },
      profile: { accent: "#22d3ee", glow: "rgba(34,211,238,0.08)" },
      philosophy: { accent: "#64748b", glow: "rgba(100,116,139,0.08)" },
      closing: { accent: "#64748b", glow: "rgba(100,116,139,0.12)" },
    };

    if (showOutroWallpaper) {
      return { accent: "#2dd4bf", glow: "rgba(45,212,191,0.12)" };
    }

    if (showMoviePreview && displayMovie?.accent) {
      const hex = displayMovie.accent;
      return {
        accent: hex,
        glow: `${hex}30`,
      };
    }

    return themes[activeSection] ?? themes.hero;
  }, [activeSection, showMoviePreview, showOutroWallpaper, displayMovie?.accent]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030308] text-white">
      {/* Fixed cinematic background preview */}
      <CinematicPreview
        movie={displayMovie}
        previewKey={previewKey}
        theme={sectionTheme}
        heroMode={activeSection === "hero"}
        showMovie={showMoviePreview}
        outroMode={showOutroWallpaper}
        outroWallpaper={suzumeOutroWallpaper}
      />

      {/* Category navigation */}
      <nav className="fixed left-1/2 top-24 z-40 hidden -translate-x-1/2 lg:block">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-1.5 backdrop-blur-xl">
          {NAV_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => scrollTo(cat.target)}
              className={`rounded-full px-3 py-1.5 text-[10px] font-bold tracking-widest transition duration-300 ${
                activeSection === cat.target || (cat.id === "all" && activeSection === "hero")
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Scroll progress */}
      <ScrollProgress activeSection={activeSection} />

      {/* Mobile nav */}
      <nav className="fixed inset-x-0 top-20 z-40 overflow-x-auto px-4 lg:hidden">
        <div className="flex gap-2 pb-2">
          {NAV_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => scrollTo(cat.target)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-bold tracking-widest transition ${
                activeSection === cat.target || (cat.id === "all" && activeSection === "hero")
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-white/8 bg-black/40 text-white/45"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero */}
        <section
          id="hero"
          data-section="hero"
          className="relative flex min-h-screen flex-col justify-end px-5 pb-16 pt-36 sm:px-8 lg:pb-24 lg:pl-[max(2rem,8vw)] lg:pr-[42vw]"
        >
          <Link
            to="/about"
            className="hero-animate absolute left-5 top-28 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/50 backdrop-blur-md transition hover:text-white sm:left-8"
          >
            <FaArrowLeft className="text-xs" />
            Back
          </Link>

          <p className="hero-animate hero-animate-delay-1 text-xs font-semibold uppercase tracking-[0.4em] text-amber-400/80">
            My Cinematic Universe
          </p>

          <h1 className="hero-animate hero-animate-delay-2 mt-6 text-[clamp(2.5rem,9vw,6rem)] font-black leading-[0.92] tracking-tight">
            MOVIES.
            <span className="block text-white/90">SERIES.</span>
            <span className="block bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              ANIME.
            </span>
          </h1>

          <p className="hero-animate hero-animate-delay-3 mt-6 max-w-xl text-lg text-white/60 sm:text-xl">
            Stories I watched, worlds I explored, and characters I never forgot.
          </p>

          <p className="hero-animate hero-animate-delay-3 mt-6 max-w-lg text-sm leading-7 text-white/45 sm:text-base">
            Movies, series and anime are one of the ways I explore stories, emotions,
            characters and different worlds outside programming. They remind me that great
            storytelling — whether on screen or in code — is about connection.
          </p>

          <div className="hero-animate hero-animate-delay-4 mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo("hollywood")}
              className="rounded-full bg-white px-6 py-3 text-xs font-bold tracking-widest text-black transition hover:bg-white/90"
            >
              EXPLORE MY WATCHLIST
            </button>
            <button
              type="button"
              onClick={() => scrollTo("favorites")}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold tracking-widest text-white/80 backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
            >
              ALL-TIME FAVORITES
            </button>
          </div>

          <button
            type="button"
            onClick={() => scrollTo("hollywood")}
            className="scroll-indicator-bounce mt-16 flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-white/35 transition hover:text-white/60"
          >
            SCROLL TO EXPLORE ↓
          </button>
        </section>

        {/* Content sections — left column on desktop, preview on right via fixed bg */}
        <div className="lg:pl-[max(2rem,8vw)] lg:pr-[38vw]">
          {/* 01 Hollywood */}
          <MovieSection
            id="hollywood"
            sectionId="hollywood"
            number="01"
            label="Recently Watched"
            title="Hollywood"
            subtitle="Blockbusters, adventures and stories from the big screen."
            movies={hollywoodMovies}
            cardVariant="horizontal"
            onCardClick={openModal}
            onCardHover={handleCardHover}
            onCardHoverEnd={handleCardHoverEnd}
            onCarouselPreview={handleCarouselPreview}
          />

          {/* 02 Hindi */}
          <MovieSection
            id="hindi"
            sectionId="hindi"
            number="02"
            label="Recently Watched"
            title="Hindi Cinema"
            subtitle="Romance, drama and the warmth of home."
            movies={hindiMovies}
            cardVariant="horizontal"
            theme="hindi"
            onCardClick={openModal}
            onCardHover={handleCardHover}
            onCardHoverEnd={handleCardHoverEnd}
            onCarouselPreview={handleCarouselPreview}
          />

          {/* 03 Series */}
          <MovieSection
            id="series"
            sectionId="series"
            number="03"
            label="Recently Watched"
            title="Series"
            subtitle="Long-form stories that become part of your routine."
            movies={seriesList}
            cardVariant="wide"
            onCardClick={openModal}
            onCardHover={handleCardHover}
            onCardHoverEnd={handleCardHoverEnd}
          />

          {/* 04 Favorites */}
          <section
            id="favorites"
            data-section="favorites"
            className="relative px-5 py-24 sm:px-8"
          >
            <SectionHeader
              number="04"
              label="All-Time Favorites"
              title="Stories that stayed with me"
              subtitle="Stories that stayed with me long after the credits rolled."
            />

            {/* Interactive showcase */}
            <div className="mt-12 overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-950/30 to-black/40 p-6 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400/70">
                Select a favorite
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {allTimeFavorites.map((fav) => (
                  <button
                    key={fav.id}
                    type="button"
                    onClick={() => handleFavoriteSelect(fav)}
                    className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wider transition duration-300 ${
                      selectedFavorite.id === fav.id
                        ? "border-amber-400/50 bg-amber-500/20 text-amber-200"
                        : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/80"
                    }`}
                  >
                    {fav.title.split(":")[0].split("—")[0].trim().toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400/80">
                    {selectedFavorite.category}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                    {selectedFavorite.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/40">
                    {selectedFavorite.genre} • {selectedFavorite.year}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {selectedFavorite.whyILove}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {selectedFavorite.personalExperience}
                  </p>
                </div>
                <div className="space-y-3">
                  <InfoPill label="Emotional Impact" value={selectedFavorite.emotionalImpact} />
                  <InfoPill label="Rewatch Value" value={selectedFavorite.rewatchValue} />
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedFavorite.themes?.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed favorite panels */}
            <div className="mt-16 space-y-8">
              {allTimeFavorites.map((fav) => (
                <FavoritePanel
                  key={fav.id}
                  favorite={fav}
                  onSelect={() => handleFavoriteSelect(fav)}
                  onOpen={() => openModal(fav)}
                  onHover={() => handleCardHover(fav)}
                  onHoverEnd={handleCardHoverEnd}
                />
              ))}
            </div>
          </section>

          {/* 05 Anime */}
          <MovieSection
            id="anime"
            sectionId="anime"
            number="05"
            label="Anime Universe"
            title="Different worlds. Different stories."
            subtitle="Different worlds. Different stories. Same obsession."
            movies={animeList}
            cardVariant="anime"
            theme="anime"
            onCardClick={openModal}
            onCardHover={handleCardHover}
            onCardHoverEnd={handleCardHoverEnd}
          />

          {/* 06 Recommendations */}
          <MovieSection
            id="recommendations"
            sectionId="recommendations"
            number="06"
            label="Anime Movies I Recommend"
            title="Start here"
            subtitle="If you're getting into anime movies, start here."
            movies={animeRecommendations}
            cardVariant="recommend"
            theme="anime"
            onCardClick={openModal}
            onCardHover={handleCardHover}
            onCardHoverEnd={handleCardHoverEnd}
          />

          {/* Viewer Profile */}
          <section
            data-section="profile"
            className="relative mx-5 my-24 overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-black/60 p-8 sm:mx-8"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-[80px]" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400/70">
              Viewer Profile
            </p>
            <h2 className="font-anime mt-4 text-4xl font-bold tracking-wider text-cyan-100">
              GAURAV
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <ProfileStat label="Favorite Formats" value="Movies • Series • Anime" />
              <ProfileStat label="Favorite Experience" value="Story + Characters + Emotion" />
              <ProfileStat label="Watching Style" value="Depends on the mood." />
            </div>
            <blockquote className="mt-8 border-l-2 border-cyan-500/40 pl-5 text-base italic leading-8 text-white/50">
              Sometimes I watch for the story. Sometimes I stay because of the characters.
            </blockquote>
          </section>

          {/* Philosophy */}
          <section
            data-section="philosophy"
            className="relative mx-5 mb-24 px-2 py-16 sm:mx-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/30">
              My Watching Philosophy
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-light leading-tight sm:text-4xl">
              I don&apos;t only watch for
              <span className="font-semibold"> entertainment.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
              I enjoy strong characters, emotional storytelling, world building,
              unexpected stories, character development, nostalgia and meaningful endings.
              The best films and shows leave something behind — a feeling, a thought,
              a character you carry with you.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Strong characters",
                "Emotional storytelling",
                "World building",
                "Unexpected stories",
                "Character development",
                "Nostalgia",
                "Meaningful endings",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-xs text-white/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Closing */}
          <section
            id="closing"
            data-section="closing"
            className="relative px-5 pb-32 pt-16 text-center sm:px-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/30">
              What&apos;s Next?
            </p>
            <h2 className="mt-6 text-3xl font-light sm:text-4xl">
              There are still countless worlds
              <span className="block font-semibold">left to explore.</span>
            </h2>

            <div className="mt-10 inline-flex items-center gap-3 text-sm font-semibold tracking-widest text-amber-400/80">
              <span className="film-reel-spin inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10">
                <FaPlay className="ml-0.5 text-xs" />
              </span>
              NEXT WATCH →
            </div>

            <Link
              to="/about"
              className="mt-16 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/55 transition hover:border-white/20 hover:text-white"
            >
              <FaArrowLeft className="text-xs" />
              Back
            </Link>
          </section>
        </div>
      </div>

      {modalMovie && (
        <MovieModal movie={modalMovie} onClose={closeModal} />
      )}
    </main>
  );
};

/* ─── Cinematic Preview (fixed background) ─── */

const CinematicPreview = ({
  movie,
  previewKey,
  theme,
  heroMode,
  showMovie,
  outroMode,
  outroWallpaper,
}) => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
    <div className="absolute inset-0">
      {(heroMode || showMovie || outroMode) && (
        <img
          key={outroMode ? "suzume-outro" : previewKey}
          src={
            outroMode
              ? outroWallpaper
              : heroMode
                ? heroPreview
                : movie.preview ?? movie.poster
          }
          alt=""
          className={`preview-image-enter h-full w-full scale-105 object-cover transition-all duration-1000 ${
            outroMode
              ? "opacity-[0.18] blur-md brightness-75"
              : "opacity-40 blur-sm"
          }`}
        />
      )}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#030308] transition duration-1000 ${
          outroMode
            ? "via-[#030308]/92 to-[#030308]/75"
            : showMovie
              ? "via-[#030308]/85 to-[#030308]/40 lg:via-[#030308]/75 lg:to-transparent"
              : "via-[#030308]/85 to-[#030308]"
        }`}
      />
      <div
        className="absolute inset-0 transition duration-1000"
        style={{
          background: outroMode
            ? "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(45,212,191,0.08), transparent 70%)"
            : `radial-gradient(ellipse 70% 50% at 80% 30%, ${theme.glow}, transparent 65%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-[#030308]/60" />
      <div
        className="absolute inset-0"
        style={{
          background: outroMode
            ? "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.82) 100%)"
            : "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </div>

    <div className="film-grain" />

    {(heroMode || showMovie) &&
      !outroMode &&
      [...Array(6)].map((_, i) => (
        <span
          key={i}
          className="cinematic-particle absolute h-1 w-1 rounded-full bg-white/30"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

    {/* Preview info panel — desktop right side */}
    {showMovie && !outroMode && (
      <div
        key={`info-${previewKey}`}
        className="preview-image-enter absolute right-[max(2rem,4vw)] top-1/2 hidden w-[min(32vw,420px)] -translate-y-1/2 lg:block"
      >
        <span
          className="text-[10px] font-bold uppercase tracking-[0.35em]"
          style={{ color: movie.accent ?? theme.accent }}
        >
          {movie.category ?? movie.badge}
        </span>
        <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight xl:text-4xl">
          {movie.title}
        </h2>
        <p className="mt-2 text-sm text-white/40">
          {movie.year && `${movie.year} • `}
          {movie.genre}
        </p>
        <p className="mt-4 text-sm leading-7 text-white/55">
          {movie.description}
        </p>
        <p
          className="mt-4 text-xs font-semibold uppercase tracking-widest"
          style={{ color: movie.accent ?? theme.accent }}
        >
          {movie.feeling ?? movie.whyILove ?? movie.whyRecommend ?? movie.whyILike}
        </p>
      </div>
    )}
  </div>
);

/* ─── Scroll Progress ─── */

const ScrollProgress = ({ activeSection }) => {
  const activeNum =
    SECTIONS.find((s) => s.id === activeSection)?.number ??
    (activeSection === "hero" ? "00" : activeSection === "closing" ? "07" : "—");

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
      <div className="h-32 w-px bg-white/10">
        <div
          className="w-full bg-gradient-to-b from-amber-400 to-orange-500 transition-all duration-500"
          style={{
            height: `${((parseInt(activeNum, 10) || 0) / 6) * 100}%`,
          }}
        />
      </div>
      {SECTIONS.map((s) => (
        <span
          key={s.id}
          className={`font-mono text-[10px] font-bold transition duration-300 ${
            activeSection === s.id ? "text-amber-400" : "text-white/20"
          }`}
        >
          {s.number}
        </span>
      ))}
    </div>
  );
};

/* ─── Section Header ─── */

const SectionHeader = ({ number, label, title, subtitle }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/35">
      {number} / {label}
    </p>
    <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-tight tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
        {subtitle}
      </p>
    )}
  </div>
);

/* ─── Movie Section ─── */

const MovieSection = ({
  id,
  sectionId,
  number,
  label,
  title,
  subtitle,
  movies,
  cardVariant = "horizontal",
  theme,
  onCardClick,
  onCardHover,
  onCardHoverEnd,
  onCarouselPreview,
}) => {
  const isHindi = theme === "hindi";
  const isAnime = theme === "anime";

  return (
    <section
      id={id}
      data-section={sectionId}
      className={`relative px-5 py-24 sm:px-8 ${
        isHindi ? "border-t border-red-900/20" : ""
      } ${isAnime ? "border-t border-purple-900/30" : ""}`}
    >
      {isHindi && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-orange-950/10" />
      )}
      {isAnime && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-950/15 via-blue-950/10 to-transparent" />
      )}

      <SectionHeader number={number} label={label} title={title} subtitle={subtitle} />

      {cardVariant === "horizontal" ? (
        <HorizontalMovieCarousel
          movies={movies}
          sectionId={sectionId}
          isHindi={isHindi}
          isAnime={isAnime}
          onCardClick={onCardClick}
          onCardHover={onCardHover}
          onCardHoverEnd={onCardHoverEnd}
          onCarouselPreview={onCarouselPreview}
        />
      ) : (
        <div
          className={`mt-10 ${
            cardVariant === "wide"
              ? "grid gap-4 sm:grid-cols-2"
              : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              sectionId={sectionId}
              variant={cardVariant}
              isAnime={isAnime}
              isHindi={isHindi}
              onClick={() => onCardClick(movie)}
              onHover={() => onCardHover?.(movie)}
              onHoverEnd={onCardHoverEnd}
            />
          ))}
        </div>
      )}
    </section>
  );
};

/* ─── Horizontal Carousel ─── */

const HorizontalMovieCarousel = ({
  movies,
  sectionId,
  isHindi,
  isAnime,
  onCardClick,
  onCardHover,
  onCardHoverEnd,
  onCarouselPreview,
}) => {
  const trackRef = useRef(null);
  const scrollRafRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const syncCenterPreview = useCallback(() => {
    const id = getCenterCarouselCardId(trackRef.current);
    if (id) onCarouselPreview?.(id);
  }, [onCarouselPreview]);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 4
    );
  }, []);

  const handleTrackScroll = useCallback(() => {
    updateScrollState();
    if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    scrollRafRef.current = requestAnimationFrame(syncCenterPreview);
  }, [updateScrollState, syncCenterPreview]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    updateScrollState();
    requestAnimationFrame(syncCenterPreview);

    track.addEventListener("scroll", handleTrackScroll, { passive: true });
    window.addEventListener("resize", handleTrackScroll);

    return () => {
      track.removeEventListener("scroll", handleTrackScroll);
      window.removeEventListener("resize", handleTrackScroll);
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    };
  }, [handleTrackScroll, updateScrollState, syncCenterPreview, movies.length]);

  const scrollByDirection = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const currentId = getCenterCarouselCardId(track);
    const currentIndex = movies.findIndex((m) => m.id === currentId);
    const baseIndex = currentIndex >= 0 ? currentIndex : 0;
    const nextIndex = Math.max(
      0,
      Math.min(movies.length - 1, baseIndex + direction)
    );

    if (movies[nextIndex]) {
      onCarouselPreview?.(movies[nextIndex].id);
    }

    const targetCard = track.querySelectorAll("[data-carousel-card]")[nextIndex];
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      return;
    }

    const firstCard = track.querySelector("[data-carousel-card]");
    const cardWidth =
      firstCard?.getBoundingClientRect().width ?? track.clientWidth * 0.8;

    track.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  const accentClass = isHindi
    ? "border-red-500/30 bg-red-950/40 text-red-200 hover:border-red-400/50 hover:bg-red-900/50 disabled:border-white/5 disabled:bg-black/20 disabled:text-white/20"
    : "border-amber-500/30 bg-amber-950/40 text-amber-200 hover:border-amber-400/50 hover:bg-amber-900/50 disabled:border-white/5 disabled:bg-black/20 disabled:text-white/20";

  const fadeClass = isHindi
    ? "from-[#030308] via-[#030308]/80"
    : "from-[#030308] via-[#030308]/80";

  return (
    <div className="relative mt-10">
      <div
        className={`pointer-events-none absolute left-0 top-0 z-10 h-[calc(100%-0.5rem)] w-8 bg-gradient-to-r ${fadeClass} to-transparent sm:w-14`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 z-10 h-[calc(100%-0.5rem)] w-8 bg-gradient-to-l ${fadeClass} to-transparent sm:w-14`}
      />

      <button
        type="button"
        aria-label="Scroll left"
        disabled={!canScrollLeft}
        onClick={() => scrollByDirection(-1)}
        className={`absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition duration-300 sm:h-11 sm:w-11 ${accentClass}`}
      >
        <FaChevronLeft className="text-sm" />
      </button>

      <button
        type="button"
        aria-label="Scroll right"
        disabled={!canScrollRight}
        onClick={() => scrollByDirection(1)}
        className={`absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition duration-300 sm:h-11 sm:w-11 ${accentClass}`}
      >
        <FaChevronRight className="text-sm" />
      </button>

      <div
        ref={trackRef}
        className="movie-carousel-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-11 pb-2 scroll-smooth sm:px-14"
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            sectionId={sectionId}
            variant="horizontal"
            isAnime={isAnime}
            isHindi={isHindi}
            carousel
            onClick={() => onCardClick(movie)}
            onHover={() => onCardHover?.(movie)}
            onHoverEnd={onCardHoverEnd}
          />
        ))}
      </div>
    </div>
  );
};

/* ─── Movie Card ─── */

const MovieCard = ({
  movie,
  sectionId,
  variant,
  isAnime,
  isHindi,
  carousel = false,
  onClick,
  onHover,
  onHoverEnd,
}) => {
  const widthClass =
    variant === "horizontal"
      ? "w-[min(280px,75vw)] shrink-0 snap-start"
      : variant === "wide"
        ? "col-span-1"
        : "";

  const aspectClass =
    variant === "wide" ? "aspect-[21/9]" : "aspect-[2/3]";

  return (
    <button
      type="button"
      data-preview-id={movie.id}
      data-preview-section={sectionId}
      data-carousel-card={carousel ? "" : undefined}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      onFocus={onHover}
      onBlur={onHoverEnd}
      className={`group relative overflow-hidden rounded-xl border text-left transition duration-500 hover:scale-[1.02] hover:shadow-2xl ${widthClass} ${
        isAnime
          ? "anime-glitch border-purple-500/20 hover:border-purple-400/40 hover:shadow-purple-500/10"
          : isHindi
            ? "border-red-900/30 hover:border-red-500/40 hover:shadow-red-500/10"
            : "border-white/10 hover:border-white/25"
      }`}
    >
      <div className={`relative ${aspectClass} overflow-hidden`}>
        <img
          src={movie.poster}
          alt={movie.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {movie.badge && (
          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white/70 backdrop-blur-sm">
            {movie.badge}
          </span>
        )}

        {variant === "recommend" && movie.year && (
          <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold text-white/70 backdrop-blur-sm">
            {movie.year}
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: movie.accent }}
          >
            {movie.genre?.split("•")[0]?.trim()}
          </p>
          <h3 className="mt-1 text-base font-bold leading-tight sm:text-lg">
            {movie.title}
          </h3>
          {variant !== "recommend" && (
            <p className="mt-1 line-clamp-2 text-xs text-white/45">
              {movie.description}
            </p>
          )}
          {variant === "recommend" && movie.whyRecommend && (
            <p className="mt-2 line-clamp-2 text-xs text-white/45">
              {movie.whyRecommend}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};

/* ─── Favorite Panel ─── */

const FavoritePanel = ({ favorite, onSelect, onOpen, onHover, onHoverEnd }) => {
  if (favorite.isMinimal) {
    return (
      <article
        data-preview-id={favorite.id}
        data-preview-section="favorites"
        onMouseEnter={onHover}
        onMouseLeave={onHoverEnd}
        onFocus={onHover}
        onBlur={onHoverEnd}
        tabIndex={0}
        className="relative overflow-hidden rounded-xl border border-stone-700/30 bg-stone-950/40 p-8 sm:p-10 outline-none transition duration-300 focus:border-stone-500/40"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/50 to-black/80" />
        <div className="relative">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-stone-500">
            {favorite.category}
          </p>
          <h3 className="mt-3 text-2xl font-light text-stone-200 sm:text-3xl">
            {favorite.title}
          </h3>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-stone-400/90">
            {favorite.featuredText}
          </p>
          <button
            type="button"
            onClick={() => {
              onSelect();
              onOpen();
            }}
            className="mt-6 text-xs font-semibold uppercase tracking-widest text-stone-500 transition hover:text-stone-300"
          >
            Read more →
          </button>
        </div>
      </article>
    );
  }

  return (
    <article
      data-preview-id={favorite.id}
      data-preview-section="favorites"
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      onFocus={onHover}
      onBlur={onHoverEnd}
      tabIndex={0}
      className="group grid overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] outline-none transition duration-300 hover:border-white/15 focus:border-white/15 sm:grid-cols-[200px_1fr]"
    >
      <div className="relative aspect-[2/3] sm:aspect-auto sm:min-h-[280px]">
        <img
          src={favorite.poster}
          alt={favorite.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 sm:bg-gradient-to-t sm:from-black/80" />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <FaStar className="text-amber-400/80" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400/70">
            All-Time Favorite
          </span>
        </div>
        <h3 className="mt-2 text-xl font-bold sm:text-2xl">{favorite.title}</h3>
        <p className="mt-1 text-sm text-white/40">{favorite.genre}</p>
        <p className="mt-4 text-sm leading-7 text-white/50">{favorite.featuredText}</p>
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={onSelect}
            className="text-xs font-semibold uppercase tracking-widest text-white/40 transition hover:text-white/70"
          >
            Highlight →
          </button>
          <button
            type="button"
            onClick={onOpen}
            className="text-xs font-semibold uppercase tracking-widest text-amber-400/70 transition hover:text-amber-300"
          >
            Details →
          </button>
        </div>
      </div>
    </article>
  );
};

/* ─── Info Pill ─── */

const InfoPill = ({ label, value }) => (
  <div className="rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3">
    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
      {label}
    </p>
    <p className="mt-1 text-sm text-white/60">{value}</p>
  </div>
);

const ProfileStat = ({ label, value }) => (
  <div>
    <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500/60">
      {label}
    </p>
    <p className="mt-2 text-sm font-medium text-white/70">{value}</p>
  </div>
);

/* ─── Modal ─── */

const MovieModal = ({ movie, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={movie.title}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0a0a12] shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 sm:h-72">
          <img
            src={movie.preview ?? movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/40 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/60 backdrop-blur-md transition hover:text-white"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <FaFilm className="text-white/30" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
              {movie.category ?? "Cinematic"}
            </span>
          </div>

          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{movie.title}</h3>
          <p className="mt-2 text-sm text-white/40">
            {movie.year && `${movie.year} • `}
            {movie.genre}
          </p>

          <p className="mt-5 leading-7 text-white/55">{movie.description}</p>

          {(movie.whyILike || movie.whyILove || movie.whyRecommend) && (
            <div className="mt-6 rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Why it matters to me
              </p>
              <p className="mt-2 text-sm leading-7 text-white/50">
                {movie.whyILove ?? movie.whyILike ?? movie.whyRecommend}
              </p>
            </div>
          )}

          {(movie.emotionalImpact || movie.feeling) && (
            <div className="mt-4 rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                Emotional impact
              </p>
              <p className="mt-2 text-sm text-white/50">
                {movie.emotionalImpact ?? movie.feeling}
              </p>
            </div>
          )}

          {movie.personalExperience && (
            <p className="mt-4 text-sm italic leading-7 text-white/40">
              {movie.personalExperience}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieAnime;
