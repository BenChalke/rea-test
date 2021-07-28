
import styled from 'styled-components';

function SingleProperty(props) {

  const { logo, brandingColors } = props.property.agency;
  const { mainImage, price } = props.property

  // Styles
  const StyledSingleProperty = styled.div`
    max-width: 300px;
    margin: 20px auto;
    box-shadow: 2px 2px 5px #dedede, -2px -1px 5px #dedede;
  `;

  const StyledHeader = styled.div`
    background-color: ${brandingColors.primary}
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

    p {
      display: block;
      padding: 10px 0;
      margin: 0;
    }
  `;
  // End Styles

  return (
    <StyledSingleProperty className="SingleProperty">
      <StyledHeader>
        <StyledImg className="property-logo" src={logo} />
      </StyledHeader>
      <div>
        <StyledImg src={mainImage} />
      </div>
      <StyledPrice>
        <p>Price: {price}</p>
      </StyledPrice>
    </StyledSingleProperty>
  );
}

export default SingleProperty;
