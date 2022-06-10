import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';

const TextInput = (props) => {
  const {
    onChange,
    value,
    type,
    label,
    placeholder,
    appendIcon,
    appendIconClick,
  } = props;
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-5">
      <label for="price" class="block text-sm text-gray-700 mb-2 text-slate-50">
        {label}
      </label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10 h-[46px]"
      />
      {appendIcon ? (
        <FontAwesomeIcon
          className="z-10 h-full absolute text-center text-slate-800 absolute bg-transparent text-base items-center justify-center w-5 right-0 pr-3 py-3"
          icon={appendIcon}
          onClick={appendIconClick}
        />
      ) : null}
    </div>
  );
};

export default TextInput;
