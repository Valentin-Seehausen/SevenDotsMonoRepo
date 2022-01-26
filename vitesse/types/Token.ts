export default interface Token {
  name: string
  description: string
  attributes: Attribute[]
  id: number
  image: string
}

export interface Attribute {
  trait_type: string
  display_type: string
  value: string
}
