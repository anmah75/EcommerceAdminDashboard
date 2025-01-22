import React, { useState } from 'react';
import styled from 'styled-components';

const InboxContainer = styled.div`
  display: flex;
  height: calc(100vh - 100px);
`;

const EmailList = styled.div`
  width: 300px;
  border-right: 1px solid #ddd;
  overflow-y: auto;
`;

const EmailItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const EmailContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const mockEmails = [
  { id: 1, subject: 'New Product Line', from: 'supplier@example.com', body: 'We have a new product line available...' },
  { id: 2, subject: 'Order Update', from: 'logistics@example.com', body: 'Your recent order #12345 has been shipped...' },
  { id: 3, subject: 'Customer Feedback', from: 'support@example.com', body: 'We received positive feedback from a customer...' },
];

function Inbox() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmails = mockEmails.filter(email => 
    email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    email.from.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Inbox</h2>
      <SearchInput 
        type="text" 
        placeholder="Search emails" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <InboxContainer>
        <EmailList>
          {filteredEmails.map(email => (
            <EmailItem key={email.id} onClick={() => setSelectedEmail(email)}>
              <h4>{email.subject}</h4>
              <p>{email.from}</p>
            </EmailItem>
          ))}
        </EmailList>
        <EmailContent>
          {selectedEmail ? (
            <div>
              <h3>{selectedEmail.subject}</h3>
              <p>From: {selectedEmail.from}</p>
              <p>{selectedEmail.body}</p>
            </div>
          ) : (
            <p>Select an email to view its content</p>
          )}
        </EmailContent>
      </InboxContainer>
    </div>
  );
}

export default Inbox;

