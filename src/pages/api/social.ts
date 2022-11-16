// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type SocialMediaProps = {
  name: string,
  description: string,
  icon: string,
  url: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SocialMediaProps[]>
) {
  if (req.method === 'GET') {
    res.status(200).json([
      { name: 'Twitch', description: '', icon: 'twitch.svg', url: 'https://www.twitch.tv/oborgez' },
      { name: 'TikTok', description: '', icon: 'tiktok.svg', url: 'https://www.tiktok.com/@gsborgz' },
      { name: 'YouTube', description: '', icon: 'youtube.svg', url: 'https://www.youtube.com/@gsborgz' },
      { name: 'Twitter', description: '', icon: 'twitter.svg', url: 'https://twitter.com/gsborgz' },
      { name: 'Instagram', description: '', icon: 'instagram.svg', url: 'https://www.instagram.com/gsborgz/' },
      { name: 'Facebook', description: '', icon: 'facebook.svg', url: 'https://www.facebook.com/gsborgz/' },
      { name: 'GitHub', description: '', icon: 'github.svg', url: 'https://github.com/gsborgz' },
    ])
  }
}
