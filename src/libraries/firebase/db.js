// Client-side database

import firebase from './firebase'

const firestore = firebase.firestore()

// Create new user
export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
}

// Create new job
export function createJob(data) {
  return firestore.collection('jobs').add(data)
}

// Create new company
export function createCompany(data) {
  return firestore.collection('companies').add(data)
}
