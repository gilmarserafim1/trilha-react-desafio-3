import styled  from 'styled-components';

export const Wrapper = styled.nav`   
    width: 100%;
    height: 50px;
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Left = styled.div`
    display:flex;
    align-items: center;
    margin-left: 50px;
`;

export const Logo = styled.img`
    width: auto;
    height: 30px;
`;


export const Right = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-right: 50px;
`;

export const BuscarInputContainer = styled.div`
    width: 275px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display:flex;
    align-items: center;
`;


export const Input = styled.input`
    width: 100%;
    background: transparent;
    border: 0;
    color: white;
    font-size: 15px;
    margin-left: 10px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: white;
        font-size: 15px;
    }
`;

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
    margin-right: 5px;
`;
