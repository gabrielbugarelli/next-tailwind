import { Container, Title, Card } from "./styled"

export default function Home() {

  return (
    <Container>
      <Title> Projeto Base NextJS + TailwindCSS </Title>

      <Card>
        <ul>
          <li>
            <a href="https://nextjs.org/docs/getting-started">Documentação do NextJS</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs">Documentação do TailwindCSS</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/tailwind-styled-components">Documentação do Tailwind Styled Component</a>
          </li>
        </ul>
      </Card>
    </Container >
  )
}
