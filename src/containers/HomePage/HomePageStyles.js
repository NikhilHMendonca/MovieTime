import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 16px;
`;

export const Wrapper = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
`;

export const Card = styled.div`
  display: inline-block;
  width: 120px;
  margin: 0 16px 0 0;
  overflow: hidden;
`;

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #fffdfd;
  margin: 8px 0;
`;

export const MovieImage = styled.div`
  height: 170px;
  width: 100%;
  background-image: ${({ image }) => `url(${image})}`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 6px;
`;

export const MovieInfo = styled.div`
  color: #fffdfd;
  font-weight: 500;
`;

export const MovieName = styled.div`
  font-weight: 500;
  font-size: 12px;
  margin: 4px 0 2px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MovieRating = styled.div`
  font-weight: 600;
  font-size: 10px;
  color: #9c9c9c;
`;
