import React, { PureComponent } from 'react';
import { getLocalReadList, getLocalWishList } from '../Utilities/LocalStorage';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { data } from 'autoprefixer';

const PagesToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const localReadlist = getLocalReadList()
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    class CustomizedAxisTick extends PureComponent {
        render() {
            const { x, y, stroke, payload } = this.props;

            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-70)">
                        {payload.value}
                    </text>
                </g>
            );
        }
    }

    return (
        <div className='bg-[#13131308] flex justify-center rounded-xl'>
            <ResponsiveContainer width={900} height={600}>
                <BarChart margin={{ top: 50 }} data={localReadlist}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis tick={<CustomizedAxisTick />} height={200} angle={-80} dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {localReadlist.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;