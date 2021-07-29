import React from "react";
import styled from 'styled-components';
import Properties from '../pages/Properties/Properties';

// Use this component to switch directory/page
export default class AppRouter extends React.Component {
  render() {
    return (
      <AppDiv>
        <Properties />
      </AppDiv>
    );
  }
}

// Component Styles
const AppDiv = styled.div`
  background-color: #333333;
  min-height: 100vh;
`;
// End styles