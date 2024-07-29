import { getSession } from '@session';
import ServerForm from '@components/AgeVerification';

export default async function Page(){
  const session = await getSession();

  if (!session) {
    return <p>You need to be authenticated to access this page.</p>;
  }

  return (
    <div>
      <h1>Submit Server Form</h1>
      <ServerForm onVerify={function (isOldEnough: boolean): void {
              throw new Error('Function not implemented.');
          } } />
    </div>
  );
};