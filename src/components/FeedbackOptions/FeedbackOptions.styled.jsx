import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
export const Button = styled.button`
  font-size: 12px;
  text-transform: uppercase;
  padding: 8px;
  background-color: #ccd3e7;
  border: 0;
  border-radius: 8px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
    background-color: #8fa6e7;
  }
`;
