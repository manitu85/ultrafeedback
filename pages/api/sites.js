import { auth } from '@/lib/firebase-admin';
import { getUserSites } from '@/lib/db-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const { sites } = await getUserSites(uid);
    console.log('sites :>> ', sites);
    // console.log('uid :>> ', uid);

    res.status(200).json({ sites })
  } catch (error) {
    res.status(500).json({ error })
  }
}

// import { getAllSites } from "@/lib/db-admin"
// // import { db } from "@/lib/firebase-admin"

// export default async (_, res) => {
//   const { sites, error } = await getAllSites();

//   if (error) {
//     res.status(500).json({ error })
//   }

//   return res.status(200).json({ sites })
// }