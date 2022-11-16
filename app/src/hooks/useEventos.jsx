import {fetchEventos} from '@/services/eventos';
import {useEffect, useState} from 'react';

export function useEventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetchEventos().then((data) => {
      const {eventos} = data;

      setEventos(eventos);
    });
  }, []);

  return {
    eventos,
  };
}