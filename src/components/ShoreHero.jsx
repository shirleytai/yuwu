export default function ShoreHero({ lang }) {
  return <section className="shore-hero" aria-label={lang === 'zh' ? '禹物再製所：海岸與手繪漂流木' : 'YU·WU: a coast of reclaimed stories'}>
    <div className="shore-stage" aria-hidden="true">
      <img className="shore-background" src="/images/shore-background-v2.webp" alt="" fetchPriority="high" />
      <svg className="shore-water" viewBox="0 0 1672 941" preserveAspectRatio="none">
        <g className="shore-tide">
          <path className="shore-wet" d="M-50 722 Q180 733 370 695 T770 671 T1150 623 T1740 562 L1740 626 Q1390 666 1130 686 T760 729 T360 762 T-50 796Z"/>
          <path className="shore-foam" d="M-50 771 Q100 788 260 751 T560 737 T870 699 T1190 668 T1740 605"/>
          <path className="shore-foam shore-foam-fine" d="M-50 755 Q100 772 260 735 T560 721 T870 683 T1190 652 T1740 589"/>
        </g>
      </svg>
      <img className="shore-wood shore-wood-left" src="/images/shore-wood-v2.webp" alt="" />
      <img className="shore-wood shore-wood-middle" src="/images/shore-wood-v2.webp" alt="" />
      <img className="shore-wood shore-wood-right" src="/images/shore-wood-v2.webp" alt="" />
    </div>
  </section>
}
