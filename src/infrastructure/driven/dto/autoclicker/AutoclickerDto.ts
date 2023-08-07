export default interface AutoclickerDto {
  id: string
  name: {
    fr: string
    en: string
  }
  description: string
  img: {
    src: string
  }
  initialCost: number
  power: number
}
