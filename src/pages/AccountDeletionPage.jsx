function AccountDeletionPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-2xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-brand">Google Play Uyumlu</p>
          <h1 className="mt-3 text-3xl font-semibold text-fg sm:text-5xl">Hesap ve Veri Silme Talebi</h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-mute sm:text-base">
            Bu sayfa, Kuzucular Premium Servis uygulaması için Google Play hesap ve veri silme gerekliliklerine uygun
            resmi bilgilendirme metnidir. Apple App Store kullanıcıları için de aynı süreç geçerlidir.
          </p>
        </div>
      </section>

      <section className="container-main mt-8 grid gap-4">
        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-fg">1. Talep Oluşturma Yöntemi</h2>
          <p className="mt-3 text-sm leading-7 text-mute sm:text-base">
            Hesap silme talebinizi e-posta ile{' '}
            <a className="font-semibold text-brand hover:text-brand" href="mailto:mehmetaltiok.ma@gmail.com">
              mehmetaltiok.ma@gmail.com
            </a>{' '}
            adresine iletebilir veya destek sayfasındaki formu kullanabilirsiniz.
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-fg">2. Talep Doğrulama</h2>
          <p className="mt-3 text-sm leading-7 text-mute sm:text-base">
            Yetkisiz silme işlemlerini önlemek amacıyla, talep sahibi kullanıcı kimliği doğrulanabilir. Bu doğrulama,
            hesap güvenliği ve veri bütünlüğü için uygulanır.
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-fg">3. Silinecek Veriler</h2>
          <p className="mt-3 text-sm leading-7 text-mute sm:text-base">
            Doğrulama sonrası kullanıcı hesabı, profil bilgileri, oturum verileri, bildirim tercihleri ve kullanıcıya
            bağlı uygulama verileri silme kapsamına alınır.
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-fg">4. Silinmeyebilecek / Geçici Saklanabilecek Veriler</h2>
          <p className="mt-3 text-sm leading-7 text-mute sm:text-base">
            Yasal yükümlülükler, muhasebe kayıtları, güvenlik kayıtları ve olası uyuşmazlık kayıtları mevzuat
            gereklilikleri doğrultusunda sınırlı süreyle saklanabilir. Bu süre sonunda veriler silinir veya anonim hale
            getirilir.
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-fg">5. İşlem Süresi</h2>
          <p className="mt-3 text-sm leading-7 text-mute sm:text-base">
            Silme talepleri, kimlik doğrulama tamamlandıktan sonra 7 ila 30 gün içinde sonuçlandırılır. Sonuç
            kullanıcıya e-posta ile bildirilir.
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-fg">6. Veri Silme Sonrası</h2>
          <p className="mt-3 text-sm leading-7 text-mute sm:text-base">
            Silme işlemi tamamlandığında hesaba erişim sona erer ve silinen veriler geri getirilemez. Kullanıcı dilerse
            sonradan yeniden kayıt oluşturabilir.
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-fg">7. KVKK Hakları</h2>
          <p className="mt-3 text-sm leading-7 text-mute sm:text-base">
            Kullanıcılar 6698 sayılı KVKK kapsamında verilerine erişim, düzeltme, silme ve işlenmesine itiraz etme
            haklarına sahiptir. Talepler, mevzuata uygun süreler içinde değerlendirilir.
          </p>
        </article>
      </section>
    </div>
  )
}

export default AccountDeletionPage
