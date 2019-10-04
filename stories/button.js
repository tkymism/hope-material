import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '../src/'

export default {
    component: Button,
    title: 'button',
}

export const text = () => <Button onclick={action('clicked')}> Hello </Button>
export const emoji = () => (
    <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
    </Button>
)