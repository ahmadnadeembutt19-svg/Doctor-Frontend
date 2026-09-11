function PageHeader({ eyebrow, title, description }) {
  return <section className="bg-primary-950 px-5 py-16 text-center text-white sm:py-20"><div className="mx-auto max-w-3xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-300">{eyebrow}</p><h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>{description && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-primary-100/70">{description}</p>}</div></section>
}
export default PageHeader
