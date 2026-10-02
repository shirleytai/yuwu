import { useEffect, useState } from 'react'

export default function Header({ page, navigate, lang, setLang }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40)
    update(); window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  const items = [['shop','商品','shop'], ['journal','誌','journal'], ['about','品牌理念','our direction'], ['contact','聯絡','contact']]
  const go = (next) => { navigate(next); setOpen(false) }
  return <header className={`header ${page === 'home' && !scrolled ? 'header--hero' : ''} ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
    <button className="logo" onClick={() => go('home')}>YU·WU</button>
    <nav className="nav" aria-label="主要導覽">
      {items.map(([id, zh, en]) => <button key={id} className={page === id || (page === 'product' && id === 'shop') || (page === 'article' && id === 'journal') ? 'active' : ''} onClick={() => go(id)}>{lang === 'zh' ? zh : en}</button>)}
    </nav>
    <button className="lang" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>{lang === 'zh' ? 'EN' : '中'}</button>
    <button className="menu" aria-label="開啟選單" aria-expanded={open} onClick={() => setOpen(!open)}><i/><i/></button>
  </header>
}
