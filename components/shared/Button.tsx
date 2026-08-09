import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'classic' | 'slide' | 'arrow';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'classic', children, className = '', ...props }, ref) => {

        // Base styles applied to all buttons
        const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 active:scale-95";


        // 2. Background Slide Fill (Left-to-Right)
        if (variant === 'slide') {
            return (
                <button
                    ref={ref}
                    className={`${baseStyles} bg-transparent border-2 border-secondary text-primary group hover:text-white ${className}`}
                    {...props}
                >
                    <span className="absolute inset-0 w-full h-full bg-primary transition-transform duration-300 -translate-x-full group-hover:translate-x-0 ease-out -z-10" />
                    <span className="relative z-10">{children}</span>
                </button>
            );
        }



        return null;
    }
);

Button.displayName = 'Button';