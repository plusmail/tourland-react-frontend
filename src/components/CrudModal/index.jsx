import React, {useEffect, useState} from 'react';
import {Modal} from 'antd';

import {useDispatch, useSelector} from 'react-redux';
import {crud} from '@/redux/crud/actions';
import {useCrudContext} from '@/context/crud';
import {selectCreatedItem} from '@/redux/crud/selectors';
import {valueByString} from '@/utils/helpers';

export default function CrudModal({
                                      config,
                                      fixHeaderPanel,
                                      sidePanelTopContent,
                                      sidePanelBottomContent,
                                  }) {
    let {
        entity,
        entityDisplayLabels,
        deleteMessage = 'Do you want create : ',
        modalTitle = 'Create Item',
    } = config;
    const dispatch = useDispatch();
    const {current, isLoading, isSuccess} = useSelector(selectCreatedItem);
    const {state, crudContextAction} = useCrudContext();
    const {isPanelModalOpen} = state;
    const {panelmodal} = crudContextAction;
    const [displayItem, setDisplayItem] = useState('');

    useEffect(() => {
        if (isSuccess) {
            panelmodal.close();
            dispatch(crud.create({}));
        }
        if (current) {
            let labels = entityDisplayLabels.map((x) => valueByString(current, x)).join(' ');

            setDisplayItem(labels);
        }
    }, [isSuccess, current]);

    const handleOk = () => {
        const id = current.id;
        dispatch(crud.create({}));
        // dispatch(crud.delete({entity, id}));
    };
    const handleCancel = () => {
        if (!isLoading) panelmodal.close();
    };
    return (
        <Modal
            title={modalTitle}
            visible={isPanelModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            confirmLoading={isLoading}
        >
            {/*{fixHeaderPanel}*/}
            {sidePanelTopContent}
            {sidePanelBottomContent}
        </Modal>
    );
}
