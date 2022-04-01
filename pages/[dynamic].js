import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';

const Dynamic = () => {
  const router = useRouter();
  const query = router.query.dynamic;
  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      Hi! there I am dynamic route {query}
    </div>
  );
};

export default Dynamic;
