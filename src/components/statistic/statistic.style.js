import styled from 'styled-components';

export const Statisctics = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 500px;
  height: 200px;
  background-color: #fff;
  box-shadow: 1px 1px 8px 0px #000000;
  padding-top: 50px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: #808080;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  text-align: center;
  width: 100%;
  padding: 20px;
  background-color: ${({ color }) => color || 'transparent'};
`;
