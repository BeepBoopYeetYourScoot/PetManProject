import m from './Search.module.css'
import usePlacesAutocomplete, {
    // getGeocode,
    // getLatLng
} from 'use-places-autocomplete'

import {
    Combobox,
    ComboboxInput,
    // ComboboxPopover,
    // ComboboxList,
    // ComboboxOprion
} from 'reach'

export function Search() {
    const {
        // ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            location: {
                lat: () => 55.784199,
                lng: () => 49.118984
            },
            radius: 50 * 1000
        },
    });

    return (
        <div className={m.Search}>
            <Combobox onSelect={(address) => { console.log(address) }}>
                <ComboboxInput
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    // disabled={!ready}
                    placeholder='Введите адрес'
                />
            </Combobox>
        </div>)
}