import './App.css'
import AppNew from './AppNew'
import NavBar from './components/main/NavBar'


function App() {

  return (
    <>
      <main>
        <section className='section1'>
          <NavBar />
        </section>

        <section className='section2'>
          <AppNew />
        </section>
      </main>

    </>
  )
}

export default App
