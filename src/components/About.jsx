function About() {
  return (
    <section id="hakkimizda" className="screen-block">
      <div className="container-main grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="deep-panel reveal rounded-3xl p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-sky-300/90">Hakkımızda</p>
          <h2 className="section-title mt-3">Altıok Software</h2>
          <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
            Altıok Software, otomotiv sektörüne odaklanan kurumsal yazılım çözümleri geliştirir.
            Amacımız servis işletmelerinin operasyonlarını sadeleştirmek, ölçülebilir hale getirmek
            ve dijital dönüşümünü sürdürülebilir bir altyapıyla desteklemektir.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            Geliştirdiğimiz AutoCare platformu ile müşteri memnuniyetini artıran, ekip verimliliğini
            güçlendiren ve işletmeye profesyonel bir görünüm kazandıran bir yönetim standardı sunuyoruz.
          </p>
        </div>

        <div className="grid gap-4 reveal">
          <div className="glass-panel rounded-2xl p-6 transition duration-500 hover:border-sky-200/30">
            <p className="font-semibold">Vizyon</p>
            <p className="mt-2 text-sm text-slate-700">Servis yönetiminde güvenilir dijital standartları belirleyen marka olmak.</p>
          </div>
          <div className="glass-panel rounded-2xl p-6 transition duration-500 hover:border-sky-200/30">
            <p className="font-semibold">Misyon</p>
            <p className="mt-2 text-sm text-slate-700">Operasyonel karmaşayı azaltıp işletmelere netlik, hız ve kontrol kazandırmak.</p>
          </div>
          <div className="glass-panel rounded-2xl p-6 transition duration-500 hover:border-sky-200/30">
            <p className="font-semibold">Kurumsal Yaklaşım</p>
            <p className="mt-2 text-sm text-slate-700">Sektörel uzmanlık, kullanıcı odaklı tasarım ve uzun vadeli ürün desteği.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
