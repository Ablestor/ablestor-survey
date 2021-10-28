import { BlockContainer, Row, SurveyContainer } from '../components/Section';
import { ISurveyViewer } from '../@types/viewer';

import { Title, Description, Text } from '../components/Texts';

const Viewer = ({ content }: ISurveyViewer) => {
  return (
    <SurveyContainer>
      <p>{JSON.stringify(content)}</p>
      {/* <Row>
        <Title>{content.title}</Title>
      </Row>
      <Row>
        <Description>{content.description}</Description>
      </Row> */}
    </SurveyContainer>
  );
};

export default Viewer;
