import React from 'react';

import { Button, Menu } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { selectItemById } from '@/redux/crud/selectors';
import { useCrudContext } from '@/context/crud';
import uniqueId from '@/utils/uinqueId';
import DataTable from '@/components/DataTable';

function AddNewItem({ config }) {
  const dispatch = useDispatch();
  const { crudContextAction } = useCrudContext();
  const { collapsedBox, panel, modal } = crudContextAction;
  const { ADD_NEW_ENTITY } = config;
  const handelClick = () => {
    dispatch(crud.currentAction({ actionType: 'create', data: {} }));
    modal.open();
    collapsedBox.close();
  };

  return (
    <Button onClick={handelClick} type="primary">
      {ADD_NEW_ENTITY}
    </Button>
  );
}

function ModalAddNewItem({ config }) {
  const { crudContextAction } = useCrudContext();
  const { collapsedBox, panelmodal, panel } = crudContextAction;
  const { MODAL_ADD_NEW_ENTITY } = config;
  const handelClick = () => {
    panelmodal.open();
    collapsedBox.close();

  };

  return (
      <Button onClick={handelClick} type="primary">
        {MODAL_ADD_NEW_ENTITY}
      </Button>
  );
}

function DropDownRowMenu({ row }) {
  console.log("8888888888->",row);
  const dispatch = useDispatch();
  const { crudContextAction } = useCrudContext();
  const { panel, collapsedBox, modal, readBox, editBox } = crudContextAction;
  const item = useSelector(selectItemById(row.id));
  const Show = () => {
    dispatch(crud.currentItem({ data: item }));
    panel.open();
    collapsedBox.open();
    readBox.open();
  };
  function Edit() {
    dispatch(crud.currentItem({ data: item }));
    dispatch(crud.currentAction({ actionType: 'update', data: item }));
    editBox.open();
    panel.open();
    collapsedBox.open();
  }
  function Delete() {
    dispatch(crud.currentAction({ actionType: 'delete', data: item }));
    modal.open();
  }
  return (
    <Menu style={{ width: 130 }}>
      <Menu.Item key={`${uniqueId()}`} icon={<EyeOutlined />} onClick={Show}>
        Show
      </Menu.Item>
      <Menu.Item key={`${uniqueId()}`} icon={<EditOutlined />} onClick={Edit}>
        Edit
      </Menu.Item>
      <Menu.Item key={`${uniqueId()}`} icon={<DeleteOutlined />} onClick={Delete}>
        Delete
      </Menu.Item>
    </Menu>
  );
}

export default function CrudDataTable({ config }) {
  return <DataTable config={config} DropDownRowMenu={DropDownRowMenu} ModalAddNewItem={ModalAddNewItem} AddNewItem={AddNewItem} />;
}
