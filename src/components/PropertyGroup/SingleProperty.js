
import React from 'react';
import styled from 'styled-components';

export default function SingleProperty(props) {
  const { logo, brandingColors } = props.property.agency;
  const { id, mainImage, price } = props.property;

  return (
    <StyledSingleProperty data-id={id} className="SingleProperty" onClick={props.propertyAction}>
      <StyledHeader color={brandingColors.primary}>
        <StyledImg className="property-logo" src={logo} />
      </StyledHeader>
      <div>
        <StyledImg src={mainImage} />
      </div>
      <StyledPrice>
        <p className="price-label">Price:</p>
        <p className="price-amount">{price}</p>
      </StyledPrice>
    </StyledSingleProperty>
  );
}

// Component Styles
const StyledSingleProperty = styled.div`
  max-width: 300px;
  margin: 20px auto;
  box-shadow: 2px 2px 5px #dedede, -2px -1px 5px #dedede;
  border-radius: 10px;
  overflow: hidden;
`;

const StyledHeader = styled.div`
  background-color: ${p => p.color}
`;

const StyledImg = styled.img`
  max-width: 100%;
  display: block;

  &.property-logo {
    margin: 0 auto;
    padding: 5px;
  }
`;

const StyledPrice = styled.div`
  display: block;
  padding: 10px;
  position: relative;

  p {
    display: block;
    padding: 10px 0;
    margin: 0;
    text-align: center;

    &.price-label {
      position: absolute;
      top: 0;
    }

    &.price-amount {
      font-size: 1.2em;
      font-weight: 600;
    }
  }
`;
// End Styles
