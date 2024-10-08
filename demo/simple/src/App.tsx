import { useEffect, useState } from 'react'
import { V8WebAppProvider, useV8FormAttribute, V8Proxy } from 'react-1cv8-web-app'

function App() {
  const [number, setNumber] = useState("")
  const { getItem, setItem } = useV8FormAttribute()
  
  useEffect(() => {
    getItem('Номер')
      .then((response) => setNumber(response))
  })

  const changeNumber = (value: string) => {
    setItem('Номер', value)
    setNumber(value)
  }
  
  return (
    <V8WebAppProvider>
      <div>Номер: <input onChange={ (e) => changeNumber(e.target.value) }></input></div>
      <div>Надпись: {number}</div>
      <button onClick={ () => V8Proxy.fetch('ShowPopUp', { text: 'Текст из JavaScript' }) }>Показать предупреждение</button>
      <button onClick={ () => V8Proxy.fetch('Text').then(res => alert(res.text())) }>Text</button>
      <button onClick={ () => V8Proxy.fetch('Json').then(res => alert(res.json())) }>Json</button>
      <button onClick={ () => V8Proxy.fetch('Blob').then(res => alert(res.blob())) }>Blob</button>
    </V8WebAppProvider>
  )
}

export default App
