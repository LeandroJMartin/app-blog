import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/home'
import Detail from './pages/detail'
import Search from './pages/search'
import Category from './pages/category'

const Stack = createNativeStackNavigator();

function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = 'Home'
        component = {Home}
        options = {{
          headerShown: false
        }}
      />

      <Stack.Screen
        name = 'Detail'
        component = {Detail}
        options = {{
          title: 'Detalhes',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#232630'
          }
        }}
      />

      <Stack.Screen
        name = 'Category'
        component = {Category}
        options = {{
          title: 'Categoria',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#232630'
          }
        }}
      />

      <Stack.Screen
        name = 'Search'
        component = {Search}
        options = {{
          title: 'Pesquisar',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#232630'
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default Routes;
