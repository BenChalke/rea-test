import styled from 'styled-components';
import SingleProperty from "./SingleProperty";

export default function PropertyGroup(props) {
  return (
    <StyledPropertyGroup>
      {
        // Add all of the Single property components based on the data
        props.properties.map(function(property, i){
          return <SingleProperty property={property} key={i} propertyFunction={props.removeProperty ? props.removeProperty : props.saveProperty} propertyAction={props.removeProperty ? 'Remove' : 'Save'} />;
        })
      }
    </StyledPropertyGroup>
  );
}

const StyledPropertyGroup = styled.div`
  // background-color: pink;
`;