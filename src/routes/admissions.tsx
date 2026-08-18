import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Mukalwa Junior Academy" },
      {
        name: "description",
        content:
          "Admissions process at Mukalwa Junior Academy in Tala: enquiry, interview, registration and fees. Download the enrollment forms to apply.",
      },
      { property: "og:title", content: "Admissions — Mukalwa Junior Academy" },
      {
        property: "og:description",
        content:
          "Enrollment steps, requirements and fees for joining Mukalwa Junior Academy in Tala.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AdmissionsPage,
});

const STEPS = [
  {
    n: "01",
    title: "Enquiry",
    body: "Visit our office in Tala or call us to check available slots for your child's grade.",
  },
  {
    n: "02",
    title: "Interview",
    body: "A friendly, low-pressure assessment helps us place the pupil in the right class and stage.",
  },
  {
    n: "03",
    title: "Registration",
    body: "Submit the required documents and pay the registration fee to secure a place for the term.",
  },
  {
    n: "04",
    title: "Welcome",
    body: "Collect uniform, books and the term calendar. Your child joins the school family on day one.",
  },
] as const;

const REQUIREMENTS = [
  "Completed enrollment form (download below)",
  "Original birth certificate plus a photocopy",
  "Two recent passport-size photographs",
  "Previous report card (for transfers from Grade 1 upwards)",
  "Immunisation / health record from a clinic",
  "Parent or guardian national ID copy",
] as const;

const FEES = [
  { item: "Registration fee (one-time)", amount: "KSh 1,500" },
  { item: "Tuition — Pre-Primary (per term)", amount: "KSh 4,500" },
  { item: "Tuition — Lower Primary (per term)", amount: "KSh 5,500" },
  { item: "Tuition — Upper Primary (per term)", amount: "KSh 6,500" },
  { item: "Tuition — Junior School (per term)", amount: "KSh 8,500" },
  { item: "Uniform (full set)", amount: "KSh 2,800" },
] as const;

function AdmissionsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-savanna">
            Admissions
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-acacia-deep sm:text-5xl lg:text-6xl">
            Joining the Mukalwa family
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-clay/80">
            Enrolling your child is straightforward. Follow the four steps
            below, gather the documents, and bring everything to our office in
            Tala — or call ahead and we'll guide you through it.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-acacia-deep py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl bg-cream/5 p-8 ring-1 ring-cream/10"
              >
                <span className="font-serif text-4xl text-savanna/40">{s.n}</span>
                <h3 className="mt-4 font-serif text-xl font-medium text-cream">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-cream/60">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + fees */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep">
              What to bring
            </h2>
            <p className="mt-4 text-clay/70">
              Bring these documents when you come to register. Copies are fine —
              we'll verify originals at the office.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {REQUIREMENTS.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-black/5"
                >
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-acacia-light/15 text-xs font-bold text-acacia-deep">
                    ✓
                  </span>
                  <span className="text-sm text-clay">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep">
              Fee structure
            </h2>
            <p className="mt-4 text-clay/70">
              Transparent, termly fees. Support is available for families in
              genuine need — speak with the head teacher in confidence.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
              <ul className="divide-y divide-black/5">
                {FEES.map((f) => (
                  <li
                    key={f.item}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <span className="text-sm text-clay">{f.item}</span>
                    <span className="text-sm font-semibold text-acacia-deep">
                      {f.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep sm:text-4xl">
            Download the enrollment forms
          </h2>
          <p className="mt-4 text-clay/70">
            Print, fill in, and bring them with you — or pick up a printed copy
            at the school office.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 no-print">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-full bg-acacia-deep px-8 py-3 text-sm font-semibold text-cream"
            >
              Enrollment form (PDF)
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-acacia-deep ring-1 ring-black/10 hover:bg-black/5"
            >
              Request forms by phone
            </Link>
          </div>
          <p className="mt-6 text-xs text-clay/50">
            Tip: this page prints cleanly — use your browser's print option for a
            paper copy of the steps and fees.
          </p>
        </div>
      </section>
    </>
  );
}
