import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

export default function Project() {
  return (
    <section id="project" className="section">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <p style={{ color: 'var(--cyan)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
            My Work
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800 }}>
            The Project
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '12px', fontSize: '0.95rem' }}>
            One project. Built with care. Every detail matters.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass project-inner"
          style={{
            display: 'flex', gap: '48px', padding: '48px',
            borderRadius: '28px', alignItems: 'center',
            border: '1px solid rgba(0,245,212,0.15)',
            boxShadow: '0 0 80px rgba(155,93,229,0.1)'
          }}
        >
          {/* Mockup preview */}
          <div style={{ flex: '1', minWidth: '280px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              border: '1px solid var(--glass-border)',
              background: 'linear-gradient(135deg, rgba(155,93,229,0.15), rgba(0,245,212,0.1))',
              aspectRatio: '16/10', display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative'
            }}>
              {/* 👇 Replace with your actual project screenshot */}
              <img
                src="/p.png"
                alt="Project preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
              />
              <div style={{
                position: 'absolute', top: '12px', left: '12px',
                display: 'flex', gap: '6px'
              }}>
                {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                  <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                ))}
              </div>
            </div>
          </div>

          {/* Project info */}
          <div style={{ flex: '1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Star size={14} style={{ color: 'var(--yellow)' }} />
              <span style={{ fontSize: '0.7rem', color: 'var(--yellow)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                Featured Project
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
              ShopEase {/* 👈 Replace */}
            </h3>

            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '28px' }}>
              {/* 👇 Replace with your real description */}
              A fully responsive web application built with React and Tailwind CSS.
              Focused on clean UI, smooth interactions, and great user experience.
              This project showcases my ability to turn a design into a real, working product.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
              {['React', 'Vite', 'Tailwind CSS', 'JavaScript'].map(tag => (
                <span key={tag} className="glass" style={{
                  fontSize: '0.75rem', padding: '5px 14px', borderRadius: '999px',
                  color: 'var(--cyan)', fontWeight: 600, border: '1px solid rgba(0,245,212,0.2)'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <a href="https://ecom-eta-wheat.vercel.app" target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '999px',
                background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                color: '#000', fontWeight: 700, textDecoration: 'none', fontSize: '0.875rem'
              }}>
                <ExternalLink size={15} /> Live Demo
              </a>
              <a href="https://github.com/Gollena/ecom" target="_blank" rel="noreferrer" className="glass" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '999px',
                color: 'var(--text)', textDecoration: 'none', fontWeight: 500, fontSize: '0.875rem'
              }}>
                <Github size={15} /> Source Code
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}