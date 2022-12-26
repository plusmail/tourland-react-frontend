import React from 'react';

import CrudModule from '@/modules/CrudModule';
import RoleForm from '@/forms/ٌRoleForm';
import {DashboardLayout} from "@/layout";
import CalendarLayout from "@/layout/CalendarLayout";
import Index from "@/components/Categories";

export default function CategoriesPages() {
  const entity = 'categories';
  const searchConfig = {
    displayLabels: ['displayName'],
    searchFields: 'codeName,displayName',
    outputValue: '_id',
  };



  return (
    <CalendarLayout>
      <Index/>
    </CalendarLayout>
  );
}
