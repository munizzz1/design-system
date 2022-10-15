import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChildren?: boolean;
    className?: string;
}

export function Heading({ size = 'md', children, asChildren, className }: HeadingProps) {
    const Comp = asChildren ? Slot : 'h2';

    return (
        <Comp 
            className={clsx(
                "text-gray-100 font-bold",
                {
                    'text-lg': size == 'sm',
                    'text-xl': size == 'md',
                    'text-2xl': size == 'lg',
                },
                className
            )}
        >
            { children }
        </Comp>
    )
}