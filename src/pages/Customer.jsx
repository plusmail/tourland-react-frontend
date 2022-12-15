import React from 'react';

import CrudModule from '@/modules/CrudModule';
import CustomerForm from '@/forms/CustomerForm';

function Customer() {
  const entity = 'client';
  const searchConfig = {
    displayLabels: ['company'],
    searchFields: 'username,usertel,useraddr',
    outputValue: 'id',
  };

  const entityDisplayLabels = ['company'];

  const readColumns = [
    {
      title: '번호',
      dataIndex: 'id',
    },
    {
      title: '주소',
      dataIndex: 'useraddr',
    },
    {
      title: '생년월일',
      dataIndex: 'userbirth',
    },
    {
      title: '아이디',
      dataIndex: 'userid',
    },
    {
      title: '고객명',
      dataIndex: 'username',
    },
    {
      title: '비번',
      dataIndex: 'userpass',
    },
    {
      title: 'Passport',
      dataIndex: 'userpassport',
    },
    {
      title: '탈퇴여부',
      dataIndex: 'usersecess',
    },
    {
      title: '연락처',
      dataIndex: 'usertel',
    },
    {
      title: 'Email',
      dataIndex: 'useremail',
    },
  ];
  const dataTableColumns = [
    {
      title: '번호',
      dataIndex: 'id',
    },
    {
      title: '고객명',
      dataIndex: 'username',
    },
    {
      title: '생년월일',
      dataIndex: 'userbirth',
    },
    {
      title: 'Email',
      dataIndex: 'useremail',
    },
    {
      title: '핸드폰번호(연락처)',
      dataIndex: 'usertel',
    },
    {
      title: '주소',
      dataIndex: 'useraddr',
    },

  ];

  const MODAL_ADD_NEW_ENTITY = '신규고객등록(Modal)';
  const ADD_NEW_ENTITY = '신규고객등록';
  const DATATABLE_TITLE = '고객목록';
  const ENTITY_NAME = '고객';
  const CREATE_ENTITY = '고객등록';
  const UPDATE_ENTITY = '고객정보수정';
  const PANEL_TITLE = '고객정보';

  const config = {
    entity,
    PANEL_TITLE,
    ENTITY_NAME,
    CREATE_ENTITY,
    MODAL_ADD_NEW_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
      <>
        <CrudModule
            createForm={<CustomerForm />}
            updateForm={<CustomerForm isUpdateForm={true} />}
            config={config}
        />
        <CustomerForm />
      </>
  );
}

export default Customer;
