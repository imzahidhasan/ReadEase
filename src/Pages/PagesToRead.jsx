import React from 'react';
import { getLocalReadList, getLocalWishList } from '../Utilities/LocalStorage';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { data } from 'autoprefixer';

const PagesToRead = () => {
    const localReadlist = getLocalReadList()
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
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
    return (
        <div className='bg-[#13131308] flex justify-center rounded-xl'>
            <ResponsiveContainer width={900} height={500}>
                <BarChart data={localReadlist}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar barSize={100} shape={<TriangleBar />} dataKey="totalPages" fill="#23BE0A">

                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;