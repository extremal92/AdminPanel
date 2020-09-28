import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Chart from 'react-apexcharts'

import { fetchChart } from '../redux/actions/chart';

function Home() {

  const dispatch = useDispatch();

  const items = useSelector(({ chart }) => chart.items);
  const isLoaded = useSelector(({ chart }) => chart.isLoaded);

  React.useEffect(() => {
    dispatch(fetchChart());
  }, []);

  const { options, series } = items;

  return (

      <div className="dashboard">
        <div className="content-title">
          <h3>Dashboard</h3>
        </div>
        {isLoaded ? <Chart options={options} series={series} type="area" width={900} height={420} /> : null }
      </div>
  )
}

export default Home
