import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('light', !dark)
  }, [dark])

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
      title="Toggle theme"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}