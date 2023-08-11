import { About } from '@components/home/about'
import { Banner } from '@components/home/banner'
import { Contact } from '@components/home/contact'
import { FeaturedProjects } from '@components/home/featured-projects'
import { Tagline } from '@components/home/tagline'
import { DefaultLayout } from '@src/layouts/default'

const Home = () => {
  return (
    <DefaultLayout title='Home'>
      <Banner />
      <Tagline />
      <FeaturedProjects />
      <About />
      <Contact />
    </DefaultLayout>
  )
}

export default Home
