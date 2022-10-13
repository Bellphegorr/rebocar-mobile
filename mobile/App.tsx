// export {default} from './storybook';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

function App() {
  GoogleSignin.configure({
    webClientId:
      '519447374203-qgf9l5d3f0l4bq0dahd7mcofkkboi897.apps.googleusercontent.com',
  });
  return (
    <GoogleSigninButton
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: 192, height: 48}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={() => {
        GoogleSignin.signIn()
          .then(data => {
            console.log('dados', data);
          })
          .catch(err => {
            console.log('erro', err);
            debugger;
          });
      }}
    />
  );
}

export default App;
