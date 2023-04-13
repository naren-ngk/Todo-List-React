import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
    const panelClassNames = classNames(
        'border rounded shadow bg-white p-3',
        className,
        );

    return (
        <div {...rest} className={panelClassNames} >
            {children}
        </div>
    );
}

export default Panel;