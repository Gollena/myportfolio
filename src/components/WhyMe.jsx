import { motion } from 'framer-motion'
import { Zap, Code2, Eye, MessageCircle } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    color: '#f9c74f',
    title: 'Fast Learner',
    desc: 'I taught myself React, Tailwind, and Git from scratch. Give me a new tool and I will master it fast.'
  },
  {
    icon: Code2,
    color: '#00f5d4',
    title: 'Clean Code',
    desc: 'I care about readable, maintainable code. I write components that are easy to understand and easy to change.'
  },
  {
    icon: Eye,
    color: '#9b5de5',
    title: 'Eye for Design',
    desc: 'I notice spacing, contrast, and micro-interactions. I do not just make it work, I make it look great too.'
  },
  {
    icon: MessageCircle,
    color: '#f72585',
    title: 'Open to Feedback',
    desc: 'I take feedback seriously, ask questions, and never stop improving. You will not have to repeat yourself twice.'
  },
]

export default function WhyMe() {
  return (
    <section id="why-me" className="section">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <p style={{
            color: 'var(--cyan)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            The Real Question
          </p>

          <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>
            Why Hire Me?
          </h2>

          <p style={{
            color: 'var(--muted)',
            marginTop: '12px',
            fontSize: '0.95rem',
            maxWidth: '500px',
            margin: '12px auto 0'
          }}>
            I may not have years of experience. But I have something that cannot be faked, genuine passion and drive.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass why-card"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: r.color + '15',
                border: '1px solid ' + r.color + '30',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <r.icon size={22} style={{ color: r.color }} />
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                {r.title}
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8 }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}