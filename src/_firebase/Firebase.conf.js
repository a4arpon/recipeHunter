import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBhUmrupvCENEY9melAr_ckWt7H75gXEq8',
  authDomain: 'lairorea.firebaseapp.com',
  projectId: 'lairorea',
  storageBucket: 'lairorea.appspot.com',
  messagingSenderId: '448045063217',
  appId: '1:448045063217:web:9c17dbe6d62d8e38714910',
  measurementId: 'G-5ED1PMRCHT'
}
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export default firebaseApp
