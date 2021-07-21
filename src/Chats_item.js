import React, { useRef } from 'react';
import Input from './Input';
import Message from './Message';

const Chat = (props) => {

    const AUTHORS = {
      ANNA: 'Anna',
      CHATBOT: 'ChatBot'
    }  
    const [messageList, setMessageList] = React.useState ([]);

    const timer = useRef (null) 
    
    React.useEffect ( () => {

        if (messageList.length && messageList [messageList.length-1].author !== AUTHORS.CHATBOT) {
          timer.current = setTimeout ( () => {
            setMessageList ((currentMessageList ) => [
              ...currentMessageList, { author: AUTHORS.CHATBOT, text: 'Привет! Как дела?'}
            ])
          }, 1500)
        }
      }, [messageList])
    
      React.useEffect (() => {
        return () => {
          clearTimeout (timer.current)
        }
      }, [])

    const handleMessageSubmit = (newMessageText) => {
        setMessageList ((currentMessageList ) => [
          ...currentMessageList, { author: AUTHORS.ANNA, text: newMessageText}
        ])
      }
    
    return (
        <div className="chat_item">
          {messageList.length ? (
            <div className="messages">
              {messageList.map ((message, index) => (
                <Message
                key={index}
                text={message.text}
                author={message.author}
              />
              ))}
            </div>
          ) : null}
          <Input onSubmit= {handleMessageSubmit} />
        </div>
    )
}
export default Chat