/*import React, { useState, useCallback } from 'react';import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';

const createOptions = (options) => options.map(option => ({ label: option, value: option }));

const domainOptions = createOptions(['Informatique', 'Santé', 'Education', 'Finance', 'Autre']);
const professionOptions = createOptions(['Développeur', 'Designer', 'Manager', 'Consultant', 'Autre']);
const specialismOptions = createOptions(['Web', 'Mobile', 'IA', 'Cloud', 'Autre']);
const competenceOptions = createOptions(['JavaScript', 'Python', 'React', 'Node.js', 'Autre']);

const SelectField = ({ title, options, value, setValue, open, setOpen, zIndex }) => (
    <View className="mb-3" style={{ zIndex: zIndex }}>
      <Text className={`font-bold text-lg ${colors.headingColor} mb-3`}>{title}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={options}
        setOpen={setOpen}
        setValue={setValue}
        style={{ borderColor: colors.buttonColor }}
        dropDownContainerStyle={{ borderColor: colors.buttonColor }}
        zIndex={zIndex}
        zIndexInverse={5000 - zIndex}
      />
    </View>
  );

export default function RegisterScreen() {
    const navigation = useNavigation();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        accountsType: '', last_name: '', first_name: '', day_birth: '', email: '',
        phone_number: '', gender: '', city: '', complete_address: '', 
        domain_activity: null, profession: null, specialisms: null, competences: null
    });

     // États pour contrôler l'ouverture des dropdowns
     const [openDomain, setOpenDomain] = useState(false);
     const [openProfession, setOpenProfession] = useState(false);
     const [openSpecialisms, setOpenSpecialisms] = useState(false);
     const [openCompetences, setOpenCompetences] = useState(false);
 
     
     const updateFormData = useCallback((key, value) => {
        setFormData(prevState => ({ ...prevState, [key]: value }));
    }, []);

    const Step1 = () => (
        <>
            <Text className={`font-bold ml-5 text-lg ${colors.headingColor} mb-10`}>Type de compte</Text>
            <View className="flex-row justify-around mb-10">
                <TouchableOpacity 
                    onPress={() => updateFormData('accountsType', 'personal')}
                    style={{
                        backgroundColor: formData.accountsType === 'personal' ? colors.buttonColor : 'white',
                        padding: 10,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: formData.accountsType === 'personal' ? colors.buttonColor : 'gray'
                    }}
                >
                    <Image className='w-50 h-50'
                        source={require('../assets/images/select-04.png')} 
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => updateFormData('accountsType', 'professional')}
                    style={{
                        backgroundColor: formData.accountsType === 'professional' ? colors.buttonColor : 'white',
                        padding: 10,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: formData.accountsType === 'professional' ? colors.buttonColor : 'gray'
                    }}
                >
                    <Image 
                        source={require('../assets/images/select-05.png')} 
                        className='w-30 h-30'
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </>
    );

    const Step2 = () => (
        <>
            <Text className={`font-bold text-lg ${colors.headingColor} mb-3`}>Nom</Text>
            <TextInput 
                className="bg-white rounded-full p-3 mb-3" 
                placeholder="Nom"
                value={formData.last_name}
                onChangeText={(text) => updateFormData('last_name', text)}
            />
            <Text className={`font-bold text-lg ${colors.headingColor} mb-3`}>Prénom</Text>
            <TextInput 
                className="bg-white rounded-full p-3 mb-3" 
                placeholder="Prénom"
                value={formData.first_name}
                onChangeText={(text) => updateFormData('first_name', text)}
            />
            <Text className={`font-bold text-lg ${colors.headingColor} mb-3`}>Date de naissance</Text>
            <TextInput 
                className="bg-white rounded-full p-3 mb-3" 
                placeholder="JJ/MM/AAAA"
                value={formData.day_birth}
                onChangeText={(text) => updateFormData('day_birth', text)}
            />
            <Text className={`font-bold text-lg ${colors.headingColor} mb-3`}>Email</Text>
            <TextInput 
                className="bg-white rounded-full p-3 mb-3" 
                placeholder="Email"
                value={formData.email}
                onChangeText={(text) => updateFormData('email', text)}
            />
            <Text className={`font-bold text-lg ${colors.headingColor} mb-3`}>Téléphone</Text>
            <TextInput 
                className="bg-white rounded-full p-3 mb-3" 
                placeholder="Numéro de téléphone"
                value={formData.phone_number}
                onChangeText={(text) => updateFormData('phone_number', text)}
            />
            <Text className={`font-bold text-lg ${colors.headingColor} mb-3`}>Genre</Text>
            <View className="flex-row justify-around mb-3">
                {['Homme', 'Femme', 'Autre'].map((gender) => (
                    <TouchableOpacity 
                        key={gender}
                        onPress={() => updateFormData('gender', gender.toLowerCase())}
                        style={{backgroundColor: formData.gender === gender.toLowerCase() ? colors.buttonColor : 'white'}}
                        className="p-3 rounded-full"
                    >
                        <Text style={{color: formData.gender === gender.toLowerCase() ? 'white' : 'black'}}>{gender}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text className={`font-bold text-lg ${colors.headingColor} mb-3`}>Ville</Text>
            <TextInput 
                className="bg-white rounded-full p-3 mb-3" 
                placeholder="Ville"
                value={formData.city}
                onChangeText={(text) => updateFormData('city', text)}
            />
            <Text className={`font-bold text-lg ${colors.headingColor} mb-3`}>Adresse complète</Text>
            <TextInput 
                className="bg-white rounded-full p-3 mb-3" 
                placeholder="Adresse complète"
                value={formData.complete_address}
                onChangeText={(text) => updateFormData('complete_address', text)}
            />
        </>
    );

    const Step3 = () => (
        <>
            <SelectField
                title="Domaine d'activité"
                options={domainOptions}
                value={formData.domain_activity}
                setValue={(value) => updateFormData('domain_activity', value())}
                open={openDomain}
                setOpen={setOpenDomain}
                zIndex={4000}
            />
            <SelectField
                title="Profession"
                options={professionOptions}
                value={formData.profession}
                setValue={(value) => updateFormData('profession', value())}
                open={openProfession}
                setOpen={setOpenProfession}
                zIndex={3000}
            />
            <SelectField
                title="Spécialités"
                options={specialismOptions}
                value={formData.specialisms}
                setValue={(value) => updateFormData('specialisms', value())}
                open={openSpecialisms}
                setOpen={setOpenSpecialisms}
                zIndex={2000}
            />
            <SelectField
                title="Compétences"
                options={competenceOptions}
                value={formData.competences}
                setValue={(value) => updateFormData('competences', value())}
                open={openCompetences}
                setOpen={setOpenCompetences}
                zIndex={1000}
            />
        </>
    );

    const Step4 = () => (
        <View className="items-center">
            <Text className={`font-bold text-2xl ${colors.headingColor} mb-5`}>Félicitations !</Text>
            <Text className={`text-lg text-center ${colors.textColor} mb-5`}>
                Votre compte a été créé avec succès.
            </Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Login')} 
                className="mb-5 shadow p-3 rounded-full" 
                style={{backgroundColor:colors.buttonColor}}
            >
                <Text className="text-center font-bold text-white text-lg">
                    Aller à la connexion
                </Text>
            </TouchableOpacity>
        </View>
    );

    const handleSubmit = () => {
        console.log(formData);
        setStep(4);  // Passer à l'étape de confirmation
    };

    const renderStepContent = () => {
        switch(step) {
            case 1: return <Step1 />;
            case 2: return <Step2 />;
            case 3: return <Step3 />;
            case 4: return <Step4 />;
            default: return null;
        }
    };

    const ProgressIndicator = () => (
        <View className="flex-row justify-between mb-5">
            {[1, 2, 3, 4].map((s) => (
                <View 
                    key={s} 
                    className={`h-2 flex-1 mx-1 rounded-full bg-zinc-400 ${s <= step ? colors.buttonColor : 'bg-green-500'}`}
                />
            ))}
        </View>
    );

    return (
        <ScreenWrapper>
            <ScrollView>
                <View className="flex justify-around min-h-full">
                    <View className="flex-row justify-center mt-10">
                        <Image source={require('../assets/images/logo.png')} className="h-70 w-70 shadow"/>
                    </View>
                    <View className="mt-10 mx-4">
                        <Text className={`text-center font-bold text-4xl ${colors.headingColor} mb-5`}>Inscription</Text>
                        <ProgressIndicator />
                        <Text className={`text-center font-bold text-lg ${colors.headingColor} mb-5`}>
                            Étape {step} sur 4
                        </Text>
                    </View>
                    <View className="space-y-2 mx-4">
                        {renderStepContent()}
                    </View>
                    {step < 4 && (
                        <View className="flex-row justify-between mx-5 mb-10">
                            {step > 1 && (
                                <TouchableOpacity 
                                    onPress={() => setStep(step - 1)} 
                                    className="mb-3 shadow p-3 rounded-lg flex-1 mr-2" 
                                    style={{backgroundColor:'gray'}}
                                >
                                    <View className="flex-row items-center justify-center">
                                        <Icon name="arrow-back" size={24} color="white" />
                                        <Text className="text-center text-lg text-white ml-2">Précédent</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity 
                                onPress={() => step < 3 ? setStep(step + 1) : handleSubmit()} 
                                className="mb-3 shadow p-3 rounded-lg flex-1 ml-2" 
                                style={{backgroundColor:colors.buttonColor}}
                            >
                                <View className="flex-row items-center justify-center">
                                    <Text className="text-center font-bold text-white text-lg mr-2">
                                        {step < 3 ? "Suivant" : "S'inscrire"}
                                    </Text>
                                    {step < 3 && <Icon name="arrow-forward" size={24} color="white" />}
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        </ScreenWrapper> 
    );
}*/
     
