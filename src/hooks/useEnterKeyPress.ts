import useKeyPress from './useKeyPress';

const useEnterKeyPress = (handleEnterKeyPress: () => void): void => useKeyPress('Enter', handleEnterKeyPress);

export default useEnterKeyPress;
