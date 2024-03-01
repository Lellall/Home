import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CopyAllOutlined } from '@mui/icons-material';
import { useIncompleteStore } from './incompleteOrderStore';
import { Navbar } from '../features';
import { Button } from '@mui/material';
import useAvailableOrdersStore from '../features/newshop/availableOrdersStore';
import AdminLayout from './admin';


const ProfessionalTable = () => {
 

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "5.5rem" }}>
        <AdminLayout />
      </div>
    </div>
  );
};

export default ProfessionalTable;
