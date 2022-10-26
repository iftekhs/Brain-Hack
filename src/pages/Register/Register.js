import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from '../../images/logo.svg';

const Register = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState(null);
  const { createUser, providerLogin, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  //    Providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setBtnLoading(true);
    setError(null);
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        navigate('/');
      })
      .catch((e) => setError(e.message))
      .finally(() => {
        setBtnLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="px-2">
      <div className="auth-container container mx-auto flex items-center justify-center">
        <div className="auth-form-container grid grid-cols-2 rounded">
          <div className="left text-white flex flex-col text-center">
            <h4 className="text-md text-center mb-2"> The ultimate learning platform</h4>
            <img className="logo" src={logo} alt="" />
            <h2 className="text-4xl font-bold mb-4">BrainHack</h2>
            <p>
              Over 1,200 + courses on different programming languages created by our expert
              programmers. Sign Up and start building awesome skills!
            </p>
          </div>
          <div className="right flex flex-col items-center justify-center">
            <h2 className="text-3xl mb-2">Welcome to BrainHack!</h2>
            <p className="text-md text-center text-slate-400 mb-8">
              We are currently giving users a special offer of 20% off on all our courses!
            </p>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="mb-1 text-sm text-zinc-400">
                  Full Name
                </label>
                <input className="input" id="name" type="text" name="name" required />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="photoURL" className="mb-1 text-sm text-zinc-400">
                  Photo URL
                </label>
                <input className="input" id="photoURL" type="text" name="photoURL" required />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="mb-1 text-sm text-zinc-400">
                  Your Email
                </label>
                <input className="input" id="email" type="email" name="email" required />
              </div>

              <div className="flex flex-col mb-8">
                <label htmlFor="password" className="mb-1 text-sm text-zinc-400">
                  Your Password
                </label>
                <input className="input" id="password" type="password" name="password" required />
              </div>

              <p className="mb-3 text-rose-500">{error}</p>

              <button
                disabled={btnLoading}
                className="bg-cpurple px-8 py-3 text-white rounded w-full mb-4 transition-all">
                {btnLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      class="mr-2 w-6 h-6 text-cpurple fill-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  'Sign Up'
                )}
              </button>

              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="w-full mb-2 border rounded-lg flex items-center justify-center py-3 gap-3 cursor-pointer hover:bg-slate-50 transition-all">
                <FaGoogle></FaGoogle> Sign Up
              </button>
              <button
                onClick={handleGithubSignIn}
                type="button"
                className="w-full border rounded-lg flex items-center justify-center py-3 gap-3 cursor-pointer hover:bg-slate-50 transition-all">
                <FaGithub></FaGithub> Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
