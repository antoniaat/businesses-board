import { useState, useEffect } from 'react';
import axios from 'axios';
import { defaultBusinessData } from '../utils/constants';
import { Business } from '../types/business';

const getBusinessesEndpoint = 'https://api.jsonbin.io/b/625eb6da80883c3054e3915e/1';

interface ServerResponseProps {
  isLoading: boolean;
  data: Business[];
}

const useBusiness = () => {
  const [serverResponse, setServerResponse] = useState<ServerResponseProps>({
    isLoading: true,
    data: defaultBusinessData,
  });

  const getData = async () => {
    await axios.get<Business[]>(getBusinessesEndpoint)
      .then((response) => {
        setServerResponse({
          isLoading: false,
          data: response.data,
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return serverResponse;
};

export default useBusiness;
