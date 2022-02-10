import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="App">
        <button>
          <Link to="/teams">Aller vers les équipes</Link>
        </button>
      </div>
  )
}

export default Home
