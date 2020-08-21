import React, { forwardRef } from 'react'
import { useTheme } from 'emotion-theming'
import Link from '@link'
import { useMember } from '@lib/auth'
import { media } from '@lib/styles/helpers'

const mainMenus = [
  {
    name: 'Home',
    pathname: '/',
  },
  {
    name: 'About',
    pathname: '/about',
  },
]

const LinkItem = forwardRef(({ menu, ...props }, ref) => (
  <a
    {...props}
    ref={ref}
    css={{
      display: 'inline-box',
      padding: '5px 15px 10px 0px',
      marginRight: 50,
      [media('md')]: {
        fontSize: '1.2em',
      },
    }}>
    {menu.name}
  </a>
))

export default function Navigation() {
  const { variables, themeMode, toggleTheme } = useTheme()
  const { isAuthenticated } = useMember()

  return (
    <nav css={{ marginBottom: 10, borderBottom: '1px solid #aaa' }}>
      {mainMenus.map(menu => (
        <Link key={menu.name} pathname={menu.pathname} passHref>
          <LinkItem menu={menu} />
        </Link>
      ))}

      {isAuthenticated ? (
        <Link key="Account" pathname="/account" passHref>
          <LinkItem menu={{ name: 'Account' }} />
        </Link>
      ) : (
        <Link key="Login" pathname="/login" passHref>
          <LinkItem menu={{ name: 'Login' }} />
        </Link>
      )}

      <button
        onClick={() => toggleTheme()}
        css={{
          float: 'right',
          padding: '8px 15px',
          border: `1px solid ${variables.colors.background.secondary}`,
          borderRadius: '5px',
          color: variables.colors.text.secondary,
          textTransform: 'capitalize',
        }}>
        {themeMode === 'light' ? 'dark' : 'light'} Mode
      </button>
    </nav>
  )
}
