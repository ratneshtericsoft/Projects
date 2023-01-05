import { GoogleOAuthProvider } from '@react-oauth/google';
import logo from './logo.svg';
import './App.css';
import { Messanger } from './components/Messanger';

function App() {
  const clientId = "683522528298-42cdb4ncfq8ghqd6q910gtu3dbl01q59.apps.googleusercontent.com"
  const clientSecret = "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"

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messanger/>
    </GoogleOAuthProvider>
  );
}

export default App;
