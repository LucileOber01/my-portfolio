import { useEffect, useState } from 'react'

function RondDecoratif({ className, pivot, sens = 1 }) {
  const [angle, setAngle] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    function tourner() {
      setAngle(window.scrollY * 0.1 * sens)
    }

    window.addEventListener('scroll', tourner)
    return () => window.removeEventListener('scroll', tourner)
  }, [sens])

  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full ${pivot} ${className}`}
      style={{ transform: `rotate(${angle}deg)` }}
    ></div>
  )
}

export default RondDecoratif