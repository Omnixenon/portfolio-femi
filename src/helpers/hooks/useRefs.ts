import { useState } from 'react'
import MultiRef from 'react-multi-ref'

export const useRefs = () => {
  const [itemRefs] = useState(() => new MultiRef<any, HTMLDivElement>())

  return itemRefs
}
