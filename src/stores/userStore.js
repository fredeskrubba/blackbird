import { create } from 'zustand'

const useUserStore = create((set) => ({
  enteredUsername: "",
  setEnteredUsername: (userName) => set( {enteredUsername: userName}),
  enteredPassword: "",
  setEnteredPassword: (password) => set({enteredPassword: password}),
  users: [{
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    profilePic: "",
    loggedIn: false

  }],
  
  currentUser: {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    profilePic: "",
    loggedIn: false
  },

  setCurrentUser: (user) => set({currentUser: user}),

  fetchUsers: async (url)=> {
    const response = await fetch(url, {
        method: "GET",
    })
    set({ users: await response.json() })
  },

  
}))

export default useUserStore