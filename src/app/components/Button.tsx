

export default function Button({
  onClick,
  children,
  className
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={`bg-black text-white  w-max bg-center ${className || ''}`}>
      {children}
    </button>
  );
}