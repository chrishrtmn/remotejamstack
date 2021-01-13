import db from '../../libraries/firebase/firebase-admin'

export default async (req, res) => {
  const snapshot = await db.collection('jobs').get()
  let jobs = []

  snapshot.forEach((doc) => {
    jobs.push({ id: doc.id, ...doc.data() })
  })

  res.status(200).json({ jobs })
}
