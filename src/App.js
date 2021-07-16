
import { useEffect, useState } from 'react';
import './App.css';

function Message (props) {
  return <p>{props.text}</p>
}
const AUTORS = {
  ANNA: 'Anna',
  CHATBOT: 'ChatBot'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Title />
      <MessageList />
      </header>
    </div>
  );
}
function Title() {
  return <p className="title">ЧАТ</p>;
}
function MessageList () {

  const [messages, setMessages] = useState ([]);
  const [inputValue, setInputValue] = useState ('');
  useEffect ( () => {
    if (messages.length && messages[messages.length-1].author != AUTORS.CHATBOT) {
      setTimeout ( () => {
        setMessages ((currentMessages ) => [
          ...currentMessages, { author: AUTORS.CHATBOT, text: 'Привет! Как дела?'}
        ])
      }, 1500)
    }
  }, [messages])
  const addMessage = (e) => {
    setInputValue(e.target.value)
  }
  const submitMessage = (e) => {
    e.preventDefault()
    setMessages ((currentMessages ) => [
      ...currentMessages, { author: AUTORS.ANNA, text: inputValue}
    ])
    setInputValue ('') 
  }

  return (<> 
        {messages.map ((message) => <div key="index" className="massage">{message.author}: {message.text}</div>)}
        <form className="form" onSubmit={submitMessage}>
        <input type ="text" placeholder="Текст сообщения" value={inputValue} className="input" onChange={addMessage}/>
        <button className="input_btn">Отправить</button>
        </form>
  </>);
}


export default App;
