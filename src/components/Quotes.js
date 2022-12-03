import React from 'react';
import { useEffect } from 'react';

const API_URL = 'https://zenquotes.io/api/quotes'
const FEMALE = '👩';
const MALE = '👨';

export default function Quotes() {

  const quotesList = async (quotes) => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      let n = data[i].a.split(" ")[0]

      let response = await fetch(`https://api.genderize.io?name=${n}`);
      let genderData = await response.json();
      data[i]['g'] = genderData['gender'] === 'female' ? FEMALE : MALE
    }

    let tableData = ''

    data.map((values, count) => {
      tableData += `<tr> 
      <td>${count += 1}</td>
      <td>${values.q}</td> 
      <td>${values.a}</td>
      <td>${values.g}</td>
      </tr>`;
    })

    document.getElementById('table_body').innerHTML = tableData;
  }

  useEffect(() => {
    quotesList();
  }, []);


  return (
    <div className='QuotesContainer'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" id='id'>ID</th>
            <th scope="col">Quote</th>
            <th scope="col">Author</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody id='table_body'>
          <tr>

          </tr>
        </tbody>
      </table>

      <style>
        {`
    #btn--quotes{
        display: none;
    }
    `}
      </style>
    </div>
  )
}