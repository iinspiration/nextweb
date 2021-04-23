import { Flex, Box } from 'reflexbox'

function bodyStyled() {
  return {
    // backgroundColor: '#fefefe',
    color: '#444',
    borderTop: '4px solid #ff0000',
    padding: '1em 1em',
    fontFamily: 'sukhumvit',
  }
}

export default function LightLayout({ children }) {
  return (
    <div css={bodyStyled()}>
      <main css={{ maxWidth: '1200px', margin: 'auto' }}>
        <Flex flexWrap="wrap">
          <Box width={1}>{children}</Box>
        </Flex>
      </main>
    </div>
  )
}
