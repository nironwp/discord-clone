import React from 'react';
import { ProgressEmpty } from 'styled-icons/entypo';


import {Container , HashTagIcon , InviteIcon , SettingsIcon } from './styles';

export interface Props{
  channelName : string;
  selected ?:boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashTagIcon/>
        <span>{channelName}</span>
      </div>

      <div className='secondDive'>
        <InviteIcon/>
        <SettingsIcon/>
      </div>
    </Container>
  )
}

export default ChannelButton;