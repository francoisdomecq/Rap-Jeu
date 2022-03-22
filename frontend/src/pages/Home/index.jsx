import { Link } from 'react-router-dom'
import Jouer from '../../assets/jouer.svg'
import RedBullLogo from '../../assets/PNG/redbull.png'
import RapJeuLogo from '../../assets/RapJeuLogo.svg'
import YoutubeLogo from '../../assets/icons8-youtube.svg'
import {
  Container,
  ExplicationsContainer,
  Explications,
  Logo,
  LinkImage,
  TextH1,
  Text,
  SecondContainer,
} from './styles'
import '../../utils/animations/Bouncing/jouerBouncingLetters.css'
import '../../utils/animations/Bouncing/animationBouncing.css'
function Home() {
  return (
    <Container>
      <SecondContainer>
        <LinkImage
          href="https://www.redbull.com/fr-fr/collections/redbinks"
          target="_blank"
        >
          <Logo src={RedBullLogo} alt="redbull" />
        </LinkImage>

        <Logo
          style={{ width: '15%', height: '15%' }}
          src={RapJeuLogo}
          alt="rapjeu"
        />

        <LinkImage
          href="https://www.youtube.com/playlist?list=PLLkvlAQ5R3l8zLZWcwcjkMQ1pU4BQlAcp"
          target="_blank"
        >
          <Logo src={YoutubeLogo} alt="youtube" />
        </LinkImage>
      </SecondContainer>
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
          <div className="bouncing-text">
            <div className="j">J</div>
            <div className="o">O</div>
            <div className="u">U</div>
            <div className="e">E</div>
            <div className="r">R</div>
          </div>
        </Container>
      </Link>
    </Container>
  )
}

export default Home
