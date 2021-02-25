import { ChallengeSProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'

import '../styles/global.css'


function MyApp({ Component, pageProps }) {

  return (
    <ChallengeSProvider>
        <Component {...pageProps} />
    </ChallengeSProvider>
    
  )
}

export default MyApp
