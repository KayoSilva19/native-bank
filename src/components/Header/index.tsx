import { ButtonUser, Container, IconUser, TextNameUser } from "./style";

type Props = {
  nameUser: string;
}

export function Header({ nameUser }:Props) {
  return (
    <Container>
      <TextNameUser>{nameUser}</TextNameUser>
      <ButtonUser>
        <IconUser 
          name='person-outline'
        />
      </ButtonUser>
    </Container>
  )
}