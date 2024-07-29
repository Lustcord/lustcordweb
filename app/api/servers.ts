import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@session';
import { getUserServers } from '@/lib/db'; // You need to implement this function

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession();

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const servers = await getUserServers(session?.user?.userId);
  res.status(200).json(servers);
}