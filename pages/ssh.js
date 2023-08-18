import { promises as fs } from 'fs';
import path from 'path';

import Layout from '../components/layout';

export default function Ssh({ rsaKey }) {
  return (
    <Layout title="ssh">
      <article>
        <h1>SSH key</h1>
        <br />
        <p>This is my SSH key.</p>
        <pre><code>{rsaKey}</code></pre>
        <p>As a <a href="rio.pub">raw file</a>:</p>
        <pre><code>curl https://rbnu.nl/id_rsa.pub &gt;&gt; ~/.ssh/authorized_keys</code></pre>
      </article>
      <br />
    </Layout>
  )
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'public');
  const rsaKey = (await fs.readFile(path.join(dir, 'id_rsa.pub'), 'utf8')).trim();
  return {
    props: { rsaKey }
  }
}
