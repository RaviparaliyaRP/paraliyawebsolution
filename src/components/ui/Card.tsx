import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hover = false, children, className = '', ...props }, ref) => {
    const baseClasses = 'rounded-xl transition-all duration-300';
    
    const variants = {
      default: 'bg-white',
      elevated: 'bg-white shadow-lg hover:shadow-xl',
      bordered: 'bg-white border border-gray-200 hover:border-accent-purple/30',
    };

    const hoverClasses = hover ? 'hover:shadow-brand-lg hover:-translate-y-1 hover:scale-105' : '';
    
    const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
