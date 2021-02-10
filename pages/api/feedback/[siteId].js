import { getAllFeedback } from "@/lib/db-admin"

export default async (req, res) => {
  const siteId = req.query.siteId
  const feedback = await getAllFeedback(siteId)
  // console.log(feedback);

  return res.status(200).json({ feedback })
}