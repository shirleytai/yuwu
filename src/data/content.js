export const products = [
  ['001','ironTable.webp','「攀」高腳桌','“Ascent” High Table','拾得 · 鐵＋木','Found · Iron + Wood','NT$ 9,000'],
  ['002','dripperStand.jpg','手沖濾架 二號','Dripper Stand No. 2','拾得 · 鐵＋玻璃','Found · Iron + Glass','NT$ 6,800'],
  ['003','candleBearer.webp','燭台「同行」','Candle Bearer','拾得 · 鐵＋枝','Found · Iron + Branch','NT$ 5,200'],
  ['004','charredTray-v2.webp','炭化圓盤','Charred Disc Tray','再生 · 炭化木＋黃銅','Salvaged · Wood + Brass','NT$ 3,600'],
  ['005','moonBookends.webp','月相書擋','Moon Bookends','再生 · 黃銅','Salvaged · Brass','NT$ 4,200'],
  ['006','driftwoodClocks.jpg','漂流木時鐘','Driftwood Clock','漂流木＋再生金屬','Driftwood · Metal','NT$ 5,800'],
  ['007','haloVessel.jpg','「環」燭器','“Halo” Vessel','拾得 · 鐵＋枝','Found · Iron + Branch','NT$ 7,200'],
  ['008','scrapIronClock.jpg','廢鐵時鐘','Scrap-Iron Clock','再生 · 鐵','Salvaged · Iron','NT$ 6,400'],
  ['009','pendantLamp.jpg','網葉吊燈','Mesh-Leaf Pendant','拾得 · 黃銅＋鋼網','Found · Brass + Mesh','NT$ 8,800'],
  ['010','plywoodCart.webp','船板置物車','Ship-Plywood Cart','再生 · 船用合板','Salvaged · Ship Plywood','NT$ 4,800'],
].map(([number,image,zh,en,materialZh,materialEn,price])=>({number,image,zh,en,materialZh,materialEn,price}))

