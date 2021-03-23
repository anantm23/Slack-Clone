import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import { useEffect, useState } from 'react'
import {auth, provider} from './firebase'


function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms (snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })   
  }
  
const signOut =() => {
  auth.signOut().then(()=>{
    setUser(null);
    localStorage.removeItem('user');
  })

}

  useEffect(() => {
    getChannels();   
  }, [])


  return (
    <div className="App">
      <Router>
        {
          !user ?
          <Login setUser={setUser}/>
          :
          <Container>
            <Header user={user} signOut={signOut}/>
            <Main>
              <Sidebar rooms= {rooms}/>
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user} />
                </Route>
                <Route path='/'>
                <Route path="/room/XvTuN4CVngc4Enb0N3Y8">
                  <Chat user={user} />
                </Route>
                </Route>
              </Switch>
            </Main>
          </Container>
          }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width : 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 36px minmax(0, auto);
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 25% auto; 
`

