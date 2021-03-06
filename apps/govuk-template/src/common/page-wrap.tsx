import { FC, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { Page } from '@not-govuk/components';
import { useUserInfo } from '@not-govuk/user-info';

import './app.scss';

export const PageWrap: FC<PageProps> = ({ routes, signInHRef, signOutHRef, children }) => {
  const compare = (a, b) => (
    a.href > b.href
    ? 1
    : -1
  );
  const navigation = routes
    .map(e => ({
      href: e.href,
      text: e.title
    }))
    .sort(compare);
  const userInfo = useUserInfo();
  const sign = (
    userInfo && userInfo.username
    ? {
      href: signOutHRef,
      text: 'Sign out'
    }
    : {
      href: signInHRef,
      text: 'Sign in'
    }
  );

  return (
    <Page
      feedbackHref="/feedback"
      navigation={navigation}
      phase="alpha"
      title="NotGovUK"
      signOutHref={sign.href}
      signOutText={sign.text}
    >
      {children}
    </Page>
  );
};

export default PageWrap;
