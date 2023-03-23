import { css } from '@linaria/core';
import { Badge } from '../../../shared';
import { Card } from '../../../shared';
import { Stack } from '../../../shared';
import { IJobPositionCard } from '../types';
import { Positions } from './Positions';

const JobPosition = ({
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  handleAddFilter,
}: IJobPositionCard) => {
  const badges: string[] = [role, level, ...languages, ...tools];

  return (
    <Card isFeatured={featured}>
      <div className={jobPositionStyles}>
        <div className={jobPositionInfoStyles}>
          <img
            className={jobPositionAvatarStyles}
            src={logo}
            alt={company}
          />
          <div className={jobPositionBodyStyles}>
            <div className={jobPositionCompanyStyles}>
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary">
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className={jobPositionTitleStyles}>
              {position}
            </h2>
            <Stack>
              <div className={jobPositionMetaStyles}>
                {postedAt}
              </div>
              <div className={jobPositionMetaStyles}>
                {contract}
              </div>
              <div className={jobPositionMetaStyles}>
                {location}
              </div>
            </Stack>
          </div>
        </div>
        <Stack>
          <Positions badges={badges}
                     handleAddFilter={handleAddFilter}/>
        </Stack>
      </div>
    </Card>
  )
}

export { JobPosition };

const jobPositionStyles = css`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const jobPositionInfoStyles = css`
  position: relative;
  display: flex;
  gap: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--grey-800);
  @media (min-width: 1024px) {
    padding: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
`;

const jobPositionAvatarStyles = css`
  top: -65px;
  position: absolute;
  width: 80px;
  height: 80px;
  @media (min-width: 1024px) {
    position: static;
    flex-shrink: 0;
    width: 100px;
    height: 100px;
  }
`;

const jobPositionBodyStyles = css`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

const jobPositionCompanyStyles = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  & h3 {
    margin: 0;
    font-style: var(--fs-normal);
    color: var(--primary);
    font-weight: var(--fw-bold);
  }
`;

const jobPositionTitleStyles = css`
  margin-top: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    color: var(--primary);
  }
`;

const jobPositionMetaStyles = css`
  color: var(--grey-800);
  position: relative;
  &:not(:last-child) {
    padding-right: 0.5rem;
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 6px;
    width: 4px;
    height: 4px;
    background-color: var(--grey-800);
    border-radius: var(--radii-full);
  }
`;
