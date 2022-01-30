import {
  Box, Button, Text, TextField, Image,
} from '@skynexui/components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import appConfig from '../styles.json';
import Title from '../components/Title';

function HomePage() {
  const [user, setUser] = useState('leoprietsch');
  const router = useRouter();

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
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          width: '100%',
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          maxWidth: '700px',
          borderRadius: '5px',
          padding: '32px',
          margin: '16px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          backgroundColor: appConfig.theme.colors.neutrals[700],
        }}
      >
        <Box
          as="form"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onSubmit={(event: SubmitEvent) => {
            event.preventDefault();
            router.push(`/chat?user=${user}`);
          }}
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: '100%', sm: '50%' },
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          <Title tag="h1">Boas vindas de volta!</Title>
          <Text
            variant="body3"
            styleSheet={{
              marginBottom: '32px',
              color: appConfig.theme.colors.neutrals[300],
            }}
          >
            {appConfig.name}
          </Text>

          <TextField
            name="user"
            onChange={(event) => {
              setUser(event.target.value);
            }}
            fullWidth
            textFieldColors={{
              neutral: {
                textColor: appConfig.theme.colors.neutrals[200],
                mainColor: appConfig.theme.colors.neutrals[900],
                mainColorHighlight: appConfig.theme.colors.primary[500],
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
              positive: {},
              negative: {},
            }}
          />
          <Button
            type="submit"
            label="Login"
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals['000'],
              mainColor: appConfig.theme.colors.primary[500],
              mainColorLight: appConfig.theme.colors.primary[400],
              mainColorStrong: appConfig.theme.colors.primary[600],
            }}
          />
        </Box>
        <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            maxWidth: '200px',
            padding: '16px',
            backgroundColor: appConfig.theme.colors.neutrals[800],
            border: '1px solid',
            borderColor: appConfig.theme.colors.neutrals[999],
            borderRadius: '10px',
            flex: 1,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            minHeight: '240px',
          }}
        >
          <Image
            styleSheet={{
              borderRadius: '50%',
              marginBottom: '16px',
            }}
            src={`https://github.com/${user}.png`}
          />
          <Text
            variant="body4"
            styleSheet={{
              color: appConfig.theme.colors.neutrals[200],
              backgroundColor: appConfig.theme.colors.neutrals[900],
              padding: '3px 10px',
              borderRadius: '1000px',
            }}
          >
            {user}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
