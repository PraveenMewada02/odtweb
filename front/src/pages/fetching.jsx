// import React, { useState } from 'react';
// import axios from 'axios';

// const OldFetch = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [whose, setWhose] = useState('');
//   const [loading, setLoading] = useState(false);

//   const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
//   const base64ApiKey = btoa(api_key);

//   const fetchData = async () => {
//     setLoading(true);
//     const fromDate = startDate;
//     const toDate = endDate;

//     const api_url = `https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=${whose}&FromDate=${fromDate}&ToDate=${toDate}`;

//     try {
//       const response = await axios.post('/api/storeData', {
//         data: response.data.InOutPunchData // Send the fetched data to backend
//       }, {
//         headers: {
//           Authorization: `Basic ${base64ApiKey}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       console.log(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error sending data to backend:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Attendance Data</h1>
//       <label>
//         of 
//         <input 
//         type="text"
//         value={whose}
//         onChange={(e) => setWhose(e.target.value)}/>
//       </label>
//       <label>
//         from (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//       </label>
//       <label>
//         to (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//       </label>
//       <button onClick={fetchData}>Submit</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : data }
//     </div>
//   );
// };

// export default OldFetch;








// import React, { useState } from 'react';
// import axios from 'axios';

// const OldFetch = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [whose, setWhose] = useState('');
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
//   const base64ApiKey = btoa(api_key);

//   const fetchData = async () => {
//     setLoading(true);
//     const fromDate = startDate;
//     const toDate = endDate;

//     const api_url = `https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=${whose}&FromDate=${fromDate}&ToDate=${toDate}`;

//     try {
//       const response = await axios.get(api_url, {
//         headers: {
//           Authorization: `Basic ${base64ApiKey}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       setData(response.data.InOutPunchData);
//       await sendDataToBackend(response.data.InOutPunchData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   const sendDataToBackend = async (data) => {
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/store_data/', data, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       setMessage('Data saved successfully');
//       console.log(response.data); // Log backend response for debugging
//     } catch (error) {
//       setMessage('Error sending data to backend');
//       console.error('Error sending data to backend:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Attendance Data</h1>
//       <label>
//         of 
//         <input 
//           type="text"
//           value={whose}
//           onChange={(e) => setWhose(e.target.value)}/>
//       </label>
//       <label>
//         from (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//       </label>
//       <label>
//         to (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//       </label>
//       <button onClick={fetchData}>Submit</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <p>{message}</p>
//       )}
//       {data && (
//         <table>
//           <thead>
//             <tr>
//               <th>Employee Code</th>
//               <th>Name</th>
//               <th>Date</th>
//               <th>IN Time</th>
//               <th>OUT Time</th>
//               <th>Work Time</th>
//               <th>Over Time</th>
//               <th>Break Time</th>
//               <th>Status</th>
//               <th>Remark</th>
//               <th>Erl_Out</th>
//               <th>Late_In</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((entry, index) => (
//               <tr key={index}>
//                 <td>{entry.Empcode}</td>
//                 <td>{entry.Name}</td>
//                 <td>{entry.DateString}</td>
//                 <td>{entry.INTime}</td>
//                 <td>{entry.OUTTime}</td>
//                 <td>{entry.WorkTime}</td>
//                 <td>{entry.OverTime}</td>
//                 <td>{entry.BreakTime}</td>
//                 <td>{entry.Status}</td>
//                 <td>{entry.Remark}</td>
//                 <td>{entry.Erl_Out}</td>
//                 <td>{entry.Late_In}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default OldFetch;



// import React, { useState } from 'react';
// import axios from 'axios';

// const OldFetch = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [whose, setWhose] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);

//   const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
//   const base64ApiKey = btoa(api_key);

//   const fetchData = async () => {
//     setLoading(true);
//     const fromDate = startDate;
//     const toDate = endDate;

//     const api_url = `https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=${whose}&FromDate=${fromDate}&ToDate=${toDate}`;

//     try {
//       const response = await axios.get(api_url, {
//         headers: {
//           Authorization: `Basic ${base64ApiKey}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       // Now we have the data, send it to the backend
//       const backendResponse = await axios.post('/api/storeData', {
//         data: response.data.InOutPunchData // Send the fetched data to backend
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log(backendResponse.data);
//       setData(response.data.InOutPunchData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching or sending data:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Attendance Data</h1>
//       <label>
//         of 
//         <input 
//         type="text"
//         value={whose}
//         onChange={(e) => setWhose(e.target.value)}/>
//       </label>
//       <label>
//         from (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//       </label>
//       <label>
//         to (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//       </label>
//       <button onClick={fetchData}>Submit</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         data && (
//           <div>
//             <h2>Data</h2>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default OldFetch;


// import React, { useState } from 'react';
// import axios from 'axios';

// const OldFetch = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [whose, setWhose] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null); // For handling errors

//   const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
//   const base64ApiKey = btoa(api_key);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null); // Reset any previous errors
//     const fromDate = startDate;
//     const toDate = endDate;

