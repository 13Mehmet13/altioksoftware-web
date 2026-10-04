import PageHead from '../components/PageHead'

const stack = [
  { name: 'Flutter', role: 'Mobil arayüz', text: 'iOS ve Android için tek kod tabanı.' },
  { name: 'FastAPI', role: 'Backend', text: 'Hızlı, tipli ve belgeli REST servisleri.' },
  { name: 'PostgreSQL', role: 'Veritabanı', text: 'İlişkisel, güvenilir ve yedeklenebilir veri.' },
  { name: 'Python', role: 'Otomasyon ve AI', text: 'Veri işleme, analiz ve model entegrasyonu.' },
  { name: 'Docker', role: 'Dağıtım', text: 'Tekrarlanabilir ortam ve kolay kurulum.' },
  { name: 'Bulut', role: 'Altyapı', text: 'Yedekli ve erişimi kontrol edilen barındırma.' },
]

const principles = [
  { title: 'Basit kalır', text: 'Her özellik gerçek bir iş akışından çıkar. Gereksiz ekran yazılmaz.' },
  { title: 'Ölçülebilir', text: 'Kayıtlar tutulur, değişiklikler izlenir, sonuç rakamla görülür.' },
  { title: 'Sürdürülebilir', text: 'Okunur kod, belge ve düzenli yedekle uzun ömürlü ürün.' },
]

function TechnologiesPage() {
  return (
    <>
      <PageHead
        eyebrow="Teknoloji"
        title="Mühendislik altyapımız"
        text="Mobil, backend ve yapay zeka odaklı çözümleri modern ve sade bir yığınla geliştiriyoruz."
      />
      <section className="py-16 sm:py-24">
        <div className="container-main grid gap-px overflow-hidden rounded-xl border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <div key={s.name} className="bg-ink p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{s.role}</p>
              <h2 className="mt-4 font-display text-2xl font-semibold">{s.name}</h2>
              <p className="mt-2 text-sm leading-6 text-mute">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-edge bg-surface py-16 sm:py-24">
        <div className="container-main">
          <p className="eyebrow">Yaklaşım</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="panel p-6 !bg-ink">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TechnologiesPage
