import { createFileRoute, Link } from "@tanstack/react-router";
import campusHeroAsset from "@/assets/campus-classrooms.jpg.asset.json";
import programLiteracy from "@/assets/program-literacy.jpg";
import programAgriculture from "@/assets/program-agriculture.jpg";
import programHeritage from "@/assets/program-heritage.jpg";
import mapTala from "@/assets/map-tala.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Mukalwa Junior Academy — Primary School in Tala, Kenya",
      },
      {
        name: "description",
        content:
          "A grounded primary education in Tala that balances academic excellence with community character. CBC curriculum for the next generation of Kenyan leaders.",
      },
      {
        property: "og:title",
        content: "Mukalwa Junior Academy — Primary School in Tala, Kenya",
      },
      {
        property: "og:description",
        content:
          "A grounded primary education in Tala balancing academic excellence with community character.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PROGRAMS = [
  {
    img: programLiteracy,
    tag: "Lower Primary",
    title: "Early Literacy",
    body: "Building strong reading and numeracy skills through play-based discovery.",
  },
  {
    img: programAgriculture,
    tag: "Life Sciences",
    title: "Applied Agriculture",
    body: "Understanding our land through hands-on learning in the school shamba.",
  },
  {
    img: programHeritage,
    tag: "Arts & Culture",
    title: "Heritage Studies",
    body: "Preserving local traditions through music, storytelling, and regional history.",
  },
] as const;

const HOURS: { day: string; time: string; closed?: boolean }[] = [
  { day: "Monday", time: "8:00 am – 4:30 pm" },
  { day: "Tuesday", time: "8:00 am – 4:30 pm" },
  { day: "Wednesday", time: "8:00 am – 4:30 pm" },
  { day: "Thursday", time: "8:00 am – 4:30 pm" },
  { day: "Friday", time: "8:00 am – 4:30 pm" },
  { day: "Saturday", time: "Closed", closed: true },
  { day: "Sunday", time: "Closed", closed: true },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-balance font-serif text-4xl font-medium leading-tight text-acacia-deep sm:text-5xl lg:text-7xl lg:leading-none">
              Where young minds grow deep roots in Tala soil.
            </h1>
            <p className="max-w-[56ch] text-lg leading-relaxed text-clay/80 lg:max-w-[48ch]">
              We provide a grounded primary education that balances academic
              excellence with community character. Our schoolyard is a living
              classroom for the next generation of leaders.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-savanna px-8 py-3 text-sm font-semibold text-acacia-deep ring-1 ring-savanna transition-transform hover:-translate-y-px"
            >
              Apply for Enrollment
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-transparent px-8 py-3 text-sm font-medium text-acacia-deep ring-1 ring-black/10 transition-colors hover:bg-black/5"
            >
              Schedule a Visit
            </Link>
          </div>

          <img
            src={campusHeroAsset.url}
            alt="Classroom block at Mukalwa Junior Academy in Tala, with a covered veranda and garden hedges"
            width={1080}
            height={1440}
            className="mt-8 max-h-[560px] w-full rounded-xl object-cover object-center ring-1 ring-black/5"
          />
        </div>
      </section>

      {/* Programs */}
      <section className="bg-acacia-deep py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 flex flex-col gap-4">
            <h2 className="text-balance font-serif text-3xl font-medium text-cream sm:text-4xl">
              Academic Foundations
            </h2>
            <p className="max-w-[56ch] text-cream/70 lg:max-w-[48ch]">
              Our curriculum is designed to foster curiosity, discipline, and a
              love for our local heritage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PROGRAMS.map((p) => (
              <div
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-cream/5 p-1 ring-1 ring-cream/10"
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
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-savanna hover:underline"
            >
              Explore all programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Visit / Facts */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <div className="flex flex-col gap-8">
            <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep sm:text-4xl">
              Visit Our Campus
            </h2>
            <p className="max-w-[56ch] text-lg text-clay/70">
              Located just outside Tala town center, Mukalwa Junior Academy offers
              a serene environment for focused learning away from the noise of the
              main road.
            </p>
            <img
              src={mapTala}
              alt="Map view of the Tala town area in Machakos County, Kenya"
              loading="lazy"
              width={800}
              height={512}
              className="w-full rounded-xl object-cover ring-1 ring-black/5"
            />
          </div>

          <aside className="relative">
            <div className="sticky top-28 rounded-3xl bg-white p-8 ring-1 ring-black/5">
              <h3 className="font-serif text-xl font-medium text-acacia-deep">
                Quick Information
              </h3>
              <dl className="mt-6 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-acacia-light">
                    School Hours
                  </dt>
                  <dd className="text-sm text-clay">
                    <span className="font-medium">Mon – Fri:</span> 8:00 am – 4:30 pm
                  </dd>
                  <dd className="text-sm text-clay">Sat: Closed (Clubs by request)</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-acacia-light">
                    Location
                  </dt>
                  <dd className="text-sm text-clay">Off Machakos–Kangundo Rd</dd>
                  <dd className="text-sm text-clay">Tala, Matungulu District</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-acacia-light">
                    Contact
                  </dt>
                  <dd className="text-sm text-clay">+254 700 000 000</dd>
                  <dd className="text-sm text-clay">admin@mukalwa.edu.ke</dd>
                </div>
              </dl>
              <div className="mt-6 border-t border-black/5 pt-6">
                <Link
                  to="/admissions"
                  className="block w-full rounded-full bg-acacia-deep py-3 text-center text-sm font-semibold text-cream"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Hours table */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep sm:text-4xl">
                Opening Hours
              </h2>
              <p className="mt-4 max-w-[48ch] text-clay/70">
                Our office is open to parents and visitors during the hours below.
                Pupils are expected on campus by 7:30 am for morning assembly.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-acacia-light/10 px-4 py-2 text-sm font-medium text-acacia-deep">
                <span className="size-2 rounded-full bg-acacia-light" />
                Open now · Tuesday
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
              <ul className="divide-y divide-black/5">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <span className="text-sm font-medium text-clay">{h.day}</span>
                    <span
                      className={`text-sm ${h.closed ? "text-clay/40" : "font-semibold text-acacia-deep"}`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
