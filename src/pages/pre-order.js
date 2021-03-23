import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from '../components/layout';

const PreOrder = () => (
  <Translation>
    {(t) => (
      <Layout>
        <h1>{t(`This is the Pre-Order page.`)}</h1>
      </Layout>
    )}
  </Translation>
);

export default withI18next()(PreOrder);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
