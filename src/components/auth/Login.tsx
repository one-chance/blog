'use client';

import { useState } from 'react';
import { signIn } from '@/utils/supabase';

export default function Login() {
  const [password, setPassword] = useState('');

  const login = async () => {
    const isAuthed = await signIn(password);

    if (isAuthed) {
      window.location.href = '/admin';
    }
  };

  return (
    <div className="flex flex-col h-80 justify-center items-center p-5">
      <input
        type="text"
        className="border rounded w-80 h-10 px-2"
        // value={password || ''}
        onChange={e => setPassword(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') login();
        }}
      />
    </div>
  );
}
