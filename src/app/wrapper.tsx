import React from 'react';
// import CookieConsent from 'react-cookie-consent';

export default ({ element }: any) => {
  return (
    <>
      {element}
      {/* <CookieConsent
        location="bottom"
        cookieName="cookieConsent"
        expires={10000}
        style={{ fontSize: '14px'}}
        buttonStyle={{ fontSize: '14px'}}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}
    </>
  );
};
