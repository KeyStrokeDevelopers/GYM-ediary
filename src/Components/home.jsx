import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`

class Home extends Component {
    render() {
        return (<Container>
            <Link to='/login'>Login</Link>
        </Container>
        )
    }
}

export default withRouter(Home);