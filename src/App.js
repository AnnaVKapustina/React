import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chat from './Chats_item';
import { useState } from 'react';

function App() {

  const [chats, setChats] = useState ([
    {id: 'chat1', name: 'Чат 1'}, 
    {id: 'chat2', name: 'Чат 2'}, 
    {id: 'chat3', name: 'Чат 3'}])

  const [currentChat, setCurrentChat] = useState (chats[0])
  const handleChangeChat = (chat) => setCurrentChat(chat)

  return (
    <div className="App">
      <List className="chats_navigation" subheader = "Чаты">
        {chats.map ((chat) => {

        return (
        <ListItem 
        key={chat.id} 
        button 
        selected={chat.id === currentChat.id} 
        onClick={ () => handleChangeChat(chat)}>
          {chat.name}
        </ListItem>)
      })}
      </List>
  <div className="main_app">
    <Chat id={currentChat.id}/>
  </div>
    </div>
  );
}
export default App;
