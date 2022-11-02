import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`;

export const AvatarImage = styled.img`
  width: 30px;
  height: 30px;
  border: 3px solid #c1c1c1;
  border-radius: 50%;
`;

export const Rank = styled.span`
  position: absolute;
  border-radius: 50%;
  color: #000000;
  font-size: 0.7rem;
  padding: 2px 5px;
  background-color: #F6C528;
  top: 23px;
  left: 20px ;
`