import { useState } from 'react';
const photos = [
 ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1100&q=85','The cafe'],
 ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85','Coffee moments'],
 ['https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85','Your daily cup'],
 ['https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85','Fresh from the kitchen'],
 ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85','A sweet finish'],
 ['https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1100&q=85','Time well spent']
];
export default function Gallery() { const [lightbox, setLightbox] = useState(null); return <section id="gallery" className="section-pad gallery-section"><div className="container"><div className="section-heading text-center reveal"><p className="eyebrow">LITTLE GLIMPSES</p><h2 className="section-title">The Villa 167 <em>feeling.</em></h2><p className="body-copy mx-auto">A look at the spaces, flavours and moments that make a cafe visit special.</p></div><div className="gallery-grid">{photos.map(([src, alt], i) => <button className={`gallery-item gallery-item-${i+1} reveal`} key={src} onClick={() => setLightbox({src, alt})} aria-label={`Open image: ${alt}`}><img src={src} alt={alt} loading="lazy"/><span>{alt} ↗</span></button>)}</div></div>{lightbox && <div className="lightbox" onClick={() => setLightbox(null)}><button aria-label="Close image">×</button><img src={lightbox.src} alt={lightbox.alt}/><p>{lightbox.alt}</p></div>}</section>; }
