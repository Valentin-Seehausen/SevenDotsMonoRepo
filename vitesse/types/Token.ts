export default interface Token {
  name: string
  description: string
  attributes: Attribute[]
  id: number
  image: string
  rarityPoints: number
  dots: number
  dna: string
}

export interface Attribute {
  trait_type: string
  display_type: string
  value: string
}
