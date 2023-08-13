import { useUserStore } from '@/infrastructure/driving/stores/user.store'
import AutoclickerRepository from '@/infrastructure/driven/repository/AutoclickerRepository'
import type Autoclicker from '@/domain/models/Autoclicker'
import type User from '@/domain/models/User'
import type Repository from '@/domain/ports/Repository'

export default class UserManager {
  private userStore: any
  private autoclickerRepository: Repository<Autoclicker>

  constructor() {
    this.userStore = useUserStore()
    this.autoclickerRepository = new AutoclickerRepository()
  }

  get user(): User | undefined {
    return this.userStore.user
  }

  set user(newUser: User) {
    this.userStore.user = newUser
  }

  public click(): void {
    if (!this.user) return

    this.user.money += this.user.clickPower
    this.user.numberOfClicks += 1
  }

  public autoClick(): void {
    if (!this.user) return

    this.user.money += this.user.autoclickPower
  }

  public purchaseClickPower(price: number): void {
    if (!this.user) return

    if (this.user.money >= price) {
      this.user.money -= price
      this.user.clickPower += 1
    }
  }

  public purchaseAutoclicker(id: string, price: number): void {
    if (!this.user) return

    if (this.user.money >= price) {
      this.user.money -= price

      const autoclickerIndex = this.user.autoclickers.findIndex(
        (autoclicker: { id: string; quantity: number }) => autoclicker.id === id
      )

      if (autoclickerIndex !== -1) {
        const newQuantity: number = this.user.autoclickers[autoclickerIndex].quantity + 1
        this.user.autoclickers.push({ id: id, quantity: newQuantity })
      } else {
        this.user.autoclickers.push({ id: id, quantity: 1 })
      }

      this.updateUserAutoclickPower(id)
    }
  }

  private updateUserAutoclickPower(autoclikerId: string): void {
    if (!this.user) return

    // TODO faire un getById
    const autoclicker: Autoclicker | undefined = this.autoclickerRepository
      .getAll()
      .find((autoclk) => autoclk.id === autoclikerId)

    if (autoclicker) this.user.autoclickPower += autoclicker.power
  }
}
