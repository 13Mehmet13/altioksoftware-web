import { reasons, users } from '../data/siteData'

function Highlights() {
  return (
    <section className="screen-block flex items-center">
      <div className="container-main grid gap-8 lg:grid-cols-2">
        <div className="deep-panel reveal rounded-3xl p-7 sm:p-8">
          <h2 className="section-title text-2xl sm:text-3xl">Neden AutoCare?</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-700 sm:text-base">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accentSoft" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel reveal rounded-3xl p-7 sm:p-8">
          <h2 className="section-title text-2xl sm:text-3xl">Hedef Kullanıcılar</h2>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:text-base">
            {users.map((user) => (
              <li key={user} className="rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-sky-200/30">
                {user}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Highlights
