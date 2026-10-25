import { useEffect, useRef, useState } from 'react'

function Apparition({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          setVisible(true)
          observateur.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observateur.observe(ref.current)
    return () => observateur.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
      }`}
    >
      {children}
    </div>
  )
}

export default Apparition