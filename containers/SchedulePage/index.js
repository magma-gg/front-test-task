import styles from './Schedule.module.scss'
import { useState } from 'react'
import Wrapper from 'components/Wrapper'
import Container from 'components/Container'
import Header from 'components/Header'

function useData () {
  const [data, setData] = useState({})

  if (typeof window !== 'undefined') {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data))
  }

  return data
}

function SchedulePage () {
  const data = useData()

  return (
    <Wrapper>
      <Container>
        <Header />
        <h1>Event Schedule</h1>

        <pre className={styles.jsonFormat}>
          {JSON.stringify(data, null, 2)}
        </pre>
      </Container>
    </Wrapper>
  )
}

export default SchedulePage
