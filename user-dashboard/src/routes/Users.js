import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Button } from "antd";

const Users = ({list, onDelete}) => {
    console.log(list)
    
      const columns = [
        {
          title: "Name",
          dataIndex: "name"
        },
        {
          title: "Actions",
          render: (text, record) => {
            return (
              <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                <Button>Delete</Button>
              </Popconfirm>
            );
          }
        }
      ];
      return <Table dataSource={list} columns={columns} />;
}


export default connect(({user:{list}}) => ({list}))(Users);