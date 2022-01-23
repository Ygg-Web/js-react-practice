class ApiService {
  constructor(baseUrl){
    this.url =  baseUrl
  }

  async createPosts(post){
    try {
      const request = new Request(`${this.url}/post.json`, {
        method: 'post',
        body: JSON.stringify(post)
      })
      return useRequest(request)
    } catch (error) {
      console.error(error)
    }
  }

  async fetchPosts(){
    try {
      const request = new Request(`${this.url}/post.json`)
      return useRequest(request)
    } catch (error){
      console.error(error)
    }
  }

  async fetchPostsById(id){
    try {
      const request = new Request(`${this.url}/post.json`)
      return useRequest(request)
    } catch (error){
      console.error(error)
    }
  }

}


async function useRequest(request){
  const response = await fetch(request)
  return await response.json()
}

export const apiService = new ApiService('https://postapp-js-default-rtdb.europe-west1.firebasedatabase.app')
