import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    height: 30px;
    border-radius: 22px;
    color: #FFFFFF;
    padding: 2px 12px;
    border: none;
    
    ${({variant}) => variant === "primary" && css` 
        background: #E4105D;
        width: 100%;
        margin: 0;
    `}
    ${({variant}) => variant === "secondary" && css` 
        background: #565656;
        width: 120px;
        margin: 0 5px;
    `}
    ${({variant}) => variant === "menu" && css` 
        background: transparent;
        color: white;
        width: 100px;
        margin: 0 5px;
    `}

    &:hover {
        cursor: pointer;
        filter: opacity(.9)
    }
`;