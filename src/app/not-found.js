// app/not-found.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl font-medium">Redirigiendo al inicio...</p>
    </div>
  );
}
