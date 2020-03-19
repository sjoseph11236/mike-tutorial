import React from 'react';
import NavBar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
