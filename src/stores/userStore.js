import { create } from 'zustand'

const useUserStore = create((set) => ({
  users: [{
    currentUser: {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    profilePic: ""

  }
  }],
  currentUser: {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    profilePic: ""

  },
  loggedIn: false,
  fetchUsers: async (url)=> {
    const response = await fetch(url, {
        method: "GET",
    })
    set({ users: await response.json() })
  },
  logIn: (currentUser) => set({
    currentUser: currentUser,
    loggedIn: true
  }),
  logOut: () => set({
    currentUser: {
      userName: "",
      firstName: "",
      lastName: "",
      password: "",
      profilePic: ""
  
    },
    loggedIn: false
  })
}))

export default useUserStore