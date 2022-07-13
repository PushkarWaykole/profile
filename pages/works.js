import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import newflix from '../public/images/works/newflix.png'
import image_cropper from '../public/images/works/image_cropper.png'
import flash from '../public/images/works/flash1.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="newflix" title="NewFlix" thumbnail={newflix}>
            A Movie recommender app with categories.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="imagecropper"
            title="Image Cropper"
            thumbnail={image_cropper}
          >
            Image cropper and editor
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="flashcard"
            title="Flash Card App"
            thumbnail={flash}
          >
            A Flash Card App that generates random questions and on clicking the card shows the answer.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
