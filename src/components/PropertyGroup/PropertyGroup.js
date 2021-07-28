import styled from 'styled-components';
import SingleProperty from "./SingleProperty";

function PropertyGroup(props) {
  return (
    <StyledPropertyGroup>
      {
        // Add all of the Single property components based on the data
        props.properties.map(function(property, i){
          return <SingleProperty property={property} key={i} />;
        })
      }
    </StyledPropertyGroup>
  );
}

export default PropertyGroup;


const StyledPropertyGroup = styled.div`
  // margin: 0 auto;
`;