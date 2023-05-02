import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyCpxUI5PHrrZYo9zjtTsTElQO5A7u_ha-g',
  authDomain: 'aliganjonline.firebaseapp.com',
  projectId: 'aliganjonline',
  storageBucket: 'aliganjonline.appspot.com',
  messagingSenderId: '1023529322391',
  appId: '1:1023529322391:web:c27953feb854bf5599a6d2'
}

const firebaseApp = initializeApp(firebaseConfig)
export default firebaseApp
