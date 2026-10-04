import { useState } from 'react'

const field = 'w-full rounded-md border border-edge bg-ink px-4 py-3 text-sm text-fg placeholder:text-mute outline-none transition focus:border-brand'

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

    formData.append('_subject', 'Yeni Talep - Altıok Software')
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
    <section id="iletisim" className="py-16 sm:py-24">
      <div className="container-main grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <aside>
          <p className="eyebrow">Talep formu</p>
          <h2 className="h2 mt-4">Konuyu yazın, size dönelim.</h2>
          <p className="lead mt-4">AutoCare demosu ya da yazılım projesi. Konuyu seçin, kısaca anlatın.</p>
          <dl className="mt-8 space-y-3 font-mono text-xs">
            <div className="flex gap-4"><dt className="w-20 text-mute">E-posta</dt><dd className="text-fg">mehmetaltiok.ma@gmail.com</dd></div>
            <div className="flex gap-4"><dt className="w-20 text-mute">Telefon</dt><dd><a href="tel:+905445259309" className="text-fg transition hover:text-brand">0544 525 93 09</a></dd></div>
            <div className="flex gap-4"><dt className="w-20 text-mute">WhatsApp</dt><dd><a href="https://wa.me/905445259309" target="_blank" rel="noreferrer" className="text-fg transition hover:text-brand">Mesaj gönder</a></dd></div>
            <div className="flex gap-4"><dt className="w-20 text-mute">Instagram</dt><dd className="text-fg">@altioksoftware</dd></div>
          </dl>
        </aside>

        <div className="panel p-6 sm:p-8">
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="c-name" className="font-mono text-[10px] uppercase tracking-widest text-mute">Ad Soyad</label>
              <input id="c-name" required name="Ad Soyad" type="text" className={`${field} mt-2`} />
            </div>
            <div>
              <label htmlFor="c-phone" className="font-mono text-[10px] uppercase tracking-widest text-mute">Telefon</label>
              <input id="c-phone" required name="Telefon" type="tel" className={`${field} mt-2`} />
            </div>
            <div>
              <label htmlFor="c-topic" className="font-mono text-[10px] uppercase tracking-widest text-mute">Konu</label>
              <select id="c-topic" name="Konu" className={`${field} mt-2`} defaultValue="AutoCare demo">
                <option>AutoCare demo</option>
                <option>Yazılım projesi</option>
                <option>Diğer</option>
              </select>
            </div>
            <div>
              <label htmlFor="c-company" className="font-mono text-[10px] uppercase tracking-widest text-mute">Firma</label>
              <input id="c-company" name="Firma" type="text" placeholder="Firma adı" className={`${field} mt-2`} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-msg" className="font-mono text-[10px] uppercase tracking-widest text-mute">Mesaj</label>
              <textarea id="c-msg" required name="Mesaj" rows="5" className={`${field} mt-2`} />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                {sending ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </div>
            {submitted && <p className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300 sm:col-span-2">Talebiniz alındı. En kısa sürede dönüş yapılacak.</p>}
            {error && <p className="rounded-md border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-300 sm:col-span-2">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
