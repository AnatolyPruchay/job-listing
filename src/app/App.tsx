import { css } from '@linaria/core';
import { FilterPanel } from '../features/FilterPanel/components/FilterPanel';
import { JobList } from '../features/JobPositions/components/JobList';
import { Header } from '../shared';

function App() {
  return (
    <>
      <Header />
      <div className={containerStyles}>
        <FilterPanel />
        <JobList />
      </div>
    </>
  )
}

export default App

const containerStyles = css`
  width: 100%;
  padding: 0 0.75rem;
  margin: 0 auto;
  @media (min-width: 1024px) {
    max-width: 1000px;
    padding: 0 1.5rem;
  }
`;