import { Wrapper, Topic, Text } from "./QuizCard.styled";

export const QuizCard = ({item: {topic,level,time,questions}}) => {
    return (
        <Wrapper>
        <Topic> {topic}</Topic>
            <Text>
            <b>Level: {level}</b>
            </Text>
            <Text>
            <b>Duration: {time} min</b>
            </Text>
            <Text>
            <b>
            Number of questions: {questions}
            </b>
            </Text>
        </Wrapper>
    );
}