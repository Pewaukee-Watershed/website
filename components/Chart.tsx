import { Bar, Pie, Line } from 'react-chartjs-2'

const typeMapping = {
  bar: Bar,
  pie: Pie,
  line: Line
}

const DataChart = (props): JSX.Element => {
  const Chart = typeMapping[props.type]
  return <Chart {...props} />
}

export default DataChart
