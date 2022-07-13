import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import newflix from '../public/images/works/newflix.png'
import image_cropper from '../public/images/works/image_cropper.png'
import flash from '../public/images/works/flash1.png'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="NewFlix" thumbnail={newflix}>
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
