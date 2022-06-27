import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub ='#c9d1d9';
const colorDarkFontGitHub = '#4f565e';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/100409336?v=4';

const urlToMyGitHub = 'https://github.com/FabiMelo-27';

const App =()=> {

        const handlePressGoToGitHub = async ()=>{
            console.log ('Verificando link');
            const res = await Linking.canOpenURL(urlToMyGitHub);
            if (res){
                console.log('Link aprovado');
                console.log('Abrindo link..');
                await Linking.openURL(urlToMyGitHub);
            }
         
        };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle="light-content"/>
            <View style={style.content} >
               < Image 
               accessibilityLabel='Selfi de Fabi ao fundo de paisagem'
               style={style.avatar} 
               source ={{uri:imageProfileGitHub}}/>
               <Text  accessibilityLabel='Nome: Fabíola Gaspar' style={[style.defaultText,style.name]}>Fabíola Gaspar</Text>
               <Text  accessibilityLabel='Nickname: FabiMelo-27' style={[style.defaultText,style.nickname]}>FabiMelo-27</Text>
               <Text  accessibilityLabel='Descrição: Estudante do 3º período de Análise e Desenvolvimento de Sistemas' style={[style.defaultText,style.description]}>Estudante do 3º período de Análise e Desenvolvimento de Sistemas
               </Text>
              
               <Pressable onPress={handlePressGoToGitHub}>
                    <View style={style.button}>
                         <Text style = {[style.defaultText,style.textButton]}> Open in GitHub </Text>
               </View>
               </Pressable> 
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create( {
        container:  {
            backgroundColor: colorGitHub,
            flex: 1, //expandir a tela inteira
            justifyContent:'center',
            alignItems:'center',
        },
        content: {
            alignItems: 'center',
            padding: 20,
        },

        avatar:{
            height: 200,
            width: 200,
            borderRadius: 100,
            borderColor: 'white',
            borderWidth: 2,
        },
        
        defaultText:{
            color: colorFontGitHub,
        },
        name: {
            fontWeight:'bold',
            fontSize: 24,
        },
        nickname:{
            fontSize:18,
            color: colorDarkFontGitHub ,
            
        },
        description: {
            fontSize: 14,
        },
        button: {
            backgroundColor: colorDarkFontGitHub,
            borderRadius: 10,
            padding: 20,
            marginTop: 20,
        },
        textButton: {
            fontWeight:'bold',
            fontSize: 16,
        },
});