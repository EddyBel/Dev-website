import { useEffect } from 'react';
import { ButtonUpScroll } from './components/@buttons/button-up-page';
import { Footer } from './components/@templates/footer';
import { NavBar } from './components/@templates/nav-bar';
import { Routes } from './router/router';
import { BlogProvider } from './store/blog.context';
import { GithubProvider } from './store/github.context';
import { DrawingInConsole } from './utils/drawing';
// import { ApiNotification } from './components/@notifications/api.notification';
// import { Toaster } from 'sonner';

function App() {
  //   ApiNotification();
  useEffect(() => DrawingInConsole(), []);

  return (
    <>
      <NavBar />
      <BlogProvider>
        <GithubProvider>
          <Routes />
        </GithubProvider>
      </BlogProvider>
      <ButtonUpScroll />
      {/* <Toaster theme="dark" /> */}
      {/* <SwitchTheme /> */}
      <Footer />
    </>
  );
}

export default App;
