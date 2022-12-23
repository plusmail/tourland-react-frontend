import React from 'react';

import CrudModule from '@/modules/CrudModule';
import RoleForm from '@/forms/ٌRoleForm';
import {DashboardLayout} from "@/layout";
import CalendarLayout from "@/layout/CalendarLayout";
import Index from "@/components/Department";

export default function DepartmentPages() {
  const entity = 'department';
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
