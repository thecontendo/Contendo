import * as React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import ActiveChallenges from '../Active';
import styles from './style';

const FirstRoute = () => <ActiveChallenges />;

const SecondRoute = () => <View style={styles.second} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: FirstRoute,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    fontWeight={5}
    style={styles.indicatorStyle}
    renderLabel={({route}) => (
      <Text style={styles.tabTitle}>{route.title}</Text>
    )}
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Active'},
    {key: 'second', title: 'Completed'},
    {key: 'third', title: 'Expired'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
}
