import { useMemo } from 'react'

const useVm = (VM: any, params: any) => {
  return useMemo(() => {
    const vm = new VM()
    vm.willFocus(params)
    return vm
  }, [VM, JSON.stringify(params)])
}

export default useVm