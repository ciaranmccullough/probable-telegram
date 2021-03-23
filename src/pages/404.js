import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from '../components/layout';

const NotFoundPage = () => (
  <Translation>
    {(t) => (
      <Layout>
        {/* <SEO title={t('404: Not found')} /> */}
        <h1>{t(`404: Not found`)}</h1>
        <p>{t(`NOT FOUND`)}</p>
        <p>{t(`You just hit a route that doesn't exist... the sadness.`)}</p>
      </Layout>
    )}
  </Translation>
);

export default withI18next()(NotFoundPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
