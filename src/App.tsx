import { useState } from 'react'
import { useZxing } from "react-zxing";
import './App.css'

const App = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <>
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  )
}

export default App
