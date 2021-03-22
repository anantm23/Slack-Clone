import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems } from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add'; 
import db from '../firebase'
import {useHistory} from 'react-router-dom'


function Sidebar(props) {

    const history = useHistory();

    const goToChannel =(id)=>{
        if(id){
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const promptName = prompt("Enter channel Name : ");
        if(promptName){
            db.collection('rooms').add({
                name : promptName
            })
        }

    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Aspiring Coders
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                
                    {
                        sidebarItems.map(item=> (
                            <MainChannelItem>
                                {item.icons}
                                {item.text}    
                            </MainChannelItem>
                        ))
                    }
            </MainChannels>

            <ChannelsConatiner>
                    <NewChannelContainer>
                        <div>
                            Channels
                        </div>
                        <AddIcon onClick={addChannel} />
                    </NewChannelContainer>
                    <ChannelList>
                        {
                            props.rooms.map(item => (
                                <Channel onClick={()=> goToChannel(item.id)}>
                                  # {item.name}
                                </Channel>
                            ))
                        }
                         
                    </ChannelList>
            </ChannelsConatiner>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
background: #3F0E40;

`

const WorkspaceContainer = styled.div`
color: white;
height: 64px;
display: flex;
align-items: center;
padding: 0 0 0 19px;
justify-content : space-between;
border-bottom: 1px solid #532753;

`
const Name = styled.div`

`

const NewMessage = styled.div`
width: 36px;
height: 36px;
background: white;
color: #3F0E40;
fill : #3F0E40;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
margin: 0 20px 0 0;
cursor: pointer;
`

const MainChannels = styled.div`
    padding: 20px 0 0 0;
`

const MainChannelItem = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding: 0 0 0 19px;
    cursor: pointer;
    :hover{
        background: #350D36;
    }
`
const ChannelsConatiner = styled.div`
    color: rgb(188, 171, 188);
    margin : 10px 0 0 0;
`
const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding: 0 12px 0 19px;
    

`
const ChannelList = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items:center;
    padding: 0 0 0 19px; 
    cursor: pointer;
    :hover{
        background: #350D36;
    }
`
