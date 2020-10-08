import React, {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, IconButton, Input, InputLabel} from '@material-ui/core'
import Message from './Message'
import db  from './firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';

function App() {
  
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState("")

  useEffect(() => {
    db.collection("messages").orderBy('timeStamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs)
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })

  }, [])

  useEffect(() => {
    setUserName(prompt("Please enter your name"))
  }, [])
  const handleSendMessage =(event) =>{
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      userName: userName,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages, {userName:userName,  message:input}])
    setInput("")
  }
  return (
    <div className="App">
      <img 
        src="data:image/jpeg;base64,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"  
        alt="img"
        style={{marginTop: "20px"}}
      />
      <h1>Facebook messenger clone</h1>
      <h3>Welcome {userName}</h3>
      <FlipMove>
        {
          messages.map(({id, message}) =>(
            <Message
              key={id}
              userName={userName}
              message={message}
            />
          ))
        }
      </FlipMove>
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input
            // fullWidth
            className="app_input"
            placeholder="Enter a message..."
            value={input}
            onChange={(e) =>setInput(e.target.value)}
          />
          <IconButton 
            className="app__iconButton"
            variant="contained"
            color= "primary"
            type="submit" 
            disabled={!input}
            onClick={handleSendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      
    </div>
  );
}

export default App;
