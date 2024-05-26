import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"simulacropeliculas","appId":"1:389931221539:web:7b92d703c853f713152796","storageBucket":"simulacropeliculas.appspot.com","apiKey":"AIzaSyA6yqj5Iqom8B880udcpZVDdbdfi5faeBs","authDomain":"simulacropeliculas.firebaseapp.com","messagingSenderId":"389931221539"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"simulacropeliculas","appId":"1:389931221539:web:7b92d703c853f713152796","storageBucket":"simulacropeliculas.appspot.com","apiKey":"AIzaSyA6yqj5Iqom8B880udcpZVDdbdfi5faeBs","authDomain":"simulacropeliculas.firebaseapp.com","messagingSenderId":"389931221539"})), provideFirestore(() => getFirestore())]
};
