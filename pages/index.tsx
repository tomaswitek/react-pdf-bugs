import Head from "next/head";
import Rates from "../components/Rates";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>React PDF bugs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">USD Rates</h1>
        <Rates currency="USD" />
      </main>

      <footer>
        <a target="_blank" href="/api/pdf">
          Download PDF
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          background: white;
          position: fixed;
          top: 0;
          width: 100%;
          height: 50px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        table {
          text-align: left;
        }

        table td,
        table th {
          padding: 5px 10px;
          border-bottom: 1px solid black;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
