
const  Categories = ({ name, icon,}) => {

    return(
        <button >
            <div >
                <img src={icon} alt={`${name} icon`} />
            </div>
            <p >{name}</p>
        </button>

    )
}

export default Categories