//     const api_url = `https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=${whose}&FromDate=${fromDate}&ToDate=${toDate}`;

//     try {
//       const response = await axios.get(api_url, {
//         headers: {
//           Authorization: `Basic ${base64ApiKey}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       // Now we have the data, send it to the backend
//       const backendResponse = await axios.post('/api/storeData', {
//         data: response.data.InOutPunchData // Send the fetched data to backend
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log(backendResponse.data);
//       setData(response.data.InOutPunchData); // Update state with fetched data
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching or sending data:', error);
//       setError('Error fetching or sending data');
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Attendance Data</h1>
//       <label>
//         of 
//         <input 
//           type="text"
//           value={whose}
//           onChange={(e) => setWhose(e.target.value)}
//         />
//       </label>
//       <label>
//         from (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//       </label>
//       <label>
//         to (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//       </label>
//       <button onClick={fetchData}>Submit</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           {error && <p>{error}</p>}
//           {data && (
//             <div>
//               <h2>Data</h2>
//               <pre>{JSON.stringify(data, null, 2)}</pre>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default OldFetch;





// import React, { useState } from 'react';
// import axios from 'axios';

// const OldFetch = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [whose, setWhose] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
//   const base64ApiKey = btoa(api_key);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     const fromDate = startDate;
//     const toDate = endDate;

//     const api_url = `https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=${whose}&FromDate=${fromDate}&ToDate=${toDate}`;

//     try {
//       // Fetch data from external API
//       const response = await axios.get(api_url, {
//         headers: {
//           Authorization: `Basic ${base64ApiKey}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       // Log the response to verify the structure
//       console.log('Fetched Data:', response.data);

//       // Check if the expected data exists
//       if (!response.data || !response.data.InOutPunchData) {
//         throw new Error('Invalid data structure');
//       }

//       // Send fetched data to backend
//       const backendResponse = await axios.post('/api/storeData', {
//         data: response.data.InOutPunchData
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       // Log the backend response
//       console.log('Backend Response:', backendResponse.data);

//       // Update state with fetched data
//       setData(response.data.InOutPunchData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching or sending data:', error);
//       setError(`Error: ${error.message}`);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Attendance Data</h1>
//       <label>
//         of 
//         <input 
//           type="text"
//           value={whose}
//           onChange={(e) => setWhose(e.target.value)}
//         />
//       </label>
//       <label>
//         from (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//       </label>
//       <label>
//         to (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//       </label>
//       <button onClick={fetchData}>Submit</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           {error && <p>{error}</p>}
//           {data && (
//             <div>
//               <h2>Data</h2>
//               <pre>{JSON.stringify(data, null, 2)}</pre>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default OldFetch;



// import React, { useState } from 'react';
// import axios from 'axios';

// const OldFetch = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [whose, setWhose] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
//   const base64ApiKey = btoa(api_key);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     const fromDate = startDate;
//     const toDate = endDate;

//     const api_url = `https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=${whose}&FromDate=${fromDate}&ToDate=${toDate}`;

//     try {
//       // Fetch data from external API
//       const response = await axios.get(api_url, {
//         headers: {
//           Authorization: `Basic ${base64ApiKey}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       // Log the response to verify the structure
//       console.log('Fetched Data:', response.data);

//       // Check if the expected data exists
//       if (!response.data || !response.data.InOutPunchData) {
//         throw new Error('Invalid data structure');
//       }

//       // Send fetched data to backend
//       const backendResponse = await axios.post('/api/storeData', {
//         data: response.data.InOutPunchData
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       // Log the backend response
//       console.log('Backend Response:', backendResponse.data);

//       // Update state with fetched data
//       setData(response.data.InOutPunchData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching or sending data:', error);
//       setError(`Error: ${error.message}`);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Attendance Data</h1>
//       <label>
//         of 
//         <input 
//           type="text"
//           value={whose}
//           onChange={(e) => setWhose(e.target.value)}
//         />
//       </label>
//       <label>
//         from (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//       </label>
//       <label>
//         to (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//       </label>
//       <button onClick={fetchData}>Submit</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           {error && <p>{error}</p>}
//           {data && (
//             <div>
//               <h2>Data</h2>
//               <pre>{JSON.stringify(data, null, 2)}</pre>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default OldFetch;




//WORKING

// import React, { useState } from 'react';
// import axios from 'axios';

// const OldFetch = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [whose, setWhose] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
//   const base64ApiKey = btoa(api_key);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     const fromDate = startDate;
//     const toDate = endDate;

//     const api_url = `https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=${whose}&FromDate=${fromDate}&ToDate=${toDate}`;

//     try {
//       const response = await axios.get(api_url, {
//         headers: {
//           Authorization: `Basic ${base64ApiKey}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log('Fetched Data:', response.data);

//       if (!response.data || !response.data.InOutPunchData) {
//         throw new Error('Invalid data structure');
//       }

