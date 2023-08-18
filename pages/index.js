import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <Domain />
    </Layout>
  )
}

const AboutMe = () => {
  return (
    <article>
      <h1>Hello! 👋</h1>
      <p>
        I'm <b>Ruben Uijtdewilligen</b>, known online as RenderMelon or rbnu.
        <br />
        I'm a software developer and hardware enthusiast from Nispen, NL.
        <br />
        I am currently a tto-vwo6 student at Jan Tinbergen College in Roosendaal.
      </p>
      <p>You are currently finding yourself on my personal website. This is mainly a placeholder for the root of this domain.</p>
      <p>
        You can find out how to contact me via my <Link href="/contact">contact page</Link>.
      </p>
    </article>
  )
}

const Domain = () => {
  return (
    <article>
      <h1>This domain</h1>
      <p>A number of other sites and services are available under this domain.</p>
      <ul>
        <li><a href="https://server.rbnu.nl/"><b>server.</b>rbnu.nl</a> - caprover server</li>
        <li><a href="https://i.rbnu.nl/"><b>i.</b>rbnu.nl</a> - ShareX server: image host, url shortener</li>
        <li><a href="https://paste.rbnu.nl/"><b>paste.</b>rbnu.nl</a> - pastebin (powered by PrivateBin)</li>
      </ul>
    </article>
  )
}