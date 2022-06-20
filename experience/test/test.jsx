import React from 'react';
import CryptoIcon from 'react-crypto-icons'

export function Test({ text }) {
  return (
    <div>
      {text}
      <CryptoIcon name="btc" size={25} />
    </div>
  );
}
