import { css, cx } from '@linaria/core';
import { ICard } from '../types';

const Card = ({ children, isFeatured, className }: ICard) => {
  return (
    <div className={cx(cardStyles, className, isFeatured && cardFeaturedStyles)}>
      {children}
    </div>
  )
}

export { Card };

const cardStyles = css`
  background-color: white;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  border-left: 5px solid var(--grey-100);
  margin-bottom: 16px;
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const cardFeaturedStyles = css`
  border-left-color: var(--primary);
`;