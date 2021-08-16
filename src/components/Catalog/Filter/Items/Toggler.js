export const Toggler = ({name, isActive, handleActive}) => {

    return (
        <div className="filter-toggler__container">
            <p>{name}</p>
            <div className={`filter-toggler${isActive ? ` active` : ``}`} onClick={handleActive}>
                <span/>
            </div>
        </div>
    );
}