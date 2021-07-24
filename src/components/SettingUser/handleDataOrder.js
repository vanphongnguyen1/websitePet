import { STATUS_HANDLE } from '../dataConst'

export const handleDataOrder = (data, detail, dataCart) => {
  const newDataOrder = []
  const { users } = dataCart

  data.forEach((order) => {
    const products = []

    detail.forEach((item) => {
      if (item.detailOrderID === order.detailOrderID) {
        products.push({
          id: item.id,
          name: item.products.name,
          price: item.products.priceSale,

          count: item.count,
          totalPrice: item.count * item.products.priceSale,
        })
      }
    })

    if (order.cartID === dataCart.id) {
      const { detailorder, peyment, status, trasport } = order

      const newOrder = {
        id: order.id,
        name: users.name,
        phone: users.phone,
        address: users.address,

        products,

        totalCount: detailorder.count,
        totalPrice: detailorder.price,
        intoMeny: order.intoMeny,

        trasport: trasport.price,
        status: status.name,
        peyment: peyment.name,

        created: order.created_at,
        updated: order.updated_at,
      }

      if (
        newOrder.status === STATUS_HANDLE.PENDING ||
        newOrder.status === STATUS_HANDLE.DELIVERED
      ) {
        newDataOrder.push(newOrder)
      }
    }
  })

  return newDataOrder
}
