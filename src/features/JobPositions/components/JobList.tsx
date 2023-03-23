import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@linaria/core';
import { JobPosition } from './JobPosition';

import { addFilter } from '../../FilterPanel/model/filterSlice';
import { usePositions } from '../hooks/usePositions';
import { useFetchPositions } from '../hooks/useFetchPositions';

const JobList = () => {
  useFetchPositions();

  const positions = usePositions();
  const dispatch = useDispatch();

  const handleAddFilter = useCallback((filter: string) => {
    dispatch(addFilter(filter));
  }, [dispatch]);

  return (
    <div className={jobListStyles}>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          {...item }
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export { JobList };

const jobListStyles = css`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 16px;
  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;