import { create } from 'zustand'

const useBlogStore = create((set) => ({
   hotBlogs : [],
   fetchHotBlogs: async (url)=> {
    const response = await fetch(url, {
        method: "GET",
    })
    set({ hotBlogs: await response.json() })
   }
}))

export default useBlogStore