import React from 'react'
import { Link } from 'gatsby'
import Bio from "./bio"
import _ from 'lodash/fp'

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, locaiton }) => {
  return (
    <h1 css={{
      fontSize: `1.5em`,
      marginBottom: 0,
      marginTop: 0,
    }}>
      <Link to='/'>{ children }</Link>
    </h1>
  )
}

export default ({ children, title, ...props }) => {
  return (
    <header css={{
      '@media print': { display: 'none' },
    }}>
      <div css={theme => ({
        maxWidth: theme.maxWidth,
        margin: '0 auto',
        padding: '2em 1.5rem',
      })}>
        <div css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '1em',
        }}>
          <Title>{ title }</Title>
          { children }
        </div>
        {_.get('location.pathname')(props) === rootPath && <Bio />}
      </div>
    </header>
  )
}
