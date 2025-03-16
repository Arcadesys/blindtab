import React, { useState } from 'react';
import styled from 'styled-components';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db, COLLECTIONS } from '../utils/firebase';

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

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #0078d4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  
  &:hover {
    background-color: #106ebe;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div<{ $type: 'success' | 'error' | 'info' }>`
  margin-top: 12px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${props => 
    props.$type === 'success' ? '#10893e33' : 
    props.$type === 'error' ? '#d1314733' : 
    '#0078d433'};
  border-left: 4px solid ${props => 
    props.$type === 'success' ? '#10893e' : 
    props.$type === 'error' ? '#d13147' : 
    '#0078d4'};
`;

const TestItem = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: #2d2d2d;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: #d13147;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #a82636;
  }
`;

interface TestDoc {
  id: string;
  text: string;
  createdAt: any;
}

const FirestoreTest: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [testDocs, setTestDocs] = useState<TestDoc[]>([]);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  
  const handleAddTestDoc = async () => {
    try {
      setLoading(true);
      setStatus({ message: 'Adding test document...', type: 'info' });
      
      const testDoc = {
        text: `Test document created at ${new Date().toLocaleTimeString()}`,
        createdAt: serverTimestamp()
      };
      
      const docRef = await addDoc(collection(db, COLLECTIONS.SONGS), testDoc);
      
      setStatus({ 
        message: `Successfully added test document with ID: ${docRef.id}`, 
        type: 'success' 
      });
      
      // Refresh the list
      await handleFetchTestDocs();
    } catch (error) {
      console.error('Error adding test document:', error);
      setStatus({ 
        message: `Error adding test document: ${error instanceof Error ? error.message : String(error)}`, 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleFetchTestDocs = async () => {
    try {
      setLoading(true);
      setStatus({ message: 'Fetching test documents...', type: 'info' });
      
      const querySnapshot = await getDocs(collection(db, COLLECTIONS.SONGS));
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as TestDoc[];
      
      setTestDocs(docs);
      setStatus({ 
        message: `Successfully fetched ${docs.length} test documents`, 
        type: 'success' 
      });
    } catch (error) {
      console.error('Error fetching test documents:', error);
      setStatus({ 
        message: `Error fetching test documents: ${error instanceof Error ? error.message : String(error)}`, 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleDeleteTestDoc = async (id: string) => {
    try {
      setLoading(true);
      setStatus({ message: `Deleting test document ${id}...`, type: 'info' });
      
      await deleteDoc(doc(db, COLLECTIONS.SONGS, id));
      
      setStatus({ 
        message: `Successfully deleted test document with ID: ${id}`, 
        type: 'success' 
      });
      
      // Refresh the list
      await handleFetchTestDocs();
    } catch (error) {
      console.error('Error deleting test document:', error);
      setStatus({ 
        message: `Error deleting test document: ${error instanceof Error ? error.message : String(error)}`, 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Container>
      <Title>Firestore Test</Title>
      
      <ButtonGroup>
        <Button onClick={handleAddTestDoc} disabled={loading}>
          Add Test Document
        </Button>
        <Button onClick={handleFetchTestDocs} disabled={loading}>
          Fetch Test Documents
        </Button>
      </ButtonGroup>
      
      {status && (
        <StatusMessage $type={status.type}>
          {status.message}
        </StatusMessage>
      )}
      
      {testDocs.length > 0 && (
        <div>
          <h4>Test Documents:</h4>
          {testDocs.map(doc => (
            <TestItem key={doc.id}>
              <div>
                <strong>{doc.id}</strong>: {doc.text}
              </div>
              <DeleteButton onClick={() => handleDeleteTestDoc(doc.id)}>
                Delete
              </DeleteButton>
            </TestItem>
          ))}
        </div>
      )}
    </Container>
  );
};

export default FirestoreTest; 