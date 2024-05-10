import {addEventListener} from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';

export const useNetworkStatus = () => {
  const [connectStatus, setConnectStatus] = useState(false);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setConnectStatus(state.isConnected && state.isInternetReachable);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return connectStatus;
};
