import useSWR from "swr"

const Index = () => {
  const {data} = useSWR('/api/contacts')
  if(!data){
    return <p>Loading...</p>
  }
  return(
    <div>
      <h1>Testando FAUNA-DB</h1>

{data.data.map((contact) => {
  return (
    <div key={contact.ref['@ref'].id}>

{contact.ref['@ref'].id} / {contact.data.name} - {contact.data.email}
    <br/>
    <hr/>
    </div>
  )
}
)
}

   <pre>{JSON.stringify(data.after, null, 2)}</pre> 
    </div>
  )
}
export default Index