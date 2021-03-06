import React from 'react';
import {Platform, Text, View, TouchableOpacity} from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import {connect} from 'react-redux';

// styles
import styles from './DrawerStyles';

const Drawer = props => {
  return (
    <View style={styles.container}>
      <DrawerLayout
        ref={drawer => {
          this.drawer = drawer;
        }}
        drawerWidth={300}
        keyboardDismissMode="on-drag"
        drawerType={'front'}
        useNativeAnimations={true}
        renderNavigationView={() => <View />}
        contentContainerStyle={Platform.select({
          ios: styles.contentContainerStyleIos,
          android: styles.contentContainerStyleAndroid,
        })}>
        <View style={styles.layout}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Text style={styles.text}>close</Text>
          </TouchableOpacity>
        </View>
      </DrawerLayout>
    </View>
  );
};

const mapProps = state => {
  return {
    badges: state.badges,
    // ... other reducers to connect with drawer ❤️
  };
};

// conect reduces with component,
// replace null with action, in case handle redux actions
export default connect(
  mapProps,
  null,
)(Drawer);
