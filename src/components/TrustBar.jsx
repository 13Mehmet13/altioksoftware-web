import { trustItems } from '../data/homeData'

function TrustBar() {
  return (
    <section className="pb-4">
      <div className="container-main">
        <div className="grid gap-3 rounded-2xl border border-slate-300 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <p key={item} className="text-center text-base font-semibold text-slate-800">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
