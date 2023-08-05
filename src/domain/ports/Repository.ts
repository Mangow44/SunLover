export default interface Repository<ENTITY> {
  getAll(): ENTITY[]
}
