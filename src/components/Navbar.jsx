import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = ['About', 'Skills', 'Project', 'Why Me', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light', !dark)
  }, [dark])

  const linkStyle = {
    color: 'var(--muted)',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'color 0.2s'
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: scrolled ? '10px 0' : '20px 0',
          transition: 'padding 0.3s'
        }}
      >
        <div
          className={scrolled ? 'glass' : ''}
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '10px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: scrolled ? '16px' : 0
          }}
        >
          <span
            className="grad"
            style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.3rem' }}
          >
            ranjith.
          </span>

          <ul
            className="nav-links"
            style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}
          >
            {links.map(l => (
              <li key={l}>
                <a
                  href={'#' + l.toLowerCase().replace(' ', '-')}
                  style={linkStyle}
                  onMouseEnter={e => { e.target.style.color = 'var(--cyan)' }}
                  onMouseLeave={e => { e.target.style.color = 'var(--muted)' }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setDark(!dark)}
              style={{
                background: 'none',
                border: '1px solid var(--glass-border)',
                borderRadius: '999px',
                padding: '6px 10px',
                color: 'var(--text)',
                cursor: 'none',
                display: 'flex',
                alignItems: 'center',
                transition: 'border-color 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)' }}
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <a
              href="#contact"
              className="nav-hire"
              style={{
                fontSize: '0.8rem',
                padding: '8px 18px',
                borderRadius: '999px',
                border: '1px solid var(--cyan)',
                color: 'var(--cyan)',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--cyan)'
                e.currentTarget.style.color = '#000'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--cyan)'
              }}
            >
              Hire Me
            </a>

            <button
              className="nav-mob"
              onClick={() => setOpen(!open)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: 'var(--text)',
                cursor: 'none'
              }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {open && (
        <div
          className="glass"
          style={{
            position: 'fixed',
            top: '72px', left: '12px', right: '12px',
            zIndex: 99,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
        >
          {links.map(l => (
            <li key={l}>
              <a
                href={'#' + l.toLowerCase().replace(' ', '-')}
                onClick={() => setOpen(false)}
                style={linkStyle}
              >
                {l}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              borderRadius: '999px',
              border: '1px solid var(--cyan)',
              color: 'var(--cyan)',
              textDecoration: 'none',
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  )
}