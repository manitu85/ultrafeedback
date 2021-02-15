import React, { useState, useEffect, useContext, createContext } from 'react';
import { useRouter } from 'next/router';
import firebase from './firebase';
import { createUser } from './firestore';
import cookie from 'js-cookie';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user

      createUser(user.uid, userWithoutToken);
      setUser(user);

      cookie.set('fast-feedback-auth', true, {
        expires: 1
      });

      setLoading(false);
      return user;
    } else {
      setUser(false);
      cookie.remove('fast-feedback-auth');
      setLoading(false);
      return false;
    }
  };

  const signinWithEmail = (email, password) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        router.push('/dashboard');
      });
  };

  const signinWithGitHub = (redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const signinWithGoogle = (redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        handleUser(res.user);
        if (redirect) {
          router.push(redirect);
        }
      });
  };

  const signout = () => {
    router.push('/');
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    // const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithEmail,
    signinWithGitHub,
    signinWithGoogle,
    signout
  };
}

const formatUser = async (user) => {
  // const token = await user.getIdToken();

  const idTokenResult = await user.getIdTokenResult();
  const idToken = idTokenResult.token;

  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token: idToken,
    // token: user.ya
  };
};
