import { InfoCard } from "@/components/info-card";

const PROFILE = {
  name: "turuq",
  age: "3",
  email: "turuq@example.com",
  phone: "+20 123 456 7890",
  education: "B.Sc. in Computer Science, Example University",
};

export default function HomePage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <p className="tag-label">Home</p>
        <h1
          className="heading-accent mt-1 text-3xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Welcome back
        </h1>
        <p className="mt-2" style={{ color: "var(--ink-muted)" }}>
          A quick reference card, and a jumping-off point to the warehouse
          product list.
        </p>
      </header>

      <section
        aria-label="Profile details"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[
          { label: "Name", value: PROFILE.name },
          { label: "Age", value: PROFILE.age },
          { label: "Email Address", value: PROFILE.email },
          { label: "Phone Number", value: PROFILE.phone },
          { label: "University & Graduation", value: PROFILE.education },
        ].map((item, i) => (
          <div
            key={item.label}
            className="fade-in-up"
            style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}
          >
            <InfoCard label={item.label} value={item.value} />
          </div>
        ))}
      </section>
    </div>
  );
}
