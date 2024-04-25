import { useLayoutEffect, useState } from 'react'

export default function useWindowPosition(id) {

  const [windowAnimation, setWindowAnimation] = useState(false);

  useLayoutEffect(() => {
    const updateposition = () => {
      const offSet = window.document.getElementById().offsetHeight
      if (window.scrollY > offSet * 0.7) {
        setWindowAnimation(true);
      }
    }
    window.addEventListener('scroll', updateposition);
    updateposition();
    return () => window.removeEventListener('scroll', updateposition)
  }, [id])
  return windowAnimation
}