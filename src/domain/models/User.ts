export default interface User {
  name: string
  money: number
  clickPower: number
  autoclickPower: number
  numberOfClicks: number
  autoclickers: { id: string; quantity: number }[]
}
