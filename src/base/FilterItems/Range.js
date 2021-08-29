import { Range as RangeComponent } from 'react-range';

export const Range = ({maxValue, value, changeValue}) => {
    value = value.length === 0 ? [0, maxValue] : value;
    return (
        <div className="filter-range">
            <RangeComponent
                step={1}
                min={0}
                max={maxValue}
                values={value}
                onChange={changeValue}
                renderTrack={({props, children}) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '2px',
                            width: '100%',
                            background: 'linear-gradient(96.78deg, rgba(246, 77, 77, 0.2) -57.09%, rgba(77, 94, 245, 0.2) 101.17%)'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({props}) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '18px',
                            width: '18px',
                            background: 'linear-gradient(96.78deg, #F64D4D -57.09%, #4D5EF6 101.17%)',
                            borderRadius: '50%'
                        }}
                    />
                )}
            />
            <div className="filter-range__button-group">
                <button onClick={() => changeValue([0, value[1]])}>От 0</button>
                <button onClick={() => changeValue([value[0], maxValue])}>До {maxValue}</button>
            </div>
        </div>
    )
}