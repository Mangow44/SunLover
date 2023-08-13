import { describe, expect, it } from 'vitest'
import AutoclickerMapper from '@/infrastructure/driven/dto/autoclicker/AutoclickerMapper'
import type Autoclicker from '@/domain/models/Autoclicker'
import type AutoclickerDto from '@/infrastructure/driven/dto/autoclicker/AutoclickerDto'

describe('Autoclicker mapper', () => {
  const autoclickerMapper = new AutoclickerMapper()

  const autoclicker: Autoclicker = {
    id: '05007d1d-746c-42fc-b010-141d8347bedf',
    name: { fr: 'Dahlia', en: 'Dahlia' },
    description: '...',
    img: {
      src: '/images/dahlia.jpg'
    },
    initialCost: 10,
    power: 1
  }
  const autoclickerDto: AutoclickerDto = {
    id: '05007d1d-746c-42fc-b010-141d8347bedf',
    name: { fr: 'Dahlia', en: 'Dahlia' },
    description: '...',
    img: {
      src: '/images/dahlia.jpg'
    },
    initialCost: 10,
    power: 1
  }

  it('Trun DTO to ENTITY', () => {
    // Given

    // When
    const entity: Autoclicker = autoclickerMapper.toEntity(autoclickerDto)

    // Then
    expect(entity).toEqual(autoclicker)
  })

  it('Trun ENTITY to DTO', () => {
    // Given

    // When
    const dto: AutoclickerDto = autoclickerMapper.toDto(autoclicker)

    // Then
    expect(dto).toEqual(autoclickerDto)
  })
})
