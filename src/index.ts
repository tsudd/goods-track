import { evrooptParser } from './parsers/evrooptParser'
import { greenParser } from './parsers/greenParser'
import { sosediParser } from './parsers/sosediParser'

export const main = () => {
  console.log('Main')
  sosediParser()
  greenParser()
  evrooptParser()
}

main()