export const journal = [
  { id:'room', image2:'roomBed.jpg', image3:'plywoodCart.webp',
    paras:[
      { zh:'委託只有一句話：「希望客人睡在一段故事裡。」房間面向太平洋，主人希望屋裡沒有任何一件是這十年才從工廠出生的東西。', en:'The brief arrived as one sentence: "We want guests to sleep inside a story." The room faces the Pacific; the owners wanted nothing in it that was born in a factory this decade.' },
      { zh:'我們花了兩週備料：拆除宿舍的燒杉地板、高雄倉庫的松木樑作床架、一塊自然邊木板作床頭頂棚、以及屋後山坡的枝條。', en:'We spent two weeks sourcing: burnt-cedar flooring from a demolished dormitory, bed beams from a Kaohsiung pine warehouse, a live-edge slab for the canopy, branches from the hillside behind the house.' },
      { zh:'茶席最後完成——一張低矮的炭化茶桌、坐墊，與一道沿著牆面如水平線延伸的漂流木層架。沒有一處對稱，但每一處都是平的。', en:'The tea corner came last — a low charred table, floor cushions, and a driftwood shelf that follows the wall like a horizon line. Nothing is symmetrical; everything is level.' },
      { zh:'房間於今年春天啟用。主人說，客人總是問這些家具是在哪裡買的。誠實的回答是：它們不是買來的。', en:"The room opened this spring. The owners tell us guests keep asking where the furniture was bought. The honest answer: it wasn't." },
    ],
    outroZh:'全室委託約需八至十二週，從場勘與尋料開始。歡迎來信告訴我們你心中的那個空間。', outroEn:'Whole-room commissions run eight to twelve weeks, beginning with a site visit and a material search. Write to us with the space you have in mind.',
    image:'roomTea.jpg', tagZh:'委託案例', tagEn:'Commission', dateZh:'2026 春', dateEn:'Spring 2026', titleZh:'會記得的房間——台東民宿全室委託', titleEn:'A Room That Remembers — a guesthouse suite in Taitung', textZh:'一間民宿希望房內每件物都有前一段生命：床架、茶席、燈具與掛架，皆以回收木料與鐵件再製。', textEn:'A guesthouse asked for a room where every fixture had a former life: bed frame, tea table, lamps and rails, all from salvaged wood and iron.' },
  { id:'clockmaking', image2:'driftwoodClocks.jpg', image3:'clocksShelf.webp',
    paras:[
      { zh:'時鐘始於海灘，通常在颱風過後的那一週，海把河流帶走的東西還回來。我們帶回的遠比能帶的少——只挑那些看起來已經完成的。', en:'The clocks begin on the beach, usually in the week after a typhoon, when the sea returns what the rivers took. We carry back less than we could — only the pieces that already look finished.' },
      { zh:'每塊木頭在工作室閣樓風乾一季。然後是雕刻：與其說是塑形，不如說是傾聽——找出木頭願意接受鐘面、機芯與指針的位置。', en:'Each block dries in the studio loft for a season. Then the carving: not shaping, but listening — finding where the wood will accept a face, a movement, a pair of hands.' },
      { zh:'鐘面以回收的鋁片與鋅片敲成，沒有兩張紋理相同。機芯也是回收的，清潔、重新上油——連滴答聲都是二手的。', en:'The faces are hammered from salvaged aluminium and zinc sheet; no two patterns repeat. Salvaged movements are cleaned and re-oiled, so even the ticking is second-hand.' },
      { zh:'完成的鐘會在工作室層架上待兩週才放行。若它走得準、站得穩，就準備好去別的地方生活了。', en:'A finished clock sits on the studio shelf for two weeks before we let it go. If it keeps time and keeps still, it is ready to live somewhere else.' },
    ],
    outroZh:'漂流木時鐘以小量、不定期的方式製作——時程由海岸線決定。歡迎來信，我們會在下一批完成時通知你。', outroEn:'Driftwood clocks are made in small, irregular batches — the shoreline decides the schedule. Enquire to be told when the next few are ready.',
    image:'workshopCarving.jpg', tagZh:'創作歷程', tagEn:'Process', dateZh:'2025 冬', dateEn:'Winter 2025', titleZh:'漂流木說的時間——時鐘的誕生', titleEn:'Time, Told by Driftwood — how the clocks are made', textZh:'從颱風季的海岸線到滴答作響的鐘面：一塊漂流木在工作室裡走過的漫長路徑。', textEn:'From a typhoon-season shoreline to a ticking face: the slow route a piece of driftwood takes through the studio.' },
  { id:'exhibition', image2:'streetCarry.webp', image3:'founders.jpg',
    paras:[
      { zh:'展名來自工作室裡一切成形的方式：並肩。在關係裡相倚，於創作中自由。', en:'The exhibition takes its name from how everything in the studio is made: side by side. In relation, leaning on each other; in creation, free.' },
      { zh:'展出的每件作品都是一對——一塊淺色板與一塊炭化板、一枚木圓倚著鐵架、兩座走著微微不同時間的鐘。每一半都能獨自站立；並置時，才互相說明了彼此。', en:'Every work in the show is a pair — a pale board and a charred one, a wood disc resting on an iron stand, two clocks keeping slightly different time. Each half stands alone; together they explain each other.' },
      { zh:'開展那天，我們徒步把作品扛過街道，一如它們平日往返工作室與貨車的方式。幾位鄰居就這樣一路跟到了展場。', en:'On the opening day we carried the works through the streets on foot, the way they usually travel between the studio and the truck. Several neighbours followed us to the gallery.' },
      { zh:'展覽於一山興 Island 展至六月初。多數作品之後會回到工作室、陸續上架——身上又多了一段旅程。', en:'The show runs at 一山興 Island through early June. Most pieces return to the studio afterwards and will appear in the shop, carrying one more journey in them.' },
    ],
    outroZh:'展覽自由參觀；工作室仍採預約制。後續展訊請追蹤 @yuwu-studio。', outroEn:'Exhibition visits are free; studio visits remain by appointment. Follow @yuwu-studio for the next showing.',
    image:'exhibitionPoster.jpg', tagZh:'展覽記事', tagEn:'Exhibition', dateZh:'2026.05.16—06.07', dateEn:'May 16—Jun 7, 2026', titleZh:'「並生」器物創作展', titleEn:'Side by Side — an exhibition of re-created objects', textZh:'二十年並肩工作，以成對的方式展出：木與鐵、深與淺、一位創作者與另一位。', textEn:'Twenty years of working side by side, shown as pairs: wood with iron, dark with pale, one maker with another.' },
]

