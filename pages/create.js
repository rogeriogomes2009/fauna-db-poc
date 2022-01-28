import {useFormik} from "formik"
import {Router, useRouter} from 'next/router'

const post = async(url, data) => {
  const res = await fetch(url, {
    method:'post',
    body: JSON.stringify(data),
    headers:{
      Accept: 'application/json',
      'Content-type': 'application/json'
    }
  })
  const returnedData = await res.json()
  return returnedData
}

const Create = () => {
  const router = useRouter()
  const form = useFormik ({
    initialValues:{
      name:'',
      email:'',
      title:''
    },
    onSubmit: async (values) => {
      const ret = await post('/api/contacts', values)
      console.log(ret)
      router.push('/')
      //console.log(values)
    }
  })
  return (
    <div>
      <h1>Create Contact</h1>
      <form onSubmit={form.handleSubmit}>
        <input type='text' name='name' placeholder='name' onChange={form.handleChange} value={form.values.name}/>
        <input type='text' name='email' placeholder='email' onChange={form.handleChange} value={form.values.email}/>
        <input type='text' name='title' placeholder='title' onChange={form.handleChange} value={form.values.title}/>
        <button type="submit">Salvar</button>
      </form>
    </div>
  )

}
export default Create