import React from 'react';
import { Text, View, TouchableOpacity, TextInput, CheckBox, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { withFormik } from 'formik';
import FormStyle from './../../custom/styles/FormStyle';
import api from '../../services/api';
import * as Yup from 'yup';
import DenunciasStyle from './style';
import DatePicker from 'react-native-datepicker';
import Spinner from 'react-native-loading-spinner-overlay'


function alertaDenuncias(title, description){
    setTimeout(() => {
        Alert.alert(
            title,
            description,
            [
            { text: 'OK', onPress: () => console.log('press btn ok')}
            ],
            { cancelable: true }
        );
    }, 100);
}

const Form = (props) => (
    <View style={FormStyle.containerForm}>
        <Spinner
          visible={props.values.spinner}
          textContent={''}
        />
        <View style={DenunciasStyle.containerIcone}>
            <View style={DenunciasStyle.circuloIcone}>
                <Feather name= 'mic' size={40} color="#D44E5A" />
            </View>
            <View>
                <TouchableOpacity style={DenunciasStyle.checkboxContainer} onPress={() => props.setFieldValue('denunciaAnonima', !props.values.denunciaAnonima)}>
                    <Feather name= { props.values.denunciaAnonima ? 'check-circle' : 'circle'} size={22}  color= '#707070' />
                    <Text style={DenunciasStyle.checkboxLabel}>Denuncia Anônima</Text>
                </TouchableOpacity>
                { !props.values.denunciaAnonima &&
                    <Text style={DenunciasStyle.textoIcone}>Preencha todos os campos abaixo para fazer sua denuncia.</Text>
                }
                { props.values.denunciaAnonima &&
                    <Text style={[DenunciasStyle.textoIcone, {width: 240, color: '#D44E5A'}]}>Você não precisa se identificar, seus dados permanecerão em sigilo.</Text>
                }
            </View>
        </View>
        { !props.values.denunciaAnonima && 
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
        }
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
        { !props.values.denunciaAnonima && 
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
        }
        { !props.values.denunciaAnonima && 
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
        }
        { !props.values.denunciaAnonima && 
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
        }
        <View style={FormStyle.containerInputs}>
            <DatePicker
                style={FormStyle.inputDatePicker}
                date={props.values.dataOcorrencia}
                mode="date"
                placeholder="Data da ocorrência"
                format="DD/MM/YYYY"
                // minDate="2016-05-01"
                // maxDate="2016-06-01"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                customStyles={{
                    dateInput: {
                        borderWidth: 0,
                        minHeight: 50,
                        alignItems: 'flex-start',
                    },
                    dateText: {
                        color: '#707070'
                    },
                    placeholderText: {
                        color: '#707070',
                    },
                    dateTouchBody: {
                        marginTop: 4
                    },
                }}
                onDateChange={(date) => props.setFieldValue('dataOcorrencia', date)}
            />
            { props.touched.dataOcorrencia && props.errors.dataOcorrencia && <Text style={FormStyle.inputErros}>{props.errors.dataOcorrencia}</Text> }
        </View>
        <View style={FormStyle.containerInputs}>
            <TextInput
                style={[FormStyle.inputText, {height: 130, paddingTop: 15}]}
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
        denunciaAnonima: true, 
        nome: '', 
        nomeAgressor: '',
        endereco: '',
        telefone: '', 
        email: '', 
        descricao: '',
        dataOcorrencia: ''}),

        // validationSchema: Yup.object().shape({
        //     denunciaAnonima: Yup.boolean().required(),
        //     nome: Yup.string().when('denunciaAnonima', {is: true,then: Yup.string().required('Preencha o campo de nome')}),
        //     // nome: Yup.string().when('denunciaAnonima', {
        //     //     is: value => !value, then: Yup.required('Preencha o campo de nome')
        //     // })
            
    // validationSchema: Yup.object().shape({
    //     nome: Yup.string().required('Preencha o campo de nome'),
    //     telefone: Yup.number().typeError('Telefone inválido, informe apenas números').required('Preencha o campo de telefone'),
    //     email: Yup.string().email('Digite um e-mail válido').required('Preencha o campo de email'),
    //     descricao: Yup.string().required('Preencha o campo de descrição'),
    // }),
    handleSubmit: (values, { setSubmitting, setErrors, resetForm, setValues }) => {
        values.spinner = true;
        setValues(values)
        let schema = {};
        // if(values.denunciaAnonima){
        //     schema = Yup.object().shape({
        //         dataOcorrencia: Yup.string().required('Preencha o campo data da ocorrência'),
        //         nomeAgressor: Yup.string().required('Preencha o campo de nome do agressor'),
        //     })
        // }else{
        //     schema = Yup.object().shape({
        //         nome: Yup.string().required('Preencha o campo de nome')
        //     })
        // }
        
        // schema.validate(values).then(function (valid, err) {
            api.post('/denuncias/create', values)
            .then(success => {
                values.spinner = false;
                setValues(values)
                if(success.data._id){
                    alertaDenuncias('Sucesso', 'Denúncia registrada com sucesso.');
                    resetForm();
                }else{
                    alertaDenuncias('Erro', success.data[0].message);
                }
            })
            .catch(err => {
                values.spinner = false;
                setValues(values)
                setErrors({ message: err.message });
                alertaDenuncias('Erro', err.message);
            });
        // }).catch(function (err) {
        //     console.log('err catch ', err)   
        //     console.log(err.errors) 
        // });
        
    }
})(Form);