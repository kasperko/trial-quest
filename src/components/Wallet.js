import styled from 'styled-components';

const ConnectWalletButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  position: absolute;
  width: 207px;
  height: 40px;
  left: 1209px;
  top: 24px;

  background: #211A15;

  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 10px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ConnectWalletButtonText = styled.p`
  position: static;
  width: 135px;
  height: 24px;
  left: 36px;
  top: 8px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #FFFFFF;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`;

const AddressButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  position: absolute;
  width: 207px;
  height: 40px;
  left: 1209px;
  top: 24px;

  background: #211A15;

  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 10px;
`;

const AddressButtonText = styled.p`
  position: static;
  width: 100px;
  height: 24px;
  left: 53px;
  top: 8px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #FFFFFF;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ETHBalanceButton = styled.div`
  position: absolute;
  width: 125px;
  height: 40px;
  left: 1102px;
  top: 24px;

  border: 4px solid #211A15;
  box-sizing: border-box;
  border-radius: 10px;
`;

const ETHBalanceButtonText = styled.p`
  position: absolute;
  width: 68px;
  height: 26px;
  left: 1122px;
  top: 18px;

  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: rgba(0, 0, 0, 0.85);
`;

const Wallet = ({defaultAccount, connectWalletHandler, connectionButtonText, userBalance, errorMessage}) => {
  return (
    <>
      {defaultAccount === null ? 
        <ConnectWalletButton onClick={connectWalletHandler}>
          <ConnectWalletButtonText>{connectionButtonText}</ConnectWalletButtonText>
        </ConnectWalletButton> :
        <>
          <ETHBalanceButton />
          <ETHBalanceButtonText>
            {userBalance} ETH
          </ETHBalanceButtonText>
          <AddressButton>
            <AddressButtonText>{connectionButtonText}</AddressButtonText>
          </AddressButton>
        </>
      }
      {errorMessage}
    </>
  );
}

export default Wallet;