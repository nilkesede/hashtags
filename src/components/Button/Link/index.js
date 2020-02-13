import {string} from 'prop-types'
import NextLink from 'next/link'
import styled from 'styled-components'

import Text from '../../Text'

export const Anchor = styled(Text).attrs({
  as: 'a'
})`
  color: ${props => props.theme.colors[props.color] || props.theme.colors.primaryColor};
  cursor: pointer;
  transition: color .2s;

  &:hover {
    color: ${props => props.theme.colors[props.hoverColor || 'gray']};
  }
`

const Link = ({href, ...restProps}) => {
  if (!href) {
    return <Anchor {...restProps}/>
  }

  if (href.indexOf('http') === 0) {
    return (
      <Anchor
        href={href}
        {...restProps}
      />
    )
  }

  return (
    <NextLink href={href}>
      <Anchor {...restProps}/>
    </NextLink>
  )
}

Link.propTypes = {
  href: string
}

Link.defaultProps = {
  href: null
}

export default Link
