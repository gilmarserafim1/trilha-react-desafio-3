import bannerImage from '../../assets/banner.png'
import Button from '../../components/Button';
import Header from '../../components/Header';
import StyledLink from '../../components/StyledLink';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import { Container, Left, Right } from './styles';

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Left>
                    <Title text="Implemente" />
                    <Title variant='secondary' text="o seu futuro global agora!" />
                    <SubTitle text="Domine as tecnologias utilizadas pelas empresas 
                                    mais inovadoras do mundo e encare seu novo
                                    desafio profissional, evoluindo em comunidade 
                                    com os melhores experts." />
                    <StyledLink to='/cadastro'>
                        <Button title="Começar agora" variant="primary"/>
                    </StyledLink>
                </Left>
                
                
                <Right>
                    <img src={bannerImage} alt="Imagem principal do site." />
                </Right>
            </Container>
        </>);
}

export default Home;