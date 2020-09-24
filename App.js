import React,{useState,useCallback} from 'react';
import{View, Text, StyleSheet,TouchableOpacity,Button,FlatList,Modal, SafeAreaView, TextInput} from 'react-native';
import './src/pages/StatusBar';
import TaskList from './src/components/TaskList';
import * as Animatable from 'react-native-animatable';


const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);


export default function App(){
    const [task,setTask] = useState([]);
    const [open,setOpen] = useState(false);
    const[input,setInput] = useState('');

function handleAdd() {
    if(input ==='') return;

    const data = {
        key: input,
        task: input
    }; 

    setTask([...task,data]);
    setOpen(false);
    setInput('');

}


const handleDelete = useCallback((data)=>{
    const find = task.filter(r=> r.key !== data.key);
    setTask(find);

})

return(<View style={styles.container}>

    <View style={styles.content}> 
        <Text style={styles.title} > QuickTodoList </Text>
    </View>

    <FlatList 
    marginHorizontal={1}
    showsHorizontalScrollIndicator={false}
    data={task}
    keyExtractor={ (item) => String(item.key)}
    renderItem={ ({item}) => <TaskList data={item} handleDelete={handleDelete}/>}
    />
    
   <Modal animationType='slide' transparent={false} visible={open} >
    <SafeAreaView style={styles.modal}>

        <View style={styles.modalHeader}> 
            <TouchableOpacity onPress={()=> setOpen(false)}>
            <Text style={styles.return}>⇦</Text> 
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Nova Tarefa</Text>
        </View>

        <Animatable.View 
        animation = 'fadeInUp'
        useNativeDriver
        style={styles.modalBody}>
            <TextInput
            multiline = {true}
            placeholder = 'O que você precisa fazer hoje?'
            style={styles.input}
            value={input}
            onChangeText={(texto)=> setInput(texto)} 
            />

            <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
                <Text style={styles.handleAddText }>Adicionar</Text>
            </TouchableOpacity>
        </Animatable.View>
        
    </SafeAreaView>
   </Modal>

    <AnimatedBtn 
    style={styles.fab}
    useNativeDriver
    animation='slideInUp'
    duration ={1000}
   
    > 
    <Button 
    
    title='Adicionar Tarefa'
    color="#4A6572" 
    onPress = {() => setOpen(true)}
    />
    </AnimatedBtn>
</View>
)
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#344955'
},
title:{
    backgroundColor: '#344955',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop:10,
    marginLeft: 0,
    marginBottom: 5,
    color: '#E2E2E2',
    textAlign: 'center',
    height: 120,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    opacity: .9,
},
fab:{
    position:'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 25,
    bottom:25,
    elevation:2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
        width:1,
        height:3, 
    },
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    
},
return:{
    fontSize: 25,
    fontWeight:'bold',
    marginLeft: 15,
    color:'#E2E2E2',

},
modal:{
    flex: 1,
    backgroundColor: '#344955',
},
modalHeader:{
    backgroundColor: '#344955',
    paddingTop:27,
    marginLeft: 0,
    marginBottom: 5,
    color: '#E2E2E2',
    textAlign: 'center',
    height: 65,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: .9,

},
modalTitle:{
    marginLeft: 15,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#E2E2E2',
},
modalBody:{
    marginTop: 10,
    backgroundColor: '#344955',
    
},
input:{
    fontSize: 18,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30,
    backgroundColor: '#F3F3F3',
        opacity: .6,
        padding: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset:{
            width: 1,
            height: 3,
        },
    padding: 9,
    height: 120,
    textAlignVertical: 'top',
    color:'#000',
    borderRadius: 5,    
},
handleAdd:{
    backgroundColor: '#4A6572',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    borderRadius: 5,
    opacity: .9,
},
handleAddText:{
    fontSize: 18,
    color: '#FFF'
}

});