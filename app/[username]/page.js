import PaymentPage from '@/components/PaymentPage'
import React from 'react'

const Username = async ({ params }) => {
  const username = params.username; // `params` is already available here

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
};

export default Username;
