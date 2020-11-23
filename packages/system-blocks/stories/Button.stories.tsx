import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['blue', 'green'],
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['active', 'waiting'],
      },
    },
  },
} as Meta;

export const Example: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
)

