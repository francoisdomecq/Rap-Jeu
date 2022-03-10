import { Link } from 'react-router-dom'
import Jouer from '../../assets/jouer.svg'
import {
  Container,
  ExplicationsContainer,
  Explications,
  JouerContainer,
  LogoJouer,
} from './styles'

function Home() {
  return (
    <Container>
      <ExplicationsContainer>
        <Explications>
          <h1
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Bienvenue sur Rap Jeu
          </h1>
          <p
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat',
            }}
          >
            Salut la famille, tu es sur le point de te lancer dans une partie de
            Rap Jeu. J'espère que t'es pas tout seul car tu risquerais de
            t'ennuyer.
          </p>
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            But du jeu
          </h2>
          <p>
            Vous allez d'abord devoir désigner un maître de jeu pour la suite de
            la partie. La première étape va être de créer le nom des équipes.
            Une fois que c'est fait, vous allez pouvoir choisir les épreuves
            auxquelles vous voulez jouer. Bien entendu, la partie se termine par
            les imprésentables enchères et l'inégalable Roland Gamos.{' '}
          </p>
        </Explications>
      </ExplicationsContainer>
      <JouerContainer>
        <Link to="/teams">
          <LogoJouer src={Jouer} alt="jouer" />
        </Link>
      </JouerContainer>
    </Container>
  )
}

export default Home
