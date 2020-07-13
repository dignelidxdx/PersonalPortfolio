import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [setVideos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response = response.json())
      .then((data) => setVideos(data));
  }, []);
};

export default useInitialState;
