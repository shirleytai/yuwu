import { useEffect, useState } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import { products, journal, productStories } from './data/content'
import { img } from './asset'

const t = (lang, zh, en) => lang === 'zh' ? zh : en

function Home({ lang, navigate }) {
  return <>
    <section className="hero">
      <img src={img('hero-beach.webp')} alt={t(lang,'海灘上的漂流木','Driftwood on the shore')} fetchPriority="high"/>
      <div className="hero-shade"/><div className="hero-copy">
        <span className="eyebrow">{t(lang,'禹物再製所 · 台北','YU·WU RE-CREATION STUDIO · TAIPEI')}</span>
        <h1>{t(lang,<>不是修復，<br/>而是再製。</>,<>Not restoration —<br/>transformation.</>)}</h1>
        <p>{t(lang,'拾得的木與鐵，帶著過去，走進今日的生活。',"Salvaged wood, found iron — objects that carry their past into today's life.")}</p>
        <div className="actions"><button className="btn light" onClick={() => navigate('shop')}>{t(lang,'瀏覽作品','View the works')}</button><button className="btn outline" onClick={() => navigate('about')}>{t(lang,'品牌理念','Our direction')}</button></div>
      </div>
    </section>
    <section className="dark-section section"><div className="section-head"><div><span className="eyebrow">{t(lang,'新作','NEW ARRIVALS')}</span><h2>{t(lang,'近期再製','Recent re-creations')}</h2></div><button className="text-link" onClick={() => navigate('shop')}>{t(lang,'全部作品','view all')} →</button></div>
      <div className="product-grid home-products">{products.slice(0,4).map(p=><ProductCard key={p.number} item={p} lang={lang} onClick={()=>navigate('shop')}/>)}</div>
    </section>
    <section className="materials section"><div className="intro"><img className="tree-ring" src={img('tree-ring.png')} alt="年輪"/><h2>{t(lang,<>兩種根本的材料，<br/>各有各的脾氣。</>,<>Two essential materials,<br/>each with its own temper.</>)}</h2></div><div className="material-grid"><article><img src={img('charredTray.webp')} alt="炭化木" loading="lazy"/><h3>001 / {t(lang,'木','Wood')}</h3><p>{t(lang,'台灣檜木、龍眼木、烏心石、肖楠與退役船松。不用化學漆，只用蜂蠟、亞麻仁油與米糠。慢慢地，木頭的香氣會回來。','Taiwanese cypress, longan, formosan michelia, incense cedar and salvaged ship pine. No chemical lacquer—only beeswax, linseed oil and rice bran.')}</p></article><article><img src={img('iron-material.webp')} alt="回收鐵件" loading="lazy"/><h3>002 / {t(lang,'鐵','Iron')}</h3><p>{t(lang,'舊窗花、磅秤、農具、機械零件。清去浮鏽，留下深紅棕的底色，再以蜂蠟封存。鏽停止生長，故事留了下來。',"Old window grilles, weighing scales, farm tools and machine parts. We clear loose rust, keep the deep red-brown beneath, then seal it in beeswax.")}</p></article></div></section>
    <DoorExperience lang={lang} navigate={navigate}/>
  </>
}

function DoorExperience({ lang, navigate }) {
  const [opening, setOpening] = useState(false)
  const openDoor = () => {
    if (opening) return
    setOpening(true)
    window.setTimeout(() => navigate('room'), 1450)
    window.setTimeout(() => setOpening(false), 1750)
  }
  return <section className={`door-section ${opening ? 'is-opening' : ''}`}>
    <button onClick={openDoor} aria-label={t(lang,'推門進入','Open the door')}>
      <span className="door-illustration">
        <span className="door-room"><img src={img('roomBed.jpg')} alt="門後的空間"/></span>
        <img className="door-leaf" src={img('door-leaf.png')} alt=""/>
        <img className="door-frame" src={img('door-frame.png')} alt=""/>
        <span className="door-hover-label">[ {t(lang,'進入房間','enter the room')} ]</span>
      </span>
      <span className="door-label">{t(lang,'推門進來——看器物住進空間','Push the door — see the works at home')}</span>
    </button>
    <span className="door-veil" aria-hidden="true"/>
  </section>
}

