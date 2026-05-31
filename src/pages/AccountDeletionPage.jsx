function AccountDeletionPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-3xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-800">Google Play Uyumlu</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-5xl">Hesap ve Veri Silme Talebi</h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">
            Kuzucular Premium Servis kullanıcıları, hesaplarının ve ilgili uygulama verilerinin silinmesini talep
            edebilir. Bu sayfa, Google Play gerekliliklerine uygun resmi silme sürecini açıklar.
          </p>
        </div>
      </section>

      <section className="container-main mt-8 grid gap-4">
        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-slate-900">1. Talep Oluşturma Yöntemi</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            Hesap silme talebinizi e-posta ile <a className="font-semibold text-sky-700 hover:text-sky-800" href="mailto:mehmetaltiok.ma@gmail.com">mehmetaltiok.ma@gmail.com</a> adresine iletebilir
            veya destek sayfasındaki formu kullanabilirsiniz.
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-slate-900">2. Silinecek Veriler</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            Doğrulama sonrası kullanıcı hesabı, oturum bilgileri, kullanıcıya bağlı müşteri/araç/servis kayıtları ve
            uygulama içi operasyon verileri silme kapsamına alınır.
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-slate-900">3. Geçici Saklama Durumları</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            Hukuki yükümlülükler, güvenlik incelemeleri veya teknik denetim gerektiren kayıtlar, yalnızca zorunlu süre
            boyunca sınırlı erişimle saklanabilir. Süre bitiminde bu veriler de silinir veya anonim hale getirilir.
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-slate-900">4. İşlem Süresi</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            Silme talepleri, talebin doğrulanmasından sonra ortalama 7 ila 30 gün içinde sonuçlandırılır. İşlem
            sonucunda kullanıcıya bilgi verilir.
          </p>
        </article>
      </section>
    </div>
  )
}

export default AccountDeletionPage
