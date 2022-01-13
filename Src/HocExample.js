import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';

const ourHoc = component => {
return class OurHOC extends React.Component {
    render(){
        return(
            <Component {...this.props} />  
        )
    }
}

}

export default ourHoc;

// const inputbuttonWithOurHOC = ourHOC(InputButton)
 
