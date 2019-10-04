import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../'
import Paper from '@material-ui/core/Paper'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Paper><Button/></Paper>, div)
    ReactDOM.unmountComponentAtNode(div)
})