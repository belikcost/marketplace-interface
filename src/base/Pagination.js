import './Pagination.scss';

export const Pagination = ({pageCount, active}) => {

    return (
        <div className="pagination">
            <span className="pagination__prev"/>
            {Array(pageCount).fill(null).map((page, i) => (
                <span className={`pagination_page${i + 1 === active ? ' active'  : ''}`} key={i}>
                    {i+1}
                </span>
            ))}
            <span className="pagination__next"/>
        </div>
    );
}