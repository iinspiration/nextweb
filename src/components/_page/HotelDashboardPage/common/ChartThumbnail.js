import { media } from '@lib/styles/helpers'
import { Flex, Box } from 'reflexbox'

function BoxStyled(color1) {
  return {
    background: `#292929`,
    boxShadow: '1px 1px 10px 0px rgba(0,0,0,0.1)',
    borderRadius: '.75em',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
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
    '> *': {
      color: '#fff',
    },
    '&.frist-col': {
      marginBottom: '1em',
    },
  }
}

export default function ChartThumbnail({ data, color1 }) {
  const colWidth = data.length
  return (
    <div>
      <h1 css={{ fontWeight: '700', fontSize: '2em', margin: '.5em 0 .5em' }}>
        {data[0].label}
      </h1>
      <Flex flexWrap="wrap" m={-2}>
        {data.map(
          ({ name, label, amount, max_amount: maxAmount, weight }, i) => {
            return (
              <Box
                key={i}
                width={colWidth < 3 ? [1] : [1, 1 / 2, 1 / 2, 1 / 3]}
                p={2}>
                <div css={BoxStyled(color1)}>
                  <div
                    css={{
                      position: 'absolute',
                      width: `${(amount / maxAmount) * 100}%`,
                      height: '100%',
                      zIndex: '1',
                      // background: `linear-gradient(-90deg, ${color1} 0%, ${color2} 100%)`,
                      background: color1,
                      boxShadow: '5px 5px 15px 5px #000000',
                    }}></div>
                  <div
                    css={{
                      margin: '1.5em',
                      zIndex: '2',
                      position: 'relative',
                    }}>
                    <h1
                      css={{
                        display: 'block',
                        fontWeight: '700',
                        fontSize: '1.15em',
                        marginBottom: '.5em',
                        height: 36,
                        wordBreak: 'break-word',
                        width: 'auto',
                        maxWidth: 'calc(100% - 90px)',
                      }}>
                      {name}
                    </h1>
                    <div
                      css={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        margin: '0 auto 1.5em',
                      }}>
                      <p
                        css={{
                          fontWeight: '700',
                          fontSize: '2em',
                          lineHeight: '.8',
                        }}>
                        {amount.toLocaleString()}
                      </p>
                      <p
                        css={{
                          fontWeight: '500',
                          fontSize: '2em',
                          lineHeight: '.8',
                          margin: '0 2.5px',
                        }}>
                        /
                      </p>
                      <p css={{ fontWeight: '500', fontSize: '1.5em' }}>
                        {maxAmount.toLocaleString()}
                      </p>
                      <p
                        css={{
                          fontWeight: '400',
                          fontSize: '1.25em',
                          margin: '0 5px',
                          lineHeight: '.9',
                        }}>
                        ชิ้น
                      </p>
                    </div>
                    <div
                      css={{
                        position: 'absolute',
                        right: '-.25em',
                        top: '0',
                        fontWeight: '400',
                        marginBottom: '5px',
                        fontSize: '1.2em',
                        textAlign: 'right',
                        float: 'right',
                      }}>
                      <div
                        css={{
                          fontSize: '.7em',
                          textAlign: 'right',
                          marginBottom: '2.5px',
                        }}>
                        โอกาสออก
                      </div>
                      <span
                        css={{
                          display: 'inline-block',
                          width: '40px',
                          textOverflow: 'clip',
                          overflow: 'hidden',
                        }}>
                        {parseFloat(weight).toFixed(2)}
                      </span>
                      <span
                        css={{
                          display: 'inline-block',
                          marginLeft: '2.5px',
                          [media('xl')]: { float: 'right' },
                        }}>
                        %
                      </span>
                    </div>
                    {/* <div>
                      ออกไปแล้ว
                      <span
                        css={{
                          display: 'inline-block',
                          margin: '0 5px',
                          fontWeight: '500',
                          fontSize: '1.25em',
                        }}>
                        {maxAmount - amount}
                      </span>
                      ชิ้น
                    </div> */}
                    <div>
                      เหลือของ
                      <span
                        css={{
                          display: 'inline-block',
                          margin: '0 5px',
                          fontWeight: '500',
                          fontSize: '1.5em',
                        }}>
                        {((amount / maxAmount) * 100).toFixed(2)}
                      </span>
                      %
                    </div>
                    <span
                      css={{
                        position: 'absolute',
                        opacity: '.5',
                        right: '-3.5em',
                        transform: 'rotate(90deg)',
                        top: '47.5%',
                        fontWeight: '300',
                        fontSize: '.8em',
                      }}>
                      --- 100% ---
                    </span>
                    <span
                      css={{
                        position: 'absolute',
                        opacity: '.6',
                        left: '-3em',
                        transform: 'rotate(90deg)',
                        top: '47.5%',
                        fontWeight: '300',
                        fontSize: '.8em',
                      }}>
                      --- 0% ---
                    </span>
                  </div>
                </div>
              </Box>
            )
          },
        )}
      </Flex>
    </div>
  )
}
