import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitted(false)
    setError('')
    setSending(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append('_subject', 'Yeni Demo Talebi - Altıok Software')
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')

    try {
      const response = await fetch('https://formsubmit.co/ajax/mehmetaltiok.ma@gmail.com', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form gönderimi başarısız oldu.')
      }

      setSubmitted(true)
      form.reset()
    } catch (submitError) {
      setError('Gönderim sırasında bir sorun oluştu. Lütfen tekrar deneyin.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="iletisim" className="screen-block flex items-center">
      <div className="container-main">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="deep-panel reveal rounded-3xl p-7 sm:p-8">
            <h2 className="section-title text-2xl sm:text-3xl">İletişim</h2>
            <p className="mt-4 text-base leading-7 text-slate-800">
              AutoCare demo talebiniz için bizimle iletişime geçin. Size uygun kullanım planını birlikte oluşturalım.
            </p>
          </aside>

          <div className="glass-panel reveal rounded-3xl p-7 sm:p-10">
            <h3 className="text-xl font-semibold text-slate-900">Demo Talep Formu</h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <input required name="Ad Soyad" type="text" placeholder="Ad Soyad" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-sky-500" />
              <input required name="Firma Adı" type="text" placeholder="Firma Adı" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-sky-500" />
              <input required name="Telefon" type="tel" placeholder="Telefon" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-sky-500" />
              <textarea required name="Mesaj" rows="4" placeholder="Mesaj" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-sky-500" />

              <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                {sending ? 'Gönderiliyor...' : 'Gönder'}
              </button>

              {submitted && <p className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">Talebiniz alındı. E-posta adresinize/ekibimize iletildi.</p>}
              {error && <p className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
