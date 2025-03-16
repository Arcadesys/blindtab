import React, { useState } from 'react';
import styled from 'styled-components';
import { useSong } from '../contexts/SongContext';

const NoticeContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 300px;
  display: ${props => props.$visible ? 'block' : 'none'};
  border-left: 4px solid #ff9800;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Message = styled.div`
  font-size: 14px;
  line-height: 1.4;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  margin-left: 8px;
`;

const PreviewModeNotice: React.FC = () => {
  const [visible, setVisible] = useState(true);
  
  // Safely try to use the SongContext
  let isPreviewMode = false;
  try {
    const songContext = useSong();
    isPreviewMode = songContext.isPreviewMode;
  } catch (error) {
    console.warn('PreviewModeNotice: SongContext not available');
    return null;
  }

  if (!isPreviewMode) return null;

  return (
    <NoticeContainer $visible={visible}>
      <Title>
        Preview Mode
        <CloseButton onClick={() => setVisible(false)}>×</CloseButton>
      </Title>
      <Message>
        You're viewing a preview deployment. Some features like saving songs and user authentication may be limited.
      </Message>
    </NoticeContainer>
  );
};

export default PreviewModeNotice; 