import { create } from 'zustand'

const useTagStore = create((set) => ({
   popularTags : [],
   fetchPopularTags: async (url)=> {
    const response = await fetch(url, {
        method: "GET",
    })
    set({ popularTags: await response.json() })
   }
}))

export default useTagStore