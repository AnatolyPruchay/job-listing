import { css } from '@linaria/core';

const Header = () => {
  return (
    <header className={headerStyles} />
  )
}

export { Header };

const headerStyles = css`
  min-height: 156px;
  background-image: url(../../assets/images/bg-header-mobile.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--primary);
  @media (min-width: 1024px) {
    background-image: url(../../assets/images/bg-header-desktop.svg);
  }
`;