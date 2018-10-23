import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';
import * as R from 'ramda';
import { List } from 'antd';

const Users = ({list}) => {
    console.log(list)
    return (
      <List 
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={list}
        renderItem={item => (<List.Item>{item.name}</List.Item>)}
      />
    )
}

// function Users({ location }) {
//   return (
//     <MainLayout location={location}>
//       <div className={styles.normal}>
//         <UsersComponent />
//       </div>
//     </MainLayout>
//   );
// }

export default connect(({user:{list}}) => ({list}))(Users);