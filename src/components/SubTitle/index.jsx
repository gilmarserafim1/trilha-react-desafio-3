import { SubTitleContainer, SubTitleText } from "./styles";


const SubTitle = ({text}) => {
    return(
        <SubTitleContainer>
            <SubTitleText>{text}</SubTitleText>
        </SubTitleContainer>
    );
}

export default SubTitle;