import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.welcomeScreen.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.white,
    padding: 4,
    marginTop: 16,
    borderRadius: 4,
  },
  listItemCont: {
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "space-between"
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 4,
    backgroundColor: "#d9f9b1",
  },
  list: {
    width: "100%"
  },
  touchable: {
    width: "80%"
  },
  text: {
    fontSize: 25,
    color: "red",
    textAlign: 'center',
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
});

export default styles;
