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

function Home() {
  return (
    <Container>
      <ExplicationsContainer>
        <Explications>
          <TextH1 >
            Bienvenue sur Rap Jeu
          </TextH1>
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
      <JouerContainer>
        <Link to="/teams">
          <LogoJouer src={Jouer} alt="jouer" />
        </Link>
      </JouerContainer>
    </Container>
  )
}

export default Home
