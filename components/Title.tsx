import React from 'react';
import appConfig from '../styles.json';

interface HeadingProps extends React.Attributes {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: string;
}

const Heading: React.FC<HeadingProps> = function Heading(props: HeadingProps) {
  const { tag, children } = props;
  return React.createElement(tag, null, children);
};

function Title(props: HeadingProps) {
  const { tag, children } = props;

  return (
    <>
      <Heading tag={tag}>{children}</Heading>
      <style jsx>
        {`
          h1 {
            color: ${appConfig.theme.colors.neutrals['000']};
            font-size: 24px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
}

export default Title;
