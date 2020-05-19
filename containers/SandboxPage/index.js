import { useState } from 'react'
import Wrapper from 'components/Wrapper'
import Container from 'components/Container'

function useData () {
  const [data, setData] = useState({})

  if (typeof window !== 'undefined') {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data))
  }

  return data
}

function SandboxPage () {
  const data = useData()

  return (
    <Wrapper>
      <Container>
        <h1>Hello! I am sandbox for you.</h1>

        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </Container>
    </Wrapper>
  )
}

export default SandboxPage
