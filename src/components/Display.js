import styled from 'styled-components';

const MainContainer = styled.div`
  position: absolute;
  width: 496px;
  height: 483px;
  left: 472px;
  top: 252px;

  background: #211A15;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const PoolName = styled.p`
  position: absolute;
  width: 137px;
  height: 23px;
  left: 488px;
  top: 267px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  text-align: center;

  color: #FFFFFF;
`;

const TopSubContainer = styled.div`
  position: absolute;
  width: 465px;
  height: 98px;
  left: 488px;
  top: 335px;

  background: #302720;
  border-radius: 10px;
`;

const TokenButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  position: absolute;
  width: 97px;
  height: 25px;
  left: 507px;
  top: 356px;

  background: #302720;

  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const TokenImage = styled.image`
  position: absolute;
  width: 19px;
  height: 19px;
  left: 8.5px;
  top: 8.5px;

  background: #FFFFFF;

  border: 0.5px solid #595959;
  box-sizing: border-box;
`;

const TokenName = styled.p`
  position: static;
  width: 29px;
  height: 24px;
  left: 35.5px;
  top: 6px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #FFFFFF;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
`;

const TokenChangeIcon = styled.p`
  position: absolute;
  width: 10px;
  height: 9px;
  right: 848.5px;
  top: calc(50% - 9px/2 - 128px);

  background: #302720;
  transform: rotate(-90deg);
`;

const MaxBox = styled.div`
  position: absolute;
  width: 47px;
  height: 28px;
  left: 650px;
  top: 360px;

  background: rgba(245, 103, 54, 0.3);
  border-radius: 10px;
`;

const MaxText = styled.p`
  position: absolute;
  width: 31px;
  height: 13px;
  left: 657px;
  top: 355px;

  font-family: Public Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.085em;

  color: #F56736;
`;

const BalanceAmount = styled.p`
  position: absolute;
  width: 171px;
  height: 26px;
  left: 450px;
  top: 390px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  text-align: center;

  color: rgba(255, 255, 255, 0.6);
`;

const DepositAndWithdrawAmount = styled.input`
  position: absolute;
  width: 37px;
  height: 26px;
  left: 884px;
  top: 361px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;

  text-align: center;

  color: rgba(255, 255, 255, 0.6);
  background-color: Transparent;
  border: none;
`;

const BottomSubContainer = styled.div`
  position: absolute;
  width: 465px;
  height: 143px;
  left: 488px;
  top: 468px;

  background: #302720;
  border-radius: 10px;
`;

const StatsNames = styled.ul`
  position: absolute;
  width: 169px;
  height: 124px;
  left: 507px;
  top: 481px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 24px;

  color: rgba(255, 255, 255, 0.85);

  list-style: none;
  margin: 0;
  padding: 0;

  text-align: left;
`;

const StatsNumbers = styled.ul`
  position: absolute;
  width: 169px;
  height: 124px;
  left: 747px;
  top: 481px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;

  list-style: none;
  margin: 0;
  padding: 0;

  text-align: right;

  color: rgba(255, 255, 255, 0.85);
`;

const BottomButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  position: absolute;
  width: 465px;
  height: 51px;
  left: 484px;
  top: 650px;

  background: #80381F;

  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 10px;
`;

const BottomButtonText = styled.p`
  position: static;
  width: 183px;
  height: 24px;
  left: 141px;
  top: 13.5px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #FFFFFF;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

const PoolStatsNames = () => {
  return (
    <>
      <li>Pool Stats</li>
      <li>Total Supply</li>
      <li>Total Borrowed</li>
      <li>Active Loans</li>
      <li>Minimum Borrow Period</li>
    </>
  );
}

const DashboardStatsNames = () => {
  return (
    <>
      <li>Your Stats</li>
      <li>Balance</li>
      <li>Conversion</li>
      <li>Your Share of the Pool</li>
      <li>Current Borrow Rate</li>
    </>
  );
}

const UnconnectedStatsNumbers = () => {
  return (
    <>
      <li>&nbsp;</li>
      <li>-</li>
      <li>-</li>
      <li>-</li>
      <li>-</li>
    </>
  );
}

const Logo = styled.h1`
  position: static;
  text-align: left;
`;

const Display = ({view, connected, balance, connectWalletHandler}) => {
  const ConnectedPoolStatsNumbers = () => {
    return (
      <>
        <li>&nbsp;</li>
        <li>{}k UNI / ${}M</li>
        <li>{}k UNI / ${}M</li>
        <li>-</li>
        <li>{} days</li>
      </>
    );
  }

  const ConnectedDashboardStatsNumber = () => {
    return (
      <>
        <li>&nbsp;</li>
        <li>{} palUNI / ${}</li>
        <li>1 palUni = 1.4 UNI</li>
        <li>{}%</li>
        <li>{}%</li>
      </>
    );
  }

  let approved = false;
  let bottomButtonText;

  const handleBottomButtonText = () => {
    if (bottomButtonText === 'APPROVE') bottomButtonText = 'DEPOSIT';
    if (bottomButtonText === 'CONNECT TO A WALLET') connectWalletHandler();
  }

  if (connected && !view) {
    bottomButtonText = 'WITHDRAW';
  } else if (connected && view && approved) {
    bottomButtonText = 'DEPOSIT';
  } else if (connected && view && !approved) {
    bottomButtonText = 'APPROVE';
  } else {
    bottomButtonText = 'CONNECT TO A WALLET';
  }

  return (
    <>
      <Logo>Paladin</Logo>
      <MainContainer />
      <PoolName>{ view ? 'palUNI Pool' : 'Dashboard' }</PoolName>
      <TopSubContainer />
      <TokenButton>
        <TokenName>UNI</TokenName>
        <TokenChangeIcon>&#62;</TokenChangeIcon>
      </TokenButton>
      <MaxBox />
      <MaxText>MAX</MaxText>
      <BalanceAmount>Balance: {balance}</BalanceAmount>
      <DepositAndWithdrawAmount type="text" placeholder="0.0"/>
      <BottomSubContainer />
      <StatsNames>
        { view ? 
          <PoolStatsNames /> :
          <DashboardStatsNames /> 
        }        
      </StatsNames>
      <StatsNumbers>
        { connected && view ? <ConnectedPoolStatsNumbers /> : connected && !view ? <ConnectedDashboardStatsNumber /> : <UnconnectedStatsNumbers /> }
      </StatsNumbers>
      <BottomButton onClick={handleBottomButtonText}>
        <BottomButtonText>{bottomButtonText}</BottomButtonText>
      </BottomButton>
    </>
  )
}

export default Display;
