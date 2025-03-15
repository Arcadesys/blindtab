import { songOperations } from '../db';
import { browserDB } from '../browserDB';

// Mock the browserDB
jest.mock('../browserDB', () => ({
  browserDB: {
    isInitialized: jest.fn(),
    getAllSongs: jest.fn(),
    getSongById: jest.fn(),
    createSong: jest.fn(),
    updateSong: jest.fn(),
    deleteSong: jest.fn(),
  }
}));

describe('Database Operations', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe('init', () => {
    it('should successfully initialize the database', async () => {
      (browserDB.isInitialized as jest.Mock).mockResolvedValue(true);
      const result = await songOperations.init();
      expect(result).toBe(true);
      expect(browserDB.isInitialized).toHaveBeenCalled();
    });

    it('should handle database initialization failure', async () => {
      (browserDB.isInitialized as jest.Mock).mockResolvedValue(false);
      const result = await songOperations.init();
      expect(result).toBe(false);
      expect(browserDB.isInitialized).toHaveBeenCalled();
    });
  });

  describe('checkConnection', () => {
    it('should return true when database is connected', async () => {
      (browserDB.isInitialized as jest.Mock).mockResolvedValue(true);
      const result = await songOperations.checkConnection();
      expect(result).toBe(true);
    });

    it('should return false when database is not connected', async () => {
      (browserDB.isInitialized as jest.Mock).mockResolvedValue(false);
      const result = await songOperations.checkConnection();
      expect(result).toBe(false);
    });
  });

  // Add more test cases for other operations as needed
}); 