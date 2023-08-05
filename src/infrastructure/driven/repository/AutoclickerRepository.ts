import { autoclickers } from '@/infrastructure/driven/data/autoclickers'
import AutoclickerMapper from '@/infrastructure/driven/dto/autoclicker/AutoclickerMapper'
import type Autoclicker from '@/domain/models/Autoclicker'
import type Repository from '@/domain/ports/Repository'
import type ModelMapper from '@/infrastructure/driven/dto/ModelMapper'
import type AutoclickerDto from '@/infrastructure/driven/dto/autoclicker/AutoclickerDto'

export default class AutoclickerRepository implements Repository<Autoclicker> {
  private autoclickerMapper: ModelMapper<Autoclicker, AutoclickerDto>

  constructor() {
    this.autoclickerMapper = new AutoclickerMapper()
  }

  getAll(): Autoclicker[] {
    return autoclickers.map((autoclicker) => this.autoclickerMapper.toEntity(autoclicker))
  }
}
