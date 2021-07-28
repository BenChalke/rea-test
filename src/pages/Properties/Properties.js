
import React from 'react';
import styled from 'styled-components';
import PropertyGroup from "../../components/PropertyGroup/PropertyGroup";

export default class Properties extends React.Component {
  constructor() {
    super();

    this.state = {
      propertyData: {
        "results": [
          {
            "id": "1",
            "price": "$726,500",
            "mainImage": "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
            "agency": {
              "logo": "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
              "brandingColors": {
                "primary": "#ffe512"
              },
            }
          }, 
          {
            "id": "2",
            "price": "$560,520",
            "mainImage": "https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg",
            "agency": {
              "logo": "https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif",
              "brandingColors": {
                "primary": "#fcfa3b"
              }
            },
          }, 
          {
            "id": "3",
            "price": "$826,500",
            "mainImage": "https://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg",
            "agency": {
              "logo": "https://i1.au.reastatic.net/170x32/b269b079bf554d2ae9ca01d578bb3d80ec5fbb4f57062bbfcd51bbf1f2d13981/main.gif",
              "brandingColors": {
                "primary": "#57B5E0"
              }
            },
          }
        ],
        "saved": [
          {
            "id": "4",
            "price": "$526,500",
            "mainImage": "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg",
            "agency": {
              "logo": "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif",
              "brandingColors": {
                "primary": "#000000"
              }
            },
          }
        ]
      }
    }

    this.removeProperty = this.removeProperty.bind(this);
    this.saveProperty = this.saveProperty.bind(this);
    this.alreadySaved = this.alreadySaved.bind(this);

  }
  alreadySaved(id) {
    let propertyData = this.state.propertyData;
    const foundItem = propertyData.saved.filter(item => item.id === id);
    return foundItem.length > 0;

  }
  saveProperty(e) {
    const id = e.currentTarget.dataset.id;

    let propertyData = this.state.propertyData;

    // Check if already saved
    if(this.alreadySaved(id, propertyData)) {
      return;
    }

    const property = propertyData.results.filter(item => item.id === id);
    propertyData.saved = [...propertyData.saved, property[0]];

    const button = e.currentTarget.querySelector('.action-button');
    button.innerHTML = 'Saved!';

    this.setState({
      propertyData: propertyData
    });
  }
  removeProperty(e) {
    const id = e.currentTarget.dataset.id;

    let propertyData = this.state.propertyData;
    const newSavedData = propertyData.saved.filter(item => item.id !== id);
    propertyData.saved = newSavedData;

    this.setState({
      propertyData: propertyData
    });
  }
  render() {
    return(
      <StyledProperties className="Properties">
        <StyledPropertyGroup className="PropertyGroup">
          <h2>Results</h2>
          <PropertyGroup properties={this.state.propertyData.results} saveProperty={this.saveProperty} savedData={this.state.propertyData.saved} />
        </StyledPropertyGroup>
        <StyledPropertyGroup className="PropertyGroup">
          <h2>Saved Properties</h2>
          <PropertyGroup properties={this.state.propertyData.saved} removeProperty={this.removeProperty}/>
        </StyledPropertyGroup>
      </StyledProperties>
    );
  }
}

// Component Styles
const StyledPropertyGroup = styled.div`
  flex: 1 1 400px;
  margin: 10px;
  border: 1px solid #dedede;
  border-radius: 10px;
  background-color: #ffffff;

  h2 {
    text-align: center;
  }
`;

const StyledProperties = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  color: #333333;
`;
// End styles
