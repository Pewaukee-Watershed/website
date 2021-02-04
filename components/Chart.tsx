import { Bar, Pie } from 'react-chartjs-2'

const typeMapping = {
  bar: Bar,
  pie: Pie
}

const DataChart = (props): JSX.Element => {
  const Chart = typeMapping[props.type]
  return <Chart {...props} />
}

export default DataChart