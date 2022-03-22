import { Link } from 'react-router-dom'
import Jouer from '../../assets/jouer.svg'
import {
  Container,
  ExplicationsContainer,
  Explications,
  JouerContainer,
  LogoJouer,
  TextH1,
  Text,
} from './styles'
import '../../utils/animations/jouerBouncing.css'
function Home() {
  return (
    <Container>
      <ExplicationsContainer>
        <Explications>
          <TextH1>Bienvenue sur Rap Jeu</TextH1>
          <Text>
            Salut la famille, tu es sur le point de te lancer dans une partie de
            Rap Jeu. J'espère que t'es pas tout seul car tu risquerais de
            t'ennuyer.
          </Text>
          <TextH1>But du jeu</TextH1>
          <Text>
            Vous allez d'abord devoir désigner un maître de jeu pour la suite de
            la partie. La première étape va être de créer le nom des équipes.
            Une fois que c'est fait, vous allez pouvoir choisir les épreuves
            auxquelles vous voulez jouer. Bien entendu, la partie se termine par
            les imprésentables enchères et l'inégalable Roland Gamos. Le maître
            du jeu a tous les droits au cours de la partie, et peut ajouter
            autant que de points qu'il souhaite mais aussi en enlever
          </Text>
        </Explications>
      </ExplicationsContainer>

      <Link style={{ textDecoration: 'none' }} to="/teams">
        <Container>
          <div class="bouncing-text">
            <div class="j">J</div>
            <div class="o">O</div>
            <div class="u">U</div>
            <div class="e">E</div>
            <div class="r">R</div>
          </div>
        </Container>
      </Link>
    </Container>
  )
}

export default Home
