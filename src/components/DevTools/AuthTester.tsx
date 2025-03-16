import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const Container = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  color: #e0e0e0;
  font-family: monospace;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  color: #61dafb;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #9cdcfe;
`;

const Input = styled.input`
  background-color: #2d2d2d;
  border: 1px solid #444;
  border-radius: 4px;
  padding: 8px;
  color: white;
  font-family: monospace;
`;

const Button = styled.button`
  background-color: #0078d4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-family: monospace;
  
  &:hover {
    background-color: #106ebe;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  padding: 8px;
  color: #d32f2f;
  background-color: #ffebee;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 14px;
`;

const SuccessMessage = styled.div`
  padding: 8px;
  color: #2e7d32;
  background-color: #e8f5e9;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 14px;
`;

const UserInfo = styled.div`
  background-color: #2d2d2d;
  border-radius: 4px;
  padding: 12px;
  margin-top: 16px;
`;

const AuthTester: React.FC = () => {
  const { user, signIn, logout } = useAuth();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Successfully signed in!');
    } catch (error) {
      console.error('Error signing in:', error);
      setError(error instanceof Error ? error.message : 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Account created successfully!');
    } catch (error) {
      console.error('Error creating account:', error);
      setError(error instanceof Error ? error.message : 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);
    
    try {
      await logout();
      setSuccess('Successfully signed out!');
    } catch (error) {
      console.error('Error signing out:', error);
      setError(error instanceof Error ? error.message : 'Failed to sign out');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Authentication Tester</Title>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
      
      {user ? (
        <>
          <UserInfo>
            <div><strong>User ID:</strong> {user.uid}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>Display Name:</strong> {user.displayName || 'Not set'}</div>
            <div><strong>Email Verified:</strong> {user.emailVerified ? 'Yes' : 'No'}</div>
          </UserInfo>
          
          <Button onClick={handleSignOut} disabled={loading}>
            Sign Out
          </Button>
        </>
      ) : (
        <Form onSubmit={handleSignIn}>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button type="submit" disabled={loading}>
              Sign In
            </Button>
            <Button type="button" onClick={handleCreateAccount} disabled={loading}>
              Create Account
            </Button>
          </div>
        </Form>
      )}
      
      <div style={{ marginTop: '16px' }}>
        <p>Note: This is for development testing only. In production, use the Google sign-in button.</p>
      </div>
    </Container>
  );
};

export default AuthTester; 