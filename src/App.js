import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>FinTech (Financial Technology)</h1>
      <h2>
      Managed with {' '}
        <a
          href="https://dev.azure.com/truongbn/FinTech"
          target="_blank"
          rel="noreferrer noopener"
        >
          Azure DevOps
        </a>
        !
      </h2>
      <p>
        <a
          href="https://dev.azure.com/truongbn/FinTech/_wiki/wikis/FinTech.wiki/3/FinTech"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        was bootstrapped with{' '}
        <a href="https://www.truongbui.com/posts/react">
          React
        </a>{' '}
        and contains three directories, <code>/public</code> for static assets,{' '}
        <code>/src</code> for components and content, and <code>/api</code>{' '}
        which contains a serverless <a href="https://www.truongbui.com/posts/serverless">Go</a>{' '}
        function. The application is packaged and deployed via <a href="https://www.truongbui.com/posts/cloud-native-application-architecture">Cloud Native Application Architecture</a>. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
      <br />
      <h2>Current date:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
