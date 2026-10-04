import { Link } from 'react-router-dom'

const sections = [
  {
    title: '1. Veri Sorumlusu',
    text: 'Bu politika kapsamında veri sorumlusu ALTIOK SOFTWARE’tir. Web sitesi: https://altioksoftware.com | E-posta: mehmetaltiok.ma@gmail.com',
  },
  {
    title: '2. Toplanan Veriler',
    text: 'Uygulama kapsamında hesap bilgileri, ad-soyad, telefon, e-posta, müşteri bilgileri, araç bilgileri, plaka, şasi no, servis kayıtları, işlem notları, bildirim verileri ve kullanılan özelliğe bağlı fotoğraf/dosya verileri işlenebilir.',
  },
  {
    title: '3. Verilerin Kullanım Amaçları',
    text: 'Veriler; servis operasyonlarının yürütülmesi, müşteri bilgilendirme süreçleri, servis geçmişi takibi, PDF raporlama, bildirim gönderimi, destek hizmetleri, güvenlik önlemleri ve hata tespiti amaçlarıyla kullanılır.',
  },
  {
    title: '4. Veri Paylaşımı',
    text: 'Veriler satılmaz. Veriler yalnızca hizmetin çalışması için gerekli altyapı sağlayıcıları, yasal yükümlülükler veya kullanıcının açık talebi kapsamında paylaşılabilir.',
  },
  {
    title: '5. Veri Saklama Süresi',
    text: 'Kişisel veriler, hizmet ilişkisi devam ettiği sürece veya yürürlükteki mevzuatın gerektirdiği süre boyunca saklanır. Süre sonunda veriler silinir, yok edilir veya anonim hale getirilir.',
  },
  {
    title: '6. Kullanıcı Hakları',
    text: 'Kullanıcılar verilerine erişim, düzeltme, güncelleme, silme, işlenmesine itiraz etme ve veri silme talebi oluşturma haklarına sahiptir. Talepler makul süre içinde değerlendirilir.',
  },
  {
    title: '7. KVKK Kapsamında Bilgilendirme',
    text: 'Kişisel veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında; hukuka ve dürüstlük kurallarına uygun, doğru ve gerektiğinde güncel şekilde işlenir.',
  },
  {
    title: '8. Çocukların Gizliliği',
    text: 'Kuzucular Premium Servis uygulaması 13 yaş altı çocuklara yönelik değildir. Bu yaş grubundan bilerek veri toplanması amaçlanmaz.',
  },
  {
    title: '9. Çerezler ve Benzeri Teknolojiler',
    text: 'altioksoftware.com web sitesi, kullanım deneyimini geliştirmek ve temel teknik işlevleri sağlamak için çerezler veya benzeri teknolojiler kullanabilir.',
  },
  {
    title: '10. Hesap ve Veri Silme',
    text: 'Hesap ve uygulama verilerinin silinmesi için resmi süreç ayrı bir sayfada detaylandırılmıştır. Lütfen hesap silme adımlarını ilgili sayfadan takip edin.',
  },
]

function PrivacyPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="container-main">
        <div className="deep-panel rounded-2xl p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-brand">Yasal</p>
          <h1 className="mt-3 text-3xl font-semibold text-fg sm:text-5xl">Gizlilik Politikası</h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-mute sm:text-base">
            Bu gizlilik politikası, ALTIOK SOFTWARE tarafından geliştirilen Kuzucular Premium Servis uygulaması için
            hazırlanmıştır. Metin, Apple App Store ve Google Play Store inceleme gerekliliklerine uygun şekilde açık,
            resmi ve anlaşılır olarak düzenlenmiştir.
          </p>
        </div>
      </section>

      <section className="container-main mt-8 grid gap-4">
        {sections.map((section) => (
          <article key={section.title} className="glass-panel rounded-2xl p-6 sm:p-7">
            <h2 className="text-lg font-semibold text-fg">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-mute sm:text-base">{section.text}</p>
          </article>
        ))}

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-fg">11. İletişim</h2>
          <p className="mt-3 text-sm leading-7 text-mute sm:text-base">
            Gizlilik, KVKK veya veri talepleriniz için bize şu adresten ulaşabilirsiniz:{' '}
            <a className="font-semibold text-brand hover:text-brand" href="mailto:mehmetaltiok.ma@gmail.com">
              mehmetaltiok.ma@gmail.com
            </a>
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-fg">12. Hesap Silme Sayfası Yönlendirmesi</h2>
          <p className="mt-3 text-sm leading-7 text-mute sm:text-base">
            Hesap ve veri silme adımlarını görmek için lütfen{' '}
            <Link to="/account-deletion" className="font-semibold text-brand hover:text-brand">
              /account-deletion
            </Link>{' '}
            sayfasını ziyaret edin.
          </p>
        </article>
      </section>
    </div>
  )
}

export default PrivacyPage
