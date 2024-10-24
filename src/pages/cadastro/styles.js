import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 120px;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    height: 30px;
    margin: 0;
`;

export const JaTenhoConta  = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
    span {
        color: #23DD7A;
        &:hover {
            cursor: pointer;
            filter: opacity(.9)
        }
    }
`;
