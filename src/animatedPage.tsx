import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

interface AnimatedPageProps {
  timeout: number
  children: React.ReactNode
}

export const AnimatedPage = ({ timeout, children }: AnimatedPageProps) => {
  const [showAnimation, setShowAnimation] = useState(false)
  useEffect(() => {
    setShowAnimation(true)
  }, [])

  return (
    <CSSTransition
      in={showAnimation}
      timeout={timeout}
      classNames="alert"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  )
}
