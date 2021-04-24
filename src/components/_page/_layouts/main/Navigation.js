import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import get from 'lodash/get'
import { useMember, getDataFromToken } from '@lib/auth'
import Link from '@lib/router/Link'
import { media } from '@lib/styles/helpers'
import { getStatic } from '@lib/static'
import { parseCookies } from 'nookies'
import { AUTH_COOKIE_NAME } from '@modules/_auth/config'

const navList = [
  {
    route: 'hotel-guest',
    title: 'Rooms',
    image: 'images/prize.svg',
  },
  {
    route: 'hotel-guest',
    title: 'Guests',
    image: 'images/user.svg',
  },
  {
    route: 'hotel-guest',
    title: 'Staffs',
    image: 'images/user.svg',
  },
  {
    route: 'hotel-guest',
    title: 'Financial Report',
    image: 'images/winner.svg',
  },
]

const superAdminList = [
  {
    route: 'hotel-guest',
    title: 'Guestsx',
    image: 'images/prize.svg',
  },
]

function NavStyled() {
  return {
    width: '100%',
    padding: 10,
    display: 'block',
    color: '#fff',
    fontWeight: '400',
    fontSize: '0.9em',
    textAlign: 'center',
    transition: 'all 0.5s',
    background:
      'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.0) 100%)',
    img: {
      height: 25,
    },
    [media('sm')]: {
      padding: '15px 10px',
      fontSize: '1.1em',
      img: {
        height: 35,
      },
      '&:hover, &.active': {
        background:
          'linear-gradient(160deg, rgba(155,0,0,0.85) 0%, rgba(255,255,255,0) 100%)',
      },
    },
  }
}

export default function Navigation({ hotelInfo }) {
  const {
    query: { hotelId },
    asPath,
  } = useRouter()
  const { signOut } = useMember()
  const [currentPage, setCurrentPage] = useState(null)
  const [menus, setMenus] = useState(navList)

  const cookies = parseCookies()
  const tokenInCookie = cookies[AUTH_COOKIE_NAME]

  useEffect(() => {
    const userData = tokenInCookie && getDataFromToken(tokenInCookie)
    const role = get(userData, 'role', null)
    if (tokenInCookie && role === 'superadmin') {
      setMenus([...menus, ...superAdminList])
    }
  }, [])

  useEffect(() => {
    const checkPage =
      asPath.replace(`/hotel/${hotelId}/`, '').replace('/', '') || null

    setCurrentPage(checkPage)
  }, [asPath])

  return (
    <nav
      css={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        '@media (min-width: 832px)': { flexDirection: 'column' },
      }}>
      <ul
        css={{
          display: 'flex',
          width: '100%',
          height: '100%',
          margin: '0',
          padding: '0',
          flexDirection: 'row',
          '@media (min-width: 832px)': { flexDirection: 'column' },
        }}>
        <li css={{ margin: 0 }}>
          <Link route="hotel-detail" params={{ id: hotelId }} passHref>
            <a
              css={NavStyled()}
              className={currentPage === null ? 'active' : ''}>
              <img src={`${getStatic('images/home.svg')}`} />
              Dashboard
            </a>
          </Link>
        </li>
        {menus.map(({ route, title, image }, i) => {
          return (
            <li css={{ margin: 0 }} key={i}>
              <Link route={route} params={{ id: hotelId }} passHref>
                <a
                  css={NavStyled()}
                  className={`hotel-${currentPage}` === route ? 'active' : ''}>
                  <img src={`${getStatic(image)}`} />
                  {title}
                </a>
              </Link>
            </li>
          )
        })}
        <li css={{ margin: 'auto 0 0' }}>
          <a css={NavStyled()} onClick={signOut}>
            <img src={`${getStatic('images/logout.svg')}`} />
            Log out
          </a>
        </li>
      </ul>
    </nav>
  )
}
