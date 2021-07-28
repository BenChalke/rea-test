import React from "react";
import styled from 'styled-components';
import Properties from '../pages/Properties/Properties';

class AppRouter extends React.Component {
  // Use this component to switch directory/page
  render() {
    return (
      <AppDiv>
        <Properties />
      </AppDiv>
    );
  }
}

export default AppRouter;


const AppDiv = styled.div`
  background-color: #333333;
  min-height: 100vh;
`;