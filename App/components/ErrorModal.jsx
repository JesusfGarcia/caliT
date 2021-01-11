import React from "react";
import { Modal, View, Text } from "react-native";

const ErrorModal = ({ text }) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <View>
        <Text>{text}</Text>
      </View>
    </Modal>
  );
};

export default ErrorModal;
