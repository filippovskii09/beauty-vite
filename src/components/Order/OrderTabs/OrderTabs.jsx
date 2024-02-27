import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react'
import './order-tabs.css'
import OrderTabsRegist from './OrderTabsRegist/OrderTabsRegist';
import OrderTabsLogin from './OrderTabsLogin/OrderTabsLogin';

const OrderTabs = () => {
	const [value, setValue] = React.useState('1');

	const handleChange = (newValue) => {
	  setValue(toString(newValue));
	};
 
  return (
	<Box sx={{ width: '100%', typography: 'body1' }}>
		<TabContext value={value}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<TabList onChange={handleChange} aria-label="lab API tabs example">
					<Tab label="Новий покупець" disableRipple value="1" />
					<Tab label="Я постійний клієнт" disableRipple value="2" />
				</TabList>
		  </Box>
		  <TabPanel value="1">
				<OrderTabsRegist/>
		  </TabPanel>
		  <TabPanel value="2">
				<OrderTabsLogin/>
		  </TabPanel>
		</TabContext>
	</Box>
  )
}

export default OrderTabs
