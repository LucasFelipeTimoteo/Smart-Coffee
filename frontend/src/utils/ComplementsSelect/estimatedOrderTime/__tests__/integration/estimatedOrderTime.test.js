import getRecipesTimes from "../../utils/getRecipesTimes"
import ordersMock from '../../../../../mocks/orders/orders.mock'
import getComplementsTimes from "../../utils/getComplementsTimes"
import getOrdersTotalTime from "../../utils/getOrdersTotalTime"

const recipesTimes = [45, 230]
const complementsTimes = [20, 30, 30, 130]

describe('Test estimatedOrderTime  util functions integration', () => {
  
  describe('getRecipesTimes return an array of raw time number of selected recipe(s)', () => {
    test('should return serialized "[10,30]" to getRecipesTimes', () => {
      const expected = "[10,30]"

      const recipesTimes = getRecipesTimes(ordersMock)
      const serializedRecipesTimes = JSON.stringify(recipesTimes)

      expect(serializedRecipesTimes).toBe(expected)
    })
  })

  describe('getComplementsTimes return an array of raw time number of selected complement(s)', () => {
    test('should return serialized "[15,20,25,15,20,40] to getRecipesTimes', () => {
      const expected = "[15,20,25,15,20,40]"

      const complementsTimes = getComplementsTimes(ordersMock)
      const serializedComplementsTimes = JSON.stringify(complementsTimes)

      expect(serializedComplementsTimes).toBe(expected)
    })
  })

  describe('getOrdersTotalTime return a string in format "MINUTES:SECONDS" based in received values of selected complements and selected recipes', () => {
    test('should return "6:48" to getOrdersTotalTime', () => {
      const expected = "6:48"

      const ordersTotalTime = getOrdersTotalTime(recipesTimes, complementsTimes)

      expect(ordersTotalTime).toBe(expected)
    })
  })
  
})
