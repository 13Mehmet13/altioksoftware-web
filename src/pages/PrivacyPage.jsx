const sections = [
  {
    title: '1. Toplanan Veriler',
    text: 'Kuzucular Premium Servis uygulamasında, hizmetin çalışması için hesap bilgileri (ad-soyad, e-posta, telefon), müşteri ve araç bilgileri, servis kayıtları, işlem notları ve bildirim gönderimine ilişkin teknik veriler işlenebilir.',
  },
  {
    title: '2. Hesap Bilgileri',
    text: 'Kullanıcı hesabı oluşturma, giriş doğrulama, yetkilendirme ve destek süreçlerinin yürütülmesi amacıyla temel hesap verileri saklanır.',
  },
  {
    title: '3. Müşteri, Araç ve Servis Verileri',
    text: 'Servis operasyonlarının yönetilebilmesi için müşteri iletişim bilgileri, araç kimlik ve geçmiş kayıtları, iş emri detayları ve servis süreç verileri kullanıcı tarafından girildiği kapsamda işlenir.',
  },
  {
    title: '4. Bildirim Verileri',
    text: 'Kullanıcılara ve müşterilere süreç bilgilendirmesi sağlamak için bildirim tercihi ve gönderim kayıtları tutulabilir.',
  },
  {
    title: '5. Fotoğraf ve Dosya Kullanımı',
    text: 'Uygulamada fotoğraf veya dosya yükleme özelliği kullanılırsa, bu içerikler yalnızca servis kaydı oluşturma, belge üretme ve operasyon takibi amaçlarıyla işlenir.',
  },
  {
    title: '6. Verilerin Kullanım Amaçları',
    text: 'Toplanan veriler; hizmetin sunulması, servis operasyonlarının yürütülmesi, raporlama, destek, güvenlik, hata tespiti ve mevzuata uyum amaçlarıyla kullanılır.',
  },
  {
    title: '7. Üçüncü Taraflarla Paylaşım',
    text: 'Veriler, hukuki yükümlülükler dışında üçüncü taraflara satılmaz. Hizmetin teknik olarak sunulması için gerekli altyapı sağlayıcılarıyla sınırlı ve sözleşmesel koruma altında paylaşılabilir.',
  },
  {
    title: '8. Veri Güvenliği',
    text: 'ALTIOK SOFTWARE, erişim kontrolü, güvenli iletişim protokolleri ve düzenli teknik önlemler ile verileri korumayı hedefler.',
  },
  {
    title: '9. Kullanıcı Hakları',
    text: 'Kullanıcılar verilerine erişim, düzeltme, silme ve işleme itiraz taleplerini iletebilir. Talepler makul süre içinde değerlendirilir.',
  },
  {
    title: '10. Hesap ve Veri Silme Talebi (Google Play Uyumlu)',
    text: 'Kullanıcılar hesap/veri silme taleplerini uygulama içinden veya e-posta ile iletebilir. Talep doğrulaması sonrası veriler 7-30 gün içinde silinir; yasal zorunluluklar kapsamında saklanması gereken kayıtlar yalnızca zorunlu süre boyunca tutulur.',
  },
]

function PrivacyPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-800">Yasal</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-5xl">Gizlilik Politikası</h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
            Bu gizlilik politikası, ALTIOK SOFTWARE tarafından geliştirilen Kuzucular Premium Servis uygulaması için
            hazırlanmıştır. Metin, Apple App Store ve Google Play Store inceleme gereklilikleri dikkate alınarak
            düzenlenmiştir.
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
          <h2 className="text-lg font-semibold text-slate-900">11. İletişim</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            Gizlilik veya veri talepleriniz için bize şu adresten ulaşabilirsiniz: <a className="font-semibold text-sky-700 hover:text-sky-800" href="mailto:mehmetaltiok.ma@gmail.com">mehmetaltiok.ma@gmail.com</a>
          </p>
        </article>
      </section>
    </div>
  )
}

export default PrivacyPage
