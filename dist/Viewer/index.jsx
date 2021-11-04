import { useState, useEffect } from 'react';
import update from 'immutability-helper';
import { Row, SurveyContainer } from '../components/Section';
import { Title, Description } from '../components/Texts';
import { BlockPresenter } from './Blocks';
import { BlockTypes } from '../@types/block';
import { Button } from '../components/Buttons';
import 'filepond/dist/filepond.min.css';
const Viewer = ({ survey, onSubmit }) => {
    const [surveyContent, setSurveyContent] = useState(survey);
    useEffect(() => {
        setSurveyContent(survey);
    }, [survey]);
    const onUpdateBlock = (index, data) => {
        setSurveyContent(update(surveyContent, {
            content: {
                [index]: {
                    $set: data,
                },
            },
        }));
    };
    const { title, description, content } = surveyContent;
    return (<SurveyContainer>
      <Row>
        <Title>{title}</Title>
      </Row>
      <Row>
        <Description>{description}</Description>
      </Row>
      {content.map((block, i) => (<Row key={i}>
          <BlockPresenter block={block} onUpdateBlock={data => onUpdateBlock(i, data)}/>
        </Row>))}
      <Row>
        <Button onClick={() => {
            const invalidContents = content.filter(block => {
                if (block.type === BlockTypes.BLANK) {
                    return false;
                }
                return (block.required &&
                    'answer' in block &&
                    (block.answer === null ||
                        block.answer === undefined ||
                        block.answer === '' ||
                        (block.answer instanceof Array && block.answer.length === 0)));
            });
            if (invalidContents.length) {
                console.log('입력하지 않은 항목이 있습니다.');
                console.log(invalidContents);
                return;
            }
            onSubmit(surveyContent);
        }}>
          확인
        </Button>
      </Row>
    </SurveyContainer>);
};
export default Viewer;