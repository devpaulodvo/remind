import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 40,
        paddingHorizontal: 20,
    },
    scrollcontainer:{
    },
    multiline: {
        textAlignVertical: 'top',
        padding: 20,
        height: 100,
        width: 348,
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EBEDFF',
        fontSize: 13,
        justifyContent: "flex-start"
    },
    backbtn: {
        marginTop: 20,
    },
    textAreaContainer: {
        borderWidth: 1,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 8,
        borderColor: '#EBEDFF',
        marginTop:5,
      },
      textArea: {
        height: 80,
        justifyContent: "flex-start"
      },
      label: {
          fontSize: 24,
          marginTop: 10,
      },
      box:{
          marginTop:30,
      },
      datepicker: {
          marginTop: 10,
          height: 150,
          alignSelf: "center",
      }
})