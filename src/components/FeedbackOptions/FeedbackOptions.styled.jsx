import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
export const Button = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  padding: 16px;
  background-color: #f7941e;
  color: #ffffff;
  border: 1px solid #f7941e;
  border-radius: 5px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    color: #f7941e;
  }
`;
