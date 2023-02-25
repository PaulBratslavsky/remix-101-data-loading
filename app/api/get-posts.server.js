const qs = require('qs');

const params = qs.stringify({
  populate: {
    image: {
      populate: '*'
    }
  },
});

export async function getPosts() {
  const baseUrl = 'http://localhost:1337'
  const query = `/api/posts?${params}`

  try {
    const res = await fetch(baseUrl + query)
    return await res.json()
  }

  catch (err) {
    // TODO: Handle error
    console.log(err)
  }
}
