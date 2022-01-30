import { Box, TextField } from '@skynexui/components';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { supabaseMessages, supabaseSendNewMessage, supabaseMessagesSubscriber } from '../apiClients/supabaseClient';
import ButtonSendSticker from '../components/chat/ButtonSendSticker';
import Header from '../components/chat/Header';
import MessageList from '../components/chat/MessageList';
import Message from '../entities/Message';
import appConfig from '../styles.json';

export default function Chat() {
  const router = useRouter();
  const { user } = router.query;

  const [emptyMessages, setEmptyMessages] = useState<Message[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');

  const getMessages = () => supabaseMessages().then((data) => data);

  const handleNewMessage = (newMessage: Message) => {
    setMessage('');
    supabaseSendNewMessage(newMessage).then(() => {
      setEmptyMessages([newMessage]);
    });
  };

  useEffect(() => {
    getMessages().then((response) => setMessages(response.data || []));
  }, [emptyMessages]);

  useEffect(() => {
    supabaseMessagesSubscriber((newMessage) => {
      handleNewMessage(newMessage);
    });
  });

  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        backgroundImage:
          'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000'],
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '75vw',
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          maxHeight: '75vh',
          padding: '32px',
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
          }}
        >
          <MessageList messages={messages} />
          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  const newMessage: Message = {
                    text: message,
                    from: user as string,
                  };
                  handleNewMessage(newMessage);
                }
              }}
              name="message"
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <ButtonSendSticker onStickerClick={(sticker) => {
              setMessage(sticker);
              const newMessage: Message = {
                from: user as string,
                text: sticker,
                isSticker: true,
              };
              handleNewMessage(newMessage);
            }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
