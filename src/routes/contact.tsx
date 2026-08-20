import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import mapTala from "@/assets/map-tala.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Mukalwa Junior Academy" },
      {
        name: "description",
        content:
          "Contact Mukalwa Junior Academy in Tala, Machakos County. Find our address, phone, email, opening hours, and send us a message.",
      },
      {
        property: "og:title",
        content: "Contact & Location — Mukalwa Junior Academy",
      },
      {
        property: "og:description",
        content:
          "Address, phone, email and opening hours for Mukalwa Junior Academy in Tala.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

const HOURS: { day: string; time: string; closed?: boolean }[] = [
  { day: "Monday", time: "8:00 am – 4:30 pm" },
  { day: "Tuesday", time: "8:00 am – 4:30 pm" },
  { day: "Wednesday", time: "8:00 am – 4:30 pm" },
  { day: "Thursday", time: "8:00 am – 4:30 pm" },
  { day: "Friday", time: "8:00 am – 4:30 pm" },
  { day: "Saturday", time: "Closed", closed: true },
  { day: "Sunday", time: "Closed", closed: true },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-savanna">
            Contact & Location
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-acacia-deep sm:text-5xl lg:text-6xl">
            Come and find us in Tala.
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-clay/80">
            Our office is open Monday to Friday, 8:00 am to 4:30 pm. Call ahead
            for a visit, or send a message using the form below and we'll reply
            within two working days.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Contact details + hours */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5">
              <h2 className="font-serif text-xl font-medium text-acacia-deep">
                School office
              </h2>
              <dl className="mt-6 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-acacia-light">
                    Address
                  </dt>
                  <dd className="text-sm text-clay">
                    Off Machakos–Kangundo Road
                    <br />
                    Tala, Matungulu Division
                    <br />
                    Kangundo Constituency, Eastern Kenya
                  </dd>
                  <dd className="text-sm text-clay/60">Plus code: Q89C+X2 Tala</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-acacia-light">
                    Phone & Email
                  </dt>
                  <dd className="text-sm text-clay">
                    <a
                      href="tel:+254117218382"
                      className="underline-offset-2 hover:underline"
                    >
                      0117 218 382
                    </a>
                  </dd>
                  <dd className="text-sm text-clay">
                    <a
                      href="mailto:mukalwajunior@gmail.com"
                      className="underline-offset-2 hover:underline"
                    >
                      mukalwajunior@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-acacia-light">
                    Website
                  </dt>
                  <dd className="text-sm text-clay">
                    <a
                      href="https://education.go.ke"
                      target="_blank"
                      rel="noreferrer"
                      className="text-acacia-deep underline-offset-2 hover:underline"
                    >
                      education.go.ke
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
              <h2 className="px-6 pt-6 font-serif text-xl font-medium text-acacia-deep">
                Opening hours
              </h2>
              <ul className="mt-4 divide-y divide-black/5">
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
              <div className="border-t border-black/5 px-6 py-4">
                <span className="text-xs text-clay/50">
                  Suggest new hours — let us know if these don't work for you.
                </span>
              </div>
            </div>
          </div>

          {/* Map + form */}
          <div className="flex flex-col gap-8">
            <img
              src={mapTala}
              alt="Map view of the Tala town area in Machakos County, Kenya"
              loading="lazy"
              width={800}
              height={512}
              className="w-full rounded-2xl object-cover ring-1 ring-black/5"
            />

            <div className="rounded-2xl bg-white p-8 ring-1 ring-black/5">
              <h2 className="font-serif text-xl font-medium text-acacia-deep">
                Send a message
              </h2>
              {submitted ? (
                <div className="mt-6 rounded-xl bg-acacia-light/10 p-6 text-center">
                  <p className="font-medium text-acacia-deep">Asante sana!</p>
                  <p className="mt-1 text-sm text-clay/70">
                    Your message has been received. We'll reply within two working
                    days.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-6 flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div>
                    <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-acacia-light">
                      Full name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Mutua"
                      className="mt-1 w-full rounded-lg border border-black/10 bg-cream px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-acacia-light/30"
                    />
                  </div>
                  <div>
                    <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-acacia-light">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="+254 ..."
                      className="mt-1 w-full rounded-lg border border-black/10 bg-cream px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-acacia-light/30"
                    />
                  </div>
                  <div>
                    <label className="ml-1 text-[10px] font-bold uppercase tracking-wider text-acacia-light">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="mt-1 w-full resize-none rounded-lg border border-black/10 bg-cream px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-acacia-light/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-lg bg-savanna py-4 text-sm font-bold text-acacia-deep transition-colors hover:bg-acacia-deep hover:text-cream"
                  >
                    Send inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-balance font-serif text-3xl font-medium text-acacia-deep">
            Ready to enrol?
          </h2>
          <p className="mt-4 text-clay/70">
            See the admissions process and download the forms to get started.
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
