import { useNavigate } from "react-router";
import { useCallback } from "react";

interface SlideContainerProps {
  children: React.ReactNode;
  nextSlide?: string;
  className?: string;
}

export function SlideContainer({ children, nextSlide, className = "" }: SlideContainerProps) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (nextSlide) {
      navigate(nextSlide);
    }
  }, [navigate, nextSlide]);

  return (
    <div
      className={`slide-container cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
