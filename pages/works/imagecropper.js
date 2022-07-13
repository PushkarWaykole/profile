import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Image cropper <Badge>2011-2016</Badge>
      </Title>
      <P>
        This is a image cropper web app built with React.<br />
        Users have the option to zoom and rotate the image.<br/>
        Also the user can adjust the brightness and contrast of the image and preview it.
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        
        <ListItem>
          <Meta>Stack</Meta>
          <span>React,Jsuits library</span>
        </ListItem>
      </List>

      

      
      <WorkImage src="/images/works/image_cropper.png" alt="walknote" />
      <WorkImage src="/images/works/image_cropper2.png" alt="walknote" />
      <WorkImage src="/images/works/image_cropper3.png" alt="walknote" />
      <WorkImage src="/images/works/image_cropper4.png" alt="walknote" />
      <WorkImage src="/images/works/image_cropper5.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
