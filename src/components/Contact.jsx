import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const formData = new FormData(formRef.current)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'a11f74cd-5f00-4131-9053-08a7a96ef824',  
          name: formData.get('user_name'),
          email: formData.get('user_email'),
          message: formData.get('message'),
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', background: 'transparent',
    border: '1px solid var(--glass-border)', borderRadius: '12px',
    padding: '13px 16px', fontSize: '0.9rem',
    color: 'var(--text)', outline: 'none',
    transition: 'border-color 0.2s', fontFamily: 'DM Sans, sans-serif'
  }

  return (
    <section id="contact" className="section" style={{ paddingBottom: '160px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <p style={{ color: 'var(--cyan)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Let's Connect
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800 }}>
            I'm Looking for My <br />
            <span className="grad-animated">First Opportunity 🚀</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '16px', fontSize: '0.95rem', maxWidth: '500px', margin: '16px auto 0' }}>
            If you're looking for a passionate, dedicated fresher who will give 100% — let's talk. I'd love to be part of your team.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            <div className="glass" style={{ padding: '28px', borderRadius: '20px' }}>
              <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.9 }}>
                "I may be a fresher, but I'm not inexperienced at <span style={{ color: 'var(--cyan)' }}>learning fast</span>, building <span style={{ color: 'var(--purple)' }}>real things</span>, and showing up with <span style={{ color: 'var(--pink)' }}>full energy</span> every day."
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { Icon: Mail, text: 'gollenaranjith479@gmail.com' },
                { Icon: MapPin, text: 'Hyderabad, India · Remote / On-site' },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'var(--muted)' }}>
                  <Icon size={17} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem' }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '36px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {[
              { name: 'user_name', label: 'Your Name', type: 'text', placeholder: 'ex: Ranjith' },
              { name: 'user_email', label: 'Your Email', type: 'email', placeholder: 'ex: ranji@gmail.com' },
            ].map(f => (
              <div key={f.name}>
                <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'var(--muted)', marginBottom: '8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {f.label}
                </label>
                <input type={f.type} name={f.name} placeholder={f.placeholder} required style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                  onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>
            ))}

            <div>
              <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'var(--muted)', marginBottom: '8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Message
              </label>
              <textarea name="message" rows={4} required
                placeholder="Hi Ranjith, I'd like to discuss an opportunity..."
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>

            {status === 'success' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#22c55e', fontSize: '0.875rem' }}>
                <CheckCircle size={16} /> Message sent! I'll reply soon 🙌
              </div>
            )}
            {status === 'error' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontSize: '0.875rem' }}>
                <AlertCircle size={16} /> Something went wrong. Try again.
              </div>
            )}

            <button type="submit" disabled={status === 'sending'} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              padding: '14px', borderRadius: '12px', border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              background: status === 'sending' ? 'rgba(0,245,212,0.4)' : 'linear-gradient(135deg, var(--cyan), var(--purple))',
              color: '#000', fontWeight: 700, fontSize: '0.9rem', fontFamily: 'Syne, sans-serif', transition: 'opacity 0.2s'
            }}>
              {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={16} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}