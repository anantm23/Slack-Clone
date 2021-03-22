import React , {useEffect, useState}from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router-dom';
import firebase from 'firebase'

function Chat({user}) {

    let {channelId}= useParams();

    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState([]);     

    const getMessages= ()=>{
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            setMessages(messages);
        })

    }

    const sendMessage = (text)=> {
        if(channelId){
            let payload = {
                text:text,
                timestamp: firebase.firestore.Timestamp.now() ,
                user: user.name,
                userImage: user.photo
                
            }
            db.collection("rooms").doc(channelId).collection("messages").add(payload);
        }

    }

    const getChannel = ()=> {
        db.collection("rooms")
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());    
        })
    }

    useEffect(()=>{
        getChannel();
        getMessages();
    }, [channelId])

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # {channel && channel.name}
                    </ChannelName>
                    <ChannelInfo>
                        A coding community for ethusiasts
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info/>
                </ChannelDetails>
            </Header>
             <MessageContiner>
                 {
                     messages.length > 0 && 
                     messages.map((data, index)=>(
                        <ChatMessage 
                        text={data.text}
                        name={data.user}
                        image={data.userImage}
                        timestamp={data.timestamp}
                        />
                    ))
                 }   
             </MessageContiner>
             <ChatInput sendMessage={sendMessage} />
        </Container>
    )
}

export default Chat;

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`
const Header = styled.div`
    padding: 0 20px 0 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid  rgba(83, 39, 83, .13);
    justify-content: space-between;
`

const MessageContiner = styled.div`
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
`

const Channel = styled.div`

`

const Info= styled(InfoOutlinedIcon)`
    margin: 0 0 0 10px;
    color: #606060;
`

const ChannelDetails = styled.div`
    display:flex;
    align-items: center;
    color: #606060;
`

const ChannelName = styled.div`
    font-weight:700;
`

const ChannelInfo = styled.div`
    font-weight:400;
    color: #606060;
    font-size:13px;
    margin: 8px 0 0 0;
`