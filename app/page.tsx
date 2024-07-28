'use client';

import AgeVerificationPopup from './components/AgeVerification';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Home() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null); // Manage verification status
  const router = useRouter();

  useEffect(() => {
    // Check if the user has already verified their age
    const ageVerified = Cookies.get('ageVerified');
    if (ageVerified === 'true') {
      setIsVerified(true);
    } else if (ageVerified === 'false') {
      router.push('/no-access');
    } else {
      // Not yet verified
      setIsVerified(false);
    }
  }, [router]);

  const handleVerify = (verified: boolean) => {
    if (verified) {
      Cookies.set('ageVerified', 'true', { expires: 1 }); // Set cookie for 1 day
      setIsVerified(true);
    } else {
      Cookies.set('ageVerified', 'false', { expires: 1 }); // Set cookie for 1 day
      router.push('/no-access');
    }
  };

  // Show popup if not verified
  if (isVerified === false) {
    return <AgeVerificationPopup onVerify={handleVerify} />;
  }

  // Redirect if verification is still being determined
  if (isVerified === null) {
    return <div>Loading...</div>; // Display a loading indicator or blank screen
  }

  // Show content if verified
  return (
    <>
      
    </>
  );
}