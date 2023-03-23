import { css, cx } from '@linaria/core';
import { ReactComponent as Remove} from '../../assets/images/icon-remove.svg';
import { IBadge } from '../types';

const Badge = ({
  variant = 'basic',
  colorScheme = 'light',
  className = '',
  children,
  onClear,
  onClick,
}: IBadge) => (
  <div className={cx(badgeStyles,
    badgeVariantStyles[variant],
    badgeColorSchemeStyles[colorScheme],
    className)}
       onClick={onClick}>
    <span>
      {children}
    </span>
    {variant === 'clearable' && (
      <div className={badgeRemoverStyles} onClick={onClear}>
        <Remove />
      </div>
    )}
  </div>
);

export { Badge };

const badgeStyles = css`
  display: flex;
  align-items: center;
  background-color: var(--grey-200);
  color: var(--primary);
  cursor: pointer;
  border-radius: var(--radii);
  overflow: hidden;
  font-size: 12px;
  font-weight: var(--fw-bold);
  line-height: 1;
  min-height: 23px;
  & > span {
    padding: 12px 10px 10px;
  }
  &:hover {
    color: var(--grey-100);
    background-color: var(--primary);
  }
`;

const badgeVariantStyles = {
  basic: css``,
  clearable: css`
    && {
      cursor: default;
      &:hover {
        background-color: var(--grey-200);
        color: var(--primary);
      }
    }
  `,
  rounded: css`
    && {
      border-radius: 25px;
      @media (min-width: 1024px) {
        & > span {
          padding: 6px 10px 5px;
          font-size: 10px;
        }
      }
    }
  `,
}

const badgeColorSchemeStyles = {
  light: css`
    && {
      font-weight: var(--fw-bold);
    }
  `,
  primary: css`
    && {
      background-color: var(--primary);
      color: var(--grey-100);
    }
  `,
  dark: css`
    && {
      background-color: var(--grey-900);
      color: var(--grey-100);
    }
  `,
}

const badgeRemoverStyles = css`
  background-color: var(--primary);
  color: var(--grey-100);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  align-self: stretch;
  &:hover {
    background-color: var(--grey-900);
  }
`;