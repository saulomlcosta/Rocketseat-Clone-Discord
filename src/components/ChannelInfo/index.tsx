import React from "react";

import { Container, HashtagIcon, Title, Separator, Description } from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>enjoy-yourselves</Title>

      <Separator />

      <Description>Channel open for entertainment</Description>     
    </Container>
  );
};

export default ChannelInfo;