import React, { Component, createContext} from 'react'


export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component { 
  constructor() {
    super();
    this.state = { 
      isPurpleTheme: true,
      purple: {
        ui: ''
      },
      dark: {}
    }
  }

  toggleTheme = () => { 
    this.setState({...this.state, isPurpleTheme: !this.state.isPurpleTheme });
  };

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}