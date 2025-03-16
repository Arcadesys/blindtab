import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const MenuContainer = styled.div`
  position: relative;
  margin-left: auto;
`;

const ProfileButton = styled.button<{ $isOpen?: boolean }>`
  background: ${props => props.$isOpen ? '#e0e0e0' : 'transparent'};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background: #e0e0e0;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 200px;
  z-index: 1000;
`;

const MenuItem = styled.button`
  width: 100%;
  padding: 8px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  font-size: 14px;

  &:hover {
    background: #f5f5f5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const UserInfo = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #eee;
  margin-bottom: 8px;

  .name {
    font-weight: 500;
    font-size: 14px;
  }

  .email {
    font-size: 12px;
    color: #666;
  }
`;

const ErrorMessage = styled.div`
  padding: 8px 16px;
  color: #d32f2f;
  font-size: 12px;
  background-color: #ffebee;
  margin: 8px;
  border-radius: 4px;
`;

export const ProfileMenu: React.FC = () => {
  const { user, signIn, logout, error } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [signInError, setSignInError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      setSignInError(null);
      await signIn();
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to sign in:', error);
      if (error instanceof Error && error.message.includes('auth/unauthorized-domain')) {
        setSignInError('This domain is not authorized. Please contact the administrator.');
      } else {
        setSignInError('Failed to sign in. Please try again.');
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  return (
    <MenuContainer>
      <ProfileButton
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
        title={user ? 'Profile menu' : 'Sign in'}
      >
        {user?.photoURL ? (
          <img src={user.photoURL} alt="Profile" />
        ) : (
          '👤'
        )}
      </ProfileButton>

      {isOpen && (
        <DropdownMenu>
          {user ? (
            <>
              <UserInfo>
                <div className="name">{user.displayName}</div>
                <div className="email">{user.email}</div>
              </UserInfo>
              <MenuItem onClick={handleSignOut}>
                🚪 Sign out
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={handleSignIn}>
                🔑 Sign in with Google
              </MenuItem>
              {signInError && (
                <ErrorMessage>
                  {signInError}
                </ErrorMessage>
              )}
            </>
          )}
        </DropdownMenu>
      )}
    </MenuContainer>
  );
}; 