import { q, client } from '../utils/db'

export const getAllContacts = () => {
  return client.query(
    q.Map(
    q.Paginate(
    q.Match('allContacts'),
      { size: 10 }
     ),
    q.Lambda(x => q.Get(x))
   )
 )
}

export const createContact = data => {
  return client.query(q.Create(q.Collection('contacts'),{ data }))
}

export const deleteContact = (ref) => {
  return client.query(q.Delete(q.Ref(q.Collection('contacts'), ref )))
}