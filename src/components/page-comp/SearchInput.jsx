import { BiSearch } from "react-icons/bi"; 
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSelectCategory } from "../../store/actionSlice/actionSlice";

const SearchInput = () => {
    const { categories } = useSelector(state => state.categories);
    const [searchText, setSearchText] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchText(value);

        if (value.length >= 2) {
            // Agar birinchi harf va ikkinchi harf katta bo‘lsa, yordam ko‘rinmaydi
            if (value.length >= 2 && value[0] === value[0].toUpperCase() && value[1] === value[1].toUpperCase()) {
                setSuggestion("");
                return;
            }

            const matchedCategory = categories.find(item =>
                item.name.toLowerCase().startsWith(value.toLowerCase())
            );

            if (matchedCategory) {
                // Agar birinchi harf katta bo‘lsa, autocomplete ham katta bo‘ladi, aks holda kichik
                const formattedSuggestion = value[0] === value[0].toUpperCase()
                    ? matchedCategory.name
                    : matchedCategory.name.toLowerCase();

                setSuggestion(formattedSuggestion);
            } else {
                setSuggestion("");
            }
        } else {
            setSuggestion("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Tab" || e.key === "Enter") {
            e.preventDefault();
            if (suggestion) {
                setSearchText(suggestion);
                setSuggestion("");
                inputRef.current.setSelectionRange(suggestion.length, suggestion.length);
            }
        }
    };

    return (
        <div className='relative border-[2px] rounded-full overflow-hidden border-indigo-600'>
            <input
                ref={inputRef}
                value={searchText}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder='Search'
                className='px-[18px] py-[5px] pr-[40px] font-medium outline-none text-[14px]'
            />
            {suggestion && searchText !== suggestion && (
                <span className="absolute left-[18px] top-[51%] font-medium text-[14px] translate-y-[-50%] text-opacity-25 text-gray-900">
                    {suggestion}
                </span>
            )}
            <div onClick={() => {
                if(categories) {
                    const selectedId = categories.find(item => String(item.name).toLowerCase() === String(searchText).toLowerCase())?.id
                    if(selectedId) {
                        dispatch(setSelectCategory(selectedId))
                    }
                }
            }} className="absolute top-[2px] right-[2px] bottom-[2px] rounded-full hover:bg-indigo-50 active:scale-95 cursor-pointer w-[30px] flex justify-center items-center">
                <BiSearch />
            </div>
        </div>
    );
}

export default SearchInput;
