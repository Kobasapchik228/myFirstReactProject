import './app-filter.css'


const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Всі співробітники' },
        { name: 'rise', label: 'Спіробітники яких підвищать' },
        { name: 'moreThen1000', label: 'Заробітня плата більше 1000 доларів' }
    ]

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter