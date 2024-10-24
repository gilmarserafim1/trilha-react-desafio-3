import Header from "../../components/Header";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import { Container, JaTenhoConta, Left, Right, Row } from "./styles";
import Input from "../../components/Input";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{

            // Envia requisição POST ou PUT para servidor
            alert("Cadastro efetuado com sucesso!");
            navigate("/login");
        
        }catch(e){
            alert('Erro ao tentar fazer cadastro. Tente novamente mais tarde.');
        }
    };

    return(
        <>
            <Header />
            <Container>
                <Left>
                    <Title variant="secondary" text="A plataforma para você aprender 
                                    com experts, dominar as principais tecnologias e 
                                    entrar mais rápido nas empresas mais desejadas." />
                </Left>
                <Right>
                    <Title variant="secondary" text="Comece agora grátis" />
                    <SubTitle text="Crie sua conta e make the change._" />
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome completo" leftIcon={<MdPerson color="#8647AD"/>} name="nome"  control={control} />
                        {errors.nome && <span>Nome é obrigatório</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail color="#8647AD"/>} name="email"  control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock color="#8647AD"/>}  name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar minha conta" variant="primary" type="submit"/>
                    </form>

                    <SubTitle text='Ao clicar em "criar minha conta grátis", 
                                    declaro que aceito as Políticas de Privacidade 
                                    e os Termos de Uso da DIO.' />
                    <Row>
                        <JaTenhoConta>Já tenho conta. <span onClick={() => navigate("/login")}>Fazer login</span></JaTenhoConta>
                    </Row>
                </Right>
            </Container>
        </>
    );
}

export default Cadastro;