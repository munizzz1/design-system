import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChildren?: boolean;
}

export function Text({ size = 'md', children, asChildren }: TextProps) {
    const Comp = asChildren ? Slot : 'span';

    return (
        <Comp 
            className={clsx(
                "text-gray-100", 
                {
                    'text-xs': size == 'sm',
                    'text-sm': size == 'md',
                    'text-md': size == 'lg',
                }
            )}
        >
            { children }
        </Comp>
    )
}