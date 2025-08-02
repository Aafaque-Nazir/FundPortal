'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from '@/lib/storage';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const intern = getUser();
    if (!intern) {
      router.push('/login');
    } else {
      setUser(intern);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('intern');
    router.push('/login');
  };

  if (!user) return null;

  const shareLink = `https://yourdomain.com/donate?ref=${user.referralCode}`;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
        <p className="mb-2"><strong>Referral Code:</strong> {user.referralCode}</p>
        <p className="mb-2"><strong>Total Raised:</strong> ₹{user.totalRaised}</p>
        <p className="mb-2"><strong>Donors:</strong> {user.donors}</p>

        <div className="my-4">
          <label className="block font-semibold mb-1">Share Your Link:</label>
          <input
            type="text"
            readOnly
            value={shareLink}
            className="w-full px-3 py-2 border rounded bg-gray-100"
          />
        </div>

        <button
          onClick={handleLogout}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
