import db from '../../../libraries/firebase/firebase-admin'

export default (req, res) => {
  db.collection('jobs')
    .doc(req.query.id)
    .get()
    .then((doc) => {
      res.json(doc.data())
    })
    .catch((error) => {
      res.json({ error })
    })
}
