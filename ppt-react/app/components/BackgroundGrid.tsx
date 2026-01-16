export function BackgroundGrid() {
  return <div className="bg-grid"></div>;
}

export function BackgroundPattern() {
  return <div className="bg-pattern"></div>;
}

export function BackgroundDots() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231e293b' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    />
  );
}
