import React from 'react';

import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}> {props.text} </Text>
    </View>
  );
};
  const styles = {
    viewStyle: {

        backgroundColor: '#9E9E9E',
        justifyContents: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
      fontSize: 20
    }
  };

export { Header };
