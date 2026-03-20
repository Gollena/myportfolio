export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '40px 24px',
      color: 'var(--muted)', fontSize: '0.8rem',
      borderTop: '1px solid var(--glass-border)',
      position: 'relative', zIndex: 1
    }}>
      <p>
        Designed & Built with ❤️ by{' '}
        <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>Ranjith</span>
        {' '}· {new Date().getFullYear()}
      </p>
      <p style={{ marginTop: '6px', fontSize: '0.75rem' }}>
        Made with React + Vite + Tailwind CSS v4
      </p>
    </footer>
  )
}