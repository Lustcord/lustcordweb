import { getProviders, signIn } from 'next-auth/react';

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div>
      <h1>Sign in</h1>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
          </div>
        ))}
    </div>
  );
};

export default SignInPage;