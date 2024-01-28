import { ContainerButton, DescriptionButton, IconButton, Container } from "./style";
import { Ionicons } from '@expo/vector-icons'

type Props = {
  nameIcon:  keyof typeof Ionicons.glyphMap,
  description: string  
}

export function ButtonIconAndDescription({ nameIcon, description }: Props) {
  return (
    <Container>
    <ContainerButton>
      <IconButton name={nameIcon}/>
    </ContainerButton>
      <DescriptionButton>{description}</DescriptionButton>
    </Container>
  )
}