import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';

import { Button } from 'components/atoms';
import { Header } from 'components/molecules';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

export default {
  title: 'Header',
  component: Header,
  argTypes: { onClick: { action: 'Adicionar agendamento' } },
} as Meta;

const Template: Story = (args) => (
  <ThemeProvider theme={theme}>
    <Header {...args} />
    <GlobalStyle />
  </ThemeProvider>
);

export const WithButton = Template.bind({});
WithButton.args = {
  icon: 'add',
  children: <Button styleButton="secondary">Secondary Button</Button>,
};
