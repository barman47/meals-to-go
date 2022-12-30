import { useState, useEffect, createContext, useMemo, useContext } from 'react';
import { LocationContext } from '../location/location.context';

import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const { location } = useContext(LocationContext);
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);

    const retrieveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(loc)
                .then(restaurantsTransform)
                .then((result) => {
                    setRestaurants(result);
                    setIsLoading(false);
                })
                .catch(err => {
                    setError(err);
                    setIsLoading(false);
                });
        }, 2000);
    };

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};