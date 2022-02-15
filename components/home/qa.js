import { useTranslation } from "react-i18next";
import { 
  Container, 
  Grid,
  Text,
  Collapse,
} from '@nextui-org/react';

function QAItem({
  idx,
  q,
}) {
  return (
    <Collapse
      key={idx}
      title={q.question}
      expanded={idx === 0}>
      <Text>
        {q.answer}
      </Text>
    </Collapse>
  )
}

export default function QandA() {
  const { t } = useTranslation();
  const qa = t('qa', {
    returnObjects: true
  })

  return (
    <Container
      gap={0}>
      <Grid.Container
        gap={5}
        justify="center">
        <Grid sm={11}>
          <Collapse.Group>
            {
              qa.map((q, idx) => QAItem({
                q, idx
              }))
            }
          </Collapse.Group>
        </Grid>
      </Grid.Container>
    </Container>
  )
}