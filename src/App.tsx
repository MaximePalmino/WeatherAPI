import React, { useEffect, useState } from 'react';
import Form from './components/Form';



interface ApiResponse{
  main: {humidity: string, temp: number},
  name: string,
  sys: {country: string}
}

const App: React.FC = () => {

  const [fetchedData, setFetchedData] = useState<ApiResponse | null>(null)
  const [name, setName] = useState<string>('')
  const [loading, setLoading] = useState<boolean | null>(null);

  const ifLoading = () => {
    if (loading) {
      return <p>Checking...</p>;
    } 
  }
  
  const fetchAPI: Function = () => {
    if (name) {
      setLoading(true)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=54c8d55b700b2f3808eacfca80fe9536`)
        .then(reponse => reponse.json())
          .then(data => {
            setFetchedData(data)
            setLoading(false)
          })}
  }


  useEffect(() => {
      fetchAPI()
  }, [name])


  return (
    <div className="App">
      <Form setName={setName} name={name} />
      {ifLoading()}
      {fetchedData?.main?.temp }
      {fetchedData?.sys.country }
  
      {/* {fetchedData.sys.country} */}
    </div>
  );
}

export default App;
