import { useState, useEffect } from 'react';
import axios from 'axios';
import { Business } from '../types/business';

const getBusinessesEndpoint = 'https://api.jsonbin.io/b/625eb6da80883c3054e3915e/12';

interface ServerResponseProps {
  data: Business[];
}

const useBusiness = () => {
  const [serverResponse, setServerResponse] = useState<ServerResponseProps>({
    data: [],
  });

  useEffect(() => {
    axios.get<Business[]>(getBusinessesEndpoint)
      .then((response) => {
        setServerResponse({
          data: response.data,
        });
      });
  }, []);

  return serverResponse;
};

export default useBusiness;
