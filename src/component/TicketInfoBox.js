import React from 'react';
import styled from 'styled-components';

import { InfoBox } from './FestivalInfoBox';

export const ImgCrop = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
    border-radius: 8px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;


function TicketInfoBox({ ticket, setOpen, setSelectedTicket }) {
  // ticket의 인덱스로 festivalInfo를 조회하고, 거기서 fullImg를 가져와야 한다.
  const { additionalInfo} = ticket;

  const onClick = () => {
    setOpen((prev) => !prev);
    setSelectedTicket({festival: additionalInfo.festival, seatStr: additionalInfo.seatStr});
  }


  return (
    <InfoBox onClick={onClick}>
      <FlexBox>
        <div style={{ width: '100px', height: '100px', position: 'relative' }}>
          <ImgCrop src={additionalInfo.festival.thumbImg} alt='' style={{zIndex: '1'}} />
        </div>
        <div>
          <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{additionalInfo.festival.name.length > 24 ? additionalInfo.festival.name.substr(0, 24) + '...' : additionalInfo.festival.name}</p>
          <p style={{ color: '#676767', marginBottom: '8px', fontSize: '12px' }}>{additionalInfo.festival.description}</p>
          <p style={{ color: '#676767', marginBottom: '8px', fontSize: '12px' }}>1 Adult, {additionalInfo.festival.schedule}, {additionalInfo.seatStr}</p>
        </div>
      </FlexBox>
    </InfoBox>
  );
}

export default TicketInfoBox;