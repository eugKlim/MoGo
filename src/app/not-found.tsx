'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/home');
    }, 3000);
  }, [router]);

  return (
    <div>
      <div className="not-found pt-48 flex justify-center flex-col items-center w-full h-full dark:bg-slate-800 dark:text-white">
        <h2 className="font-bold text-4xl mb-8">Ошибка 404</h2>
        <h3 className="text-xl">Такой страницы здесь нет!</h3>
        <p className="italic">
          Перехожу на <Link href="/home">главную страницу</Link> через 3 секунды...
        </p>
      </div>
    </div>
  );
};

export default NotFound;
