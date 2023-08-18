import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout title="contact">
      <article>
        <h1>Contacting me</h1>

        To contact me, please shoot me an email at <a href="mailto:ruben@uijtdewilligenbv.nl">ruben@uijtdewilligenbv.nl</a>.

        <Section title="Social media accounts">
          <ul>
            <li><b>Facebook:</b> <a href="https://facebook.com/ruben.uijtdewilligen.3">@ruben.uijtdewilligen.3</a></li>
            <li><b>LinkedIn:</b> <a href="https://linkedin.com/in/rubenuijtde">@rubenuijtde</a></li>
            <li><b>X (Twitter):</b> <a href="https://x.com/rendermelon">@rendermelon</a></li>
            <li><b>Instagram:</b> <a href="https://instagram.com/ruben.uijtdewilligen">@ruben.uijtdewilligen</a></li>
            <li><b>GitHub:</b> <a href="https://github.com/rubenuijtdewilligen">@rubenuijtdewilligen</a></li>
          </ul>
        </Section>

        <Section title="Requests or offers for paid work">
          <p>I regularly take on freelance work, mostly for local businesses. I would like to discuss about the possibilities for your project and hope to be able to help. You can send me an email at <a href="mailto:ruben@uijtdewilligenbv.nl">ruben@uijtdewilligenbv.nl</a>.</p>
        </Section>

        <Section title="Discord">
          <p>Currently my username is <code>@rbnu.nl</code>. My Discord user ID is <code>708412162586181632</code>.</p>
        </Section>

      </article>
    </Layout>
  )
}

const Section = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  )
}
