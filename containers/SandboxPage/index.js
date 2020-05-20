import styles from './SandboxPage.module.scss'
import Wrapper from 'components/Wrapper'
import Container from 'components/Container'
import Header from 'components/Header'

function SandboxPage () {
  return (
    <Wrapper>
      <Container>
        <Header />
        <h1>Hello! I am sandbox for you</h1>

        <pre className={styles.jsonFormat}>
          {JSON.stringify({ Hello: 'World' }, null, 2)}
        </pre>
      </Container>
    </Wrapper>
  )
}

export default SandboxPage
