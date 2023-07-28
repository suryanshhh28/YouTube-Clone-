import React from 'react'
import AppContext from "./context/contextApi";
import Header from "./components/Header";

const App = () => {
  return (
    <AppContext className="text-3xl">
     <div className="flex flex-col h-full">
       <Header />
     </div>
    </AppContext>
  )
}

export default App