import { useEffect} from 'react';

const useInitialState = (API, videos, setVideos) => {

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
