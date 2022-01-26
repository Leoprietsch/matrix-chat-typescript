import { Box, Button, Text } from '@skynexui/components';

export default function Header() {
  return (
    <Box
      styleSheet={{
        width: '100%',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text variant="heading5">Chat</Text>
      <Button
        variant="tertiary"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        colorVariant="neutral"
        label="Logout"
        href="/"
      />
    </Box>
  );
}
