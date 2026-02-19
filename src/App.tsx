import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon />} size = "sm" variant="primary" text="Share"> </Button>
      <Button size = "md" variant="secondary" text="Add Content"> </Button>
      <Button size = "lg" variant="secondary" text="Add Content"> </Button>
    </>
  )
}

export default App