import { css } from '@linaria/core';
import { IStack } from '../types';

const Stack = ({ children }: IStack) => (
  <div className={stackStyles}>
     {children}
  </div>
);

export { Stack };

const stackStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;