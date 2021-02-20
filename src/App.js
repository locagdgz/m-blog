import React, { memo, Suspense } from 'react'
import {renderRoutes} from 'react-router-config'
import {BrowserRouter} from 'react-router-dom'
import Header from '@/components/header'
import Footer from '@/components/footer'
import routes from './router'
// import LoadingPage from './pages/loading-page'

export default memo(function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Suspense fallback={"loading"}>
          {renderRoutes(routes)}
        </Suspense>
      </BrowserRouter>
      <Footer/>
    </div>
  );
})


