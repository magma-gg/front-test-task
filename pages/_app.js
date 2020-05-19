import 'normalize.css/normalize.css'
import './base.scss'

function App ({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}

export default App
