import { Box, Text, Image } from '@skynexui/components';
import appConfig from '../../styles.json';
import Message from '../../entities/Message';

export default function MessageList(props: { messages: Message[] }) {
  const { messages } = props;

  const renderMessages = (messagesToRender: Message[]) => messagesToRender.map((message) => {
    const { id, from, text } = message;
    return (
      <Text
        key={id}
        tag="li"
        styleSheet={{
          borderRadius: '5px',
          padding: '6px',
          marginBottom: '12px',
          hover: {
            backgroundColor: appConfig.theme.colors.neutrals[700],
          },
        }}
      >
        <Box
          styleSheet={{
            marginBottom: '8px',
          }}
        >
          <Image
            styleSheet={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '8px',
            }}
            src="https://github.com/vanessametonini.png"
          />
          <Text tag="strong">{from}</Text>
          <Text
            styleSheet={{
              fontSize: '10px',
              marginLeft: '8px',
              color: appConfig.theme.colors.neutrals[300],
            }}
            tag="span"
          >
            {new Date().toLocaleDateString()}
          </Text>
        </Box>
        {text}
      </Text>
    ) as React.ReactElement;
  });

  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px',
      }}
    >
      {renderMessages(messages)}
    </Box>
  );
}
