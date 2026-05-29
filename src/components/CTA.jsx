import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className="screen-block">
      <div className="container-main">
        <div className="deep-panel reveal rounded-3xl p-8 text-center shadow-glow sm:p-12">
          <h2 className="text-2xl font-semibold sm:text-4xl">Servisinizi dijitale taşımanın zamanı geldi.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
            AutoCare ile servis operasyonlarınızı modernleştirin, ekip verimliliğini artırın ve müşterilerinize
            daha profesyonel bir deneyim sunun.
          </p>
          <Link to="/iletisim" className="btn-primary mt-7 inline-block">
            Demo Talep Et
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
