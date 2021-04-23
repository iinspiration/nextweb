import React from 'react'
function BoxStyled(props) {
  return {
    position: 'relative',
    background: '#FFF',
    boxShadow: '1px 1px 10px 0px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    width: '100%',
    '.inner': {
      display: 'flex',
      alignItems: 'flex-start',
      height: '100%',
      '.text': { width: '40%', fontSize: '1.25em', fontWeight: 'bold' },
      '.value': {
        width: '50%',
        textAlign: 'right',
        paddingRight: '5px',
        fontSize: '2.5em',
        lineHeight: '0.9',
        fontWeight: 'bold',
      },
      '.unit': { width: '10%' },
    },
    '* >': {
      color: '#fff',
    },
    '&.frist-col': {
      marginBottom: 15,
      background: '#11698e',
      '> *': {
        color: '#fff',
      },
    },
    ...props,
  }
}

export default function BoxHilight(props) {
  const { title1, value1, unit1, title2, value2, unit2, subValue2 } = props
  return (
    <div className="frist-col" css={BoxStyled()}>
      <div css={{ padding: '0.75em 0', fontSize: '2em' }}>
        <h1
          css={{
            fontSize: '0.75em',
            marginBottom: 10,
            textAlign: 'center',
          }}>
          {title1}
        </h1>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <p
            css={{
              fontWeight: '700',
              fontSize: '2.5em',
              lineHeight: '1',
            }}>
            {value1}
          </p>
          <p
            css={{
              fontWeight: '300',
              margin: '0 .5em',
            }}>
            {unit1}
          </p>
        </div>
      </div>
      {title2 === ' ' && (
        <div css={{ padding: '0.75em 0', fontSize: '2em' }}>
          <h1
            css={{
              fontSize: '0.75em',
              marginBottom: 10,
              textAlign: 'center',
            }}>
            {title2}
          </h1>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <p
              css={{
                fontWeight: '700',
                fontSize: '2em',
                lineHeight: '1',
              }}>
              {value2}
            </p>
            <p
              css={{
                fontWeight: '300',
                margin: '0 .5em',
              }}>
              {unit2}
            </p>
          </div>
          <p
            css={{
              fontSize: '0.5em',
              textAlign: 'center',
            }}>
            {subValue2 || <div css={{ padding: '0.5rem' }}></div>}
          </p>
        </div>
      )}
    </div>
  )
}
