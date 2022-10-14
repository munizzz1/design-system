import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
};

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
};

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChildren: true,
        children: (
            <p>Teste</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }   
        },
        asChildren: {
            table: {
                disable: true,
            }   
        }
    }
};