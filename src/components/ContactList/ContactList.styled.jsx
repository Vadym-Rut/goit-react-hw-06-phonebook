import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 340px;
  outline: 2px solid gray;
  border-radius: 8px;
  padding: 10px;
`;

export const ContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    margin-right: 10px;
  }

  button {
    width: 100px;
    background-color: #5ca8f4;
    border-radius: 5px;
    height: 20px;
  }

  button:hover {
    background-color: blue;
  }
`;
