import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
export default function Hero() { return <section id="home" className="hero-section">
  <div className="hero-image" /> <div className="hero-shade" />
  <div className="container hero-content"><div className="hero-copy"><p className="eyebrow light-eyebrow"><span /> WELCOME TO VILLA 167</p><h1>Where every moment<br/><em>feels special.</em></h1><p className="hero-description">Discover great coffee, delicious food, and beautiful moments at your favourite neighbourhood cafe.</p><div className="hero-actions"><a className="btn-gold" href="#menu">Explore our menu <FiArrowUpRight /></a><a className="btn-outline-light" href="#reserve">Reserve a table</a></div></div>
  <div className="hero-bottom"><span>ABHYANKAR NAGAR · NAGPUR</span><a href="#about">SCROLL TO EXPLORE <FiArrowDown /></a><span className="hero-rating">★ &nbsp;4.3 <small>GUEST RATING</small></span></div></div>
</section>; }
