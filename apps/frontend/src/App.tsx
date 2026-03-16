import { useState } from 'react';
import { Routes, Route } from "react-router-dom"

import './App.css';
import { departmentData, Employees } from "./components/main/main";
import Form from './components/employeeForm/employeeForm';
import { Layout } from './components/common/layout';


import type { Department } from './components/main/main';
import { Organization } from './components/organization-page/organization';

function App() {
    const [departments, updateDepartments] = useState<Department[]>(departmentData);
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
