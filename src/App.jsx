import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { 
  Home,
 } from './pages'

 import { Layout } from './features/layout/Layout'

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App