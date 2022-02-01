import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import PasswordTextField from "../UI/PasswordTextField/PasswordTextField";
import ButtonComponent from "../UI/ButtonComponent/ButtonComponent";
import TextField from "../UI/TextField/TextField";
import CheckBox from "../UI/CheckBox/CheckBox";
import BackButton from "../UI/BackButton/BackButton";
import { styles } from "./RegisterCss";

const Register = () => {
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.innercontainer}>
                    <BackButton></BackButton>
                    <Text style={styles.signupText}>Sign Up</Text>
                    <Text style={styles.subtext}>Pellentesque pellentesque amet porta sed ac duis sed diam.</Text>
                    <TextField label={"Full Name"} style={styles.textboxmargintop}/>
                    <TextField label={"Contact Number"} keyboardType={"number-pad"} style={styles.textboxmargintop}/>
                    <TextField label={"Email Address"} style={styles.textboxmargintop}/>
                    <PasswordTextField label={"Password"} style={styles.textboxmargintop}/>
                    <View style={styles.chckbx}>
                        <CheckBox/>
                        <View>
                            <Text>By creating this account you agree on </Text>
                            <TouchableOpacity>
                                <Text style={styles.text}>Terms and Conditions</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ButtonComponent title={"Sign Up"} backgroundColor={"#4b21d1"}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Register;