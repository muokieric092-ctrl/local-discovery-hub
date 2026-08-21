import { createFileRoute, Link } from "@tanstack/react-router";
import programLiteracy from "@/assets/program-literacy.jpg";
import programAgriculture from "@/assets/program-agriculture.jpg";
import programHeritage from "@/assets/program-heritage.jpg";
import educationalTripAsset from "@/assets/educational-trip.jpg.asset.json";

const educationalTrip = educationalTripAsset.url;

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Mukalwa Junior Academy" },
      {
        name: "description",
        content:
          "CBC-aligned programs from pre-primary to Junior School at Mukalwa Junior Academy: early literacy, applied agriculture, heritage studies, STEM, and life skills.",
      },
      { property: "og:title", content: "Programs — Mukalwa Junior Academy" },
      {
        property: "og:description",
        content:
          "CBC-aligned programs from pre-primary to Junior School in Tala, Kenya.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProgramsPage,
});

const PROGRAMS = [
  {
    img: programLiteracy,
    tag: "Pre-Primary & Lower Primary",
    title: "Early Literacy & Numeracy",
    body: "Play-based discovery builds strong reading, writing, and number sense. Small-group instruction means no child slips behind in those critical first years.",
    points: ["Phonics & guided reading", "Concrete math with local materials", "Kiswahili & English foundations"],
  },
  {
    img: programAgriculture,
    tag: "Applied Learning",
    title: "Agriculture & Environmental Science",
    body: "Our school shamba is a classroom. Children grow maize, beans, and vegetables, learning biology, weather, and responsibility by doing the work themselves.",
    points: ["Hands-on school garden", "Seasons, soils & water", "From seed to harvest"],
  },
  {
    img: programHeritage,
    tag: "Arts & Culture",
    title: "Heritage, Music & Storytelling",
    body: "Kamba traditions live in our daily rhythm — drumming, folk tales, and regional history — so children know where they come from before they meet the world.",
    points: ["Traditional music & dance", "Oral history & folklore", "Drama & public speaking"],
  },
] as const;

const STAGES = [
  {
    name: "Pre-Primary",
    ages: "Ages 4–6",
    desc: "PP1 and PP2 focus on social skills, language exposure, and learning through play — the foundation for everything that follows.",
  },
  {
    name: "Lower Primary",
    ages: "Grades 1–3",
    desc: "Literacy and numeracy become daily habits, alongside Kiswahili, environmental activities, and creative arts under the CBC.",
  },
  {
    name: "Upper Primary",
    ages: "Grades 4–6",
    desc: "Science, social studies, agriculture, and technology broaden horizons. Pupils take on leadership roles and community projects.",
  },
  {
    name: "Junior School",
    ages: "Grades 7–9",
    desc: "Pre-vocational pathways and deeper STEM, languages, and humanities prepare pupils for senior school and beyond.",
  },
] as const;

const RECREATION = [
  {
    icon: "🚐",
    title: "School Transport",
    body: "Safe pick-up and drop-off along designated routes within Tala and surrounding areas, supervised by trained staff.",
  },
  {
    icon: "🏊",
    title: "Swimming",
    body: "Structured swimming sessions build water confidence, fitness, and safety awareness under qualified instruction.",
  },
  {
    icon: "🧭",
    title: "Educational Trips",
    body: "Termly visits to farms, museums, and nature reserves bring classroom lessons to life across every stage.",
  },
  {
    icon: "🎉",
    title: "Fun Day",
    body: "A whole-school celebration of games, music, food, and family — the highlight of every term at Mukalwa.",
  },
] as const;

function ProgramsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-savanna">
            Our Programs
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-acacia-deep sm:text-5xl lg:text-6xl">
            A curriculum that grows with the child and the land.
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-clay/80">
            We follow the Competency Based Curriculum (CBC) from pre-primary
            through Junior School, shaped by the realities of Tala — practical,
            values-led, and genuinely useful.
          </p>
        </div>
      </section>

      {/* Program cards */}
      <section className="bg-acacia-deep py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className="flex flex-col overflow-hidden rounded-xl bg-cream/5 p-1 ring-1 ring-cream/10"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={600}
                  height={512}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
                <div className="px-5 py-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-savanna">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-medium text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/60">{p.body}</p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2 text-sm text-cream/70"
                      >
                        <span className="size-1.5 rounded-full bg-savanna" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep sm:text-4xl">
          Learning stages
        </h2>
        <p className="mt-4 max-w-[52ch] text-clay/70">
          Every stage builds on the last, with clear competencies the pupil must
          demonstrate — not just memorise.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {STAGES.map((s, i) => (
            <div
              key={s.name}
              className="flex gap-5 rounded-2xl bg-white p-8 ring-1 ring-black/5"
            >
              <span className="font-serif text-3xl text-savanna">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-serif text-xl font-medium text-acacia-deep">
                    {s.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-acacia-light">
                    {s.ages}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-clay/70">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transport & Recreation */}
      <section className="bg-acacia-deep py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 flex flex-col gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-savanna">
              Beyond the classroom
            </span>
            <h2 className="text-balance font-serif text-3xl font-medium text-cream sm:text-4xl">
              Transport & Recreation
            </h2>
            <p className="max-w-[56ch] text-cream/70 lg:max-w-[48ch]">
              Learning doesn't stop at the gate. We keep pupils safe on the
              road and give them room to play, explore, and celebrate together.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RECREATION.map((r) => (
              <div
                key={r.title}
                className="flex flex-col rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/10"
              >
                <span className="text-2xl">{r.icon}</span>
                <h3 className="mt-4 font-serif text-lg font-medium text-cream">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-cream/60">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep sm:text-4xl">
            Ready to enrol your child?
          </h2>
          <p className="mt-4 text-clay/70">
            Walk through the admissions process and download the forms to get
            started.
          </p>
          <Link
            to="/admissions"
            className="mt-8 inline-flex rounded-full bg-acacia-deep px-8 py-3 text-sm font-semibold text-cream"
          >
            Start admissions
          </Link>
        </div>
      </section>
    </>
  );
}
