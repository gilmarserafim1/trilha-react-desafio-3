import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Title from '../../components/Title'
import SubTitle from '../../components/SubTitle'
import { useForm } from "react-hook-form";
import { Container, EsqueciText, CriarText, Row, RowSenha, Left, Right } from './styles';
import axios from "axios";
import { useState } from "react";

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const response = await axios.get('/db.json');
            const users = response.data.users;

            const user = users.find(user => user.email === formData.email && user.senha === formData.senha);
            
            if(user){
                navigate('/feed') 
                return
            }
            setSenhaErrada("Usuário ou senha incorretos")

        }catch(e){
            //TODO: HOUVE UM ERRO
            alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
        }
    };

    const [senhaErrada, setSenhaErrada] = useState(" ")

    console.log('errors', errors);

    return (
        <>
            <Header />
            <Container>
            <Left>
                <Title variant="secondary" text="A plataforma para você aprender com experts, 
                            dominar as principais tecnologias e entrar mais 
                            rápido nas empresas mais desejadas." /> 
            </Left>
            <Right>
                <Title variant="secondary" text="Faça seu cadastro" />
                <SubTitle text="Faça seu login e make the change._" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail color="#8647AD"/>} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock color="#8647AD"/>}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Entrar" variant="primary" type="submit"/>
                </form>

                <RowSenha> {senhaErrada}</RowSenha>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={() => navigate("/cadastro")}>Criar Conta</CriarText>
                </Row>
            </Right>
        </Container>
    </>)
}

export default Login;