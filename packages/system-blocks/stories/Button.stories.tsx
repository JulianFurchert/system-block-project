import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Example/Button',
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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};