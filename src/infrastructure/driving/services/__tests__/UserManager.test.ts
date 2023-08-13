import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import UserManager from '@/infrastructure/driving/services/UserManager'
import AutoclickerRepository from '@/infrastructure/driven/repository/AutoclickerRepository'

import type User from '@/domain/models/User'

describe('User manager', () => {
  let userManager: UserManager

  const user: User = {
    name: 'name',
    money: 10,
    numberOfClicks: 0,
    clickPower: 1,
    autoclickPower: 1,
    autoclickers: []
  }

  beforeEach(() => {
    vi.resetAllMocks()
    setActivePinia(createPinia())

    userManager = new UserManager()

    vi.spyOn(AutoclickerRepository.prototype, 'getAll').mockReturnValue([
      {
        id: '05007d1d-746c-42fc-b010-141d8347bedf',
        name: { fr: 'Dahlia', en: 'Dahlia' },
        description: '...',
        img: {
          src: '/images/dahlia.jpg'
        },
        initialCost: 10,
        power: 1
      }
    ])
  })

  it('Get user', () => {
    // Given
    const userManager = new UserManager()

    // When
    const user: User | undefined = userManager.user

    // Then
    expect(user).toBeUndefined()
  })

  it('Set user', () => {
    // Given

    // When
    userManager.user = user

    // Then
    expect(userManager.user).toEqual(user)
  })

  it('Click', () => {
    // Given
    userManager.user = user
    const userMoney: number = userManager.user.money
    const userclickPower: number = userManager.user.clickPower

    // When
    userManager.click()

    // Then
    expect(userManager.user.money).toEqual(userMoney + userclickPower)
  })

  it('Autoclick', () => {
    // Given
    userManager.user = user
    const userMoney: number = userManager.user.money
    const userAutoclickPower: number = userManager.user.autoclickPower

    // When
    userManager.autoClick()

    // Then
    expect(userManager.user.money).toEqual(userMoney + userAutoclickPower)
  })

  it('Purchase click power', () => {
    // Given
    userManager.user = user
    const userclickPower: number = userManager.user.clickPower

    // When
    userManager.purchaseClickPower(10)

    // Then
    expect(userManager.user.clickPower).toEqual(userclickPower + 1)
  })

  it('Purchase auto click power', () => {
    // Given
    userManager.user = user
    const userAutoclickPower: number = userManager.user.autoclickPower

    // When
    userManager.purchaseAutoclicker('1', 10)

    // Then
    expect(userManager.user?.clickPower).toEqual(userAutoclickPower + 1)
  })
})
