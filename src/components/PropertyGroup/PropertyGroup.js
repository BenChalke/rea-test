import styled from 'styled-components';
import SingleProperty from "./SingleProperty";

// This component consists of muiltiple single property components
// We pass the data through and render the amount of components we need
export default function PropertyGroup(props) {
  return (
    <div>
      {props.properties &&
        // Add all of the Single property components based on the data
        props.properties.map(function(property, i){
          // Check if the property is already saved
          let alreadySaved = '';
          if(props.savedData) {
            const foundItem = props.savedData.filter(item => item.id === property.id);
            alreadySaved = foundItem.length > 0;
          }
          
          // Display all the properties in the data
          return <SingleProperty property={property} key={i} propertyFunction={props.removeProperty ? props.removeProperty : props.saveProperty} propertyAction={props.removeProperty ? 'Remove' : 'Save'} alreadySaved={alreadySaved} />;
        })
      }
      {props.properties.length < 1 &&
        // If there is no properties show a message
        <NoProperties>No properties to show.</NoProperties>
      }
    </div>
  );
}

// Component Styles
const NoProperties = styled.p`
  padding: 20px 10px;
  text-align: center;
  color: #6b7884;
`;
// End styles