import styled from 'styled-components';
import SingleProperty from "./SingleProperty";

export default function PropertyGroup(props) {
  return (
    <div>
      {props.properties &&
        // Add all of the Single property components based on the data
        props.properties.map(function(property, i){
          let alreadySaved = '';
          if(props.savedData) {
            const foundItem = props.savedData.filter(item => item.id === property.id);
            alreadySaved = foundItem.length > 0;
          }
          
          return <SingleProperty property={property} key={i} propertyFunction={props.removeProperty ? props.removeProperty : props.saveProperty} propertyAction={props.removeProperty ? 'Remove' : 'Save'} alreadySaved={alreadySaved} />;
        })
      }
      {props.properties.length < 1 &&
        <NoProperties>No properties to show.</NoProperties>
      }
    </div>
  );
}

const NoProperties = styled.p`
  padding: 20px 10px;
  text-align: center;
  color: #6b7884;
`;
