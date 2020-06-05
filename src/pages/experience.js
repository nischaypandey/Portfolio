import React from 'react'
import Experience from 'components/experience/experience'
import { Layout, SEO } from 'components/common/'

export default () => {
  return (
    <Layout>
      <SEO title="Experience" type="Organization" location="/experience" />
      <Experience />
    </Layout>
  )
}
