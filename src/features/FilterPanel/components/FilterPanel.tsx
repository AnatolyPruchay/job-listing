import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@linaria/core';

import { Badge } from '../../../shared';
import { Card } from '../../../shared';
import { Stack } from '../../../shared';

import { removeFilter, clearFilter, selectFilters } from '../model/filterSlice';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  const removeHandler = useCallback((filter: string) => () => {
    dispatch(removeFilter(filter))
  }, [dispatch]);

  const clearHandler = useCallback(() => {
    dispatch(clearFilter())
  }, [dispatch]);

  if (currentFilters.length === 0) {
    return null;
  } 

  return (
    <Card className={filterPanelStyles}>
      <div className={filterPanelWrapperStyles}>
        <Stack>
          {currentFilters.map(filter => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={removeHandler(filter)}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button
          className={linkStyles}
          onClick={clearHandler}
        >Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };

const filterPanelStyles = css`
  margin-top: -32px;
`;

const filterPanelWrapperStyles = css`
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: space-between;
`;

const linkStyles = css`
  color: var(--grey-800);
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: var(--fw-bold);
  padding: .5rem;  
  &:hover {
    color: var(--primary);
    text-decoration: underline;
  }
`;