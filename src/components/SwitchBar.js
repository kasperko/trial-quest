import React, {useState} from 'react';
import styled from 'styled-components';
import Display from './Display';

const MainSwitchBar = styled.button`
  position: absolute;
  width: 264px;
  height: 59px;
  left: 472px;
  top: 173px;

  border: 4px solid #211A15;
  box-sizing: border-box;
  border-radius: 10px;
`;

const PoolHighlightButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  position: absolute;
  width: 112px;
  height: 40px;
  left: 484px;
  top: 182px;

  background: #211A15;
`;

const DashboardHighlightButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  position: absolute;
  width: 112px;
  height: 40px;
  left: 484px;
  top: 182px;

  background: #211A15;
`;

const PoolButtonText = styled.button`
  position: absolute;
  width: 100px;
  height: 26px;
  left: 500px;
  top: 190px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
`;

const DashboardButtonText = styled.button`
  position: absolute;
  width: 100px;
  height: 26px;
  left: 600px;
  top: 190px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
`;

const SwitchBar = ({view, onViewChangeClick}) => {
  return (
    <>
      <MainSwitchBar />
      { view === true ?
        <>
          <PoolButtonText>Pool</PoolButtonText>
          <DashboardButtonText onClick={onViewChangeClick}>Dashboard</DashboardButtonText> 
        </> :
        <>
          <PoolButtonText onClick={onViewChangeClick}>Pool</PoolButtonText>
          <DashboardButtonText>Dashboard</DashboardButtonText>
        </>
      }
    </>
  );
}


export default SwitchBar;
