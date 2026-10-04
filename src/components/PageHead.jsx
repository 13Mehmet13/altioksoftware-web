function PageHead({ eyebrow, title, text, children }) {
  return (
    <section className="relative border-b border-edge">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="container-main relative py-16 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h1 mt-4 max-w-3xl">{title}</h1>
        {text && <p className="lead mt-5">{text}</p>}
        {children}
      </div>
    </section>
  )
}

export default PageHead
