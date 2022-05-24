import React from 'react';
import { Table } from 'antd';
import './Table.css';
import { useDispatch } from 'react-redux';

const arr = [{
  key: 1,
  name: 'Item1',
  from: 'Москва',
  to: 'Нижний Новгород',
},
{
  key: 2,
  name: 'Item2',
  from: 'Санкт Петербург',
  to: 'Нижний Новгород',
},
{
  key: 3,
  name: 'Item3',
  from: 'Абакан',
  to: 'Нижний Новгород',
},
{
  key: 4,
  name: 'Item4',
  from: 'Красноярск',
  to: 'Нижний Новгород',
},
{
  key: 5,
  name: 'Item5',
  from: 'Москва',
  to: 'Владивосток',
},
{
  key: 6,
  name: 'Item6',
  from: 'Санкт Петербург',
  to: 'Владивосток',
}];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
  },
  {
    title: 'To',
    dataIndex: 'to',
    key: 'to',
  },
];

export default function TableBlock() {
  const dispatch = useDispatch();

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch({ type: 'TABLE_CLICK', from: selectedRows[0].from, to: selectedRows[0].to });
    },
  };
  return (
    <Table
      rowSelection={{ type: 'radio', ...rowSelection }}
      dataSource={arr}
      columns={columns}
    />
  );
}
