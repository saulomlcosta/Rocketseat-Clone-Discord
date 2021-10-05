import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);


  return <Container>
      <Messages ref={messagesRef}>
      {Array.from(Array(15).keys()).map((n) =>
            <ChannelMessage 
            author="Other Users"
            date="05/10/2021"
            content="Hi Guys!"
          />        
        )}
      

        <ChannelMessage 
          author="Saulo Costa"
          date="05/10/2021"
          content="Today, I am fully strengthened."
        />

        <ChannelMessage 
          author="Emerson Filho"
          date="05/10/2021"
          content={
            <>
              <Mention>@Saulo Costa</Mention>, Hey bro, let's play!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Rebuild Your Mind! #enjoy-yourselves"/>
        <InputIcon />
      </InputWrapper>
    </Container>;  
};

export default ChannelData;