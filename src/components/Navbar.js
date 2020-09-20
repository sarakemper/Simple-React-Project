import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends Component {
    static contextType = ThemeContext //can only use contextType when you have a class
    //static just says it sa static method (not called on instance of class but on the class itself)

    /* When you export theme context what the function does (the one that you export) is that it goes up the component
    tree and then looks for the component themecontextprovider and when it sees that it gives you access to the state it in attributes.*/

    render() { 
        const { isLightTheme, light, dark } = this.context //can only access context in the lifecycle methods (including render)
        const theme = isLightTheme ? light: dark
        //destructuring the context
        // also note must do {{}} for style because the first one is the the style object the other one is becasue that;s how you do inline attributes (use the { })
        return ( 
            <nav style = {{background: theme.ui, color: theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;