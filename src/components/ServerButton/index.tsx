import React from 'react';

import Logo from '../../assets/Logo.svg'

 import { Button } from './styles';

 export interface Props {
   select?: boolean;
   isHome?: boolean;
   hasNotifications?: boolean;
   mentions?: number;
 }

const ServerButton: React.FC<Props> = ({
  select,
  isHome,
  hasNotifications,
  mentions
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={select ? 'active' : ''}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
}

export default ServerButton;