import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="container-main relative py-28 sm:py-40">
        <p className="eyebrow">Hata 404</p>
        <h1 className="h1 mt-4 max-w-2xl">Aradığınız sayfa bulunamadı.</h1>
        <p className="lead mt-5">Adres değişmiş ya da yanlış yazılmış olabilir. Ana sayfaya dönüp buradan devam edebilirsiniz.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">Ana sayfaya dön</Link>
          <Link to="/iletisim" className="btn-secondary">İletişime geç</Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
