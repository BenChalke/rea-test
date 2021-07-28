import SingleProperty from "./SingleProperty";

function PropertyGroup(props) {
  return (
    <div className="PropertyGroup">
      <p>Property Group</p>
      {
        // Add all of the Single property components based on the data
        props.properties.map(function(property, i){
          return <SingleProperty property={property} key={i} />;
        })
      }
    </div>
  );
}

export default PropertyGroup;
