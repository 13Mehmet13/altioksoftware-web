const sections = [
  {
    title: '1. Uygulama Kullanım Koşulları',
    text: 'Kuzucular Premium Servis uygulamasını kullanarak bu kullanım şartlarını kabul etmiş sayılırsınız. Uygulama, işletme içi servis süreçlerinin yönetimi amacıyla sunulmaktadır.',
  },
  {
    title: '2. Kullanıcı Sorumlulukları',
    text: 'Kullanıcı, hesabının güvenliğinden, giriş bilgilerinin korunmasından ve uygulamanın hukuka uygun kullanımından sorumludur.',
  },
  {
    title: '3. Veri Doğruluğu',
    text: 'Kullanıcı tarafından sisteme girilen müşteri, araç, servis, cari ve diğer işletme verilerinin doğruluğu kullanıcı sorumluluğundadır.',
  },
  {
    title: '4. Servis Kayıtları Sorumluluğu',
    text: 'Oluşturulan servis kayıtları, işlem notları, raporlar ve PDF çıktılarının doğruluğu ve saklanması ilgili kullanıcı/işletme sorumluluğundadır.',
  },
  {
    title: '5. Fikri Mülkiyet',
    text: 'Uygulama tasarımı, yazılım kodu, marka unsurları ve içeriklerin fikri mülkiyet hakları ALTIOK SOFTWARE’e aittir. İzinsiz kopyalama ve dağıtım yapılamaz.',
  },
  {
    title: '6. Sorumluluk Sınırları',
    text: 'ALTIOK SOFTWARE, kesinti, veri kaybı, üçüncü taraf hizmet kaynaklı sorunlar veya kullanıcı hatalarından doğan dolaylı zararlardan sorumlu tutulamaz.',
  },
  {
    title: '7. Hizmet Değişiklikleri',
    text: 'Uygulama özellikleri, güvenlik gereksinimleri ve teknik altyapı ihtiyaçları doğrultusunda önceden bildirimle veya gerektiğinde derhal güncellenebilir.',
  },
]

function TermsPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-800">Yasal</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-5xl">Kullanım Şartları</h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
            Bu şartlar, Kuzucular Premium Servis uygulamasının kullanım esaslarını belirler. Uygulamayı kullanan tüm
            kullanıcılar aşağıdaki koşulları kabul eder.
          </p>
        </div>
      </section>

      <section className="container-main mt-8 grid gap-4">
        {sections.map((section) => (
          <article key={section.title} className="glass-panel rounded-2xl p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{section.text}</p>
          </article>
        ))}

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-slate-900">8. İletişim</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            Kullanım şartlarıyla ilgili sorularınız için: <a className="font-semibold text-sky-700 hover:text-sky-800" href="mailto:mehmetaltiok.ma@gmail.com">mehmetaltiok.ma@gmail.com</a>
          </p>
        </article>
      </section>
    </div>
  )
}

export default TermsPage
