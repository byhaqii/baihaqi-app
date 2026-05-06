export default function Home() {
  const profile = {
    name: "Muhammad Rizal Al Baihaqi",
    studentId: "2341720225",
  };

  const interests = ["UI/UX", "Flutter mobile developer"];

  return (
    <main className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-6 py-10 sm:px-10 lg:px-16">
      <section className="w-full max-w-3xl rounded-[2rem] border border-white/60 bg-white/78 p-8 shadow-[0_30px_100px_rgba(18,24,40,0.14)] backdrop-blur-xl sm:p-10">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b54425]">
              Dashboard
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Student Profile
            </h1>
          </div>
          <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white">
            Active
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-3xl bg-slate-950 p-6 text-white shadow-lg shadow-slate-950/10">
            <p className="text-sm uppercase tracking-[0.24em] text-white/60">
              Name
            </p>
            <p className="mt-3 text-2xl font-semibold leading-tight">
              {profile.name}
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              NIM
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">
              {profile.studentId}
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Tech Interests
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}
