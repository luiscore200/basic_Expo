import { Slot, Stack, router, useSegments } from 'expo-router';
import {useAuth,AuthContextProvider} from '../services/authContext2'
import { useEffect,useState } from 'react';
import { routesConfig } from '../config/routesConfig';

 

const MainLayout =()=>{
  const {auth}=useAuth();
const segments= useSegments();

useEffect(()=>{
if(typeof auth=='undefined') return;
const inApp = segments[0]=='(app)';
if(auth && !inApp){
  //redirect to home;
 
  router.replace('home');
 
}else if(auth==false){
  //redirigir al login
  //console.log(segments[0]);
  router.replace('/');
}

},[auth])
return <Stack/>
}


const MainLayout2 = () => {
  const { auth } = useAuth();
  const segments = useSegments();

  useEffect(() => {
      if (typeof auth === 'undefined') return;

      const currentRoute = segments.length > 0 ? segments.join('/') : 'index';
      console.log(currentRoute);
     
      const isInApp = currentRoute === '(app)';
      const inAuthenticatedRoute = routesConfig.authenticated.includes(currentRoute) || isInApp;
      const inNonAuthenticatedRoute = routesConfig.nonAuthenticated.includes(currentRoute);

      if (auth && inNonAuthenticatedRoute) {
          // Si el usuario está autenticado y está en una ruta no autenticada, redirige a home
          router.replace('home');
      } else if (!auth && inAuthenticatedRoute) {
          // Si el usuario no está autenticado y está en una ruta autenticada, redirige a login
          router.replace('/');
      }
  }, [auth, segments]);

  return <Slot />;
};


const RootLayout = () => {


    
  
  return (
   
   <AuthContextProvider>
    <MainLayout2/>
   </AuthContextProvider>
   
  );
};

export default RootLayout;