function Room({ lang, navigate }) {
  const [spot, setSpot] = useState(null)
  const spots = [
    { id:'pendant', className:'spot-pendant', label:t(lang,'網葉吊燈','Mesh-Leaf Pendant'), image:'pendantLamp.jpg' },
    { id:'bed', className:'spot-bed', label:t(lang,'松樑床架','Ship-Pine Bed Frame'), image:'roomBed.jpg' },
    { id:'wall', className:'spot-wall', label:t(lang,'檜木板牆','Cypress Slab Wall'), image:'ironTable.jpg' },
  ]
  return <main className="room-page">
    <img className="room-background" src={img('roomBed.jpg')} alt="台東民宿全室委託"/>
    <span className="room-shade"/>
    <button className="room-back" onClick={()=>navigate('home')}>← {t(lang,'穿過門回去','back through the door')}</button>
    {spots.map(s=><div key={s.id} className={`room-spot ${s.className} ${spot===s.id?'is-active':''}`}>
      <button onClick={()=>setSpot(spot===s.id?null:s.id)}><i/>{s.label}</button>
      {spot===s.id&&<div className="spot-card"><img src={img(s.image)} alt=""/><div><strong>{s.label}</strong><button onClick={()=>navigate('shop')}>{t(lang,'查看更多','SEE MORE')}</button></div></div>}
    </div>)}
    <div className="room-copy"><span>{t(lang,'房間','THE ROOM')}</span><h1>{t(lang,<>一間位於台東的民宿套房，<br/>全室以再製器物佈置。</>,<>A guesthouse suite in Taitung,<br/>furnished entirely with re-created<br/>objects.</>)}</h1></div>
  </main>
}

const productCategories = { '001':'furniture', '002':'objects', '003':'objects', '004':'objects', '005':'objects', '006':'art', '007':'art', '008':'art', '009':'lighting', '010':'furniture' }

function Shop({ lang, selected, setSelected }) {
  const [filter,setFilter] = useState('all')
  const filters = [['all','全部','All'],['furniture','家具','Furniture'],['lighting','燈具','Lighting'],['objects','器物','Objects'],['art','藝術','Art']]
  const visible = filter === 'all' ? products : products.filter(p => productCategories[p.number] === filter)
  useEffect(() => {
    if (!selected) return
    const close = e => e.key === 'Escape' && setSelected(null)
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', close)
    return () => { document.body.classList.remove('modal-open'); window.removeEventListener('keydown', close) }
  }, [selected, setSelected])
  return <main className="shop-page">
    <header className="shop-heading"><span>{t(lang,'商品','SHOP')}</span><h1>{t(lang,'每件器物，各自成為一段生命','Each piece, a life of its own')}</h1><p>{t(lang,'所有作品皆為一件制，於台北工作室以回收材料再製。來信即可預留作品。','Every work is one of a kind, re-created from salvaged materials in our Taipei studio. Email us to reserve a piece.')}</p></header>
    <div className="shop-filters" aria-label={t(lang,'商品分類','Product categories')}>{filters.map(([id,zh,en])=><button key={id} className={filter===id?'active':''} onClick={()=>setFilter(id)}>{t(lang,zh,en)}</button>)}</div>
    <div className="shop-grid">{visible.map(p=><ProductCard key={p.number} item={p} lang={lang} onClick={()=>setSelected(p)}/>)}</div>
    {selected&&<ProductPreview product={selected} lang={lang} close={()=>setSelected(null)}/>}
  </main>
}

function ProductPreview({ product, lang, close }) {
  const story = productStories[product.number]
  return <div className="product-preview" role="dialog" aria-modal="true" aria-labelledby="preview-title" onClick={close}>
    <article onClick={e=>e.stopPropagation()}>
      <button className="preview-close" onClick={close} aria-label={t(lang,'關閉','Close')}>×</button>
      <img src={img(product.image)} alt={lang==='zh'?product.zh:product.en}/>
      <div className="preview-copy"><span>{product.number} · {lang==='zh'?product.materialZh:product.materialEn}</span><h2 id="preview-title">{lang==='zh'?product.zh:product.en}</h2><p className="preview-intro">{lang==='zh'?story.introZh:story.introEn}</p><p className="preview-price">{product.price}</p><div className="preview-actions"><a href={`?product=${product.number}`} target="_blank" rel="noopener noreferrer">{t(lang,'查看更多','View more')} →</a><button onClick={close}>{t(lang,'繼續瀏覽','Keep browsing')}</button></div></div>
    </article>
  </div>
}

