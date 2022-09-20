import * as React from 'react';
import axios from 'axios';
import '../index.css'

export default function ApiCall2() {
  // console.log(data);
  const [tableData, setTableData] = React.useState();
  console.log('table data', tableData);

  const url =
    'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';

  const fetchData = async () => {
    const resp = await axios.get(url);
    setTableData(resp.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  // Object.keys(data['Time Series (5min)']).map((item, index) => {
  //   console.log(Object.keys(data['Time Series (5min)'])[index]);
  // });

  return (
    <div className='main'>
      <table border={1}>
        <thead>
          <th>DateTime</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Volume</th>
        </thead>
        <tbody>
          {tableData &&
            Object.keys(tableData['Time Series (5min)']).map((item, index) => {
              return (
                <tr>
                  <td>{Object.keys(tableData['Time Series (5min)'])[index]}</td>
                  {Object.keys(tableData['Time Series (5min)'][item]).map(
                    (valuedata) => {
                      return (
                        <td>
                          {tableData['Time Series (5min)'][item][valuedata]}
                        </td>
                      );
                    }
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}