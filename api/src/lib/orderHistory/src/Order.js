/**
 * @param {@polyn/blueprint} blueprint
 * @param {@polyn/immutable} immutable
 * @param {uuid/v4} uuid
 */
function OrderFactory (deps) {
  'use strict'

  const { registerBlueprint, optional } = deps.blueprint
  const { immutable } = deps.immutable
  const { uuid } = deps

  const REGEX = {
    UUID: /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  }

  const OrderBlueprint = {
    id: optional(REGEX.UUID).withDefault(uuid),
    productId: 'string',
    userId: 'string',
  }

  registerBlueprint('Order', OrderBlueprint)
  const Order = immutable('Order', OrderBlueprint)
  Order.blueprint = OrderBlueprint

  return { Order }
}

module.exports = OrderFactory
