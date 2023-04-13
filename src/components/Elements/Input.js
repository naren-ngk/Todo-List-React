import classNames from 'classnames';

function Input({ placeholder, type, label, handleChange, value, className }) {
    const inputClasses = classNames('focus:outline-none focus:border-sky-500 active:outline-nonne',
        'rounded-md bg-white px-3 py-1.5 rounded-md border shadow-sm border-slate-300',
        'placeholder:italic placeholder:text-slate-400 w-full');

    const labelClasses = classNames('block my-1.5 px-1');

    return (
        <div className={className}>
            <label className={labelClasses}>{label}</label>
            <input onChange={handleChange} className={inputClasses} placeholder={placeholder} type={type} value={value} />
        </div>
    );
}

export default Input;