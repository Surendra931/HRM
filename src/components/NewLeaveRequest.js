import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
 


const NewLeaveRequest = ({ onSubmit, onCancel }) => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    const newRequest = {
      leaveType,
      startDate: startDate ? startDate.toLocaleDateString() : '',
      endDate: endDate ? endDate.toLocaleDateString() : '',
      requestedDates: `${startDate ? startDate.toLocaleDateString() : ''} - ${endDate ? endDate.toLocaleDateString() : ''}`,
      status: 'Pending',
      reason,
    };

    onSubmit(newRequest);
  };

  return (
    
    <Box sx={{ mt: 3, p: 2, backgroundColor: '#eaeaea', borderRadius: '8px' }}>
      <Typography variant="h6" mb={2}>Apply Leave</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <TextField
          select
          label="Leave Type"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          sx={{ width: '200px',
            '& .MuiSvgIcon-root': { color: 'blueviolet' }, 
          }}
        >
          <MenuItem value="Sick Leave">Sick Leave</MenuItem>
          <MenuItem value="Casual Leave">Casual Leave</MenuItem>
          <MenuItem value="Earned Leave">Earned Leave</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            renderInput={(params) => <TextField {...params} size="small" />}
            sx={{
                '& .MuiSvgIcon-root': { color: 'blueviolet' }, 
              }}
          />
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            renderInput={(params) => <TextField {...params} size="small" />}
            sx={{
                '& .MuiSvgIcon-root': { color: 'blueviolet' }, 
              }}
          />
        </LocalizationProvider>
      </Box>

      <TextField
        label="Description"
        multiline
        rows={4}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="outlined"
          startIcon={<CancelIcon />}
          onClick={onCancel}
          sx={{ color: 'red', borderColor: 'red', mr: 1 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          startIcon={<CheckIcon />}
          onClick={handleSubmit}
          sx={{ backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45A049' } }}
        >
          Create
        </Button>
      </Box>
    </Box>
    
  );
};

export default NewLeaveRequest;
