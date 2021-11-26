import styled from 'styled-components'

const HomeWrapper = styled.div`
display:flex;
flex-direction: column;
padding: 0 2em;
`


const HomeTitle = styled.h2`
font-size: 30px;
`


function Home() {
    return(
        <HomeWrapper>
            <HomeTitle>Fil d'actualité</HomeTitle>
        </HomeWrapper>
    )
}

export default Home;