export const productStories = {
  '001': { introZh:'拆屋牆裡的鋼筋與曾作為門框的檜木板，彎折、焊接，然後讓它自己站穩。', introEn:'Rebar pulled from a demolished wall and a cypress slab that once framed a doorway, bent and welded until it could stand on its own.', storyZh:'桌腳原是拆屋牆裡的鋼筋，桌面是曾經作為門框的檜木板。鏽面經過穩定處理並以蜂蠟封存；木面保留舊釘孔。適合玄關，或一扇高窗旁。', storyEn:'The legs were rebar pulled from a demolished house wall; the top is a cypress slab that once framed a doorway. The rust is stabilised and sealed in beeswax, while the wood keeps its old nail holes.', materialsZh:'回收鋼筋、回收檜木板、蜂蠟塗裝', materialsEn:'Salvaged rebar, reclaimed cypress slab, beeswax finish' },
  '002': { introZh:'一塊漆面斑駁的機械底板，如今承接每日晨間的儀式。', introEn:'A machine base plate, its paint half gone, now holds a morning ritual.', storyZh:'懸臂讓玻璃濾杯移到杯上，沖畢再輕輕移開。底板上的每道刮痕都如拾得時保留，以乾布擦拭即可。', storyEn:'The arm swings the glass dripper over the cup, then out of the way. Every scratch on the plate is left as found.', materialsZh:'回收機械底板、彎折鋼管、壓花玻璃', materialsEn:'Salvaged machine plate, bent steel tube, pressed glass' },
  '003': { introZh:'一根被風吹落的樹枝，一段鍛成淺碟的廢鐵——彼此倚靠。', introEn:'A wind-fallen branch and scrap iron forged into a shallow dish lean on each other.', storyZh:'可置一支蠟燭，或一份季節的小物。樹枝已穩定處理，不會剝落。', storyEn:'For a single candle or a small offering of the season. The branch is stabilised and will not shed.', materialsZh:'鍛打廢鐵、風落枝、鋼底座', materialsEn:'Forged scrap iron, wind-fallen branch, steel base' },
  '004': { introZh:'取自一根裂得無法再承重的樑，燒炙至木紋浮起，再刷淨、上油。', introEn:'Cut from a beam too split to bear weight again, charred until the grain rose, then brushed and oiled.', storyZh:'一段黃銅鑄枝作為提把，適合茶道具、香具，或桌上聚集的任何小物。', storyEn:'A cast-brass twig serves as its handle, for tea things, incense, or whatever small objects gather on your table.', materialsZh:'炭化梧桐木圓片、黃銅枝形提把', materialsEn:'Charred paulownia round, brass branch handle' },
  '005': { introZh:'兩枚自黃銅餘料裁下的圓，拉絲至能像初升的月亮一樣蓄光。', introEn:'Two discs cut from brass off-cuts, brushed until they hold light like a rising moon.', storyZh:'平邊落地，並肩而立。重量足以擋住畫冊，安靜得可以待在窗台。', storyEn:'They stand flat-edged, shoulder to shoulder—heavy enough for art books and quiet enough for a windowsill.', materialsZh:'拉絲黃銅餘料，一對兩件', materialsEn:'Brushed brass off-cuts, two pieces' },
  '006': { introZh:'海用了多年把木頭磨圓；我們只是為指針鑿出一個位置。', introEn:'The sea spent years rounding the wood; we only carved a seat for the hands.', storyZh:'每一座鐘都保留水所決定的形狀，每件皆為獨一無二。', storyEn:'Each clock keeps the shape the water decided. Every piece is unique.', materialsZh:'海蝕漂流木、敲花鋁面、石英機芯', materialsEn:'Sea-worn driftwood, hammered aluminium face, quartz movement' },
  '007': { introZh:'鐵環在樹枝接續處閉合——彼此缺一不可。', introEn:'An iron ring closes where a branch continues it—neither complete without the other.', storyZh:'炭化的底座曾是一根圍籬柱。首先是一件雕塑；在需要的夜晚，也是一座燭台。', storyEn:'The charred base was once a fence post. A sculpture first; a candle stage on the evenings that ask for one.', materialsZh:'焊接鐵環、珊瑚形枝、炭化雕刻底座', materialsEn:'Welded iron ring, coral-form branch, carved charred base' },
  '008': { introZh:'兩片火焰切割的鋼板，一深一亮，走著兩種時間。', introEn:'Two torch-cut plates, one dark and one silver, keep two times.', storyZh:'此刻的時間，與金屬記得的時間。邊緣保留切割毛邊，僅打磨至可安心觸摸。', storyEn:'The hour it is, and the hour the metal remembers. The cutting burrs are softened only enough to handle.', materialsZh:'火焰切割鋼板、回收時鐘機芯', materialsEn:'Torch-cut plate steel, salvaged clock movements' },
  '009': { introZh:'一片鋼網徒手塑形，像葉子般垂落在燈泡四周。', introEn:'A sheet of steel mesh, shaped by hand until it fell like a leaf around the bulb.', storyZh:'黃銅燈座來自一盞拆解的工廠燈，鋼網會在牆上落下柔軟的編織光影。', storyEn:'The brass holder came from a dismantled factory lamp; the mesh throws a soft woven shadow on the wall.', materialsZh:'黃銅燈座、塑形鋼網、布紋電線', materialsEn:'Brass lamp holder, shaped steel mesh, cloth-wound cord' },
  '010': { introZh:'航行數十年的船板，被鹽洗得發白，如今安靜地滑過房間。', introEn:'Plywood that sailed for decades, washed pale by salt, now rolls quietly across a room.', storyZh:'提把是一段磨得溫潤的漂流木。可放唱片、柴薪，或追著陽光移動的植物。', storyEn:'The handle is a driftwood branch worn smooth—for records, firewood, or plants that follow the sun.', materialsZh:'退役船用合板、漂流木提把、工業腳輪', materialsEn:'Retired ship plywood, driftwood handle, industrial casters' },
}
