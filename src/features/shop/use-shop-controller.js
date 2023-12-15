import { useGetShopsQuery } from './shop-api'

export function useShopController() {
  const { data: shops } = useGetShopsQuery()
  return { shops }
}

