import Button from './Button/Button'
import './styles/global.css'

export function App() {
  return (
    <>
      <Button>Clique aqui</Button>
      <Button asChild>
        <a href="#">Ir para website</a>
      </Button>
    </>
  )
}


