import { describe, expect, it } from 'vitest'
import { autoclickers } from '@/infrastructure/driven/data/autoclickers'
import AutoclickerRepository from '@/infrastructure/driven/repository/AutoclickerRepository'
import type Autoclicker from '@/domain/models/Autoclicker'

describe('Autoclicker repository', () => {
  const autoclickerRepository = new AutoclickerRepository()

  it('Get all autoclickers', () => {
    // Given

    // When
    const repositoryAutoclickers: Autoclicker[] = autoclickerRepository.getAll()

    // Then
    expect(repositoryAutoclickers).toEqual(autoclickers)
  })
})
