import { Content } from '../components/Content'
import { Started } from '../components/Started'
import { View } from '../components/View'
import { Statistics } from '../components/Statistics'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Content/>
      <Started/>
      <View/>
      <Statistics/> 
    </div>
  )
}
