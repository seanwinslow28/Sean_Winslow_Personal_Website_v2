import { useState } from 'react';
import { handleNavClick } from '../../utils/smoothScroll';

const NAV_ITEMS = [
  { href: '#work', label: 'Work', isAnchor: true },
  { href: '#principles', label: 'Principles', isAnchor: true },
  { href: '/about', label: 'About', isAnchor: false },
  { href: '#contact', label: 'Contact', isAnchor: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkInteraction = (event, item) => {
    if (item.isAnchor) {
      handleNavClick(event, item.href);
    }

    if (!item.isAnchor) {
      return;
    }

    setIsMenuOpen(false);
  };

  const renderNavLink = (item) => (
    <a
      key={item.label}
      href={item.href}
      className="nav-link"
      onClick={(event) => {
        if (item.isAnchor) {
          handleLinkInteraction(event, item);
        } else {
          setIsMenuOpen(false);
        }
      }}
    >
      {item.label}
    </a>
  );

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="site-header" role="banner">
        <div className="site-header__inner">
          <a href="/" className="site-logo" aria-label="Sean Winslow home">
            Sean Winslow
          </a>

          <nav aria-label="Primary" className="site-nav">
            <div className="site-nav__desktop">
              {NAV_ITEMS.map(renderNavLink)}
            </div>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="menu-toggle__label">Menu</span>
              <span className="menu-toggle__icon" aria-hidden="true">☰</span>
            </button>

            {isMenuOpen && (
              <div id="primary-navigation" className="site-nav__mobile">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={`mobile-${item.label}`}
                    href={item.href}
                    className="nav-link"
                    onClick={(event) => {
                      if (item.isAnchor) {
                        handleLinkInteraction(event, item);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
