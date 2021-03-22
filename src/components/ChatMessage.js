import React from 'react'
import styled from 'styled-components'

function ChatMessage({text, name, image, timestamp}) {
    return (
        <Container>
            <UserAvatar>
                <img src={image}/>                
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(Date.now()).toString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container= styled.div`
    padding: 8px 15px;
    display:grid;
    :hover{
        background: #f8f8f8;
    }
    grid-template-columns: 44px auto; 
`

const UserAvatar= styled.div`
    margin: 3px 8px 0 0;
    width:35px;
    height:35px;
    border-radius:4px;
    overflow:hidden;
    img{
        width:100%;
    }
`

const MessageContent= styled.div`
    display:flex;
    flex-direction:column;
`

const Name = styled.span`
    font-weight:900;
    font-size:15px;
    line-height:1.4;
    
     span{
        margin: 0 0 0 8px;
        font-weight:400;
        color: rgb(97,96,97);
        font-size:13px;
    }
`
const Text= styled.span`

`

