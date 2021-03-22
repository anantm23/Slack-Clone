import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


function Header({user, signOut}) {
    return (
        <Container >
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search" />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : 'https://www.flaticon.com/svg/vstatic/svg/892/892781.svg?token=exp=1614255082~hmac=71bcded21b7cdaa0a215fc479b34d884' } />
                </UserImage>
            </UserContainer>
            
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
    z-index:10;
    box-shodow: 0 1px 0 0 rgb(255 255 255 / 10%);

`
const Main = styled.div`
    display: flex;
    margin : 0 16px 0 16px;

`

const SearchContainer = styled.div`
    min-width:400px;
    margin: 0 16px 0 16px;
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    width:100%;
    border-radius: 10px;
    display:flex;
    align-items: center;

    input{
        background-color: transparent;
        border: none;
        padding: 4px 4px 8px 8px;
        color: white;

    }
    input:focus{
        outline: none;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items:center;
    padding: 0 16px 0 0;
    position: absolute;
    right:0;

`


const Name = styled.div`
    padding: 0 16px 0 0;
`

const UserImage = styled.div`
    width:28px;
    height:28px;
    border: 2px solid white;
    border-radius: 3px;
    background: white;
    cursor:pointer;
    img{
        width:100%;
    }

`