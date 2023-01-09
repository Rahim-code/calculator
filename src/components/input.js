import './input.css'

const Input  = ({text,result}) =>{
    return(
        <div className='input-wrapper'>
            <div className='result'>
                <h1 style={{color:'black'}}>{result}</h1>
            </div>
            <div className='text'>
                <h3 style={{color:'black'}}>{text}</h3>
            </div>

        </div>
    )
}

export default Input