function ProductDetail({ product, lang, navigate }) {
  if (!product) return null
  const story = productStories[product.number]
  const related = products.filter(p=>p.number!==product.number).slice(0,3)
  const openProduct = item => { window.location.assign(`${window.location.pathname}?product=${item.number}`) }
  return <main className="product-detail-page">
    <button className="product-back" onClick={()=>navigate('shop')}>← {t(lang,'返回全部商品','Back to all pieces')}</button>
    <section className="product-detail-hero">
      <img className="product-detail-image" src={img(product.image)} alt={lang==='zh'?product.zh:product.en}/>
      <div className="product-detail-copy"><span className="product-detail-number">{product.number}</span><h1>{lang==='zh'?product.zh:product.en}</h1><p className="product-alt-name">{lang==='zh'?product.en:product.zh}</p><p className="product-provenance">{lang==='zh'?product.materialZh:product.materialEn}</p><p className="product-detail-price">{product.price}</p><div className="product-divider"/><p className="product-intro">{lang==='zh'?story.introZh:story.introEn}</p><p className="product-story">{lang==='zh'?story.storyZh:story.storyEn}</p><div className="product-divider"/><dl><div><dt>{t(lang,'材質','Materials')}</dt><dd>{lang==='zh'?story.materialsZh:story.materialsEn}</dd></div><div><dt>{t(lang,'件數','Edition')}</dt><dd>{t(lang,'一件制','One of a kind')}</dd></div></dl><div className="product-detail-actions"><a className="detail-primary" href={`mailto:hello@yu-wu.studio?subject=${encodeURIComponent(`${product.number} ${product.en}`)}`}>{t(lang,'來信詢問','Enquire')}</a><button onClick={()=>navigate('contact')}>{t(lang,'預約看作品','Visit the studio')}</button></div></div>
    </section>
    <section className="related-products"><div className="related-heading"><span>{t(lang,'其他作品','OTHER PIECES')}</span><h2>{t(lang,'也許你會喜歡','You may also like')}</h2></div><div className="shop-grid">{related.map(p=><ProductCard key={p.number} item={p} lang={lang} onClick={()=>openProduct(p)}/>)}</div></section>
  </main>
}

function About({ lang }) {
  const process = [
    ['process-gather.png','Gather','拾','We collect from demolition sites, old craftsmen’s stores, flea markets and riverbanks. Every piece is dried, treated for insects and rested for at least three months.','我們從拆除現場、老職人的店、跳蚤市場與河岸拾集。每塊材料先風乾、除蟲，靜置至少三個月。'],
    ['process-read.png','Read','讀','We lay the material out, turning it over, measuring and taking notes — waiting for it to speak before deciding what it will become.','把材料攤在工作室地板上，翻看、丈量、記錄——等它先開口，再決定它要成為什麼。'],
    ['process-make.png','Make','製','Woodworking, metalwork, welding and turning. A single piece takes fourteen to sixty days on average, depending on its structure.','木作、金工、焊接與車製。一件作品平均需時十四至六十天，視結構而定。'],
    ['process-season.png','Season','養','Once finished, it rests another week as we watch the wood shrink and the iron settle. Only when stable do we stamp it with the Yu-Wu seal.','完成後再靜置一週，看木頭收縮、鐵件安定。確定穩了，才蓋上禹物的印。'],
  ]
  return <main className="about-page">
    <section className="about-intro">
      <div><h1>{t(lang,'關於工作室','About the Studio')}</h1><p>{t(lang,'我們不修復舊物，也不讓它們回到原本的樣子。我們讓裂痕留下、讓鏽留下，並給它們新的用途，使其得以走進今日的生活——每件作品都帶著過去，卻是為了往後的日子而做。',"We don't restore old things, nor return them to their original form. We let the cracks stay, let the rust stay, and give them a new use so they can step into today's life — every piece carries a past, yet it is made for the days to come.")}</p></div>
      <img className="about-ring" src={img('tree-ring.png')} alt="手繪年輪"/>
    </section>
    <section className="about-process">{process.map(([image,en,zh,enText,zhText])=><article key={en}><div className="process-icon"><img src={img(image)} alt=""/></div><h2>{t(lang,zh,en)}</h2><p>{t(lang,zhText,enText)}</p></article>)}</section>
    <section className="about-story about-story--portrait"><img src={img('yu-tsai.jpg')} alt="戴禹財工作照"/><div><h2>{t(lang,'戴禹財','Yu-Tsai Tai')}</h2><p>{t(lang,'戴禹財生於 1974 年，是一位長年安靜浸潤於藝術與空間設計的創作者，足跡從灣潭雙溪到鶯歌。從繪畫、陶藝到漂流木藝術與複合媒材創作，他的作品映照出一段豐厚的生命與創作旅程。','Born in 1974, Yu-Tsai Tai is a visionary creator who has spent years quietly immersed in art and spatial design. From painting and ceramics to driftwood art and mixed-media creations, his works reflect a rich journey of life and creativity.')}</p><p>{t(lang,'雖為自學，他深受達利的想像力、梵谷的情感力量與禪的靜觀精神啟發。多樣的創作揉合想像、溫度與藝術的自由。',"Though self-taught, he was deeply inspired by Dalí's imagination, Van Gogh's emotional power, and the meditative spirit of Zen.")}</p></div></section>
    <section className="about-story about-story--recreation"><div><h2>{t(lang,'再製','Re-Creation')}</h2><p>{t(lang,'禹物再製所是一個致力於生態意識藝術、讓有意義的物件重獲新生的創作空間。從二十多年前的漂流木創作開始，工作室如今以複合媒材工藝與共創的方式，轉化蒐集而來的作品與舊物。',"Yu's Re-Creation Studio is a creative space dedicated to eco-conscious art and the revival of meaningful objects. Starting from driftwood creations over 20 years ago, the studio now transforms collected artworks and vintage pieces through mixed-media craftsmanship.")}</p></div><img src={img('workshopCarving.jpg')} alt="工作室雕刻過程"/></section>
    <section className="about-signoff"><div><strong className="logo">YU·WU</strong><span>{t(lang,'禹物再製所 · 台北','RE-CREATION STUDIO · TAIPEI')}</span></div><p>{t(lang,'禹物再製所是由戴禹財與蔡佩莉共同創立的多領域創作工作室。從二十多年前的漂流木藝術開始，逐漸走向以永續與自然共生之美為靈感的複合媒材與物件轉化創作。','Yu’s Re-Creation Studio is a multidisciplinary creative studio founded by Yu-Tsai Tai and Pei-Li Tsai. Beginning with driftwood art over 20 years ago, the studio has evolved into mixed-media and object transformation inspired by sustainability and nature.')}</p></section>
  </main>
}

