 export async function fetcher(...args) {
  const res = await fetch(...args)
  return res.json()
}

// export const fetcher = async (...args) => {
//    const res = await fetch(...args)
//    return res.json()
// }