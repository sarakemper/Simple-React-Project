import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

    const ThemeToggle = () => {
        //instead of using the consuemr cna also use useContext hook
        const{ isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext) //provide us with the props
        const theme = isLightTheme ? light: dark

        return(
            <button onClick = {toggleTheme}>Toggle Theme</button>
        )

        /* you cannot put the toggletheme function here becasue you can not directly change the context.  When you make isLIghtTheme you are assigning that vlaue to what
        the context is at that moment, but by changing islighthteme you cannot change the original value from themecontext. */
}
 
export default ThemeToggle;