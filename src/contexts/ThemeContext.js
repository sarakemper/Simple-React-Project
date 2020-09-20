import React, { createContext, Component } from 'react'


export const ThemeContext = createContext() //creating a context and is stored in themecontext

class ThemeContextProvider extends Component {
    state = { 
        //shared data want to supply to components
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg: '#555'},
     }

     toggleTheme = () => {
         this.setState({
             isLightTheme: !this.state.isLightTheme
        })
     }
    render() { 
        return ( 
            <ThemeContext.Provider value = {{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 //creating context now must create provider (the actual tag).  This provider is what is going to wrap our components.
export default ThemeContextProvider;

/* this.props.children is pretty much a way that represents whatever is between the opening and closing tag.  This means, you use props.children whenerv you make a component
and don't know waht your children will be ahead of time.  */