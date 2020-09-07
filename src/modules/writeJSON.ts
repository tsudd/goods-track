const fs = require('fs')

export const writeJSON = (productsPages: any[], fileName: string) => {
  let products: any[] = []
  for (let i = 0; i < productsPages.length; i++) {
    products.push(...productsPages[i])
  }
  let productsString = JSON.stringify(products)
  fs.writeFile(fileName, productsString, 'utf8', () => {
    console.log('The file has been written')
  })
}
