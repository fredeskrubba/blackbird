import { create } from 'zustand'

const useUserStore = create((set) => ({
  userId: 1,
  userName: "Frederik",
  loggedIn: false,
  logIn: ()=> set(() => ({loggedIn: true})),
  logOut: ()=> set(() => ({loggedIn: false}))
}))

export default useUserStore