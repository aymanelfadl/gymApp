import { useState ,useEffect} from 'react';
import { PermissionsAndroid,View, Text, Modal, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from "react-native-vector-icons/AntDesign"

const EditUserModal = ({ onClose, userData, onEditUser, onEndUser, visible }) => {
  const [userEdit, setUserEdit] = useState(userData);
  const [newImage, setNewImage] = useState(null);

  console.log(userEdit);
  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);

      granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED ? 
        console.log('Camera, storage, and audio recording permissions granted') : console.log('One or more permissions denied');
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestPermissions();
  }, []);


  const handleLaunchImageLibrary = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        setNewImage({ uri: response.assets[0].uri });
      }
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ backgroundColor: "white" , padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' }}>
          <TouchableOpacity onPress={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>
            <Icon name="close" color="black" size={20}/> 
          </TouchableOpacity>
          <View>
          <TouchableOpacity onPress={handleLaunchImageLibrary}>
            <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
              <Image source={{ uri: newImage ? newImage.uri : userEdit.picture_file }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                 <Icon name="camera" size={20} color="white" style={{ position: 'absolute', }} />
            </View>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row-reverse",justifyContent:"space-between", width:"100%",alignItems:"center"}}>
            <Text style={{textAlign:"right", color:"rgb(37 99 235)", fontWeight:"bold" , fontSize:18}}>الاسم الكامل:</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: 'rgb(224 231 255)', borderRadius: 20, width: '60%', padding: 12, marginBottom: 10, color: 'black' }}
              placeholder="الاسم الكامل"
              value={userEdit.first_name + " " + userEdit.last_name}
              onChangeText={(text) => {
                const spaceIndex = text.indexOf(" ");
                setUserEdit({
                  ...userEdit,
                  first_name: spaceIndex !== -1 ? text.substring(0, spaceIndex) : text,
                  last_name: spaceIndex !== -1 ? text.substring(spaceIndex + 1) : "",
                });
              }}
            />

          </View>
          <View style={{flexDirection:"row-reverse",justifyContent:"space-between", width:"100%",alignItems:"center"}}>
            <Text style={{textAlign:"right", color:"rgb(37 99 235)", fontWeight:"bold" , fontSize:18}}>تاريخ الميلاد:</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: 'rgb(224 231 255)', borderRadius: 20, width: '60%', padding: 12, marginBottom: 10, color: 'black' }}
              placeholder="تاريخ الميلاد"
              value={userEdit.date_birth}
              onChangeText={(text) => setUserEdit({ ...userEdit, date_birth: text })}
            />
           </View> 
           <View style={{flexDirection:"row-reverse",justifyContent:"space-between", width:"100%",alignItems:"center"}}>
              <Text style={{textAlign:"right", color:"rgb(37 99 235)", fontWeight:"bold" , fontSize:18}}>رقم الهاتف:</Text>  
              <TextInput
                style={{ borderWidth: 1, borderColor: 'rgb(224 231 255)', borderRadius: 20, width: '60%', padding: 12, marginBottom: 10, color: 'black' }}
                placeholder="رقم الهاتف"
                value={userEdit.phone_number}
                onChangeText={(text) => setUserEdit({ ...userEdit, phone_number: text })}
              />
          </View>
          <View style={{flexDirection:"row-reverse",justifyContent:"space-between", width:"100%",alignItems:"center"}}>
            <Text style={{textAlign:"right", color:"rgb(37 99 235)", fontWeight:"bold" , fontSize:18}}>فاتورة جديدة:</Text>   
            <TextInput
              style={{ borderWidth: 1, borderColor: 'rgb(224 231 255)', borderRadius: 20, width: '60%', padding: 12, marginBottom: 10, color: 'black' }}
              placeholder="المبلغ المؤدى من الزبون"
              placeholderTextColor="rgb(23 37 84)"
              value={userEdit.subscription_amount}
              onChangeText={(text) => setUserEdit({ ...userEdit, subscription_amount: text })}
            />
          </View>
          <View style={{flexDirection:"row-reverse",justifyContent:"space-between", width:"100%",alignItems:"center"}}>
            <Text style={{textAlign:"right", color:"rgb(37 99 235)", fontWeight:"bold" , fontSize:18}}>انتهاء العضوية:</Text>   
            <TextInput
              style={{ borderWidth: 1, borderColor: 'rgb(224 231 255)', borderRadius: 20, width: '60%', padding: 12, marginBottom: 10, color: 'black' }}
              placeholder="تاريخ انتهاء العضوية"
              value={userEdit.end_date}
              onChangeText={(text) => setUserEdit({ ...userEdit, end_date: text })}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', padding: 10, marginTop: 10 }}>
            <TouchableOpacity onPress={() => onEndUser(userEdit)} style={{backgroundColor:"white", borderRadius: 100, borderColor: "red", borderWidth: 1, paddingHorizontal: 20, marginHorizontal: 20, padding: 10, elevation: 5 }}>
              <Text style={{ color: 'red', fontSize: 18 }}>انهاء العضوية</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onEditUser(userEdit)} style={{ borderRadius: 100, paddingHorizontal: 25, marginHorizontal: 20, backgroundColor: "blue", padding: 10, elevation: 5 }}>
              <Text style={{ color: 'white', fontSize: 18 }}>حفظ</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
};

export default EditUserModal;