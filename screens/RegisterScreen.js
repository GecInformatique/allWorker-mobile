import React, { useState, useCallback,useEffect }from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, StyleSheet } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';
import { SelectList,MultipleSelectList  } from 'react-native-dropdown-select-list'



export default function RegisterScreen() {
    const navigation = useNavigation();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        last_name: '', first_name: '', day_birth: '', email: '',
        phone_number: '', gender: '', complete_address: '', city: '', region: '', 
        domain_activity: null, profession: null, specialisms: null, competences: null
    });
    const gender = [  {key:'1', value:'Masculin'},
                      {key:'2', value:'Feminin'}, ]

        

 
        const [domains, setDomains] = useState([]);
        const [specialisms, setSpecialisms] = useState([]);
        const [competences, setCompetences] = useState([]);
        const [professions, setProfessions] = useState([]);
        const [selected, setSelected] = useState(""); // State pour garder la sélection
        const [selectedCompetences, setSelectedCompetences] = useState([]);


    
        const updateFormData = useCallback((key, value) => {
            setFormData(prevState => ({ ...prevState, [key]: value }));
        }, []);

    useEffect(() => {
        // Charger les données JSON de façon explicite sans utiliser de variables dynamiques
        const domainData = require('../assets/json/domain.json');
        const specialismsData = require('../assets/json/specialite.json');
       // const competencesData = require('../assets/json/competence.json');
        const professionsData = require('../assets/json/profession.json');

        // Définir les états
        setDomains(domainData);
        setSpecialisms(specialismsData);
      //  setCompetences(competencesData);
        setProfessions(professionsData);
    }, []); // Utilisation d'un seul useEffect pour éviter la redondance

 

    const fetchCompetences = async () => {
        try {
            const response = await fetch('http://api.all-worker.com/api/v1/competences');
            const data = await response.json();
            setCompetences(data.data); // Assure-toi d'accéder à data.data
        } catch (error) {
            console.error("Erreur lors du chargement des compétences", error);
        }
    };
    
    useEffect(() => {
        fetchCompetences();
    }, []);
    
    // Format des compétences pour le MultipleSelectList
    const formattedCompetences = competences.map(competence => ({
        value: competence.name,
        label: competence.name
    }));

    const handleSelectChange = (selectedOptions) => {
    setSelectedCompetences(selectedOptions);
};

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
            

                <SelectList 
                        setSelected={(val) => setSelected(val)} 
                        data={gender} 
                        save="value"
                    />
            </View>
            
        </>
    );

    const Step2 = () => (
        <>
         <View style={{ marginBottom: 10, zIndex: 3000 }}>
            
         <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Pays</Text>

            <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={gender} 
                    save="value"
                />

            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Ville</Text>

            <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={gender} 
                    save="value"
                />
                <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Ville</Text>

            <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={gender} 
                    save="value"
                />
        </View>
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Adresse complète</Text>
            <TextInput 
                style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginBottom: 10 }} 
                placeholder="Adresse complète"
                value={formData.complete_address}
                onChangeText={(text) => updateFormData('complete_address', text)}
            />
           
        </>
    );

    const Step3 = () => (
        <>
         <View style={{ marginBottom: 10, zIndex: 3000 }}>
            <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Domaine d'activité</Text>

            <SelectList
        setSelected={(val) => setSelected(val)}
        data={domains}
        save="value"
      />
  
                 <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Profession</Text>

                 <SelectList 
      setSelected={setSelected} 
      fontFamily='lato'
      data={professions}  

      search={false} 
      boxStyles={{borderRadius:0}} //override default styles
      defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
    />

                    <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Spécialités</Text>

                    <SelectList 
                            setSelected={(val) => setSelected(val)} 
                            data={specialisms} 
                            save="value"
                        />
   <View className="mt-10 mb-2">
                    <Text className={`font-medium text-[15px] ${colors.headingColor} mb-1`}>Compétences</Text>

                 
                    <MultipleSelectList 
                        setSelected={handleSelectChange} 
                        data={formattedCompetences} 
                        save="value"
                        label="Compétences"
                    />
               </View>


            </View>
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
