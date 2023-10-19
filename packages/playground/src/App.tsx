import { LanguageProvider } from './context/LanguageProvider';
import PageRouter from './PageRouter';

const App = () => {
  return (
    <LanguageProvider>
      <PageRouter/>
    </LanguageProvider>
  );
};

export default App;
