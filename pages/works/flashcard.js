import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        Flash Card App <Badge>2022</Badge>
      </Title>
      <P>
        A video work generated with deep learning, imitating famous four
        painters: Van Gogh, Edvard Munch, Kiyoshi Yamashita, and Katsushika
        Hokusai.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Js</span>
        </ListItem>
        <ListItem>
          <Meta>Link to website</Meta>
          <Link href="https://csb-uegijl.netlify.app/">
            Flash Card <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
        
      </List>

      

      

      

      
      <WorkImage src="/images/works/flash1.png" alt="walknote" />
      <WorkImage src="/images/works/flash2.png" alt="walknote" />
      <WorkImage src="/images/works/flash3.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
