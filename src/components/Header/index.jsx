import React from 'react'
import logo from '../../assets/logo-dio.png';
import Button from '../Button';
import { Wrapper, BuscarInputContainer, Input, UserPicture, Left, Right, Logo} from './styles';
import StyledLink from '../StyledLink'
import { FaSearch, FaChevronDown } from "react-icons/fa";

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Left>

        <StyledLink to='/'>
          <Logo src={logo} alt="Logo da dio"/>
        </StyledLink>

        {autenticado ? (
          <>
            <BuscarInputContainer>
              <FaSearch />
              <Input placeholder='BUSCAR'/>
            </BuscarInputContainer>

            <Button variant='menu' title="Live Code" />
            <Button variant='menu' title="Global" />
          </>
        ) : null}
      </Left>

      <Right>
        {autenticado ? (
          <>
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
            <FaChevronDown />
          </>            
        ) : (
          <>
            <StyledLink to='/'>
              <Button variant='menu' title="Home"/>
            </StyledLink>

            <StyledLink to='/login'>
              <Button variant='secondary' title="Entrar" />
            </StyledLink>
            
            <StyledLink to='/cadastro'>
              <Button variant='secondary' title="Cadastrar" />
            </StyledLink>          
          </>
        )}
      </Right>
    </Wrapper>
  );
}

export default Header;
