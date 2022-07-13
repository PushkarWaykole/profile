import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        NewFlix <Badge>2022-</Badge>
      </Title>
      <P>
        A movie recommender app that displays movie according to the categories
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ceskkc.csb.app/">
          https://ceskkc.csb.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React</span>
        </ListItem>
        
      </List>

      <WorkImage src="/images/works/newflix.png" alt="Inkdrop" />
      {/* <WorkImage src="/images/works/newflix2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/newflix2.png" alt="Inkdrop" /> */}
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
