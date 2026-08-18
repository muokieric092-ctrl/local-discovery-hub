import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — Mukalwa Junior Academy" },
      {
        name: "description",
        content:
          "Campus news, announcements and photo gallery from Mukalwa Junior Academy in Tala — term events, achievements and community stories.",
      },
      { property: "og:title", content: "News & Updates — Mukalwa Junior Academy" },
      {
        property: "og:description",
        content:
          "Campus news, announcements and photo gallery from Mukalwa Junior Academy in Tala.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: NewsPage,
});

const NEWS = [
  {
    date: "12 Aug 2026",
    tag: "Achievement",
    title: "Drama club wins the Machakos regional arts festival",
    body: "Our pupils took first place with a Kamba folk-tale adaptation — advancing to the county finals in September.",
  },
  {
    date: "28 Jul 2026",
    tag: "Announcement",
    title: "Term 3 opening and parent-teacher meeting dates",
    body: "School reopens 2 September. PTM meetings run 9:00 am – 12:00 pm on the first Friday of term.",
  },
  {
    date: "15 Jul 2026",
    tag: "Community",
    title: "School shamba harvest feeds 60 families",
    body: "Maize and beans grown by the Upper Primary agriculture class were shared with neighbouring families.",
  },
  {
    date: "30 Jun 2026",
    tag: "Sports",
    title: "Athletics team qualifies for the zonal championships",
    body: "Twelve pupils will represent Mukalwa in the 100m, 400m, and long jump at the zonal meet in Tala.",
  },
] as const;

const GALLERY = [
  { caption: "Morning assembly", tint: "bg-savanna/30" },
  { caption: "Class in session", tint: "bg-acacia-light/30" },
  { caption: "School shamba", tint: "bg-acacia-deep/20" },
  { caption: "Sports day", tint: "bg-savanna/40" },
  { caption: "Music & drumming", tint: "bg-acacia-light/40" },
  { caption: "Graduation day", tint: "bg-acacia-deep/30" },
] as const;

function NewsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-savanna">
            News & Updates
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-acacia-deep sm:text-5xl lg:text-6xl">
            Life on campus, in the community.
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-clay/80">
            Announcements, achievements, and snapshots from the schoolyard. For
            termly newsletters, join our mailing list at the bottom of the page.
          </p>
        </div>
      </section>

      {/* News list */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {NEWS.map((n) => (
            <article
              key={n.title}
              className="flex flex-col gap-3 rounded-2xl bg-white p-8 ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-acacia-light/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-acacia-deep">
                  {n.tag}
                </span>
                <span className="text-xs text-clay/50">{n.date}</span>
              </div>
              <h2 className="font-serif text-xl font-medium text-acacia-deep">
                {n.title}
              </h2>
              <p className="text-sm leading-relaxed text-clay/70">{n.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-acacia-deep py-20 text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-balance font-serif text-3xl font-medium sm:text-4xl">
              Campus gallery
            </h2>
            <p className="max-w-[52ch] text-cream/70">
              A glimpse of everyday life at Mukalwa — assembly, lessons, the
              shamba, and the play that holds it all together.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY.map((g) => (
              <figure
                key={g.caption}
                className={`group relative overflow-hidden rounded-xl ${g.tint} ring-1 ring-cream/10`}
              >
                <div className="aspect-[4/3] w-full" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-sm font-medium text-cream">
                    {g.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-xs text-cream/40">
            Full photo sets are shared in the termly newsletter — join below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep">
          Want to visit or enrol?
        </h2>
        <p className="mt-4 text-clay/70">
          See the admissions process or schedule a campus tour with our office.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/admissions"
            className="rounded-full bg-acacia-deep px-8 py-3 text-sm font-semibold text-cream"
          >
            Admissions
          </Link>
          <Link
            to="/contact"
            className="rounded-full px-8 py-3 text-sm font-medium text-acacia-deep ring-1 ring-black/10 hover:bg-black/5"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
