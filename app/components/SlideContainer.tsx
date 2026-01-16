import { useNavigate } from 'react-router'
import { useCallback } from 'react'

interface SlideContainerProps {
  children: React.ReactNode
  nextSlide?: string
  isBackButton?: boolean
  className?: string
}

export function SlideContainer({ children, nextSlide, isBackButton, className = '' }: SlideContainerProps) {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    if (nextSlide) {
      navigate(nextSlide)
    }
  }, [navigate, nextSlide])

  const handleBack = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      navigate(-1)
    },
    [navigate]
  )

  return (
    <div className={`slide-container ${className}`} onClick={handleClick}>
      {isBackButton && (
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 rounded-lg text-slate-300 hover:text-white transition-all duration-200 backdrop-blur-sm"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      )}
      {children}
    </div>
  )
}
