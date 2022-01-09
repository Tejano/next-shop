import { fetchJson } from '../../lib/api.js';
import cookie from 'cookie';
const { CMS_URL } = process.env;

export default async function handleLogin(req, res) {
  if (req.method !== 'POST') {
    req.status(405).end();
    return;
  }
  // console.log('req.body',req.body)
  const { email, password } = req.body;
  try {
    const { jwt, user } = await fetchJson(`${CMS_URL}/auth/local`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    });
    // console.log('CMS response', response);
    //TODO set jwt cookie
    res
      .status(200)
      .setHeader('Set-Cookie',cookie.serialize('jwt',jwt, {path: '/api', httpOnly: true}))
      .json({ id: user.id, name: user.username });
  } catch (err) {
    res.status(401).end();
  }
}
