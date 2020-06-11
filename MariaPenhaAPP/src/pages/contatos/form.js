import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { withFormik } from 'formik';
import ContatosStyle from './style';
import api from '../../services/api';
import * as Yup from 'yup';

const Form = (props) => (
    <View style={ContatosStyle.containerForm}>
        <View style={ContatosStyle.containerInputs}>
            <TextInput
                style={ContatosStyle.inputText}
                placeholder="Nome"
                placeholderTextColor="#707070"
                value={props.values.nome}
                onChangeText={text => props.setFieldValue('nome', text)}
            />
            { props.touched.nome && props.errors.nome && <Text style={ContatosStyle.inputErros}>{props.errors.nome}</Text> }
        </View>
        <View style={ContatosStyle.containerInputs}>
            <TextInput
                style={ContatosStyle.inputText}
                placeholder="Telefone"
                placeholderTextColor="#707070"
                value={props.values.telefone}
                onChangeText={text => props.setFieldValue('telefone', text)}
            />
            { props.touched.telefone && props.errors.telefone && <Text style={ContatosStyle.inputErros}>{props.errors.telefone}</Text> }
        </View>
        <View style={ContatosStyle.containerInputs}>
            <TextInput
                style={ContatosStyle.inputText}
                placeholder="Email"
                placeholderTextColor="#707070"
                value={props.values.email}
                onChangeText={text => props.setFieldValue('email', text)}
            />
            { props.touched.email && props.errors.email && <Text style={ContatosStyle.inputErros}>{props.errors.email}</Text> }
        </View>
        <View style={ContatosStyle.containerInputs}>
            <TextInput
                style={[ContatosStyle.inputText, {height: 130}]}
                placeholder="Descreva sua dúvida"
                placeholderTextColor="#707070"
                multiline={true}
                editable
                value={props.values.descricao}
                onChangeText={text => props.setFieldValue('descricao', text)}
            />
            { props.touched.descricao && props.errors.descricao && <Text style={ContatosStyle.inputErros}>{props.errors.descricao}</Text> }
        </View>
        
        <View>
            <TouchableOpacity onPress={props.handleSubmit} style= {ContatosStyle.botaoSubmit}>
                <Feather name= "chevron-left" size={20} color="#D44E5A" />
                <Text style={ContatosStyle.textoBotaoSubmit}>Enviar</Text>
                <Feather name= "chevron-right" size={20} color="#E9A6AC" />
            </TouchableOpacity>
        </View>
    </View>
);

export default withFormik({
    mapPropsToValues: () => ({ nome: '', telefone: '', email: '', descricao: '' }),
   
    validationSchema: Yup.object().shape({
        nome: Yup.string().required('Preencha o campo de nome'),
        telefone: Yup.number().typeError('Telefone inválido, informe apenas números').required('Preencha o campo de telefone'),
        email: Yup.string().email('Digite um e-mail válido').required('Preencha o campo de email'),
        descricao: Yup.string().required('Preencha o campo de descrição'),
    }),

    handleSubmit: (values, { setSubmitting, setErrors, resetForm }) => {
        console.log(values)
        api.post('/duvidas/create', values)
        .then(success => {
            console.log('sucessssssssss ')
            console.log(success.data)
            resetForm();
        })
        .catch(err => {
            setSubmitting(false);
            setErrors({ message: err.message });
        });
    }
})(Form);