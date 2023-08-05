import styled from 'styled-components';

export const Friends = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  background-color: #fff;
  text-align: center;
  padding: 20px;
  box-shadow: 1.5px 2px 2px 0.5px #000000;
`;

export const Status = styled.span`
  background-color: red;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: block;
`;

export const Online = styled.span`
  background-color: green;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: block;
`;
