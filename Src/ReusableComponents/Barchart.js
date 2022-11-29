//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
// create a component
const Barchart = ({data, inlinestyle}) => {
  return (
    <View>
      <BarChart
        barWidth={25}
        noOfSections={5}
        barBorderRadius={4}
        dashWidth={'0'}
        frontColor="#ffc69d"
        data={data}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </View>
  );
};

// define your styles

//make this component available to the app
export default Barchart;
