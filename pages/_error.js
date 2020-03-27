import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
  <div>
    <h1>The Error Page</h1>
    <p>Go to <Link href="/"><a>Go back</a></Link></p>
  </div>
);

export default errorPage;
