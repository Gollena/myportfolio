import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML5',       emoji: '🧱', color: '#e34f26' },
  { name: 'CSS3',        emoji: '🎨', color: '#264de4' },
  { name: 'JavaScript',  emoji: '⚡', color: '#f7df1e' },
  { name: 'React',       emoji: '⚛️',  color: '#61dafb' },
  { name: 'Tailwind CSS',emoji: '🌊', color: '#38bdf8' },
  { name: 'Git',         emoji: '🌿', color: '#f05032' },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <p style={{ color: 'var(--cyan)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
            What I Know
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800 }}>My Skills</h2>
          <p style={{ color: 'var(--muted)', marginTop: '12px', fontSize: '0.95rem' }}>
            Honest skills I use every day — no fluff.
          </p>
        </motion.div>

        <div className="skills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -6 }}
              className="glass"
              style={{
                padding: '18px 28px', borderRadius: '999px',
                display: 'flex', alignItems: 'center', gap: '10px',
                cursor: 'none',
                boxShadow: `0 0 0 0 ${skill.color}`,
                transition: 'box-shadow 0.3s',
                animation: `floatBadge ${3 + i * 0.3}s ease-in-out infinite`,
                '--r': `${(i % 3 - 1) * 2}deg`
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 30px ${skill.color}40`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 0 transparent'}
            >
              <span style={{ fontSize: '1.4rem' }}>{skill.emoji}</span>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: skill.color }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}