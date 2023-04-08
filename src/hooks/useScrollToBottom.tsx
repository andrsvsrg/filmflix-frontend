import {useEffect, useState} from 'react';

function useScrollToBottom(callback: () => void) {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 150) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isNearBottom) {
      callback();
      setIsNearBottom(false);
    }
  }, [isNearBottom]);

}

export default useScrollToBottom;