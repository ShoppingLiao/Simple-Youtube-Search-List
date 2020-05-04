import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #ddd;
  font-size: 0.5rem;
  margin: 0.5rem 1rem;
  padding: 1rem;
  @media (max-width: 1024px) {
    margin: 0 auto;
    padding: 0.2rem;
  }
`;

export const Header = styled.div`
  background: #ff5956;
  display: flex;
  align-items: center;
  height: 3rem;
  justify-content: center;

  div {
    border-bottom: 1px solid #fff;
  }
  input {
    border: none;
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }
  button {
    font-size: 0.5rem;
    padding: 0 0.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #fff;
    background: none;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  margin: 0.2rem;
  width: 20vw;
  cursor: pointer;
  user-select: none;
  @media (max-width: 1024px) {
    width: 43vw;
  }
  img {
    margin: 0 auto;
    display: block;
    width: 100%;
  }
  div {
    display: block;
    font-size: 0.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageBtn = styled.button`
  color: ${(props) => (props.actived ? '#fff' : '#666')};
  background: ${(props) => (props.actived ? ' #ff5956' : 'transparent')};
  border-radius: 100%;
  height: 1rem;
  width: 1rem;
  margin: 0.2rem;
`;
