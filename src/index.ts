import { evrooptParser } from './parsers/evrooptParser'
import { greenParser } from './parsers/greenParser'
import { sosediParser } from './parsers/sosediParser'
import { writeJSON } from './modules/writeJSON'

const outputJSONFileMame = 'dist.json'

export const main = () => {
  void sosediParser().then(productsPages => {
    writeJSON(productsPages, outputJSONFileMame)
  })
  greenParser()
  evrooptParser()
}

main()
