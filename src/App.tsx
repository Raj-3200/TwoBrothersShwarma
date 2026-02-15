import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'

const FounderPage = lazy(() => import('./pages/FounderPage'))
const MenuPage = lazy(() => import('./pages/MenuPage'))

const PageLoader = () => (
  <div className="min-h-screen bg-cream flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-flame border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/menu"
          element={
            <Suspense fallback={<PageLoader />}>
              <MenuPage />
            </Suspense>
          }
        />
        <Route
          path="/founder"
          element={
            <Suspense fallback={<PageLoader />}>
              <FounderPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