//       setData(response.data.InOutPunchData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(`Error: ${error.message}`);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Attendance Data</h1>
//       <label>
//         of 
//         <input 
//           type="text"
//           value={whose}
//           onChange={(e) => setWhose(e.target.value)}
//         />
//       </label>
//       <label>
//         from (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//       </label>
//       <label>
//         to (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//       </label>
//       <button onClick={fetchData}>Submit</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           {error && <p>{error}</p>}
//           {data && (
//             <div>
//               <h2>Data</h2>
//               <pre>{JSON.stringify(data, null, 2)}</pre>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default OldFetch;






// import React, { useState } from 'react';
// import axios from 'axios';

// const OldFetch = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [whose, setWhose] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
//   const base64ApiKey = btoa(api_key);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     const fromDate = startDate;
//     const toDate = endDate;

//     const api_url = `https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=${whose}&FromDate=${fromDate}&ToDate=${toDate}`;

//     try {
//       const response = await axios.get(api_url, {
//         headers: {
//           Authorization: `Basic ${base64ApiKey}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log('Fetched Data:', response.data);

//       if (!response.data || !response.data.InOutPunchData) {
//         throw new Error('Invalid data structure');
//       }

//       setData(response.data.InOutPunchData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(`Error: ${error.message}`);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Attendance Data</h1>
//       <label>
//         of 
//         <input 
//           type="text"
//           value={whose}
//           onChange={(e) => setWhose(e.target.value)}
//         />
//       </label>
//       <label>
//         from (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//       </label>
//       <label>
//         to (format: DD/MM/YYYY):
//         <input
//           type="text"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//       </label>
//       <button onClick={fetchData}>Submit</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           {error && <p>{error}</p>}
//           {data && (
//             <div>
//               <h2>Data</h2>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Employee Code</th>
//                     <th>Name</th>
//                     <th>Date</th>
//                     <th>IN Time</th>
//                     <th>OUT Time</th>
//                     <th>Work Time</th>
//                     <th>Over Time</th>
//                     <th>Break Time</th>
//                     <th>Status</th>
//                     <th>Remark</th>
//                     <th>Late In</th>
//                     <th>Early Out</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.map((entry, index) => (
//                     <tr key={index}>
//                       <td>{entry["Employee Code"]}</td>
//                       <td>{entry["Name"]}</td>
//                       <td>{entry["Date"]}</td>
//                       <td>{entry["IN Time"]}</td>
//                       <td>{entry["OUT Time"]}</td>
//                       <td>{entry["Work Time"]}</td>
//                       <td>{entry["Over Time"]}</td>
//                       <td>{entry["Break Time"]}</td>
//                       <td>{entry["Status"]}</td>
//                       <td>{entry["Remark"]}</td>
//                       <td>{entry["Late_In"]}</td>
//                       <td>{entry["Erl_Out"]}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default OldFetch;














import React, { useState } from 'react';
import axios from 'axios';

const OldFetch = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [whose, setWhose] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true";
  const base64ApiKey = btoa(api_key);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    const fromDate = startDate;
    const toDate = endDate;

    const api_url = `https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode=${whose}&FromDate=${fromDate}&ToDate=${toDate}`;

    try {
      const response = await axios.get(api_url, {
        headers: {
          Authorization: `Basic ${base64ApiKey}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Fetched Data:', response.data);

      if (!response.data || !response.data.InOutPunchData) {
        throw new Error('Invalid data structure');
      }

      setData(response.data.InOutPunchData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Attendance Data</h1>
      <label>
        of 
        <input 
          type="text"
          value={whose}
          onChange={(e) => setWhose(e.target.value)}
        />
      </label>
      <label>
        from (format: DD/MM/YYYY):
        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        to (format: DD/MM/YYYY):
        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <button onClick={fetchData}>Submit</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error && <p>{error}</p>}
          {data.length > 0 && (
            <div>
              <h2>Data</h2>
              <table>
                <thead>
                  <tr>
                    <th>Emp Code</th>
                    <th>name</th>
                    <th>date</th>
                    <th>INTime</th>
                    <th>OUTTime</th>
                    <th>work time</th>
                    <th>over time</th>
                    <th>break time</th>
                    <th>status</th>
                    <th>remark</th>
                    <th>erl out</th>
                    <th>late in</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Empcode}</td>
                      <td>{item.Name}</td>
                      <td>{item.DateString}</td>
                      <td>{item.INTime}</td>
                      <td>{item.OUTTime}</td>
                      <td>{item.WorkTime}</td>
                      <td>{item.OverTime}</td>
                      <td>{item.BreakTime}</td>
                      <td>{item.Status}</td>
                      <td>{item.Remark}</td>
                      <td>{item.Erl_Out}</td>
                      <td>{item.Late_In}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OldFetch;





                  // Emp Code
                  // name
                  // date
                  // INTime
                  // OUTTime
                  // work time
                  // over time
                  // break time
                  // status
                  // remark
                  // erl out
                  // late in