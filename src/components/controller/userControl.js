import store from "../../store"
import { setUser } from "../../store/auth"

export const userControl = data => {
  store.dispatch(setUser(data))
}