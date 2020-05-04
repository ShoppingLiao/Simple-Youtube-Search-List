import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Wrapper, Header, Content } from './Styled';

export default function Main() {
  return (
    <Wrapper>
      <Header>
        <input type='text' placeholder='輸入關鍵字' />
      </Header>
      <Content>這邊放結果</Content>
    </Wrapper>
  );
}
