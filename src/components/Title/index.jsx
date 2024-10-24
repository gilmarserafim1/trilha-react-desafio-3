import { TitleContainer, TitleText } from "./styles";


const Title = ({text, variant = "primary"}) => {
    return(
        <TitleContainer>
            <TitleText variant={variant}>{text}</TitleText>
        </TitleContainer>
    );
}

export default Title;