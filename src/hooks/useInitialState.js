import React, { Component, useState, useEffect } from 'react';

const useInitialState = (API) => {    
    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
      fetch(API)
      .then(response = response.json())
      .then(data => setVideos(data));
    }, []);
};

export default useInitialState;