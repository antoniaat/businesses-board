import { useState, useEffect } from 'react';
import axios from 'axios';
import { defaultBusinessesData } from '../utils/constants';
import { Business } from '../types/business';

const getBusinessesEndpoint = 'https://api.jsonbin.io/b/60215a7906934b65f530333a';

interface ServerResponseProps {
  isLoading: boolean;
  data: Business[];
}

const useBusiness = () => {
  const [serverResponse, setServerResponse] = useState<ServerResponseProps>({
    isLoading: true,
    data: defaultBusinessesData,
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
