import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  border: 1px solid #ddd;
`;

const MessageList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
`;

const MessageInput = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${props => props.isAdmin ? '#e6f2ff' : '#f0f0f0'};
  border-radius: 5px;
  max-width: 70%;
  align-self: ${props => props.isAdmin ? 'flex-end' : 'flex-start'};
`;

const SendButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how can I help you today?", isAdmin: true },
    { id: 2, text: "I have a question about my order", isAdmin: false },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, isAdmin: true }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <ChatContainer>
        <MessageList>
          {messages.map(message => (
            <Message key={message.id} isAdmin={message.isAdmin}>
              {message.text}
            </Message>
          ))}
        </MessageList>
        <div style={{ display: 'flex' }}>
          <MessageInput 
            type="text" 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <SendButton onClick={handleSend}>Send</SendButton>
        </div>
      </ChatContainer>
    </div>
  );
}

export default Chat;

