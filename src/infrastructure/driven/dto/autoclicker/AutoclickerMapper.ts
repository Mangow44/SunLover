import type Autoclicker from '@/domain/models/Autoclicker'
import type ModelMapper from '@/infrastructure/driven/dto/ModelMapper'
import type AutoclickerDto from '@/infrastructure/driven/dto/autoclicker/AutoclickerDto'

export default class AutoclickerMapper implements ModelMapper<Autoclicker, AutoclickerDto> {
  toEntity(dto: AutoclickerDto): Autoclicker {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      img: dto.img,
      initialCost: dto.initialCost,
      power: dto.power
    } as Autoclicker
  }

  toDto(entity: Autoclicker): AutoclickerDto {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      img: entity.img,
      initialCost: entity.initialCost,
      power: entity.power
    } as AutoclickerDto
  }
}
