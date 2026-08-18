import { createFileRoute, Link } from "@tanstack/react-router";
import campusHero from "@/assets/campus-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mukalwa Junior Academy" },
      {
        name: "description",
        content:
          "Mukalwa Junior Academy is a primary school in Tala founded on the belief that every child deserves a quality foundation honoring their heritage while preparing them for a global future.",
      },
      { property: "og:title", content: "About Us — Mukalwa Junior Academy" },
      {
        property: "og:description",
        content:
          "A community-rooted primary school in Tala, Machakos County, serving the next generation of Kenyan leaders.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Excellence",
    body: "We hold high academic standards and celebrate effort as much as achievement, on the chalkboard and the sports field alike.",
  },
  {
    title: "Community",
    body: "We are anchored in Tala. Parents, teachers, and elders shape the school together — an extension of the village that raises the child.",
  },
  {
    title: "Heritage",
    body: "Kamba language, music, and history are woven through our lessons so our children know who they are before they meet the wider world.",
  },
  {
    title: "Stewardship",
    body: "Our shamba, our water, our trees — we teach children to care for the land that feeds them, not just to live on it.",
  },
] as const;

const STATS = [
  { value: "1998", label: "Established" },
  { value: "480+", label: "Pupils enrolled" },
  { value: "24", label: "Teachers & staff" },
  { value: "100%", label: "KCPE transition rate" },
] as const;

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-savanna">
            About the School
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-acacia-deep sm:text-5xl lg:text-6xl">
            A school rooted in Tala, growing toward the world.
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-clay/80">
            Mukalwa Junior Academy was founded in 1998 by a group of parents and
            teachers who believed the children of Tala deserved a primary
            education grounded in this community — its soil, its stories, its
            hopes — without falling behind the national standard.
          </p>
        </div>
      </section>

      <section className="bg-acacia-deep py-20 text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-12">
          <div className="order-2 lg:order-1">
            <h2 className="text-balance font-serif text-3xl font-medium sm:text-4xl">
              Our mission
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-cream/80">
              To nurture confident, curious, and compassionate children who excel
              academically, respect their heritage, and carry the values of their
              community into whatever future they choose.
            </p>
            <p className="mt-4 max-w-[52ch] leading-relaxed text-cream/70">
              We follow the Competency Based Curriculum (CBC) from pre-primary
              through Junior School, blending it with the practical wisdom of our
              setting — agriculture on the school shamba, mentorship from local
              elders, and accountability to the parents we serve.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={campusHero}
              alt="Morning assembly at Mukalwa Junior Academy"
              loading="lazy"
              width={1920}
              height={1080}
              className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-cream/10"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white p-8 ring-1 ring-black/5"
            >
              <p className="font-serif text-4xl font-medium text-acacia-deep">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-clay/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep sm:text-4xl">
            What we stand for
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="flex gap-5 rounded-2xl bg-white p-8 ring-1 ring-black/5"
              >
                <span className="font-serif text-3xl text-savanna">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-medium text-acacia-deep">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-clay/70">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-12">
        <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep sm:text-4xl">
          Come and see for yourself
        </h2>
        <p className="mx-auto mt-4 max-w-[48ch] text-clay/70">
          We welcome families to tour the campus, meet the teachers, and ask
          anything before enrolling.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-acacia-deep px-8 py-3 text-sm font-semibold text-cream"
          >
            Schedule a visit
          </Link>
          <Link
            to="/admissions"
            className="rounded-full px-8 py-3 text-sm font-medium text-acacia-deep ring-1 ring-black/10 hover:bg-black/5"
          >
            Admissions process
          </Link>
        </div>
      </section>
    </>
  );
}
