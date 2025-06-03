import "./pieChartBox.scss";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "Mobile", value: 400, colors: "#0088FE"  },
    { name: "Desktop", value: 300, colors: "#00C49F" },
    { name: "Laptop", value: 300, colors: "#FFBB28" },
    { name: "Tablet", value: 200 , colors: "#FF8042" }
  ];
  

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Lead by Source</h1>
      <div className="chart">
        <ResponsiveContainer width='99%' height={300} >
          <PieChart>
            <Tooltip contentStyle={{background:"white", borderRadius:"5px"}}/>
            <Pie
              data={data}
              cx={120}
              cy={200}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map( (item) => (
                <Cell
                  key={item.name}
                  fill={item.colors}
                />
              ))}
            </Pie>
            <Pie
              data={data}
              cx={420}
              cy={200}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.colors}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {
            data.map(item =>(
                <div className="option" key={item.name}>
                    <div className="title">
                        <div className="dot" style={{
                            backgroundColor:item.colors
                        }}>
                            <span>{item.name}</span>
                        </div>
                    </div>
                    <span>{item.value}</span>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default PieChartBox;
