import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './pages/login';
import Home from './pages/home';
import Doacao from './pages/doacao';
import Instituicao from './pages/instituicao';
import Onibus from './pages/onibus';
import Perfil from './pages/perfil';
import AddItemDoacao from './components/addItemDoacao';
import AddAviso from './components/addAviso';
import InsTDetalhe from './components/InstDetalhe';
import ReportAviso from './components/reportAviso';
import ReportDoacao from './components/reportDoacao';
import TermoDeUso from './pages/termoDeUso';
import PoliticaPrivacidade from './pages/politicaPrivacidade';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name="Home" component={Home} />


            <Stack.Screen name="Onibus" component={Onibus} />
            <Stack.Screen name="Doacao" component={Doacao} />
            <Stack.Screen name="Instituicao" component={Instituicao} />

            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="AddItemDoacao" component={AddItemDoacao} />
            <Stack.Screen name="AddAviso" component={AddAviso} />
            <Stack.Screen name="InsTDetalhe" component={InsTDetalhe} />
            <Stack.Screen name="Report" component={ReportAviso} />
            <Stack.Screen name="ReportDoacao" component={ReportDoacao} />

            <Stack.Screen name="TermoDeUso" component={TermoDeUso} />
            <Stack.Screen name="PoliticaPrivacidade" component={PoliticaPrivacidade} />
        </Stack.Navigator>
    );
}


export default Routes;