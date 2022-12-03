import React from 'react';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';


const API_URL_RND = 'https://zenquotes.io/api/random'

export default function RandomQuote() {

    const [data, setData] = useState([]);
    const quotesListR = async () => {

        const response = await fetch(`${API_URL_RND}`);
        const data = await response.json();
        setData(data);
        
        class OneQuoteR extends React.Component {
            render() {
                return (
                    <div className='randomQuote'>
                        <h1>{data[0].q}</h1>
                        <h3>{data[0].a}</h3>
                    </div>
                )
            }
        };
        ReactDOM.render(<OneQuoteR />, document.getElementById('container'));
        
    }
    useEffect(() => {
        quotesListR();
    }, []);
    
    return (
        <div className='QuotesContainerRandom'>
            <div id='container'>

            </div>
            <style>
                {`
    .App{
        display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column-reverse;
    }
    `}
            </style>
        </div>

    )

}


