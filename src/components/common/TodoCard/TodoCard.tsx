import { FiCheck } from "react-icons/fi";

import { Badge, Card, CheckboxContainer, Content, Meta, Title } from "./TodoCard.styled";
import { TodoCardProps } from "./TodoCard.types";

export default function TodoCard({ userId, id, title, completed }: TodoCardProps) {
  return (
    <Card>
      <CheckboxContainer $completed={completed}>{completed && <FiCheck />}</CheckboxContainer>
      <Content>
        <Title $completed={completed}>{title}</Title>
        <Meta>
          <Badge>ID: {id}</Badge>
          <span>User: {userId}</span>
        </Meta>
      </Content>
    </Card>
  );
}
