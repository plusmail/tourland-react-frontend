import CrudModule from '@/modules/CrudModule';
import RoleForm from '@/forms/ٌRoleForm';
import {DashboardLayout} from "@/layout";
import CalendarLayout from "@/layout/CalendarLayout";
import IndexSortableTable from "@/components/SortableTree";
import Index from "@/components/Material-ui";

import React, {Component} from 'react';

// This only needs to be done once; probably during your application's bootstrapping process.
import 'react-sortable-tree/style.css';

import Tree from '@/components/SortableTree';

export default function MaterialPages() {
    const entity = 'material-ui';
    const searchConfig = {
        displayLabels: ['displayName'],
        searchFields: 'codeName,displayName',
        outputValue: '_id',
    };


    return (
        <>
            <CalendarLayout>
                <Index/>

            </CalendarLayout>
            <Tree/>

        </>
    );
}