import React, { useState, useCallback } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StyleSheet } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';


// Fonction pour créer des options pour DropDownPicker
const createOptions = (options) => options.map(option => ({ label: option, value: option }));

// Options pour DropDownPicker
const domainOptions = createOptions(['Informatique', 'Santé', 'Education', 'Finance', 'Autre']);
const professionOptions = createOptions(['Développeur', 'Designer', 'Manager', 'Consultant', 'Autre']);
const specialismOptions = createOptions(['Web', 'Mobile', 'IA', 'Cloud', 'Autre']);
const competenceOptions = createOptions(['JavaScript', 'Python', 'React', 'Node.js', 'Autre']);

const SelectField = ({ title, options, value, setValue, open, setOpen, zIndex }) => (
    <View style={{ marginBottom: 10, zIndex }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: colors.headingColor, marginBottom: 10 }}>{title}</Text>
        <DropDownPicker
            open={open}
            value={value}
            items={options}
            setOpen={setOpen}
            setValue={setValue}
            style={{ borderColor: colors.buttonColor }}
            dropDownContainerStyle={{ borderColor: colors.buttonColor }}
            zIndex={zIndex}
            zIndexInverse={5000 - zIndex}
        />
    </View>
);

export default function RegisterScreen() {
    const navigation = useNavigation();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        last_name: '', first_name: '', day_birth: '', email: '',
        phone_number: '', gender: '', complete_address: '', city: '', region: '', 
        domain_activity: null, profession: null, specialisms: null, competences: null
    });

    // États pour contrôler l'ouverture des dropdowns
    const [openDomain, setOpenDomain] = useState(false);
    const [openProfession, setOpenProfession] = useState(false);
    const [openSpecialisms, setOpenSpecialisms] = useState(false);
    const [openCompetences, setOpenCompetences] = useState(false);

    // Pour le champ genre
    const [openGender, setOpenGender] = useState(false);
    const [gender, setGender] = useState(formData.gender || null);
    const genderOptions = createOptions(['Homme', 'Femme']);

    const updateFormData = useCallback((key, value) => {
        setFormData(prevState => ({ ...prevState, [key]: value }));
    }, []);

    const Step1 = () => (
        <>
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Nom</Text>
            <TextInput 
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 10 }} 
                placeholder="Nom"
                value={formData.last_name}
                onChangeText={(text) => updateFormData('last_name', text)}
            />
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Prénom</Text>
            <TextInput 
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 10 }} 
                placeholder="Prénom"
                value={formData.first_name}
                onChangeText={(text) => updateFormData('first_name', text)}
            />
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Date de naissance</Text>
            <TextInput 
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 10 }} 
                placeholder="JJ/MM/AAAA"
                value={formData.day_birth}
                onChangeText={(text) => updateFormData('day_birth', text)}
            />
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Email</Text>
            <TextInput 
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 10 }} 
                placeholder="Email"
                value={formData.email}
                onChangeText={(text) => updateFormData('email', text)}
            />
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Téléphone</Text>
            <TextInput 
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 10 }} 
                placeholder="Numéro de téléphone"
                value={formData.phone_number}
                onChangeText={(text) => updateFormData('phone_number', text)}
            />
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Genre</Text>
            <View style={{ marginBottom: 10, zIndex: 3000 }}>
                <DropDownPicker
                    open={openGender}
                    value={gender}
                    items={genderOptions}
                    setOpen={setOpenGender}
                    setValue={setGender}
                    style={{ borderColor: colors.buttonColor }}
                    dropDownContainerStyle={{ borderColor: colors.buttonColor }}
                    placeholder="Sélectionnez le genre"
                    zIndex={3000}
                    zIndexInverse={1000}
                    onChangeValue={(value) => updateFormData('gender', value)}
                />
            </View>
        </>
    );

    const Step2 = () => (
        <>
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Adresse complète</Text>
            <TextInput 
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 10 }} 
                placeholder="Adresse complète"
                value={formData.complete_address}
                onChangeText={(text) => updateFormData('complete_address', text)}
            />
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Ville</Text>
            <TextInput 
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 10 }} 
                placeholder="Ville"
                value={formData.city}
                onChangeText={(text) => updateFormData('city', text)}
            />
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Région</Text>
            <TextInput 
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 10 }} 
                placeholder="Région"
                value={formData.region}
                onChangeText={(text) => updateFormData('region', text)}
            />
        </>
    );

    const Step3 = () => (
        <>
            <SelectField
                title="Domaine d'activité"
                options={domainOptions}
                value={formData.domain_activity}
                setValue={(value) => updateFormData('domain_activity', value)}
                open={openDomain}
                setOpen={setOpenDomain}
                zIndex={3000}
            />
            <SelectField
                title="Profession"
                options={professionOptions}
                value={formData.profession}
                setValue={(value) => updateFormData('profession', value)}
                open={openProfession}
                setOpen={setOpenProfession}
                zIndex={2000}
            />
            <SelectField
                title="Spécialités"
                options={specialismOptions}
                value={formData.specialisms}
                setValue={(value) => updateFormData('specialisms', value)}
                open={openSpecialisms}
                setOpen={setOpenSpecialisms}
                zIndex={1000}
            />
            <SelectField
                title="Compétences"
                options={competenceOptions}
                value={formData.competences}
                setValue={(value) => updateFormData('competences', value)}
                open={openCompetences}
                setOpen={setOpenCompetences}
                zIndex={0}
            />
        </>
    );

    const Step4 = () => (
        <View className="items-center">
            <Image source={require('../assets/images/select-04.png')} className="h-80 w-80" />
            <Text className="text-center text-xl font-bold my-2">Félicitations</Text>
            <Text className="text-center">
                {formData.last_name} {formData.first_name}, vous êtes enregistré avec succès.
            </Text>
        </View>
    );

    const handleSubmit = () => {
        // Ici, on gère la soumission du formulaire (envoi vers l'API)
        setStep(4);
    };

    const renderStepContent = () => {
        switch(step) {
            case 1: return <Step1 />;
            case 2: return <Step2 />;
            case 3: return <Step3 />;
            case 4: return <Step4 />;
            default: return null;
        }
    };

    const ProgressIndicator = () => (
        <View className="flex-row justify-between mb-5">
            {[1, 2, 3, 4].map((s) => (
                <View 
                    key={s} 
                    className={`h-2 flex-1 mx-1 rounded-full bg-zinc-400 ${s <= step ? colors.buttonColor : 'bg-green-500'}`}
                />
            ))}
        </View>
    );

    return (
        <ScreenWrapper>
             <ScrollView>
                <View className="flex justify-around min-h-full">
                      {/* Bouton de retour */}
                      <View className="mb-10">  
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()} 
                        className="absolute top-5 left-5 p-2 bg-white rounded-full shadow mb-10"
                    >
                        <Ionicons name="arrow-back-outline" size={24} color="#0cb444" />
                    </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center mt-10">
                        <Image source={require('../assets/images/logo.png')} className="h-70 w-70 shadow"/>
                    </View>
                    <View className="mt-5 mx-4">
                        <Text className={`text-center font-bold text-[25px] ${colors.headingColor} mb-5`}>Inscription</Text>
                        <ProgressIndicator />
                        <Text className={`text-center font-bold text-lg ${colors.headingColor} mb-5`}>
                            Étape {step} sur 4
                        </Text>
                    </View>
                    <View className="space-y-2 mx-4">
                        {renderStepContent()}
                    </View>
                    {step < 4 && (
                        <View className="flex-row justify-between mx-5 mb-10">
                            {step > 1 && (
                                <TouchableOpacity 
                                    onPress={() => setStep(step - 1)} 
                                    className="mb-3 shadow p-3 rounded-lg flex-1 mr-2" 
                                    style={{backgroundColor:'gray'}}
                                >
                                    <View className="flex-row items-center justify-center">
                                        <Icon name="arrow-back" size={24} color="white" />
                                        <Text className="text-center text-lg text-white ml-2">Précédent</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            <TouchableOpacity 
                                onPress={() => step < 3 ? setStep(step + 1) : handleSubmit()} 
                                className="mb-3 shadow p-3 rounded-lg flex-1 ml-2" 
                                style={{backgroundColor:colors.buttonColor}}
                            >
                                <View className="flex-row items-center justify-center">
                                    <Text className="text-center font-bold text-white text-lg mr-2">
                                        {step < 3 ? "Suivant" : "S'inscrire"}
                                    </Text>
                                    {step < 3 && <Icon name="arrow-forward" size={24} color="white" />}
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colors.buttonColor, flexDirection: 'row',
        alignItems: 'center', padding: 15, borderRadius: 10, justifyContent: 'center'
    },
    buttonSecondary: {
        backgroundColor: colors.secondaryButton, flexDirection: 'row',
        alignItems: 'center', padding: 15, borderRadius: 10, justifyContent: 'center'
    }
});
