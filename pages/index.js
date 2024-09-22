import Head from 'next/head'
import LandingPage from '../components/LandingPage'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Akhil S Nair - Robotics and Automation Engineer</title>
        <meta name="description" content="Portfolio of Akhil S Nair, Robotics and Automation Engineer & Tech Enthusiast" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      </Head>
      <main className='full-page' id='content'>
        <LandingPage />
        <Education />
        <Certifications />
        <TechStack />
        <Projects />
      </main>
      <div orientation="right" className="email-container">
        <div className="email-display">
          <a href="mailto:akhil.rb1923@saintgits.org">akhil.rb1923@saintgits.org</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
