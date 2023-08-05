export default interface ModelMapper<ENTITY, DTO> {
  toEntity(dto: DTO): ENTITY
  toDto(entity: ENTITY): DTO
}
