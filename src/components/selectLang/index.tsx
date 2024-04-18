import { FunctionComponent, useEffect, useState } from 'react';
import useLanguageStore from '@/store/language';
import enJson from '../../locales/en.json';
import Select from '../select';

const SelectLang: FunctionComponent = () => {
    const currentLangName = localStorage.getItem('language');

    //All options for languages
    const options = [
        { value: 'Srpski', label: 'Srpski' },
        { value: 'English', label: 'English' },
    ];
    const [selectedOption, setSelectedOption] = useState<Array<{ value: string; label: string }>>([]);

    //Check for current selected language
    useEffect(() => {
        if (currentLangName && currentLangName === 'English') {
            useLanguageStore.setState({ currentLang: enJson });
        } else {
            useLanguageStore.setState({ currentLang: enJson });
        }
    }, [currentLangName]);

    const handleClickOption = (name: string): void => {
        useLanguageStore.setState({ currentLangName: name });
        localStorage.setItem('language', name);
    };

    useEffect(() => {
        setSelectedOption(
            options
                .filter((option) => option.value === currentLangName)
                .map((option) => {
                    return option;
                }),
        );
    }, [currentLangName]);

    return (
        <Select
            isSearchable={false}
            options={options}
            onChange={handleClickOption}
            defaultInputValue={selectedOption[0] ? selectedOption[0].value : options[0].value}
        />
    );
};
export default SelectLang;
