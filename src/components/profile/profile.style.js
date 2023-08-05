import styled from 'styled-components';

export const Card = styled.div`
  width: 350px;
  height: 460px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 8px 0px #000000;
  padding-top: 30px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
`;

export const Name = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;

export const Tag = styled.p`
  margin-bottom: 12px;
  color: #808080;
`;

export const Location = styled.p`
  color: #808080;
  font-weight: 500;
  margin-bottom: 94px;
`;

export const Stats = styled.ul`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  border-radius: 0 0 8px 8px;
  border-top: 2px solid #80808050;
  background-color: #f3f6f9;
`;
