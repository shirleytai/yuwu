export default function ProductCard({ item, lang, onClick }) {
  return <button className="product-card" onClick={onClick}>
    <span className="product-number">{item.number}</span>
    <div className="product-image"><img src={`/images/${item.image}`} alt={lang === 'zh' ? item.zh : item.en} loading="lazy" /></div>
    <div className="product-info"><div><h3>{lang === 'zh' ? item.zh : item.en}</h3><span>{lang === 'zh' ? item.materialZh : item.materialEn}</span></div><p>{item.price}</p></div>
  </button>
}
