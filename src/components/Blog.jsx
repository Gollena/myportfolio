import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Mastering React 19 Compiler — What Changes for You',
    date: 'Mar 2025', readTime: '8 min', tag: 'React', href: '#',
  },
  {
    title: 'Building a Type-safe Design System from Scratch',
    date: 'Feb 2025', readTime: '12 min', tag: 'Architecture', href: '#',
  },
  {
    title: 'CSS View Transitions: The Future of Page Animations',
    date: 'Jan 2025', readTime: '6 min', tag: 'CSS', href: '#',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}
        >
          <div>
            <p style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Writing
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>Latest Articles</h2>
          </div>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', textDecoration: 'none', fontSize: '0.875rem' }}>
            All posts <ArrowRight size={16} />
          </a>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
              style={{
                padding: '24px 28px', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', textDecoration: 'none', cursor: 'pointer', gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, minWidth: 0 }}>
                <span style={{
                  fontSize: '0.68rem', padding: '4px 12px', borderRadius: '999px', whiteSpace: 'nowrap',
                  background: 'rgba(0,245,255,0.1)', color: 'var(--accent-cyan)', fontWeight: 600
                }}>
                  {post.tag}
                </span>
                <h3 style={{
                  fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                }}>
                  {post.title}
                </h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-secondary)', fontSize: '0.75rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <span>{post.readTime} read</span>
                <span>{post.date}</span>
                <ArrowRight size={15} style={{ color: 'var(--accent-cyan)' }} />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}