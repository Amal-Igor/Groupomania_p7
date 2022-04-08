import styled from 'styled-components';
import { ButtonWoIcon } from '../Button/Button';


const InfosWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 7rem 10rem;
background-color: #0f032796;
gap: 1.3rem;  
`

const InfosDetails = styled.p`
font-size: 1.6rem;
color: white;
margin: inherit;
`

const InfosLabel = styled.p`
font-size: 1.6rem;
color: white;
margin: inherit;
font-weight: bold;
color: #ff3399;
`

export const ProfileWrapper = ({username, email}) => {
    return(
    <>
        <InfosWrapper>
            <InfosLabel className='user-infos-label'>Nom d'utilisateur :</InfosLabel>
            <InfosDetails className='user-infos-content'>{username}</InfosDetails>
            <InfosLabel className='user-infos-label'>Email :</ InfosLabel>
            <InfosDetails className='user-infos-content'>{email}</InfosDetails>
            <ButtonWoIcon text={'Modifier mes infos'} />
        </InfosWrapper>
    </>
    )
}