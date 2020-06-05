import React from 'react'
import Education from 'components/education/education'
import { Layout, SEO } from 'components/common/'

export default () => {
  return (
    <Layout>
      <SEO title="Education" type="Organization" location="/education" />
      <Education />
    </Layout>
  )
}
