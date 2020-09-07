import { IProduct } from '../modules/IProduct'

const fetch = require('node-fetch')

const siteURL = 'https://sosedi.by/local/api/getListProducts.php'

const representJSON = (productInfo: any) => {
  let products: IProduct[] = []
  productInfo.items.forEach((item: any) => {
    products.push({
      name: item.title,
      shop: 'SoSeDi',
      price: item.price,
      sale: item.sale,
    })
  })
  return products
}

const getProduct = async (page: number) => {
  const payload = { sealected: 'all', selectedCategory: 'all', paginationItem: page }
  const response = await fetch(siteURL, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  })
  return representJSON(await response.json())
}

export const sosediParser = async () => {
  const proms = []

  for (let i = 1; i < 12; ++i) proms.push(getProduct(i))
  return Promise.all(proms)
}
