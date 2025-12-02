import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { TransitionProvider } from "./TransitionProvider"

export const Layout = ({children}) => {
  return (
    <>
      <TransitionProvider>       
        <Navbar/>
        {children}
        <Footer/>
      </TransitionProvider>
    </>
  )
}
