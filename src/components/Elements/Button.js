import classNames from 'classnames';

function Button({ children, newTask, editTask, deleteTask, ...rest }) {
    const classes = classNames(
        rest.className,
        'ease-in duration-200 border text-white px-3 py-1 rounded-full', {
        'hover:bg-sky-500 active:bg-sky-600 border-sky-500 bg-sky-400': newTask,
        'hover:bg-yellow-500 active:bg-yellow-600 border-yellow-500 bg-yellow-400': editTask,
        'hover:bg-red-500 active:bg-red-600 border-red-500 bg-red-400': deleteTask,
    });

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationTypes: ({ newTask, editTask, deleteTask, }) => {
        const count = Number(!!newTask)
            + Number(!!editTask)
            + Number(!!deleteTask)

        if (count > 1) {
            return new Error('Only one variation is allowed!');
        }
    },
};

export default Button;