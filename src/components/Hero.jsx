import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'

export default function Hero() {
  return (
    <section id="about" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', width: '100%' }}>

        <div className="hero-inner" style={{ display: 'flex', alignItems: 'flex-end', gap: '64px', justifyContent: 'space-between' }}>

          {/* LEFT TEXT */}
          <div style={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              style={{ marginBottom: '20px' }}
            >
              <span className="glass" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '0.7rem', padding: '6px 14px', borderRadius: '999px',
                color: 'var(--cyan)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cyan)', animation: 'pulse 1.5s infinite' }} />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 1.0, marginBottom: '8px' }}
            >
              Hey, I'm
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="grad-animated"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 1.0, marginBottom: '28px' }}
            >
              Ranjith 👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.9, maxWidth: '480px', marginBottom: '36px' }}
            >
              A self-taught <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>Frontend Developer</span> from Hyderabad.
              I build clean, fast, and beautiful web interfaces.
              Fresh out of learning — ready to bring my best to a real team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}
            >
              <a href="#project" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '999px',
                background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                color: '#000', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem'
              }}>
                See My Work <ArrowDown size={15} />
              </a>
              <a href="#contact" className="glass" style={{
                padding: '13px 28px', borderRadius: '999px',
                color: 'var(--text)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem'
              }}>
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: '18px' }}
            >
              {[
                { Icon: Github, href: 'https://github.com' },
                { Icon: Linkedin, href: 'https://linkedin.com' },
                { Icon: Twitter, href: 'https://twitter.com' },
              ].map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank"
                  style={{ color: 'var(--muted)', transition: 'color 0.2s', display: 'flex' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo pop-out */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="photo-wrap"
          >
            {/* Glow behind card */}
            <div style={{
              position: 'absolute', inset: '-20px', borderRadius: '32px',
              background: 'radial-gradient(ellipse at center, rgba(155,93,229,0.3) 0%, transparent 70%)',
              filter: 'blur(20px)', zIndex: 0
            }} />

            <div className="photo-card glass" style={{ position: 'relative', zIndex: 1 }}>
              {/* 👇 Replace with your photo */}
              <img src="/p.jpg" alt="Ranjith" />

              {/* Floating badge */}
              <div className="glass" style={{
                position: 'absolute', top: '-18px', right: '-18px', zIndex: 20,
                padding: '8px 14px', borderRadius: '12px', fontSize: '0.75rem',
                fontWeight: 700, color: 'var(--cyan)', whiteSpace: 'nowrap',
                animation: 'floatBadge 3s ease-in-out infinite', '--r': '-3deg'
              }}>
                ✦ Available
              </div>

              <div className="glass" style={{
                position: 'absolute', bottom: '-18px', left: '-18px', zIndex: 20,
                padding: '8px 14px', borderRadius: '12px', fontSize: '0.75rem',
                fontWeight: 700, color: 'var(--purple)', whiteSpace: 'nowrap',
                animation: 'floatBadge 3.5s ease-in-out infinite 0.5s', '--r': '3deg'
              }}>
                💻 React Dev
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}