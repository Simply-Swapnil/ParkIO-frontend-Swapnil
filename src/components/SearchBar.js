import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchBar = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Where do you want to go?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        language: 'en',
      }}
    />
  );
};

export default SearchBar;