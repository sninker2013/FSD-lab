import { useState } from 'react';

import './App.css';
import Footer from './components/common/footer-section/footer';

import Header from "./components/common/header-section/header";
import Main, { departmentData } from "./components/main/main";
import Form from './components/employeeForm/employeeForm';

import type { Department } from './components/main/main';

function App() {
    const [departments, updateDepartments] = useState<Department[]>(departmentData);
  return (
    <>
      <Header />
      <Main 
      departments={departments}
      />
      <Form 
      departments={departments}
      updateDepartments={updateDepartments}
      />
      <Footer />
    </>
  )
}

export default App
