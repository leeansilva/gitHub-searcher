import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import Searcher from './components/Searcher';
import { getUser } from './services/users';
import UserCard from './components/Card';

const containerStyles = {
  background: 'gray',
  width: '80vw',
  height: '500px',
  borderRadius: '16px',
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

function App() {

  const [inputUser,setUserInput] = useState('octocat')
  const [userState,setUserState] = useState(inputUser)
  const [notFound,setNotFound] = useState(false)
 
  const fetchUser = async (user)=>{
    const response = await getUser(user)
   if (userState === 'octocat'){
    localStorage.setItem('octocat',response)
   }
   if(response.message === 'Not Found'){
    const { octocat } = localStorage
    setUserInput(octocat)
    setNotFound(true)
   } else {
      setUserState(response)
          }
  }


  useEffect(()=>{
    fetchUser(inputUser)
  },[inputUser])

 
  return (
    <Container sx={containerStyles}>
      <Searcher inputUser={inputUser} setUserInput={setUserInput} />
      <UserCard userState = { userState }></UserCard>
    </Container>
  )
}

export default App
