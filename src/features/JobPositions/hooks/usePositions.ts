import { useSelector } from 'react-redux';
import type { RootState } from '../../../app/model/store';

import { selectVisiblePositions } from '../model/positionSlice';
import { selectFilters } from '../../FilterPanel/model/filterSlice';


export const usePositions = () => {
  const currentFilters = useSelector(selectFilters);
  return  useSelector((state: RootState) => selectVisiblePositions(state, currentFilters));
}