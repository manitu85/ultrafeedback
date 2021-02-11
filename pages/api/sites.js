import { getAllSites } from "@/lib/db-admin"
// import { db } from "@/lib/firebase-admin"

export default async (req, res) => {
  // console.log('HEADER :>> ', req.headers);
  const token = req.headers.token
  const { sites, error } = await getAllSites();
  if (error) {
    res.status(500).json({ error })
  }

  return res.status(200).json({ sites })
}
