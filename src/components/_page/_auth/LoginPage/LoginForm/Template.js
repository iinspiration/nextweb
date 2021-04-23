import React from 'react'
import { getStatic } from '@lib/static'

function LoginBox() {
  return {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    '.inner': {
      background: '#fff',
      width: '25em',
      padding: '1em',
      borderRadius: '.7em',
    },
    '.input-row': {
      display: 'flex',
      flexDirection: 'column',
      margin: '1.2em auto',
      '* > ': {},
      '.label': {
        marginBottom: '.5em',
        fontWeight: '500',
      },
      input: {
        display: 'block',
        width: '100%',
        height: '35px',
        padding: '5px',
        border: '1px solid #9b9b9b',
        borderRadius: '2.5px',
        background: '#eaeaea',
      },
    },
    button: {
      display: 'block',
      width: '100%',
      padding: '.25em',
      height: '35px',
      borderRadius: '2.5px',
      background: '#16c79a',
      border: 'none',
      color: '#fff',
      fontWeight: '500',
    },
  }
}

export default function Template({ register, errors }) {
  return (
    <div css={LoginBox()}>
      <div className="inner">
        <div
          css={{ maxWidth: '300px', margin: '1em auto', textAlign: 'center' }}>
          {/* <img
            css={{ maxWidth: '250px', margin: '0 auto' }}
            src={`${getStatic('images/logo-s-campaign.svg')}`}
          /> */}
        </div>
        <div className="input-row">
          <label>
            <div className="label">Email</div>
            <input name="email" ref={register} />
          </label>
          <span>{errors.username?.message}</span>
        </div>
        <div className="input-row">
          <label>
            <div className="label">Password</div>
            <input name="password" type="password" ref={register} />
          </label>
          <span>{errors.password?.message}</span>
        </div>
        <button>Log in</button>
      </div>
    </div>
  )
}
