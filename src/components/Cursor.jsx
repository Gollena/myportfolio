import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById('c-dot')
    const ring = document.getElementById('c-ring')
    if (!dot || !ring) return

    const move = (e) => {
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
      setTimeout(() => {
        ring.style.left = e.clientX + 'px'
        ring.style.top = e.clientY + 'px'
      }, 80)
    }

    const grow = () => {
      ring.style.width = '52px'
      ring.style.height = '52px'
      ring.style.borderColor = 'rgba(0,245,212,1)'
      dot.style.transform = 'translate(-50%,-50%) scale(2.5)'
    }
    const shrink = () => {
      ring.style.width = '32px'
      ring.style.height = '32px'
      ring.style.borderColor = 'rgba(0,245,212,0.6)'
      dot.style.transform = 'translate(-50%,-50%) scale(1)'
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div id="c-dot" />
      <div id="c-ring" />
    </>
  )
}