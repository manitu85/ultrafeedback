// import { auth } from '@/lib/firebase-admin'
// import { getUserSites } from '@/lib/db-admin'
// import { logger, formatObjectKeys } from '@/utils/logger';

import { db } from "@/lib/firebase-admin"

export default (_, res) => {
  const sitesRef = db.collection('sites');
  const getDoc = sitesRef
    .get()
    .then((doc) =>{
      if(!doc.exists) {
        console.log("No such document!");
      }
      res.status(200).json(doc.data())
      }).catch((err) =>{
        console.log('Error getting document:', err);
      })
    res.status(200).json({ name: 'Next.js'})
}


// export default async (req, res) => {
//   try {
//     const { uid } = await auth.verifyIdToken(req.headers.token)
//     const { sites } = await getUserSites(uid)
//     res.status(200).json({ sites })
//   } catch (error) {
//     res.status(500).json({ error })
//   }
// }


// export default async (req, res) => {
//   try {
//     const { uid } = await auth.verifyIdToken(req.headers.token);
//     const { sites } = await getUserSites(uid);

//     res.status(200).json({ sites });
//   } catch (error) {
//     logger.error(
//       {
//         request: {
//           headers: formatObjectKeys(req.headers),
//           url: req.url,
//           method: req.method
//         },
//         response: {
//           statusCode: res.statusCode
//         }
//       },
//       error.message
//     );

//     res.status(500).json({ error });
//   }
// };