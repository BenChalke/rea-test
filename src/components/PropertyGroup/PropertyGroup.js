import styled from 'styled-components';
import SingleProperty from "./SingleProperty";

export default function PropertyGroup(props) {
  return (
    <StyledPropertyGroup>
      {
        // Add all of the Single property components based on the data
        props.properties.map(function(property, i){
          return <SingleProperty property={property} key={i} propertyAction={props.removeProperty ? props.removeProperty : props.saveProperty} />;
        })
      }
    </StyledPropertyGroup>
  );
}

const StyledPropertyGroup = styled.div`
  // background-color: pink;
`;