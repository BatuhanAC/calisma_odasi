import store from "../../store"
import { setAccount } from "../../store/account"

export const accountControl = data => {
  store.dispatch(setAccount(data))
}