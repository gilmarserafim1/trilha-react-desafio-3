import styled, { css } from "styled-components";

export const TitleContainer = styled.div`
    display: flex;
    justify-content: left;
`;

export const TitleText = styled.h2`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    ${({variant}) => variant === "primary" && css`
        color: #E4105D;
    `}

    ${({variant}) => variant === "secondary" && css`
        color: #FFFFFF;
    `}
`;