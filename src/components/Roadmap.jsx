function Roadmap() {
  return (
    <section id="roadmap" className="screen-block py-10 sm:py-14">
      <div className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-10">
          <h2 className="section-title">Yol Haritası</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="glass-panel rounded-xl p-5">
              <p className="text-sm font-semibold text-sky-700">2026</p>
              <ul className="mt-3 space-y-2 text-slate-800">
                <li>✓ AutoCare Platformu</li>
                <li>✓ Kurumsal Web Platformu</li>
              </ul>
            </div>
            <div className="glass-panel rounded-xl p-5">
              <p className="text-sm font-semibold text-sky-700">Yakında</p>
              <ul className="mt-3 space-y-2 text-slate-800">
                <li>• SanayiData</li>
                <li>• Parça Ağı</li>
                <li>• AI Servis Asistanı</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
