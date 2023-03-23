import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addPositions } from '../model/positionSlice';

import data from '../api/mock/data.json';

export const useFetchPositions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  }, [dispatch]);
}
