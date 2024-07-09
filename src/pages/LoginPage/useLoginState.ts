import { useState } from 'react';

export function useLoginState() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return {
    id,
    setId,
    password,
    setPassword,
  };
}
