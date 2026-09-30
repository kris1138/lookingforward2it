import { useState, type SyntheticEvent } from 'react';

interface Film {
  id: string;
  label: string;
  title: string;
  description: string;
}

interface Props {
  films: Film[];
  listLabel: string;
  foot: string;
}

export default function FilmTheater({ films, listLabel, foot }: Props) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = films[Math.min(active, films.length - 1)] ?? { id: '', label: '', title: '', description: '' };
  const embedSrc = `https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0&modestbranding=1`;
  const activeThumb = `https://i.ytimg.com/vi/${current.id}/maxresdefault.jpg`;

  // A film with no maxresdefault.jpg doesn't fail cleanly: YouTube answers
  // with a 120x90 grey placeholder image instead of a 404, so the browser
  // reports a successful load and no error event ever fires. Decoded width
  // is the only reliable signal, so step down the sizes on load instead.
  function thumbLoaded(e: SyntheticEvent<HTMLImageElement>) {
    const el = e.currentTarget;
    if (!el || el.naturalWidth > 120) return;
    const next: Record<string, string> = { maxresdefault: 'hq720', hq720: 'mqdefault' };
    const m = /\/(maxresdefault|hq720)\.jpg$/.exec(el.src);
    if (m) el.src = el.src.replace(`${m[1]}.jpg`, `${next[m[1]]}.jpg`);
  }

  return (
    <div className="flex flex-wrap items-start gap-[clamp(28px,3.5vw,40px)]">
      <div className="min-w-0 flex-[1.55_1_420px]">
        <div className="relative aspect-video overflow-hidden rounded-soft bg-ombra-scura shadow-card">
          {playing ? (
            <iframe
              src={embedSrc}
              title="Looking Forward film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-none"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play"
              className="group absolute inset-0 block h-full w-full cursor-pointer border-none bg-none p-0 focus-visible:outline-hidden"
            >
              <img
                src={activeThumb}
                onLoad={thumbLoaded}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[400ms] ease-brand"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ombra-scura/55 via-ombra-scura/5 to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill bg-muro/92 transition-[transform,background-color] duration-brand ease-brand group-hover:scale-[1.07] group-hover:bg-terra group-focus-visible:scale-[1.07] group-focus-visible:bg-terra group-focus-visible:shadow-[0_0_0_9px_rgb(90_56_38/0.6)] group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-muro">
                <span className="ml-1.5 border-y-[13px] border-l-[20px] border-y-transparent border-l-ombra-scura" />
              </span>
            </button>
          )}
        </div>
        <div className="mt-5 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
          <div className="whitespace-nowrap font-body text-xs font-bold uppercase tracking-button text-terra">
            {current.label}
          </div>
          <h3 className="m-0 font-display text-[clamp(21px,2.6vw,26px)] font-semibold italic text-ombra-scura">
            {current.title}
          </h3>
        </div>
        {current.description && (
          <p className="mt-2.5 mb-0 max-w-[60ch] whitespace-pre-line font-body text-[15px] leading-[1.6] text-ombra">
            {current.description}
          </p>
        )}
      </div>

      <div className="min-w-0 flex-[0.9_1_280px]">
        <div className="mb-3.5 font-body text-xs font-bold uppercase tracking-label text-pietra">
          {listLabel}
        </div>
        <div className="grid max-h-[min(460px,70vh)] gap-1.5 overflow-y-auto pr-1">
          {films.map((film, i) => (
            <button
              key={film.id}
              onClick={() => {
                setActive(i);
                setPlaying(false);
              }}
              className={`grid cursor-pointer grid-cols-[clamp(84px,26vw,104px)_minmax(0,1fr)] items-center gap-3.5 rounded-soft border-none p-2.5 text-left font-body transition-[background-color,transform] duration-brand ease-brand hover:translate-x-0.5 hover:bg-muro-scuro focus-visible:outline-offset-[-2px] ${
                i === active ? 'bg-muro-scuro' : 'bg-transparent'
              }`}
            >
              <span className="block aspect-video overflow-hidden rounded-[5px] bg-muro-scuro">
                <img
                  src={`https://i.ytimg.com/vi/${film.id}/mqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="block h-full w-full object-cover"
                />
              </span>
              <span className="block min-w-0">
                <span
                  className={`mb-[3px] block font-body text-[11px] font-bold uppercase tracking-button ${
                    i === active ? 'text-terra' : 'text-pietra'
                  }`}
                >
                  {film.label}
                </span>
                <span className="block font-display text-lg font-semibold italic leading-[1.25] text-ombra-scura">
                  {film.title}
                </span>
              </span>
            </button>
          ))}
        </div>
        <p className="mt-4 font-body text-[13px] leading-[1.6] text-pietra">{foot}</p>
      </div>
    </div>
  );
}
