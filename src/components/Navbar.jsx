import { useEffect, useState } from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import { FiArrowUpRight } from 'react-icons/fi';

const links = [['About', '#about'], ['Menu', '#menu'], ['Gallery', '#gallery'], ['Reviews', '#reviews'], ['Contact', '#contact']];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <BsNavbar expand="lg" fixed="top" className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
    <Container>
      <BsNavbar.Brand href="#home" className="brand-lockup"><span className="brand-mark">167</span><span>VILLA <b>167</b><small>CAFE · NAGPUR</small></span></BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="main-navigation" aria-label="Toggle navigation" />
      <BsNavbar.Collapse id="main-navigation"><Nav className="ms-auto align-items-lg-center gap-lg-4">{links.map(([label, href]) => <Nav.Link key={label} href={href}>{label}</Nav.Link>)}<a className="nav-reserve" href="#reserve">Reserve a table <FiArrowUpRight /></a></Nav></BsNavbar.Collapse>
    </Container>
  </BsNavbar>;
}
