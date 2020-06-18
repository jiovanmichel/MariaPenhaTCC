import React from 'react';
import { Text, View, TouchableOpacity, TextInput, CheckBox } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { withFormik } from 'formik';
import FormStyle from './../../custom/styles/FormStyle';
import api from '../../services/api';
import * as Yup from 'yup';
import DenunciasStyle from './style';

const Form = (props) => (
    <View style={FormStyle.containerForm}>
        <View style={DenunciasStyle.containerIcone}>
            <View style={DenunciasStyle.circuloIcone}>
                <Feather name= 'mic' size={40} color="#D44E5A" />
            </View>
            <View>
                <TouchableOpacity style={DenunciasStyle.checkboxContainer} onPress={() => props.setFieldValue('denunciaAnonima', !props.values.denunciaAnonima)}>
                    <Feather name= { props.values.denunciaAnonima ? 'check-circle' : 'circle'} size={22}  color="#707070" />
                    <Text style={DenunciasStyle.checkboxLabel}>Denuncia Anônima</Text>
                </TouchableOpacity>
                <Text style={DenunciasStyle.textoIcone}>Preencha todos os campos abaixo para fazer sua denuncia.</Text>
            </View>
        </View>
        <View style={FormStyle.containerInputs}>
            <TextInput
                style={FormStyle.inputText}
                placeholder="Nome"
                placeholderTextColor="#707070"
                value={props.values.nome}
                onChangeText={text => props.setFieldValue('nome', text)}
            />
            { props.touched.nome && props.errors.nome && <Text style={FormStyle.inputErros}>{props.errors.nome}</Text>}
        </View>
        <View style={FormStyle.containerInputs}>
            <TextInput
                style={FormStyle.inputText}
                placeholder="Agressor"
                placeholderTextColor="#707070"
                value={props.values.nomeAgressor}
                onChangeText={text => props.setFieldValue('nomeAgressor', text)}
            />
            { props.touched.nomeAgressor && props.errors.nomeAgressor && <Text style={FormStyle.inputErros}>{props.errors.nomeAgressor}</Text> }
        </View>
        <View style={FormStyle.containerInputs}>
            <TextInput
                style={FormStyle.inputText}
                placeholder="Endereço"
                placeholderTextColor="#707070"
                value={props.values.endereco}
                onChangeText={text => props.setFieldValue('endereco', text)}
            />
            { props.touched.endereco && props.errors.endereco && <Text style={FormStyle.inputErros}>{props.errors,endereco}</Text> }
        </View>
        <View style={FormStyle.containerInputs}>
            <TextInput
                style={FormStyle.inputText}
                placeholder="Telefone"
                placeholderTextColor="#707070"
                value={props.values.telefone}
                onChangeText={text => props.setFieldValue('telefone', text)}
            />
            { props.touched.telefone && props.errors.telefone && <Text style={FormStyle.inputErros}>{props.errors.telefone}</Text> }
        </View>
        <View style={FormStyle.containerInputs}>
            <TextInput
                style={FormStyle.inputText}
                placeholder="Email"
                placeholderTextColor="#707070"
                value={props.values.email}
                onChangeText={text => props.setFieldValue('email', text)}
            />
            { props.touched.email && props.errors.email && <Text style={FormStyle.inputErros}>{props.errors.email}</Text> }
        </View>
        <View style={FormStyle.containerInputs}>
            <TextInput
                style={[FormStyle.inputText, {height: 130}]}
                placeholder="Descreva o ocorrido"
                placeholderTextColor="#707070"
                multiline={true}
                editable
                value={props.values.descricao}
                onChangeText={text => props.setFieldValue('descricao', text)}
            />
            { props.touched.descricao && props.errors.descricao && <Text style={FormStyle.inputErros}>{props.errors.descricao}</Text> }
        </View>
        
        <View>
            <TouchableOpacity onPress={props.handleSubmit} style= {FormStyle.botaoSubmit}>
                <Feather name= "chevron-left" size={20} color="#D44E5A" />
                <Text style={FormStyle.textoBotaoSubmit}>Enviar</Text>
                <Feather name= "chevron-right" size={20} color="#E9A6AC" />
            </TouchableOpacity>
        </View>
    </View>
);

export default withFormik({
    mapPropsToValues: () => ({
        denunciaAnonima: false, 
        nome: '', 
        nomeAgressor: '',
        endereco: '',
        telefone: '', 
        email: '', 
        descricao: '',
        teste: '' }),
   
    // validationSchema: Yup.object().shape({
    //     nome: Yup.string().required('Preencha o campo de nome'),
    //     telefone: Yup.number().typeError('Telefone inválido, informe apenas números').required('Preencha o campo de telefone'),
    //     email: Yup.string().email('Digite um e-mail válido').required('Preencha o campo de email'),
    //     descricao: Yup.string().required('Preencha o campo de descrição'),
    // }),
    
    handleSubmit: (values, { setSubmitting, setErrors, resetForm }) => {
        console.log(values)
        // api.post('/denuncias/create', values)
        // .then(success => {
        //     console.log('sucessssssssss ')
        //     console.log(success.data)
        //     resetForm();
        // })
        // .catch(err => {
        //     setSubmitting(false);
        //     setErrors({ message: err.message });
        // });
    }
})(Form);