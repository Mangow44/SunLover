import type Autoclicker from '@/domain/models/Autoclicker'

export default interface User {
  name: string
  money: number
  clickPower: number
  autoclickPower: number
  numberOfClicks: number
  autoclickers: Autoclicker[]
}