function Journal({ lang, openArticle }) { return <main className="journal-page"><header className="journal-heading"><span>{t(lang,'誌','JOURNAL')}</span><h1>{t(lang,'工作室手記','Notes from the studio')}</h1><p>{t(lang,'委託案、進行中的創作，以及器物最後落腳的地方。','Commissions, works in progress, and where the objects end up living.')}</p></header><div className="journal-list">{journal.map((a,i)=><article key={a.id} onClick={()=>openArticle(a.id)}><img src={img(a.image)} alt={lang==='zh'?a.titleZh:a.titleEn} loading={i?'lazy':'eager'}/><div><span className="journal-meta">{lang==='zh'?a.tagZh:a.tagEn} · {lang==='zh'?a.dateZh:a.dateEn}</span><h2>{lang==='zh'?a.titleZh:a.titleEn}</h2><p>{lang==='zh'?a.textZh:a.textEn}</p><button>{t(lang,'閱讀全文','read the entry')} →</button></div></article>)}</div></main> }

function Article({ id, lang, navigate }) {
  const a = journal.find(j=>j.id===id) || journal[0]
  const title = lang==='zh'?a.titleZh:a.titleEn
  return <main className="article-page">
    <header className="article-head">
      <button className="product-back" onClick={()=>navigate('journal')}>← {t(lang,'回到誌','back to journal')}</button>
      <span className="journal-meta">{lang==='zh'?a.tagZh:a.tagEn} · {lang==='zh'?a.dateZh:a.dateEn}</span>
      <h1>{title}</h1>
    </header>
    <img className="article-cover" src={img(a.image)} alt={title}/>
    <div className="article-body">{a.paras.map((p,i)=><p key={i}>{lang==='zh'?p.zh:p.en}</p>)}</div>
    <div className="article-pair"><img src={img(a.image2)} alt="" loading="lazy"/><img src={img(a.image3)} alt="" loading="lazy"/></div>
    <div className="article-outro"><p>{lang==='zh'?a.outroZh:a.outroEn}</p><button className="article-cta" onClick={()=>navigate('contact')}>{t(lang,'洽詢客製委託','Start a commission')}</button></div>
  </main>
}

