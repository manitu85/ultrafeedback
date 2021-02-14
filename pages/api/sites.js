import { auth } from '@/lib/firebase-admin'
import { getUserSites } from '@/lib/db-admin';

export default async (req, res) => {
    // console.log('TOKEN :>> ', req.headers);
  // let token = String(req.headers.token)
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const { sites } = await getUserSites(uid);
    res.status(200).json({ sites })
  } catch (error) {
    res.status(500).json({ error })
  }
}

// with out idToken auth
// import { getAllSites } from "@/lib/db-admin"
// // import { db } from "@/lib/firebase-admin"

// export default async (_, res) => {
//   const { sites, error } = await getAllSites();

//   if (error) {
//     res.status(500).json({ error })
//   }

//   return res.status(200).json({ sites })
// }