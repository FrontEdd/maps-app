//Definimos el contexto, lo que vamos a mostrar o exponer a los demás componentes (funciones, métodos, propiedades, etc.)
import { createContext } from 'react';
import { Feature } from '../../interfaces/places';

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [ number, number ];
    isLoadingPlaces: boolean;
    places: Feature[]; 

    //Methods
    searchPlacesByQuery: (query: string) => Promise<Feature[]>;
}





export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);