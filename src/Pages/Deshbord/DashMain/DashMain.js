import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Line, Bar, BarChart, ZAxis, Legend, Scatter, ScatterChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { Tooltip } from 'flowbite-react';

const DashMain = () => {

    const colors = scaleOrdinal(schemeCategory10).range();

    // pie chart
    const pieData = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    // Pie chart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const data1 = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];

    // Bar chart
    const BarData = [
        {
            name: "Psychiatrist",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Psychologist",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Pastoral",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Addiction",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Peer",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Art therapist",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];


    // scatter chart
    const data01 = [
        { x: 10, y: 30 },
        { x: 30, y: 200 },
        { x: 45, y: 100 },
        { x: 50, y: 400 },
        { x: 70, y: 150 },
        { x: 100, y: 250 }
    ];
    const data02 = [
        { x: 30, y: 20 },
        { x: 50, y: 180 },
        { x: 75, y: 240 },
        { x: 100, y: 100 },
        { x: 120, y: 190 }
    ];


    // scatter chart
    const getPath = (x: number, y: number, width: number, height: number) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
            } 
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
            }, ${y + height}
        Z`;
    };

    const TriangleBar: FunctionComponent<any> = (props: any) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // radar chart
    const radarData = [
        {
            subject: "Psychiatrist",
            A: 120,
            B: 110,
            fullMark: 150
        },
        {
            subject: "Psychologist",
            A: 98,
            B: 130,
            fullMark: 150
        },
        {
            subject: "Pastoral counselors",
            A: 86,
            B: 130,
            fullMark: 150
        },
        {
            subject: "Addiction counselor",
            A: 99,
            B: 100,
            fullMark: 150
        },
        {
            subject: "Peer Specialist",
            A: 85,
            B: 90,
            fullMark: 150
        },
        {
            subject: "Art therapist",
            A: 65,
            B: 85,
            fullMark: 150
        }
    ];





    // Line chart
    const chart = (interval: string | number) => (
        <ResponsiveContainer height={250} width="100%">
            <LineChart data={data1} margin={{ right: 25, top: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval={interval} />
                <YAxis interval={interval} />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>)



    return (
        <div className='grid grid-cols-3'>

            {/* Pie chart */}
            <div class="col-span-1 mx-auto">
                <PieChart width={400} height={400}>
                    <Pie data={pieData} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={120} fill="#8884d8" dataKey="value" >

                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <h1 className='text-white'>Pie chart</h1>
            </div>

            {/* Radar chart */}
            <div class="col-span-2 mx-auto">
                <RadarChart cx={300} cy={220} outerRadius={130} width={500} height={400} data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="green" fill="#FFBB28" fillOpacity={0.6} />
                </RadarChart>
                <h1 className='text-white'>Radar chart</h1>
            </div>

            {/* Bar chart */}
            <div class="col-span-3 mt-32 mx-auto">
                <BarChart width={800} height={300} data={BarData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>

                        {BarData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
                <h1 className='text-white'>Bar chart</h1>
            </div>

            {/* ScatterChart */}
            <div class="col-span-3 mt-28 mx-auto">
                <ScatterChart width={800} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>

                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                    <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                    <ZAxis type="number" range={[100]} />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Legend />
                    <Scatter name="A school" data={data01} fill="#FFBB28" line shape="cross" />

                    <Scatter name="B school" data={data02} fill="#0088FE" line shape="diamond" />
                </ScatterChart>
                <h1 className='text-white'>Scatter chart</h1>
            </div>
        </div >

    );
};

export default DashMain;