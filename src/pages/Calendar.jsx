import React from 'react';

import CrudModule from '@/modules/CrudModule';
import RoleForm from '@/forms/ٌRoleForm';
import Index from "@/components/Calendar";
import {DashboardLayout} from "@/layout";
import CalendarLayout from "@/layout/CalendarLayout";

export default function Calendar() {
  const entity = 'calendar';
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
