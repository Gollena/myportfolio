import { useEffect, useState } from 'react'

export default function ScrollBar() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const fn = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setW((scrolled / total) * 100)
    }
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return <div id="scroll-bar" style={{ width: `${w}%` }} />
}