import { cn } from "@/lib/utils";

type IconButtonProps = {
  icon: React.ReactElement;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function IconButton({ className, onClick, icon }: IconButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default IconButton;
