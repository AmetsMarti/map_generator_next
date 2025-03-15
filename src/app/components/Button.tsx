

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
    <button onClick={onClick} className={`bg-purple-900 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded cursor-pointer m-2 bg-center ${className || ''}`}>
      {children}
    </button>
  );
}