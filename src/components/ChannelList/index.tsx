import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";
import ChannelButton from "../ChannelButton";

const ChannelList: React.FC = () => {
  return <Container>
    <Category>
      <span>Canais de texto</span>
      <AddCategoryIcon />  
    </Category>

    <ChannelButton channelName="enjoy-yourselves" />     
    <ChannelButton channelName="Job" />     
    <ChannelButton channelName="Lol Community" />     
    <ChannelButton channelName="CGO Lovers" />     
    <ChannelButton channelName="Valorant" />     
    </Container>;
  
};

export default ChannelList;