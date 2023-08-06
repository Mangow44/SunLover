import type Autoclicker from '@/domain/models/Autoclicker'

export const autoclickers: Autoclicker[] = [
  {
    id: '05007d1d-746c-42fc-b010-141d8347bedf',
    name: { fr: 'Dahlia', en: 'Dahlia' },
    description: '...',
    img: {
      src: '/images/dahlia.jpg'
    },
    initialCost: 10,
    power: 1
  },
  {
    id: 'f30720dd-1942-49b6-a6b4-6c9728fa4a99',
    name: { fr: 'Hortensia', en: 'Hydrangea' },
    description: '...',
    img: {
      src: '/images/hortensia.jpg'
    },
    initialCost: 50,
    power: 3
  },
  {
    id: '8ca2bdd1-1402-4aac-a412-8738f17be381',
    name: { fr: 'Lavande', en: 'Lavander' },
    description: '...',
    img: {
      src: '/images/lavande.jpg'
    },
    initialCost: 150,
    power: 5
  },
  {
    id: 'cb52b017-e2d6-4985-9f41-1763a8f0c3a8',
    name: { fr: 'Jacinthe', en: 'Hyacinth' },
    description: '...',
    img: {
      src: '/images/jacinthe.jpg'
    },
    initialCost: 300,
    power: 10
  }
]
