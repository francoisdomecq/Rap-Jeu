import { Link } from 'react-router-dom'
import Jouer from '../../assets/jouer.svg'
import RedBullLogo from '../../assets/PNG/redbull.png'
import RapJeuLogo from '../../assets/RapJeuLogo.svg'
import YoutubeLogo from '../../assets/rollandgamos/icons8-youtube.svg'
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
    <Container style={{ marginBottom: '2%' }}>
      <SecondContainer>
        <LinkImage
          href="https://www.redbull.com/fr-fr/collections/redbinks"
          target="_blank"
        >
          <Logo src={RedBullLogo} alt="redbull" />
        </LinkImage>

        <Logo
          style={{ width: '10%', height: '10%' }}
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
          <TextH1>Bienvenue dans Rap Jeu</TextH1>
          <Text>
            Salut la famille, tu es sur le point de te lancer dans une partie de
            Rap Jeu. Si t'es là, je suppose que tu connais déjà l'émission
            présentée par Mehdi Maizi. Le principe de ce site est de permettre à
            tout le monde de jouer à Rap Jeu ! J'espère que t'es pas tout seul
            car tu risquerais de t'ennuyer.
          </Text>
          <TextH1>Instructions</TextH1>
          <Text>
            Dans un premier temps, vous allez devoir désigner un maître de jeu
            pour la suite de la partie. Il faut qu'il soit charismatique de
            préférence.
          </Text>
          <Text>
            Une fois le maître de jeu choisi, il prend le contrôle de
            l'ordinateur et clique sur le bouton jouer. Vous allez alors pouvoir
            choisir le nom de vos équipes. Attention, il sera définitif !
          </Text>
          <Text>
            Une fois les équipes définies, vous allez pouvoir choisir les deux
            premières épreuves auxquelles vous voulez jouer. Parmi les épreuves
            disponibles se trouvent
            <strong>
              <ul>
                <li>Le top 5</li>
                <li>Le crossfeaturing</li>
                <li>Le mytho pas mytho</li>
                <li>Le rap génie ou gênant</li>
                <li>Les 3 petits (r)chats</li>
              </ul>
            </strong>
            Bien entendu, la troisième épreuve est <strong>les enchères</strong>
            . Et pour la dernière épreuve, vous départagerez le gagnant au cours
            de 3 manches de <strong>Rolland Gamos</strong>.
          </Text>
          <Text>
            Concernant le maître de jeu, tu as tous les droits au cours de la
            partie, c'est à dire que tu peux récompenser une bonne blague en
            ajoutant des points ou en enlevant si c'est un flop.. Ce n'est qu'un
            exemple bien-sûr, libre à toi d'animer la partie !
          </Text>
        </Explications>
      </ExplicationsContainer>

      <Link style={{ textDecoration: 'none', marginTop: '5%' }} to="/teams">
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
