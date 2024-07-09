import { useEffect, useState } from "react";
import iphoneService from '../../services/Data';

const Analytics = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await iphoneService.getAllData();
        setData(response);
      } catch (error) {
        alert('Failed to fetch data.');
      }
    };

    fetchData();
  }, []);
  return (

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Model</th>
            <th scope="col" className="px-6 py-3">Launch Year</th>
            <th scope="col" className="px-6 py-3">Profit</th>
            <th scope="col" className="px-6 py-3">Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item._source.model}
              </th>
              <td className="px-6 py-4">{item._source.launchYear}</td>
              <td className="px-6 py-4">${item._source.profit.toLocaleString()}</td>
              <td className="px-6 py-4">{item._source.sales.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Analytics