interface SlideHeaderProps {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SlideHeader({ tag, title, subtitle, className = "" }: SlideHeaderProps) {
  return (
    <div className={`slide-header ${className}`}>
      <div className="flex items-center mb-2">
        <div className="h-1 w-10 bg-blue-400 mr-3"></div>
        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">{tag}</p>
      </div>
      <h1 className="text-4xl font-black text-white">{title}</h1>
      {subtitle && <p className="text-gray-400 mt-2 text-lg">{subtitle}</p>}
    </div>
  );
}
