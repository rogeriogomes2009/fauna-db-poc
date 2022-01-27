const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: 'fnAEd6hxlfACT0t2cF19Tq6cZY6ciQSJQ-sANytc'
})

const createContact = data => {
  return client.query(
    q.Create(
    q.Collection('contacts'),
      { data }
    )
  )
};

const getContactByRef = ref => {
  return client.query(
          q.Get(
          q.Ref(
          q.Collection('contacts'), ref)));
};
getContactByRef("321911564351308369")
  .then((ret) => {
  console.log('get', ret);
});

const getAllContacts = () => {
  return client.query(
    q.Map(
    q.Paginate(
    q.Match('allContacts'),
      { size: 2 }
     ),
    q.Lambda(x => q.Get(x))
   )
 )
}
getAllContacts()
.then(all =>  {
  console.log(all);
});

const getContactByEmail = Email => {
    return client.query(
        q.Get(
          q.Match(q.Index('contactByEmail'), [Email])
    ))
}


getContactByEmail('isaacriker@gmail.com')
.then((ret) => {
  console.log('get', ret);
});

createContact ({
  name: 'Isaac Riker',
  email: 'isaacriker@gmail.com',
  title: 'Aviation Engeneer'
}).then(ret => {
  console.log(ret)
});
