import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"

import './App.css';
import { Employees } from "./components/main/main";
import { getAllDepartments } from "./components/apis/departmentRepo";
import Form from './components/employeeForm/employeeForm';
import { Layout } from './components/common/layout';


import type { Department } from '../../../shared/types/department';
import { Organization } from './components/organization-page/organization';

function App() {
    const [departments, updateDepartments] = useState<Department[]>([]);

    useEffect(() => {
        (async () => {
          const departmentData = await getAllDepartments();
          updateDepartments(departmentData);
        })();
      }, []);
      
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path='organization' element={<Organization/>}/>
      <Route path='employees' element={<>
      <Employees 
      departments={departments}
      />
      <Form 
      departments={departments}
      updateDepartments={updateDepartments}
      />
        </>}/>
      </Route>
    </Routes>
  )
}

export default App
