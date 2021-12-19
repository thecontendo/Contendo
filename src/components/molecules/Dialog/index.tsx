import React from 'react';
import {Alert, Modal, ScrollView, View} from 'react-native';
import styles from './styles';

interface Props {
  open: boolean;
  close(): void;
  children?: React.ReactNode;
  buttons?: React.ReactNode[] | [];
}

const Dialog = (props: Props) => {
  const {open, close, children, buttons} = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      style={styles.container}
      visible={open}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        close();
      }}>
      <View style={styles.centeredView1}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.modalView}>{children}</View>
        </ScrollView>
        {buttons && buttons.length ? buttons : null}
      </View>
    </Modal>
  );
};

export default Dialog;
