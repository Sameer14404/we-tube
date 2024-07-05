import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const ShimmerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const ShimmerCard = styled.div`
  width: 300px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  animation: ${shimmer} 2s infinite linear;
  background-size: 1000px 100%;
`;

const ShimmerImage = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 8px;
  background-color: #ccc;
`;

const ShimmerLine = styled.div`
  width: ${(props) => props.width || '100%'};
  height: 20px;
  border-radius: 4px;
  background-color: #ccc;
  margin: 16px 0;
`;

const Shimmer = () => {
  const renderShimmerCards = () => {
    const cards = [];
    for (let i = 0; i < 9; i++) {
      cards.push(
        <ShimmerCard key={i}>
          <ShimmerImage />
          <ShimmerLine width="60%" />
          <ShimmerLine width="80%" />
          <ShimmerLine width="40%" />
        </ShimmerCard>
      );
    }
    return cards;
  };

  return <ShimmerWrapper>{renderShimmerCards()}</ShimmerWrapper>;
};

export default Shimmer