function Contact({ lang }) {
  const rows = [
    [t(lang,'工作室','STUDIO'),t(lang,'台北市大同區迪化街一段 345 號','No. 345, Section 1, Dihua Street, Datong District, Taipei')],
    [t(lang,'預約制','By Appt.'),t(lang,'週三至週日 · 14:00–19:00','Wed–Sun · 14:00–19:00')],
    [t(lang,'電子郵件','Mail'),<a href="mailto:hello@yu-wu.studio">hello@yu-wu.studio</a>],
    ['LINE','@yuwu-studio'],
    ['Instagram','@yuwu.recreation'],
  ]
  return <main className="contact-page"><div className="contact-layout">
    <div className="contact-photo"><img src={img('founders.jpg')} alt={t(lang,'戴禹財與蔡佩莉及其作品','Yu-Tsai Tai and Pei-Li Tsai with their works')}/></div>
    <div className="contact-content"><h1>{t(lang,'預約參觀','Studio Visit')}</h1><div className="contact-details">{rows.map(([label,value])=><div className="contact-row" key={label}><span>{label}</span><div>{value}</div></div>)}</div>
      <div className="contact-actions"><a className="contact-primary" href={`mailto:hello@yu-wu.studio?subject=${encodeURIComponent(t(lang,'預約參觀工作室','Studio visit — booking'))}`}>{t(lang,'來信預約','Email us')}</a><a className="contact-secondary" href={`mailto:hello@yu-wu.studio?subject=${encodeURIComponent(t(lang,'客製委託詢問','Commission enquiry'))}`}>{t(lang,'填寫委託表單','Fill in the form')}</a></div>
    </div>
  </div></main>
}

export default function App() {
  const queryProduct = products.find(p=>p.number===new URLSearchParams(window.location.search).get('product'))
  const [page,setPage]=useState(queryProduct?'product':'home'), [lang,setLang]=useState(()=>localStorage.getItem('yuwu-lang')||'en'), [selected,setSelected]=useState(null), [detailProduct]=useState(queryProduct), [articleId,setArticleId]=useState(null)
  const navigate=(next)=>{if(window.location.search)window.history.replaceState({},'',window.location.pathname);setPage(next);setSelected(null);window.scrollTo({top:0,behavior:'smooth'})}
  useEffect(()=>{localStorage.setItem('yuwu-lang',lang);document.documentElement.lang=lang==='zh'?'zh-Hant':'en'},[lang])
  return <><Header page={page} navigate={navigate} lang={lang} setLang={setLang}/>{page==='home'&&<Home lang={lang} navigate={navigate}/>} {page==='room'&&<Room lang={lang} navigate={navigate}/>} {page==='shop'&&<Shop lang={lang} selected={selected} setSelected={setSelected}/>} {page==='product'&&<ProductDetail product={detailProduct} lang={lang} navigate={navigate}/>} {page==='about'&&<About lang={lang}/>} {page==='journal'&&<Journal lang={lang} openArticle={id=>{setArticleId(id);navigate('article')}}/>} {page==='article'&&<Article id={articleId} lang={lang} navigate={navigate}/>} {page==='contact'&&<Contact lang={lang}/>} {page!=='room'&&<Footer lang={lang} navigate={navigate}/>}</>
}

function Footer({ lang, navigate }) {
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-column"><span>{t(lang,'商品','SHOP')}</span><button onClick={()=>navigate('shop')}>{t(lang,'家具','Furniture')}</button><button onClick={()=>navigate('shop')}>{t(lang,'器物','Decor')}</button><button onClick={()=>navigate('shop')}>{t(lang,'藝術','Art')}</button></div>
      <div className="footer-column"><span>{t(lang,'顧客服務','CUSTOMER')}</span><button onClick={()=>navigate('contact')}>{t(lang,'聯絡我們','Contact Us')}</button><a href="#legal">{t(lang,'法律資訊','Legal')}</a><a href="#faq">{t(lang,'常見問題','FAQ')}</a><a href="#trade">{t(lang,'商業合作','Trade')}</a></div>
      <div className="footer-column"><span>{t(lang,'關於我們','COMPANY')}</span><button onClick={()=>navigate('about')}>{t(lang,'品牌故事','Our story')}</button><button onClick={()=>navigate('journal')}>{t(lang,'展覽','Exhibition')}</button><button onClick={()=>navigate('contact')}>{t(lang,'合作','Cooperation')}</button></div>
      <div className="footer-column footer-connect"><span>{t(lang,'連結','CONNECT')}</span><a href="mailto:hello@yu-wu.studio">hello@yu-wu.studio</a><a href="https://youtube.com" target="_blank" rel="noreferrer">▻&nbsp;&nbsp; Youtube</a><a href="https://threads.net" target="_blank" rel="noreferrer">◌&nbsp;&nbsp; Threads</a></div>
      <button className="footer-logo logo" onClick={()=>navigate('home')}>YU·WU</button>
    </div>
    <div className="footer-bottom"><span>{t(lang,'與自然同行','In step with nature')}</span><span>© 2026 Yu·Wu Re-creation Studio</span></div>
  </footer>
}
