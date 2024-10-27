import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked: boolean;
  className?: string;
}

export const TypeButton = ({ isChecked, children, className='', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(`h-screen min-w-[8rem] max-h-[3.5rem] items-center justify-center rounded-[0.31rem] body1-medium ${
        isChecked ? 'bg-grayscale-80 text-dark' : 'bg-grayscale-30 text-grayscale-80'
      }`, className
  )}
      
      {...props}
    >
      {children}
    </button>
  );
};

export const ConceptButton = ({ isChecked, children, className='', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(`items-center justify-center py-[2rem] rounded-[0.31rem] body1-medium ${
        isChecked ? 'bg-grayscale-80 text-dark' : 'bg-grayscale-30 text-grayscale-80'
      }`, className
    )}
      {...props}
    >
      {children}
    </button>
  );
};

export const FeatureButton = ({ isChecked, children, className='', ...props }: ButtonProps) => {
  return (
    <button
      className={cn(`h-screen items-center justify-center max-h-[9rem] py-[1rem] rounded-[0.31rem] body1-medium ${
        isChecked ? 'bg-grayscale-80 text-dark' : 'bg-grayscale-30 text-grayscale-80'
      }`, className
    )}
      {...props}
    >
      {children}
    </button>
  );
};